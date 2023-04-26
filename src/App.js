import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './components/Main';
import ErrorComp from './components/ErrorComp';

function App() {
    return(
      <BrowserRouter>
      <Routes>
          <Route element = { <ErrorComp/> }  path="/" exact/>
          <Route element= { <Main/> }  path="/:usuario" exact />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
