import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

export default function CurrencyForm() {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch the exchange rate on component mount
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    if (!amount) {
      setResult("Enter Amount for the Exchange.");
      return;
    }
    setLoading(true);

    const API_KEY = process.env.REACT_APP_API_URL;
    if (!API_KEY) {
      setResult("Error: API key is missing");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch exchange rate");
      }

      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
    } catch (error) {
      setResult("Error fetching exchange rate");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchExchangeRate();
  };

  const swapCurrencies = () => {
    setFromCurrency((prev) => {
      setToCurrency(fromCurrency);
      return toCurrency;
    });
  };

  useEffect(() => {
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div className="currency-form mt-2">
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3 form-div">
          <label className="form-label text-white fw-bold text-capitalize label-form">
            Enter Amount
          </label>
          <input
            type="number"
            value={amount}
            className="form-control fw-semibold input-form"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mt-2 mb-4 d-flex justify-content-between">
          <div className="select-section">
            <label className="form-label text-white font-monospace fw-bold ms-2">
              From
            </label>
            <CurrencySelect
              selectedCurrency={fromCurrency}
              handleCurrency={setFromCurrency}
            />
          </div>
          <div className="select-section">
            <div className="swap-icon" onClick={swapCurrencies}>
              <svg width="16" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div className="select-section">
            <label className="form-label text-white font-monospace fw-bold ms-2">
              To
            </label>
            <CurrencySelect
              selectedCurrency={toCurrency}
              handleCurrency={setToCurrency}
            />
          </div>
        </div>
        <div className="mb-3">
          <button className="btn-submit w-100 font-monospace bg-white">
            Get Exchange Rate
          </button>
        </div>

        <div className="mb-1">
          <p className="exchange-result">
            {loading ? "Getting Exchange Details" : result}
          </p>
        </div>
      </form>
    </div>
  );
}
