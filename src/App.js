
import MyComponent from './MyComponent';
import './App.css';
import {useState} from 'react';
import MyList from './MyList';

function App() {

 
 const [backgroundColor, changeColor] = useState("white");

 function handleClick() {
  changeColor(prevColor => (prevColor === 'white' ? 'yellow' : 'white'));
 }

  

  const state = 'well';
  return (
    <section style={{backgroundColor}}>
      
      <MyComponent mood={state}/>
      <button onClick={ handleClick } className='myButton'>Click</button>
      <MyList />
    </section>
    
  );
}

export default App;
