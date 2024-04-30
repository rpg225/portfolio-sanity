import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import SinglePost from "./components/SinglePost.js";
import Post from "./components/Post.js";
import Project from "./components/Project.js";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path='/post/:slug' element={<SinglePost />} />
        <Route path='/post'  element={<Post/>} />
        <Route  path='/project' element={<Project />} />

      </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;