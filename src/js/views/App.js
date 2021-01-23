
import Navbar from '../components/bootstrap/navbar';
import Home from './home';

function App() {
  return (
    <div className="App container">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
