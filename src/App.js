import './App.css';
import Card from './components/Card/Card'

function App() {
  return (
    <div className="wrapper">
      {[...Array(16)].map((_, index) => (
        <Card key={index} />
      ))}
      <div className='wrapper__decor'></div>
    </div>
  );
}

export default App;
