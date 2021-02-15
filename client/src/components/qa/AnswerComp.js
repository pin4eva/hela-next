import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Avatar, Badge, Icon } from "rsuite";
import Link from "next/link";

const AnswerComp = () => {
  return (
    <Wrapper>
      <hr />
      <div className="answer ">
        <div className="answer-inner">
          <div className="answer-user-profile ">
            <div className="inner d-flex align-items-center">
              <Avatar circle size="md" src={answer?.author?.image} />
              <Link href={`/user/${answer?.author?.username}`}>
                <a className="text-content ml-3">
                  <Badge content={answer?.author?.accountType} className="m-0">
                    <span>{answer?.author?.name}</span>
                  </Badge>
                </a>
              </Link>
            </div>
            <div className="icons text-center mt-1">
              <div className="d-flex justify-content-center">
                <div className="mx-3">
                  <Badge content={answer?.votes?.up}>
                    <Icon icon="thumbs-up" size="lg" className="" />
                  </Badge>
                </div>
                <div className="mx-3">
                  <Badge content={answer?.votes?.down}>
                    <Icon icon="thumbs-down" size="lg" />
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <div className="answer-body mt-2 ml-28">{answer.content}</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .answer {
    /* background-color: yellow; */
    &-user-profile {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

AnswerComp.propTypes = {
  answer: PropTypes.object,
};

export default AnswerComp;

AnswerComp.defaultProps = {
  answer: {
    author: {
      name: "Peter Akaliro 1",
      accountType: "Pro",
      image: "/images/qa-2.png",
      username: "pin4eva",
      _id: "1",
    },
    votes: {
      up: 15,
      down: 7,
    },
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias consectetur, iste delectus eligendi, excepturi sunt corporis dolorum obcaecati voluptates explicabo nulla facere fugit tempora nihil fuga quos illo! Aperiam!`,
  },
};

const answer = {
  _id: "1",
  slug: "sknsksks-msksndkd",
  author: {
    name: "Peter Akaliro 1",
    accountType: "Pro",
    image: "/images/qa-2.png",
    username: "pin4eva",
    _id: "1",
  },
  votes: {
    up: 15,
    down: 7,
  },
  content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias consectetur, iste delectus eligendi, excepturi sunt corporis dolorum obcaecati voluptates explicabo nulla facere fugit tempora nihil fuga quos illo! Aperiam!`,
};
