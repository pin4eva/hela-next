import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import ThemeButton from "../shared/ThemeButton";
import PropTypes from "prop-types";

const SignupComp = ({ onSwitch }) => {
  const [radio, setRadio] = useState(false);
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    accountType: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const validate = (name) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(info);
  };
  return (
    <Wrapper className="container">
      <div className="login">
        <div className="login-left">
          <div className="container">
            <div className="login-left-wrapper">
              <h4 className="text-center">HELA</h4>

              <div className="social-button my-5">
                <button className="s-btn">
                  <div className="social-button-icon">
                    <i className="fab fa-google fa-2x"></i>
                  </div>
                  <div className="social-button-text">Sign up with Google</div>
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  name="username"
                  value={info.username}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  name="email"
                  value={info.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  name="password"
                  value={info.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form-control"
                  name="password2"
                  value={info.password2}
                  onChange={handleChange}
                  required
                />
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
                    disabled={!radio}
                    className=" rs-radio-checker btn btn-primary"
                  >
                    Login
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
