import React from 'react';
import BodyContainer from './components/BodyContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';

const App: React.FC = () => {

    return (
      <Provider store={store}>
        <Router>
        <Routes>
          <Route path="/" Component={BodyContainer}/>
          <Route path="/:id" Component={BodyContainer}/>
        </Routes>
        </Router>
      </Provider>
    );
}

export default App;
