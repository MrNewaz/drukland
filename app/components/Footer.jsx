import { Box, Container, Divider } from "@mui/material"
import Typography from "@mui/material/Typography"

const Footer = () => {
  return (
    <Container
      sx={{
        py: 2,
      }}
    >
      <Divider
        sx={{
          width: "100%",
          mb: 2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography align="left" variant="subtitle2">
          All rights reserved © 2024 |  Drukland.de
        </Typography>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography align="left" variant="subtitle2">
            Terms of Use
          </Typography>
          <Typography align="left" variant="subtitle2">
            Sitemap
          </Typography>
          <Typography align="left" variant="subtitle2">
            Company information
          </Typography>
          <Typography align="left" variant="subtitle2">
            Cookie settings
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer
