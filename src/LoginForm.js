import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Theme } from "./assets/theme";
import FirebaseAuth from "./FirebaseAuth";

const LoginForm = ({ existingUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await FirebaseAuth.registerUser(username, password);
      setUsername("");
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
                p: 5,
                py: { mobile: 12, tablet: 6, laptop: 6 },
                transform: "translateY(-50%)",
                overflow: "hidden",
              }}
            >
              {existingUser ? <h2 style={{textAlign: "center"}}>Welcome {username}</h2> : <h2 style={{textAlign: "center"}}>Login</h2>}
            </Box>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
};

export default LoginForm;
