import React from "react";
import styled from "styled-components";
import { GoVerified } from "react-icons/go";
import { Icon } from "rsuite";

const UserProfilePage = () => {
  return (
    <Wrapper>
      <div className="inner">
        <h2>Single User </h2>
        <GoVerified className="text-success" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default UserProfilePage;
