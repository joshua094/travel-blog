import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {
  const travel = data.map(item => {
    return (
      <Main 
      key={item.id}
      {...item}
      />
    )
  })
  return (
    <div className="App">
     <Header />
     {travel}
    </div>
  );
}

export default App;
