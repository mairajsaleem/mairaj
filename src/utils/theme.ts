import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const allThemes: Array<PaletteMode> = ["light", "dark"];
export const themes = allThemes.map((mode: PaletteMode) => {
  return createTheme(
    {
      palette: {
        mode,
        primary: {
          light: mode !== "dark" ? "#ffb400" : "#72b626",
          main: mode === "dark" ? "#ffb400" : "#72b626",
          contrastText: "#fff",
        },
        secondary: {
          main: mode !== "light" ? "#000" : "#fff",
        },
      },
      typography: {
        allVariants: {
          color: mode === "light" ? "#666" : "#fff",
        },
      },
    },
    {
      colors: {
        black: "#000",
        white: "#fff",
        lightBg: "rgba(0, 0, 0,0.5)",
      },
      typography: {
        h1: { fontSize: "6.875rem", fontWeight: 800 },
        h2: { fontSize: "3.125rem", fontWeight: 600 },
        h3: { fontSize: "2.375rem", fontWeight: 700 },
        h4: { fontSize: "1.625rem", fontWeight: 600 },
        h5: { fontSize: " 1.125rem", fontWeight: 500 },
        h6: { fontSize: "0.75rem", fontWeight: 600 },
        body1: { fontSize: "0.938rem", fontWeight: 500 },
        body2: { fontSize: "0.875rem", fontWeight: 500 },
        button: { fontSize: "0.938rem", fontWeight: 600 },
        subtitle1: { fontSize: "3.5rem", fontWeight: 900 },
      },
    }
  );
});
