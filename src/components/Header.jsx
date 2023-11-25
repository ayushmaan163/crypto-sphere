import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar style={{ backgroundColor: "#006DF0" }} position="static">
        <Container>
          <Toolbar>
            <Link to="/" style={{ flex: 1 }}>
              <Typography
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: "x-large",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Crypto Sphere
              </Typography>
            </Link>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
            >
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
