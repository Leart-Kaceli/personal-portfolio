import {
  ImageResponse,
} from "next/og";

export const size = {
  width:
    1200,

  height:
    630,
};

export const contentType =
  "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width:
            "100%",
          height:
            "100%",
          display:
            "flex",
          flexDirection:
            "column",
          justifyContent:
            "center",
          padding:
            "80px",
          background:
            "#0f172a",
          color:
            "#ffffff",
        }}
      >
        <div
          style={{
            fontSize:
              28,
            fontWeight:
              700,
            color:
              "#93c5fd",
            textTransform:
              "uppercase",
            letterSpacing:
              "0.12em",
          }}
        >
          Software Developer
        </div>

        <div
          style={{
            marginTop:
              28,
            maxWidth:
              950,
            fontSize:
              72,
            lineHeight:
              1.05,
            fontWeight:
              800,
          }}
        >
          Leart Kaceli
        </div>

        <div
          style={{
            marginTop:
              28,
            maxWidth:
              900,
            fontSize:
              32,
            lineHeight:
              1.4,
            color:
              "#cbd5e1",
          }}
        >
          Building practical full-stack software with Next.js, TypeScript, React, Firebase, and Playwright.
        </div>

        <div
          style={{
            marginTop:
              48,
            display:
              "flex",
            gap:
              18,
          }}
        >
          {[
            "AP Path Planner",
            "Next.js",
            "Firebase",
            "Playwright",
          ].map(
            (
              item,
            ) => (
              <div
                key={
                  item
                }
                style={{
                  border:
                    "1px solid #475569",
                  borderRadius:
                    999,
                  padding:
                    "12px 20px",
                  fontSize:
                    20,
                  color:
                    "#e2e8f0",
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}