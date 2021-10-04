import { Route, Switch } from 'react-router-dom';
import AllList from './Pages/AllLists';
import MainList from './Pages/MainList';

function App() {
  return (
    <Switch>
      <Route path='/' exact >
        <AllList />
      </Route>
      <Route path='/mainlist'  >
        <MainList />
      </Route>
    </Switch>


  );
}

export default App;
