"use client"
import { createTheme, responsiveFontSizes } from "@mui/material/styles"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
})

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0B0B0B",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#F1F1F1",
    },
    text: {
      primary: "#0B0B0B",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
})

export default responsiveFontSizes(theme)
