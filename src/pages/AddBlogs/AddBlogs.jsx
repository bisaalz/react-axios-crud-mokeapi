import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./addblogs.css";
import axios from "axios";

const AddBlogs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  //   console.log(title, "Title");
  //   console.log(description, "Description");
  //   console.log(image, "Image");

  const createBlog = async (e) => {
    e.preventDefault();  //needed for prevend page to load when submit

    const data = {
      title: title,
      description: description,
      avatar: image,
    };

    const response = await axios.post(
      "https://64f40640932537f4051a1368.mockapi.io/blogs/",
      data
    );

    console.log("", response);

    //    or,
    //    const response= await axios.post("https://64f40640932537f4051a1368.mockapi.io/blogs/",{
    //     title: title,
    //     description : description,
    //     image : image
    //    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Form</h1>
        <p>
          Description of the form goes here. You can provide additional details
          and instructions in this section.
        </p>
        <form onSubmit={createBlog}>
          <label for="title">Tilte:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <label for="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />

          <label for="image">Image:</label>
          <input
            type="text"
            id="image"
            name="image"
            required
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default AddBlogs;
