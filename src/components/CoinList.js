import React,{useState} from 'react'
import './Coin.css'

const Coin = ({coins}) => {

const [search,setSearch] = useState('');

const handleChange = (e) =>{
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin=>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
  <>      
      <div className="coin-search">
        <h1 className="coin-text">Search coin</h1> 

        <form action="">
          <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>
        </form>
      </div>
        <table className="coin-container">
        <tbody>
          <tr className="coin-data">
            <th>Name</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Chnage(%)</th>
            <th>Market Capital</th>
          </tr>
          {filteredCoins.map((coin) => (
            <tr key={coin.id} className="coin-row">
              <td className="coin"><img src={coin.image} alt="crypto" /><h1>{coin.name}</h1></td>
              <td className="coin-price">₹{coin.current_price}</td> 
              <td className="coin-volume">₹{coin.total_volume.toLocaleString()}</td>
              {coin.price_change_percentage_24h<0 ? (
                        <td className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    ):(
                        <td className="coin-percent green">{coin.price_change_percentage_24h.toFixed(2)}%</td>
                    )
                }
              <td className="coin-marketcap">₹{coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
  </>

    );
}

export default Coin