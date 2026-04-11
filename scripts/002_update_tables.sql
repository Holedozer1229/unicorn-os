-- Migration: Fix content_plans and monetization_suggestions tables
-- This script updates table schemas to match API and TypeScript types

-- Drop the old content_plans table if it exists and recreate with proper schema
DROP TABLE IF EXISTS public.content_plans CASCADE;
CREATE TABLE public.content_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  scheduled_date DATE,
  platforms TEXT[] NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published')),
  content_idea_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on content_plans
ALTER TABLE public.content_plans ENABLE ROW LEVEL SECURITY;

-- Content plans policies
CREATE POLICY "content_plans_select_own" ON public.content_plans FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "content_plans_insert_own" ON public.content_plans FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "content_plans_update_own" ON public.content_plans FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "content_plans_delete_own" ON public.content_plans FOR DELETE USING (auth.uid() = user_id);

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_content_plans_updated_at ON public.content_plans;
CREATE TRIGGER update_content_plans_updated_at
  BEFORE UPDATE ON public.content_plans
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Drop and recreate monetization_suggestions table
DROP TABLE IF EXISTS public.monetization_suggestions CASCADE;
CREATE TABLE public.monetization_suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  suggestion_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  potential_revenue INTEGER DEFAULT 0,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'considering', 'implemented', 'dismissed')),
  ai_generated BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on monetization_suggestions
ALTER TABLE public.monetization_suggestions ENABLE ROW LEVEL SECURITY;

-- Monetization suggestions policies
CREATE POLICY "monetization_suggestions_select_own" ON public.monetization_suggestions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "monetization_suggestions_insert_own" ON public.monetization_suggestions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "monetization_suggestions_update_own" ON public.monetization_suggestions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "monetization_suggestions_delete_own" ON public.monetization_suggestions FOR DELETE USING (auth.uid() = user_id);

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_monetization_suggestions_updated_at ON public.monetization_suggestions;
CREATE TRIGGER update_monetization_suggestions_updated_at
  BEFORE UPDATE ON public.monetization_suggestions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Ensure profiles table has necessary fields
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS niche TEXT;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS platforms TEXT[] DEFAULT '{}';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS audience_size INTEGER DEFAULT 0;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS tier TEXT DEFAULT 'free';

-- Ensure subscriptions table uses 'tier' instead of 'plan'
ALTER TABLE public.subscriptions ADD COLUMN IF NOT EXISTS tier TEXT DEFAULT 'free';
ALTER TABLE public.subscriptions DROP CONSTRAINT IF EXISTS subscriptions_plan_check;
ALTER TABLE public.subscriptions ALTER COLUMN plan DROP NOT NULL;
