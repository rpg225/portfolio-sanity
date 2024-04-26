import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import SinglePost from "./components/SinglePost.js";
import Post from "./components/Post.js";
import Project from "./components/Project.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} exact/>
        <Route path="/about" element={<About />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/post'  element={<Post/>} />
        <Route  path='/project' element={<Project />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;