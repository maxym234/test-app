import './App.css';
import { LeftComponent } from './components/Left';
import { MainComponent } from './components/Main';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <LeftComponent />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
