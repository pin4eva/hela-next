import PropTypes from "prop-types";
import React from "react";
import { Dropdown, Icon } from "rsuite";

const MoreIcon = (props) => {
  return (
    <Dropdown noCaret icon={<Icon icon="ellipsis-v" />}>
      {props.children.map((child, i) => (
        <Dropdown.Item key={i}>{child}</Dropdown.Item>
      ))}
    </Dropdown>
  );
};

MoreIcon.propTypes = {
  props: PropTypes.any,
  children: PropTypes.array,
};

MoreIcon.defaultProps = {
  // position: "right",
};

export default MoreIcon;
