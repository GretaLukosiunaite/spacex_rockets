
import './App.css';
import React from 'react';
import { API } from './shared/api';


function App() {
  React.useEffect(() => {
    API.getProducts()
      .then((data: any) => {
        console.log(data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  return <div>App Component</div>;
}

export default App;

