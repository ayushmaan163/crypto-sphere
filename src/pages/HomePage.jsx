import { Typography } from "@mui/material";
import Banner from "../components/Banner";
import styled from "@emotion/styled";

const BannerContent = styled("div")({
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
});

const Tagline = styled("div")({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
});

const HomePage = () => {
  return (
    <>
      <Banner>
        <BannerContent>
          <Tagline>
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
              }}
            >
              Crypto Sphere
            </Typography>

            <Typography
              variant="subtitle2"
              style={{
                color: "darkgrey",
                textTransform: "capitalize",
                fontFamily: "Montserrat",
              }}
            >
              Get all the info regarding your favorite Crypto Currency
            </Typography>
          </Tagline>
        </BannerContent>
      </Banner>
    </>
  );
};
export default HomePage;
