import * as React from "react";
import PropTypes from "prop-types";

const LOGO_COLOR = "#474648";

const Logo = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 200.458 59.657"
      {...props}
    >
      <g fontSize={36} fontFamily="Regular,'RR Beaver'" fill={props.bg}>
        <g aria-label="HEL">
          <path d="M39.562 0h16.895v59.657H39.562V36.732H16.895v22.925H0V0h16.895v22.925h22.667zM83.229 13.806q-2.414 0-4.093 1.364-1.574 1.278-1.574 3.153v4.602h39.562v13.807H77.562v4.602q0 1.875 1.574 3.238 1.68 1.364 4.093 1.364h33.895v13.721H83.229q-4.722 0-8.815-1.449-4.092-1.449-7.136-3.92-3.043-2.472-4.827-5.795-1.784-3.324-1.784-7.16v-23.01q0-3.835 1.784-7.159 1.784-3.323 4.827-5.795 3.044-2.471 7.136-3.92Q78.507 0 83.23 0h33.895v13.806zM160.896 45.936v13.721h-17q-4.722 0-8.815-1.449-4.092-1.449-7.135-3.92-3.044-2.472-4.827-5.795-1.784-3.324-1.784-7.16V0h17v41.334q0 1.875 1.574 3.238 1.679 1.364 3.987 1.364z" />
        </g>
        <path
          d="M160.896 59.657h-16.895L163.625 0h17.21l19.623 59.657h-16.895l-11.333-34.26z"
          aria-label="V"
        />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  props: PropTypes.any,
  height: PropTypes.string,
  width: PropTypes.string,
  bg: PropTypes.string,
};

Logo.defaultProps = {
  width: "6rem",
  height: "3rem",
  //   bg: LOGO_COLOR,
};
export default Logo;
