import './App.css';
import './bootstrap.css';
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="App">
        <Card img='https://via.placeholder.com/285x180?text=Image cap'>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#/" className="btn btn-primary">Go somewhere</a>
        </Card>
        <Card>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#/" className="btn btn-primary">Go somewhere</a>
        </Card>
      </div>
    </div>
  );
}

export default App;
