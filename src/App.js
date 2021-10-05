import { Route, Switch } from 'react-router-dom';
import AllList from './Pages/AllLists';
import MainList from './Pages/MainList';
import style from './App.module.css';

function App() {
  return (
    <div className={style.container}>
      <AllList />
      <MainList />
    </div>


  );
}

export default App