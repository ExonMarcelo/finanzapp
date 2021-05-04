//import logo from './logo.svg';
//import './App.css';
import { Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Pages/Main/Main';
import history from './helpers/history';
import Header from './components/Templates/Header/Header';


function App() {
  return (
    <>
      <header style={{position: "fixed", width: "100%"}}>
        <Header/>
      </header>
      <Provider store={store}>
        <Router history={history}>
          <Switch>
              <Route path="/" exact component={Main} />
              {/*<Route path="/catalogos" exact component={Catalogs} />
              <Route path="/catalogos/servicios" exact component={Services} />
              <Route path="/info-contratos" exact component={InfoContratos} />
              <Route component={NotFound} />*/}
            </Switch>
          
        </Router>
        {/*<Backdrop />

        <SuccessDialog />
        <ErrorDialog />*/}
      </Provider>
    </>
  );
}

export default App;
