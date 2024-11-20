"use client"

import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import InfoIcon from "@mui/icons-material/Info"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid2 as Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material"
import Box from "@mui/material/Box"
import axios from "axios"
import { useState } from "react"

const Body = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    setError(false)
    e.preventDefault()
    axios
      .post(
        `https://social-login.druckland.de/api/v1/user/signin/`,
        JSON.stringify({
          email: "drink@man.dc",
          password: "bas1234",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setError(false)
      })
      .catch((err) => {
        setError(true)
      })
  }
  return (
    <Box
      sx={{
        py: 5,
        flexGrow: 1,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        sx={{
          height: "100%",
          width: "100%",
        }}
        container
        spacing={5}
      >
        <Grid size={{ xs: 12, sm: 7 }}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "50vh",
              height: "100%",
              width: "100%",
              borderRadius: 5,
            }}
          >
            <Typography variant="h4" align="center">
              Image or Video <br /> of our services
            </Typography>
          </Paper>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 5 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: 5,
              padding: 4,
            }}
          >
            <Typography variant="h4" align="center" sx={{ mb: 2 }} gutterBottom>
              Drukland.de
            </Typography>
            <Typography
              fontWeight="normal"
              variant="subtitle1"
              align="center"
              sx={{ flexGrow: 1 }}
            >
              Sign In to your account
            </Typography>
            <Typography
              variant="subtitle2"
              align="center"
              fontWeight="light"
              sx={{
                flexGrow: 1,
                "& span": {
                  fontWeight: "bold",
                },
              }}
            >
              Don’t you have an account? <span>Register</span>
            </Typography>
            {error && (
              <Typography
                variant="caption"
                align="center"
                sx={{
                  mt: 2,
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <InfoIcon fontSize="small" /> Unknown email address. Try again!
              </Typography>
            )}

            <TextField
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              sx={{ mt: 4 }}
              fullWidth
              label="Email Address"
              variant="standard"
            />
            <TextField
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              sx={{ mt: 2 }}
              fullWidth
              label="Password"
              variant="standard"
            />
            <Box
              sx={{
                mt: 4,
                width: "100%",
              }}
            >
              <FormGroup>
                <FormControlLabel
                  sx={{ fontWeight: "bold" }}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={(e) => setChecked(e.target.checked)}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        "& span": {
                          fontWeight: "bold",
                        },
                      }}
                    >
                      I agree to all <span>Terms & Conditions</span>
                    </Typography>
                  }
                />
              </FormGroup>
            </Box>
            <Button
              disabled={!checked}
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                width: "100%",
              }}
            >
              Log In
            </Button>
            <Divider
              sx={{
                width: "100%",
                my: 2,
              }}
              orientation="horizontal"
            >
              or sign in with
            </Divider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton color="primary" aria-label="LinkedInIcon">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="primary" aria-label="GoogleIcon">
                <GoogleIcon />
              </IconButton>
              <IconButton color="primary" aria-label="FacebookIcon">
                <FacebookIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Body
