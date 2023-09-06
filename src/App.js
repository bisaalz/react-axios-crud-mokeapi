import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import AddBlogs from "./pages/AddBlogs/AddBlogs";
import AddBlogsUseEffect from "./pages/AddBlogs/AddBlogsUseEffect";
import SingleBlogs from "./pages/SingleBlogs/SingleBlogs";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<h1>Home Page</h1>}/> */}
          <Route path="/" element={<AllBlogs />}/>
          <Route path="/add" element={<AddBlogs />} />
          <Route path="/adduseeffect" element={<AddBlogsUseEffect />} />
          <Route path="/singleblog/:id" element={<SingleBlogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
