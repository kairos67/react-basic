import React from 'react';
import Navbar from './components/Navbar';
import routes from './routes';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                  element={<route.component />}
                />
              )
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter >

  );
};

export default App;
