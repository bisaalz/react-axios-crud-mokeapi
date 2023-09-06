import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import "./addblogs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlogsUseEffect = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createBlogsz = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data)

    const response = await axios.post(
      "https://64f40640932537f4051a1368.mockapi.io/blogs/",
      data
    );


    if (response.status == 201) {
      navigate("/");
    } else {
      alert("something went wrong");
    }
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
        <form onSubmit={createBlogsz}>
          <label for="title">Tilte:</label>
          <input type="text" id="title" name="title" required />

          <label for="description">Description:</label>
          <textarea id="description" name="description" required />

          <label for="image">Image:</label>
          <input type="text" id="image" name="avatar" required />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default AddBlogsUseEffect;
