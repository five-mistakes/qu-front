import React, { useState } from 'react';
import Home from './components/Home';

function App() {
  const [enterprise, setEnterprise] = useState(false);
  return (
    <div className="App">
      <Home enterprise={enterprise} setEnterprise={setEnterprise}/>
    </div>
  );
}

export default App;
