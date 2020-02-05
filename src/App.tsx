import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

const NotFound = () => {
  console.log('rendering NotFound');
  return <div>Not Found</div>;
};

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => setCounter(counter + 1);
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/page1" />} />
            <Route exact path="/page1">
              <Page1 counter={counter} onIncrement={handleIncrement} />
            </Route>
            <Route exact path="/page2">
              <Page2 counter={counter} onIncrement={handleIncrement} />
            </Route>
            <Route exact path="/page3">
              <Page3 counter={counter} onIncrement={handleIncrement} />
            </Route>
            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
