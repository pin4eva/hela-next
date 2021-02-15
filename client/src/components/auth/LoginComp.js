import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import ThemeButton from "../shared/ThemeButton";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "apollo/queries/userQuery";
import { useRecoilState } from "recoil";
import { UserAtom } from "atoms/UserAtom";
import { Notification } from "rsuite";
import Router from "next/router";

const LoginComp = ({ onSwitch }) => {
  const [user, setUser] = useRecoilState(UserAtom);
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const [info, setInfo] = useState({
    // username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!info.email || !info.password) return;
    // return console.log(info);
    try {
      const { data } = await login({ variables: { ...info } });

      if (data?.login) setUser(data.login.user);
      Notification.success({
        description: <p>Welcome {data.login.user.name} </p>,
        title: "Login Successfull",
      });
      Router.push("/dashboard");
    } catch (err) {
      console.log({ err });
      if (err?.graphQLErrors) {
        err.graphQLErrors.map((er) => {
          return alert(er.message);
        });
      }
    }
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
                  <div className="social-button-icon google">
                    <i className="fab fa-google fa-2x"></i>
                  </div>
                  <div className="social-button-text google">
                    Sign in with Google
                  </div>
                </button>
              </div>

              <form onSubmit={submit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
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
                  />
                </div>

                <div className="text-center  mb-5">
                  <ThemeButton className="btn btn-primary" isLoading={loading}>
                    Login
                  </ThemeButton>
                </div>
              </form>

              <p className="text-center">
                Don't have an account yet?{" "}
                <a className="c-hand text-bold " onClick={onSwitch}>
                  Sign Up
                </a>{" "}
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

const Wrapper = styled.div``;
LoginComp.propTypes = {
  onSwitch: PropTypes.func,
};
export default LoginComp;
