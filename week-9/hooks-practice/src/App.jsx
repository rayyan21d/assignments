import React from 'react';
import './App.css'

import useTodos from './hooks/useTodos';
import useIsOnline from './hooks/useIsOnline';
import useMouseLocation from './hooks/useMouseLocation';

function App() {
  
  const {todos, loading} = useTodos(5);
  
  const isOnline = useIsOnline();

  const mouseLocation = useMouseLocation();

  

  return (
    <>
    <MyComponent />


    { isOnline ? <p>Online</p> : <p>Offline</p>}

    <p>Mouse X : {mouseLocation.x} Y : {mouseLocation.y} </p>


    { loading ? <p>Loading...</p> : 
      todos.map(todo => <Track todo={todo} key={todo.id}/>)}
    </>
  )
}


// Class based React Components with LifeCycle Events!
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}


const Track = React.memo( function Track( { todo }) {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </div>
  );
})


export default App