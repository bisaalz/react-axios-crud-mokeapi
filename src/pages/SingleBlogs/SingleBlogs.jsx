import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const SingleBlogs = () => {
  const navigate = useNavigate();

  //----------retrieving data by id-----------------
  const { id } = useParams();
  console.log(id);

  const [blog, setblog] = useState();

  const fetchBlogss = async () => {
    // const response = await axios.get(
    //   "https://64f40640932537f4051a1368.mockapi.io/blogs/" + id
    // );

    // or you can use like this string literal/template literal
    const response = await axios.get(
      `https://64f40640932537f4051a1368.mockapi.io/blogs/${id}`
    );

    // console.log(response);
    if (response.status == 200) {
      setblog(response.data);
    } else {
      alert("error retriving data");
    }
  };

  console.log(blog);

  //--------deleting data----------------
  const deleteBlog = async () => {
    const response = await axios.delete(
      `https://64f40640932537f4051a1368.mockapi.io/blogs/${id}`
    );
    console.log(response);
    if (response.status == 200) {
      navigate("/");
    } else {
      alert("error deleting data");
    }
  };

  useEffect(() => {
    //  console.log('hello');
    fetchBlogss();
  }, []);

  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            {blog ? (
              <div class="card">
                <div class="card-body">
                  <img
                    src={blog.avatar}
                    class="card-img-top"
                    alt="Avatar"
                    style={{ width: "200px" }}
                  />
                  <h1 class="card-title">{blog.title}</h1>
                  <p class="card-text">{blog.description}</p>
                  <div className="d-flex gap-2">
                  <button onClick={()=>navigate(`/editBlog/${id}`)}>Edit</button>
                  <button onClick={deleteBlog}>Delete</button>
                  </div>
                </div>
              </div>
            ) : (
              " Loading..."
            )}

            {/* or */}
            {/* <div class="card">
                <div class="card-body">
                  <img
                    src={blog?.avatar}
                    class="card-img-top"
                    alt="Avatar"
                    style={{ width: "200px" }}
                  />
                  <h1 class="card-title">{blog?.title}</h1>
                  <p class="card-text">{blog?.description}</p>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogs;
