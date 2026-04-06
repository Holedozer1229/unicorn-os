import { ImageResponse } from "@vercel/og";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const score = searchParams.get("score") || "0";
  const idea = searchParams.get("idea") || "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "black",
          color: "white",
          padding: 60
        }}
      >
        <div style={{ fontSize: 28, color: "#22d3ee" }}>
          Unicorn OS
        </div>

        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 40 }}>
          {score}/100
        </div>

        <div style={{ fontSize: 28, opacity: 0.6, marginTop: 30 }}>
          {idea}
        </div>

        <div style={{ marginTop: "auto", opacity: 0.4 }}>
          unicorn-os.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
