import {Home} from './components/Home'
import {FetchStore} from './Context/store';
import {useFetch} from "./Hooks/fetch.hook";
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const fetchContext = useFetch();

  return (
    <FetchStore.Provider value={fetchContext}>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </FetchStore.Provider>
  );
}

export default App;
