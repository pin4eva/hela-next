import { getAuth } from "apollo/actions/userActions";
import PropTypes from "prop-types";
import { getTokenCookie } from "./cookieUtils";

const withAuth = (WrappedComponent) => {
  const MyComp = ({ children, ...props }) => {
    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };

  MyComp.propTypes = {
    children: PropTypes.any,
  };

  MyComp.getInitialProps = async (ctx) => {
    //   console.log(ctx?.req);
    const token = await getTokenCookie(ctx?.req);
    let user = null;
    if (token) {
      user = await getAuth(token);
      //   console.log(user);
    }
    const props =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return {
      ...props,
      token,
      user,
    };
  };

  return MyComp;
};

export default withAuth;
