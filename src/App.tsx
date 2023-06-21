
import './App.css';
import React from 'react';
import { API } from './shared/api';
import SearchTable from './components/organisims/SearchTable';


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

  

  return <div>App Componen<SearchTable/></div>;
}

export default App;

