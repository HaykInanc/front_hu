import AddAuthor from "./components/AddAuthor";
import AuthorsContainer from "./components/AuthorsContainer";
import React, {useState, useEffect} from 'react';
import { getAuthors } from "./requests";

function App() {

  const [state, setState] = useState([]);

  useEffect(() => {
    getAuthors(setState);
  }, [])


  const addAuthor = (author) => {
    setState(pre=>[...pre, author])
  }
  
  return (
    <div className="App">
      <AddAuthor  addAuthorState={addAuthor}/>
      <AuthorsContainer authors={state}/>
    </div>
  );
}

export default App;