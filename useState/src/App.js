
import './App.css';
import { Counter } from './components/counter/Counter';
import { Counter2 } from './components/counter/Counter';
import {ProductsData} from "./components/ProductsData";


function App() {
  return (
    <div className="App">
     <Counter/>
     <Counter2/>
     {/* <ProductsData /> */}
    </div>
  );
}

export default App;
