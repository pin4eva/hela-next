import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ThemeButton from "../shared/ThemeButton";
import PropTypes from "prop-types";
import { customValidate } from "./Test";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "apollo/queries/userQuery";

const SignupComp = ({ onSwitch }) => {
  const [radio, setRadio] = useState(false);
  const [signup, { loading }] = useMutation(SIGNUP_MUTATION);
  const [formOk, setFormOk] = useState(false);
  const [error, setError] = useState({
    field: "",
    message: "",
  });
  const [info, setInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    accountType: "",
  });

  const usernameRef = useRef(null);

  // console.log(usernameRef.current.value);

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  // const getKey = (e) => {
  //   if (e.keyCode === 32) {
  //     e.target.readOnly = true;
  //   } else {
  //     e.target.readOnly = false;
  //   }
  // };

  const validateUsername = () => {
    const { value } = usernameRef.current;
    // let { value, classList } = e.target;
    // let classList = e.target.classList;
    // value.trim().toLowerCase();
    if (value.keyCode == 32) {
      setError({
        field: "username",
        message: "Remove the space",
      });
      console.log("triggered keycode");
      // return classList.add("is-invalid");
    } else {
      setError({ message: "", field: "" });
    }
    if (value.length < 4) {
      console.log("minLength");
      setError({
        field: "username",
        message: "Minimum of 4 characters",
      });
    } else {
      setError({ message: "", field: "" });
    }
    if (value.length > 18) {
      console.log("maxLength");
      setError({
        field: "username",
        message: "Maximum of 18 characters",
      });
    } else {
      setError({ message: "", field: "" });
    }
    // setInfo(username);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password2, ...rest } = info;
    if (info.password !== password2) return alert("Passwords do not match");

    try {
      const { data } = await signup({
        variables: {
          input: {
            ...rest,
            username: info.username.trim(),
          },
        },
      });
      console.log(data);
    } catch (err) {
      console.log({ err });
      if (err?.graphQLErrors) {
        err.graphQLErrors.map((er) => {
          return alert(er.message);
        });
      }
    }
    // console.log(info);
  };
  return (
    <Wrapper className="container">
      <div className="login signup">
        <div className="login-left">
          <div className="container">
            <div className="login-left-wrapper">
              <h4 className="text-center">HELA</h4>

              <div className="social-button ">
                <button className="s-btn">
                  <div className="social-button-icon google">
                    <i className="fab fa-google fa-2x"></i>
                  </div>
                  <div className="social-button-text google">
                    Sign up with Google
                  </div>
                </button>
              </div>
              <div className="social-button  mt-1 mb-5">
                <button className="s-btn">
                  <div className="social-button-icon facebook">
                    <i className="fab fa-facebook-f fa-2x "></i>
                  </div>
                  <div className="social-button-text facebook">
                    Sign up with Facebbok
                  </div>
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                // className="needs-validation"
                // noValidate
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    required
                  />
                  {/* <div className="valid-feedback">Looks good!</div> */}
                  <div className="invalid-feedback">
                    {error.field === "username" && error.message}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control"
                    name="username"
                    value={info.username}
                    onChange={handleChange}
                    required
                    minLength={4}
                    maxLength={[16, "Maxmium character of 12"]}
                    ref={usernameRef}
                    // onMouseLeave={validateUsername}
                  />
                  {/* <div className="valid-feedback">Looks good!</div> */}
                  <div className="invalid-feedback">
                    {error.field === "username" && error.message}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={info.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="password2"
                    value={info.password2}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="accountType"
                    className="form-control"
                    value={info.accountType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Account Type</option>
                    <option>Lawyer</option>
                    <option>Student</option>
                    <option>Regular</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="checkbox"
                    checked={radio}
                    onChange={() => setRadio(!radio)}
                    required
                    name=""
                    className="mr-3"
                  />

                  <label>I Agree to the terms and conditions</label>
                </div>

                <div className="text-center mt-5 mb-5">
                  <ThemeButton
                    disabled={!formOk}
                    isLoading={loading}
                    className="rounded-0 rs-btn-block btn btn-primary"
                  >
                    Sign Up
                  </ThemeButton>
                </div>
              </form>

              <p className="text-center">
                Already registered?{" "}
                <a
                  className="c-hand hover-primary text-bold "
                  onClick={onSwitch}
                >
                  Login
                </a>
              </p>
              <Link href="/">
                <a className="text-center">
                  <i className="fas fa-home "></i>{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="login-right">
          <div className="login-right-wrapper">
            <h4
              className="fs-2 mb-4 text-bold text-lead "
              style={{ lineHeight: "2rem" }}
            >
              Reports at the palm of your hands
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              congue purus eros hendrerit condimentum amet sed ut et. Nulla
              habitant.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

SignupComp.propTypes = {
  onSwitch: PropTypes.func,
};

const Wrapper = styled.div``;

export default SignupComp;
