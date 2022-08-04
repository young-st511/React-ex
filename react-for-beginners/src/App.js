import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [selectedCoin, setSelected] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  console.log("Hi");

  return (
    <div>
      <h1>The Coins! We can show you {coins.length} of coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            placeholder="input dollars"
            onChange={(e) => setDollar(e.target.value)}
          />
          <p>
            $ <b>{dollar}</b> is{" "}
            <b>
              {dollar / coins[selectedCoin].quotes.USD.price}{" "}
              {coins[selectedCoin].symbol}
            </b>
          </p>
          <br />
          <select
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          >
            {coins.map((coin, idx) => (
              <option value={idx}>
                {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default App;
