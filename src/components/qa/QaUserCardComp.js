import React from "react";
import { GoVerified } from "react-icons/go";
import { Avatar, Badge, Rate } from "rsuite";
import styled from "styled-components";

const QaUserCardComp = (props) => {
  return (
    <Wrapper>
      <div className="qa-inner">
        <div className="qa-user-profile">
          <Avatar src="/images/qa-1.png" size="md" circle />

          <Badge content="pro" className="c-hand text-bold ">
            Peter Akaliro
          </Badge>
          <p className="mb-0 text-black-50 text-small fst-italic text-center mt-2">
            Registerd since <br /> Dec. 25th{" "}
          </p>
          <Rate defaultValue={3} size="sm" />
        </div>
        <div className="qa-user-desc"></div>
      </div>
    </Wrapper>
  );
};

QaUserCardComp.propTypes = {};

const Wrapper = styled.div`
  /* background-color: red; */
  /* width: 100%;
  max-width: 300px; */
  /* text-align: center; */
  display: flex;
  /* justify-content: center; */
  .qa-user-profile {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .rs-rate-sm {
    font-size: 1rem;
  }
  .rating {
    /* background-color: yellow; */
  }
`;

export default QaUserCardComp;
