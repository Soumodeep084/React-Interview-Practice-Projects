import "./App.css";
import CurrencyForm from "./components/currencyForm";

function App() {
  // https://api.frankfurter.app/currencies
  // https://api.frankfurter.app/latest?base=${from}&symbols=${to}

  return (
    <div className="currency-container">
      <div className="currency-header mb-3">Currency Converter</div>
      <CurrencyForm />
    </div>
  );
}

export default App;
