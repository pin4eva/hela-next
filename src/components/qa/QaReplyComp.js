import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactMde from "react-mde";
import { Avatar, Icon } from "rsuite";
import ThemeButton from "../shared/ThemeButton";

const QaReplyComp = (props) => {
  const [input, setInput] = useState("");
  return (
    <div className="card">
      <div className="user-profile d-flex align-items-center mb-2">
        <Avatar circle src="/images/qa-2.png" />
        <p className="ml-2 my-0">Peter Akaliro</p>
      </div>
      <ReactMde value={input} onChange={setInput} toolbarCommands={[]} />
      <div className="text-right ">
        <ThemeButton className="btn px-1">
          <Icon icon="send" size="2x" className="text-info" />
        </ThemeButton>
      </div>
    </div>
  );
};

QaReplyComp.propTypes = {};

export default QaReplyComp;
