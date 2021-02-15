import { useMutation } from "@apollo/client";
import { UPDATE_USER_MUTATION } from "apollo/queries/userQuery";
import { UserAtom } from "atoms/UserAtom";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const EditProfile = () => {
  const [user, setUser] = useRecoilState(UserAtom);
  const [updateUser, { loading }] = useMutation(UPDATE_USER_MUTATION);

  const handleRecoilChange = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const hanldeSubmit = async (e) => {
    e.preventDefault();
    const { name, _id, phone, contact, bio } = user;
    try {
      const { data } = await updateUser({
        variables: {
          input: {
            name,
            _id,
            phone,
            contact,
            bio,
          },
        },
      });
      if (data) alert("Updated");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) return <p>Loading...</p>;
  return (
    <Wrapper>
      <div className="edit_profile_wrapper">
        <h5 className="text-center">Edit Profile</h5>

        <form className="form" onSubmit={hanldeSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={handleRecoilChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={user.email}
              onChange={handleRecoilChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={user.phone}
              onChange={handleRecoilChange}
            />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              className="form-control"
              name="contact"
              value={user.contact}
              onChange={handleRecoilChange}
            />
          </div>
          <div className="form-group">
            <label>Bio </label>
            <textarea
              type="text"
              className="form-control"
              name="bio"
              value={user.bio}
              onChange={handleRecoilChange}
              maxLength={128}
            />
            <p className="text-small">128 maximum characters </p>
          </div>
          <div className="button">
            <button disabled={loading} className="btn btn-primary loading">
              Update
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
EditProfile.propTypes = { user: PropTypes.object };

export default EditProfile;
