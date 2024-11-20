import { Container } from "@mui/material"
import Body from "./components/Body"

const Home = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Body />
    </Container>
  )
}

export default Home
