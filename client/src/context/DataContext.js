// DataContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { backendApi } from "../utils";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [livePrices, setLivePrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const accessToken = user.accessToken;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${backendApi}/trade/getwatchlist`, { headers })
      .then((response) => {
        const watchlist = response.data.watchlist;
        const symbolsArray = watchlist.map((item) => item.symbol);
        setWatchlist(symbolsArray);
        setIsLoading(false);
      })
      .catch((error) => {
        //console.log(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const fetchLivePrices = async () => {
      const livePricesData = [];
      setIsLoading(true);
      for (let i = 0; i < watchlist.length; i++) {
        const watchlist_symbol = watchlist[i];
        try {
          const res = await axios.post(`${backendApi}/trade/getliveprice`, {
            symbol: watchlist_symbol,
          });
          livePricesData.push(res.data);
        } catch (error) {
          //console.log(error);
        }
      }
      setIsLoading(false);
      setLivePrices(livePricesData);
      //console.log("liveprices:", livePricesData);
    };
    fetchLivePrices();
  }, [watchlist]);

  const data = {
    watchlist,
    livePrices,
    isLoading,
  };

  if (isLoading) {
    return (
      <div className="loader">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#fc5c65"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataContext, DataProvider };
