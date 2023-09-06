import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar";
import { useNavigate } from "react-router-dom";
// import "./App.css";

const AllBlogs = () => {
  const navigate = useNavigate()   //this is for react router dom
  const [blogs, setBlogs] = useState([]);

  //-----------fetch data from api get request----------------
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://64f40640932537f4051a1368.mockapi.io/blogs/"
      );
      // console.log(response);

      // When the data is received, update the state with the new data
      setBlogs(response.data);
      
      console.log(response.data);
    } catch (error) {
      // to catch the error
      console.error("Error fetching data:", error);
    }
  };


  //another method
  // const fetchBlogs = async () => {
     // const response = await axios.get(
    //   "https://64f40640932537f4051a1368.mockapi.io/blogs/"
    // );
    // // console.log(response);

    // if (response.status == 200) {
    //   //if response status is only 200 which means ok it will setblog
    //   console.log(response.data);
    //   setBlogs(response.data);
    // }
  // };

  const postBlogs = () => {

    console.log()
  
  }

  useEffect(() => {
    //  console.log('hello');
    fetchBlogs();
  }, []);

  return (
    <>
    <Navbar />
    <div className="container mt-4">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* card */}

        {blogs.map((blog) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={blog.id}>
              <img
                className="card-img-top"
                src={blog.avatar}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <h6 className="card-title">{blog.createdAt}</h6>
              </div>
              <p onClick={() => navigate("/singleblog/" + blog.id) } style={{color:'red', cursor:'pointer'} }>
                {/* <a href="/singleblog">See More...</a> page will reload with anchor tag
                See More... */}
                See More...
                </p>
            </div> 
          );
        })}
      </div>
    </div>
    </>
  );
};

export default AllBlogs;

