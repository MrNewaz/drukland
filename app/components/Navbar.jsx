import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined"
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"
import PersonIcon from "@mui/icons-material/Person"
import PortraitIcon from "@mui/icons-material/Portrait"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined"
import { Container, IconButton, InputAdornment, TextField } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"

export default function Navbar() {
  return (
    <Box>
      <Toolbar
        disableGutters
        variant="dense"
        sx={{
          bgcolor: "#DDDDDD",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button color="primary" variant="text" endIcon={<HelpOutlineIcon />}>
            FAQ
          </Button>
          <Button
            color="primary"
            variant="text"
            endIcon={<EmailOutlinedIcon />}
          >
            Send Inquiry
          </Button>
          <Button color="primary" variant="text" endIcon={<ChatOutlinedIcon />}>
            Live Support
          </Button>
          <Button color="primary" variant="text" endIcon={<PortraitIcon />}>
            Contact
          </Button>
        </Container>
      </Toolbar>
      <AppBar
        color="secondary"
        position="static"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h4" fontWeight="bold" sx={{ flexGrow: 1 }}>
              Drukland.de
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Button
                color="primary"
                variant="text"
                endIcon={<KeyboardArrowDownIcon />}
              >
                Business
              </Button>
              <Button
                color="primary"
                variant="text"
                endIcon={<KeyboardArrowDownIcon />}
              >
                Products
              </Button>
              <Button
                color="primary"
                variant="text"
                sx={{
                  mr: 2,
                }}
              >
                About Us
              </Button>

              <TextField
                size="small"
                placeholder="Search"
                variant="outlined"
                slotProps={{
                  input: {
                    sx: {
                      borderRadius: 4,
                    },
                    startAdornment: (
                      <InputAdornment
                        sx={{
                          pr: 1,
                        }}
                      >
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <IconButton color="primary" aria-label="LocalShippingIcon">
              <LocalShippingIcon />
            </IconButton>
            <IconButton color="primary" aria-label="PersonIcon">
              <PersonIcon />
            </IconButton>
            <IconButton color="primary" aria-label="ShoppingBasketOutlinedIcon">
              <ShoppingBasketOutlinedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
