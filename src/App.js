import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './components/CoinList';
import Pagination from './pagination';


function App() {
  //Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);

  //CoinList
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data)
        console.log(res.data)
      }).catch(error => console.log(error))
  }, [])

  //Get Current Coins
  const indexOfLastCoin = currentPage * coinsPerPage
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage
  const currentCoins = coins.slice(indexOfFirstCoin, indexOfLastCoin)
  console.log(currentCoins)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <div className="coin-app">

        <Coin coins={currentCoins} />
        <br></br>
        <Pagination
          coinsPerPage={coinsPerPage}
          totalCoins={coins.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default App;