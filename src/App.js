import logo from './logo.svg';
import './App.css';
import { SumUp } from 'capacitor-plugin-sumup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>          
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              SumUp.login(
                {
                  affiliateKey: '221579a1-28b2-465f-a72f-37216e325698'
                }
              ).then((response) => {
                alert(response.message);
              })
              .catch((response) => {   
                alert(response.message);
              })
            }}
          >
            Login
          </a>
        </p>
        <p>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              SumUp.checkout(
                {
                  title: 'Test checkout',
                  total: 100.50,
                  currency: 'CHF',
                  skipSuccessScreen: true,
                  additionalInfo: {
                    title: 'Booking 1'
                  }
                }
              ).then((response) => {
                alert(response.message);
              })
              .catch((response) => {   
                alert(response.message);
              })
            }}
          >
            Checkout
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
