import './App.css';
import Dashboard from './components/Dashboard';
import User from './components/User';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Post from './components/Post';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';

function App() {
  return (
    //old version of react-router-dom
    //not working (switch has updated to routes) 
    // <div className="App">
      // <BrowserRouter>
      // <Routes>
      //     <Route exact path="/" element={<Dashboard/>} />
      //     <Route path="/user/:id" element={User} />
      // </Routes>
      // </BrowserRouter
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<User />}>
        </Route>
        <Route path="/post/:id" element={<Post />}>
        </Route>
        <Route path="/gallery/:id" element={<Gallery />}>
        </Route>
        <Route path="/todolist/:id" element={<TodoList />}>
        </Route>
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
