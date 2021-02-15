import React from "react";
import PropTypes from "prop-types";
import { Avatar, Icon } from "rsuite";

const ForumCommentCard = (props) => {
  return (
    <div className="forum-list-card mb-3">
      <div className="inner">
        <div className="left">
          <div className="left-wrapper">
            <Avatar size="md" circle />
          </div>
        </div>
        <div className="middle">
          <div className="miidle-wrapper">
            {/* <p className="fs-16">Hello</p> */}
            <p className="text-sm text-muted ">
              Today, we're looking at three particularly interesting stories.
              Pinterest added a new location-based feature on Wednesday that
              uses Place Pins as a way to map out vacations and favorite areas.
              Southwest Airlines is providing Wi-Fi access from gate to gate for
              $8 per day through an onboard hotspot. And in an effort to ramp up
              its user base, Google Wallet is offering a debit card that can
              take out cash from.
            </p>
            <hr />
            <div className="d-flex justify-content-between text-muted">
              <div className="d-flex">
                <div>
                  <Icon icon="thumbs-o-up" className="text-success" /> 25
                </div>
                <div className="mx-3">
                  <Icon icon="thumbs-o-down" className="text-danger" /> 14
                </div>

                <div className="mx-3">
                  <Icon icon="clock-o" /> Nov. 20th 2020
                </div>
              </div>
              <div className="d-flex">
                <div className="mx-3">
                  <Icon icon="share-alt" /> 14
                </div>
                <div className="mx-3">
                  <Icon icon="heart-o" /> 14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ForumCommentCard.propTypes = {};

export default ForumCommentCard;

export const ForumQuestionCard = (props) => {
  return (
    <div className="forum-list-card mb-3">
      <div className="inner">
        <div className="left">
          <div className="left-wrapper">
            <Avatar size="md" circle />
          </div>
        </div>
        <div className="middle">
          <div className="miidle-wrapper">
            <p className="fs-16">10 Kids Unaware of Their Halloween Costume</p>
            <p className="text-sm text-muted ">
              Today, we're looking at three particularly interesting stories.
              Pinterest added a new location-based feature on Wednesday that
              uses Place Pins as a way to map out vacations and favorite areas.
              Southwest Airlines is providing Wi-Fi access from gate to gate for
              $8 per day through an onboard hotspot. And in an effort to ramp up
              its user base, Google Wallet is offering a debit card that can
              take out cash from.
            </p>
            <hr />
            <div className="d-flex justify-content-between text-muted">
              <div className="d-flex">
                <div>
                  <Icon icon="thumbs-o-up" className="text-success" /> 25
                </div>
                <div className="mx-3">
                  <Icon icon="thumbs-o-down" className="text-danger" /> 14
                </div>

                <div className="mx-3">
                  <Icon icon="clock-o" /> Nov. 20th 2020
                </div>
              </div>
              <div className="d-flex">
                <div className="mx-3">
                  <Icon icon="share-alt" /> 14
                </div>
                <div className="mx-3">
                  <Icon icon="heart-o" /> 14
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ForumQuestionCard.propTypes = {};
