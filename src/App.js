import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <nav style={{borderBottom: "solid 1px", paddingTop: "1rem"}}>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}

export default App;
