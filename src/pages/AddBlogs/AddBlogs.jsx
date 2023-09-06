import React from 'react'
import Navbar from "../../Components/Navbar";
import './addblogs.css';

const AddBlogs = () => {
  return (
    <>
      <Navbar />
    <div className="container">
      <h1>Title of the Form</h1>
      <p>
        Description of the form goes here. You can provide additional details
        and instructions in this section.
      </p>
      <form>
            <label for="title">Tilte:</label>
            <input type="text" id="title" name="title" required />
            
            <label for="description">Description:</label>
            <textarea id="description" name="description" required />

            <label for="image">Image:</label>
            <input type="text" id="image" name="image" required />
            
            <input type="submit" value="Submit" />
        </form>
    </div>
    </>
  )
}

export default AddBlogs