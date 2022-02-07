import logo from '../logo.svg';
import '../App.css';

export default function header() {
  return (
    <div>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>  
    </div>
    );
}
