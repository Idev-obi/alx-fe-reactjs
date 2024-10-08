/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'*/

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';


const App = () => {
  return (
    <Router>
    <div>
      <h1>Recipe Manager</h1>
      <Routes>
      <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
      </Routes>
    </div>
    </Router>
  );
};

export default App;*/

// App.js
import React from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;






