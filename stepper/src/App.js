import './App.css';
import CheckoutStepper from './components/CheckoutStepper';

const CheckOut_Steps = [
  {
    name : "Customer Info",
    Component : () => <div>Provide Your Contact Details</div>,
  },
  {
    name : "Shipping Info",
    Component : () => <div>Enter Your Shipping Address</div>,
  },
  {
    name : "Payment",
    Component : () => <div>Complete Payment of Your Order</div>,
  },
  {
    name : "Delivered",
    Component : () => <div>Place the Order For Delivery</div>,
  }
]

function App() {
  return (
    <div>
        <h2 className='h2'>Checkout</h2>
        <CheckoutStepper Checkout={CheckOut_Steps}/>
    </div>
  );
}

export default App;
