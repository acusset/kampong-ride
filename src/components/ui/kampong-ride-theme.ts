import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react";

const headingRecipe = defineRecipe({
  base: {
    fontWeight: "extrabold",
  },
});

// Fills the same role as Chakra's default Container recipe, but pinned to
// this design's 1200px content width and clamp() edge margin instead of
// Chakra's breakpoint-based max-widths/padding.
const containerRecipe = defineRecipe({
  base: {
    maxWidth: "1200px",
    w: "100%",
    mx: "auto",
    px: "edge",
  },
});

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "var(--font-archivo)" },
        body: { value: "var(--font-archivo)" },
      },
      spacing: {
        // The design's 28px leading unit and 14px half-step, plus the
        // section-padding multiples and responsive gutters derived from it.
        half: { value: "14px" },
        leading: { value: "28px" },
        leading1_5: { value: "42px" },
        leading2: { value: "56px" },
        leading2_5: { value: "70px" },
        leading3: { value: "84px" },
        leading4: { value: "112px" },
        edge: { value: "clamp(20px, 5vw, 72px)" },
        gutterSm: { value: "clamp(24px, 4vw, 72px)" },
        gutterLg: { value: "clamp(24px, 5vw, 96px)" },
      },
      colors: {
        text: { value: "#241a10" },
        accent: {
          100: { value: "#eef4ea" },
          200: { value: "#dbe8d2" },
          300: { value: "#b9d3a8" },
          400: { value: "#8fbb7a" },
          500: { value: "#5e9a52" },
          600: { value: "#3f7d3a" },
          700: { value: "#2f5f2c" },
          800: { value: "#21421f" },
          900: { value: "#152a14" },
          solid: { value: "#4a7c3f" },
          contrast: { value: "#f6f1e6" },
          fg: { value: "#2f5f2c" },
          muted: { value: "#2f5f2c" },
          subtle: { value: "#eef4ea" },
          emphasized: { value: "#3f7d3a" },
          focusRing: { value: "#4a7c3f" },
          border: { value: "color-mix(in srgb, #4a7c3f 30%, transparent)" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: "#f6f1e6" },
          panel: { value: "#ece2cf" },
        },
        fg: {
          DEFAULT: { value: "{colors.text}" },
          subtle: { value: "color-mix(in srgb, #241a10 78%, transparent)" },
          muted: { value: "color-mix(in srgb, #241a10 70%, transparent)" },
          faint: { value: "color-mix(in srgb, #241a10 60%, transparent)" },
        },
        border: {
          DEFAULT: { value: "color-mix(in srgb, #241a10 40%, transparent)" },
        },
      },
    },
    textStyles: {
      // Heading component sizes — fontFamily/fontWeight come from the heading recipe.
      heroTitle: {
        value: { fontSize: "clamp(42px, 6.2vw, 80px)", lineHeight: "1.06", letterSpacing: "-0.02em" },
      },
      closeTitle: {
        value: { fontSize: "clamp(34px, 4.2vw, 54px)", lineHeight: "1.06", letterSpacing: "-0.015em" },
      },
      sectionTitle: {
        value: { fontSize: "24px", lineHeight: "28px", letterSpacing: "-0.01em" },
      },
      subsectionTitle: {
        value: { fontSize: "32px", lineHeight: "42px", letterSpacing: "-0.015em" },
      },
      // Heading-styled Text — carry fontFamily/fontWeight explicitly since Text has no recipe.
      wordmark: {
        value: { fontFamily: "heading", fontWeight: "extrabold", fontSize: "20px", letterSpacing: "-0.01em" },
      },
      stepNumber: {
        value: { fontFamily: "heading", fontWeight: "extrabold", fontSize: "15px", lineHeight: "28px" },
      },
      calloutTitle: {
        value: { fontFamily: "heading", fontWeight: "extrabold", fontSize: "19px", lineHeight: "28px" },
      },
      statNumber: {
        value: {
          fontFamily: "heading",
          fontWeight: "extrabold",
          fontSize: "clamp(30px, 3vw, 42px)",
          lineHeight: "1.2",
        },
      },
      // Body copy.
      kicker: {
        value: { fontSize: "13px", lineHeight: "14px", letterSpacing: "0.08em", textTransform: "uppercase" },
      },
      body: {
        value: { fontSize: "15.5px", lineHeight: "28px" },
      },
      bodyLg: {
        value: { fontSize: "17px", lineHeight: "28px" },
      },
      footnote: {
        value: { fontSize: "13px", lineHeight: "28px" },
      },
      caption: {
        value: { fontSize: "13px", lineHeight: "14px", fontStyle: "italic" },
      },
    },
    recipes: {
      heading: headingRecipe,
      container: containerRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
