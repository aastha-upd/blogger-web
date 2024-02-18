import React from 'react';
import { BloggerFooter } from './components/header-footer';
import { IdProvider } from './hooks/id-provider';
import BodyContainer from './components/BodyContainer';

const App: React.FC = () => {

    return (
      <IdProvider>
        <BodyContainer />
        <BloggerFooter />
      </IdProvider>
    );
}

export default App;
