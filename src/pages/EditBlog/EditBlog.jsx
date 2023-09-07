import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams(); //this is hook for getting id
  const [blog, setblog] = useState();
  console.log(blog);

   //edit and post data to id
  const editBlog = async (e) => {
    e.preventDefault()
    const response = await axios.put(
      `https://64f40640932537f4051a1368.mockapi.io/blogs/${id}`,blog
    );

    // or
    // const response = await axios.put(
    //   "https://64f40640932537f4051a1368.mockapi.io/blogs/"+ id,blog
    // );

    if( response.status == 200) {
      navigate("/");
    } else {
    alert("error updating data");
  }

    console.log(response)
  }
  //fetch data from id
  const fetchBlogs = async () => {
    const response = await axios.get(
      `https://64f40640932537f4051a1368.mockapi.io/blogs/${id}`
    );

    if (response.status == 200) {
      setblog(response.data);
    } else {
      alert("error retriving data");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Edit Blog</h1>
        <p>
          Description of the form goes here. You can provide additional details
          and instructions in this section.
        </p>
        <form onSubmit={editBlog}>
          <label for="title">Tilte:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog?.title}
            onChange={(e)=>setblog({...blog,title:e.target.value})}
            required
            // onChange={(e) => {
            //   setTitle(e.target.value);
            // }}
          />

          <label for="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={blog?.description}
            onChange={(e)=>setblog({...blog,description:e.target.value})}
            required
            // onChange={(e) => {
            //   setDescription(e.target.value);
            // }}
          />

          <label for="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={blog?.avatar}
            onChange={(e)=>setblog({...blog,avatar:e.target.value})}
            required
            // onChange={(e) => {
            //   setImage(e.target.value);
            // }}
          />
          <div className="pb-4"><img src={blog?.avatar} /></div>
          

          <input type="submit" value="Edit" />
        </form>
      </div>
    </>
  );
};

export default EditBlog;
