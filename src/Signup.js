import { useState } from "react";
import { Box, Grid, Button, TextField } from "@mui/material";
import { Theme } from "./assets/theme";
import rickroll from "./assets/rickroll.gif";
import styled from "@mui/material/styles/styled";
import FirebaseAuth from "./FirebaseAuth";

const CssTextField = styled(TextField)({
  label: {
    color: "#001122",
  },
  "&.MuiTextField-root": {
    backgroundColor: "#fff",
  },
  "& label.Mui-focused": {
    color: "#001122",
  },
  "& .MuiOutlinedInput-root": {
    color: "#001122",
    "& fieldset": {
      borderColor: "#000",
    },
    "&:hover fieldset": {
      borderColor: "#001122",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#001122",
    },
  },
});

const Signup = ({ existingUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await FirebaseAuth.registerUser(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  }

  function handleLogout() {
    FirebaseAuth.logoutUser();
  }

  return (
    <>
      <Theme>
        <Grid container justifyContent="center">
          <Grid item mobile={12} tablet={8.5} laptop={5}>
            <Box
              sx={{
                width: "100%",
                minHeight: { mobile: "100vh", tablet: "auto", laptop: "auto" },
                backgroundColor: "white",
                my: "50vh",
                px: { mobile: 5, tablet: 10, laptop: 10 },
                py: { mobile: 10, tablet: 5, laptop: 5 },
                transform: "translateY(-50%)",
                overflow: "hidden",
              }}
            >
              {existingUser ? (
                <>
                  <h2 style={{ textAlign: "center" }}>
                    Welcome 
                  </h2>
                  <h3 style={{ textAlign: "center", fontSize: 20 }}>
                    {existingUser.email}
                  </h3>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <img src={rickroll} alt="" style={{
                      width: "17.5rem",
                      height: "auto",
                      marginTop: "3rem",
                    }}/>
                  </div>
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignContent="center"
                    columnSpacing={1}
                    sx={{ marginTop: 5 }}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleLogout}
                        disableRipple
                        sx={{
                          px: 3,
                          fontSize: 17,
                          color: "#F7CACA",
                          backgroundColor: "#001122",
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "#001122",
                          },
                        }}
                      >
                        Log Out
                      </Button>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <>
                  <h2 style={{ textAlign: "center" }}>Sign Up</h2>
                  <CssTextField
                    type="email"
                    id="Email"
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    sx={{ mt: 5 }}
                  />
                  <CssTextField
                    type="password"
                    id="Password"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    sx={{ mt: 3 }}
                  />
                  <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignContent="center"
                    columnSpacing={1}
                    sx={{ marginTop: 5 }}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disableRipple
                        sx={{
                          px: 3,
                          fontSize: 17,
                          color: "#F7CACA",
                          backgroundColor: "#001122",
                          "&.MuiButtonBase-root:hover": {
                            bgcolor: "#001122",
                          },
                        }}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
};

export default Signup;
