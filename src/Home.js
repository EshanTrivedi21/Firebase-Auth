import { Box, Grid, Button } from "@mui/material";
import { Theme } from "./assets/theme";
import been from "./assets/been.gif";
import { Link } from "react-router-dom";

const Home = () => {
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
              <h2 style={{ textAlign: "center" }}>Hello User</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={been}
                  alt=""
                  style={{
                    width: "17.5rem",
                    height: "auto",
                    marginTop: "3rem",
                  }}
                />
              </div>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignContent="center"
                columnSpacing={1}
                sx={{ marginTop: 7 }}
              >
                <Grid item>
                  <Link to="/login">
                    <Button
                      variant="contained"
                      disableRipple
                      sx={{
                        textDecoration: "none",
                        px: 3,
                        mx: 1,
                        fontSize: 17,
                        color: "#F7CACA",
                        backgroundColor: "#001122",
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "#001122",
                        },
                      }}
                    >
                      Log In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      variant="contained"
                      disableRipple
                      sx={{
                        px: 3,
                        mx: 1,
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
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
};

export default Home;
