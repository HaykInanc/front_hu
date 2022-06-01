import AddAuthor from "./components/AddAuthor";
import AuthorsContainer from "./components/AuthorsContainer";
import React, {useState, useEffect} from 'react';
import { getAuthors } from "./requests";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Home from './components/test/Home'
import Main from './components/test/Main'
import Products from './components/test/Products'
import NotFound from "./components/test/NotFound";

function App() {

  const [state, setState] = useState([]);

  useEffect(() => {
    getAuthors(setState);
  }, [])


  const addAuthor = (author) => {
    setState(pre=>[...pre, author])
  }
  
  const delAuthor = (id) =>{
    setState(pre => pre.filter(elem => elem.id !== id));
  }



  return (
    <div className="App">
      <AddAuthor  addAuthorState={addAuthor}/>
      <AuthorsContainer authors={state} delAuthor={delAuthor}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="main" element={<Main />}/>
          <Route path="products" element={<Products />}/> 
          <Route path="*" element={<NotFound />}/> 
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;