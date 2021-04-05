import React from 'react'
import './App.css';
import ComponentA from './components/ComponentA';

export const UserContext = React.createContext()
const Provider = UserContext.Provider

function App() {
  return (
    <div className="App">
      <Provider value={'Rohit'}>
      <ComponentA />
      </Provider>
    </div>
  );
}

export default App;
