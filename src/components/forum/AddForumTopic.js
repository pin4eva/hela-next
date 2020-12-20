import React from "react";
import PropTypes from "prop-types";
import ReactMde from "react-mde";
import { Icon } from "rsuite";

const AddForumTopicComp = (props) => {
  return (
    <div className="">
      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Topic title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <select name="" id="" className="form-select">
            <option value="">Select category</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
          </select>
        </div>
        <div className="form-group">
          <label className=" text-muted">Enter topic body</label>
          <ReactMde toolbarCommands={[]} />
        </div>
        <div className="form-group">
          <label>Who can contribute to this topic</label>
          <div className="d-md-flex justify-content-between">
            <div>
              <input type="radio" name="" id="" /> <label>Anyone</label>
            </div>
            <div>
              <input type="radio" name="" id="" /> <label>Lawyers alone</label>
            </div>
            <div>
              <input type="radio" name="" id="" /> <label>Students alone</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="form-group">
            <input type="checkbox" name="" id="" />
            <label className="ml-2">Notify me when someone posts a reply</label>
          </div>
          <button className="btn">
            <Icon icon="send" />
          </button>
        </div>
      </form>
    </div>
  );
};

AddForumTopicComp.propTypes = {};

export default AddForumTopicComp;
