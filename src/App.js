import { Header } from './component/Header/Header';
import { Wrapper } from './component/Wrapper';
import Card from './component/Card/Card';

import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
      <Card />
      </Wrapper>
    
      <Wrapper>
      </Wrapper>
    </div>
  );
}

export default App;
