import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from 'components/header/header';
import Main from 'pages/main/main';


const Router = () => {
  
  const routes =
    <>
      <Header />
      <Switch>
        <Route path={'/'} exact component={Main} />
      </Switch>
    </>;
  
  return (
    <BrowserRouter>
    
    </BrowserRouter>
  );
};

export default Router;