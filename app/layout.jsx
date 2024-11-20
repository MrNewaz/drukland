import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"
import theme from "./theme"

export const metadata = {
  title: "Drukland",
  description: "Assignment Demo for Drukland",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
