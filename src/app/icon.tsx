import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4a7c3f",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 21,
          color: "#f6f1e6",
        }}
      >
        K
      </div>
    ),
    { ...size },
  );
}
