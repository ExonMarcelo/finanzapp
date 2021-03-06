//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import Main from './components/Pages/Main/Main';
import history from './helpers/history';
import Header from './components/Templates/Header/Header';
import SuccessDialog from './components/Templates/Dialogs/SuccessDialog';
import ErrorDialog from './components/Templates/Dialogs/ErrorDialog';
import ConfirmDialog from './components/Templates/Dialogs/ConfirmDialog';


function App() {
  return (
    <>
      <header style={{position: "fixed", width: "100%"}}>
        <Header/>
      </header>
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL} history={history}>
          <Switch>
              <Route path="/" exact component={Main} />
              {/*<Route path="/catalogos" exact component={Catalogs} />
              <Route path="/catalogos/servicios" exact component={Services} />
              <Route path="/info-contratos" exact component={InfoContratos} />
              <Route component={NotFound} />*/}
            </Switch>
          
        </Router>
        {/*<Backdrop />*/}

        <SuccessDialog />
        <ErrorDialog />
        <ConfirmDialog />
      </Provider>
    </>
  );
}

export default App;
