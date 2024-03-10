import React from 'react';
import BodyContainer from './components/BodyContainer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App: React.FC = () => {

    return (
        <Router>
        <Routes>
          <Route path="/" Component={BodyContainer}/>
          <Route path="/:id" Component={BodyContainer}/>
        </Routes>
        </Router>
    );
}

export default App;
