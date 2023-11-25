import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  // const appBarStyle = {
  //   backgroundColor: "#006DF0",
  // };

  return (
    <AppBar style={{ backgroundColor: "#006DF0" }} position="static">
      <Container>
        <Toolbar>
          <Typography>Crypto Sphere</Typography>

          <Select variant="outlined">
            <MenuItem>INR</MenuItem>
            <MenuItem>USD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
