import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrencyState } from "../context/CurrencyContext";
import axios from "axios";
import { SingleCoin } from "../config/api";
import CoinInfo from "../components/CoinInfo";
import styled from "@emotion/styled";
import { LinearProgress, Typography, createTheme } from "@mui/material";
import { numberWithCommas } from "../components/Banner/Carousel";
import parse from "html-react-parser";

let theme = createTheme();

const CoinContainer = styled("div")({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
});

const SideBar = styled("div")({
  width: "30%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
});

const Heading = styled("div")({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
});

const Description = styled("div")({
  width: "100%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
});

const MarketData = styled("div")({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-around",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("xs")]: {
    alignItems: "start",
  },
});

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol } = CurrencyState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  // console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <CoinContainer>
      <SideBar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />

        <Typography variant="h3">
          <Heading>{coin?.name}</Heading>
        </Typography>

        <Typography variant="subtitle1">
          <Description>
            {parse(coin?.description.en.split(". ")[0])}.
          </Description>
        </Typography>

        <MarketData>
          <span style={{ display: "flex" }}>
            <Typography variant="h6">
              <Heading>Rank:</Heading>
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h6">
              <Heading>Current Price:</Heading>
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h6">
              <Heading>Market Cap:</Heading>
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h6" style={{ fontFamily: "Montserrat" }}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
            </Typography>
          </span>
        </MarketData>
      </SideBar>

      {/* chart */}
      <CoinInfo coin={coin} />
    </CoinContainer>
  );
};
export default CoinPage;
