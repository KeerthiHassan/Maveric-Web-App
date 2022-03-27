import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

import Navbar from "../../components/Navbar";
import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
  const [responseMessage, setResponseMessaage] = useState({
    message: "",
    cssClass: "",
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post(Endpoints.LOGIN_URL, user)
      .then(
        (response) => {
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user',JSON.stringify(response.data.user))

          console.log(response.data);
          setResponseMessaage({
            message: 'login successfull',
            cssClass: 'alert-success'
          });
        },
        (error) => {
          setResponseMessaage({
            message: error.response.data.message,
            cssClass: 'alert-danger'
          });
        }
      )
      .catch((error) => console.log(error));
  }

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div><Navbar />
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Login</h2>
          <hr />

         {responseMessage.message && (
              <div class="alert alert-success" role="alert">
              { responseMessage.message }
            </div>
         )}

         <form onSubmit="/home">
           
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
          
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
           <div> <input
              type="submit"
              value="Login"
              className="btn btn-primary "
            />
            <br />
            <p>
              <Link to="/register">New to Maveric Book? Signup</Link>
            </p>
            <p><a href="#">Forgot password?</a></p></div>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
      
    </div>
    <Footer />
    </div>
  );
};
export default LoginPage;
