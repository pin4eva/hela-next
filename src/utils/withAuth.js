import { getAuth } from "apollo/actions/userActions";
import { UserAtom } from "atoms/UserAtom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getTokenCookie } from "./cookieUtils";
import router from "next/router";

const withAuth = (WrappedComponent) => {
  const MyComp = ({ children, ...props }) => {
    const [propfile, setUser] = useRecoilState(UserAtom);
    const { user } = props;

    useEffect(() => {
      if (!propfile) {
        if (user) {
          setUser(user);
        } else {
          (async () => {
            const data = await getAuth();

            setUser(data);
          })();
        }
      }
    }, []);

    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };

  MyComp.propTypes = {
    children: PropTypes.any,
    user: PropTypes.object,
  };

  MyComp.getInitialProps = async (ctx) => {
    //   console.log(ctx?.req);
    const token = await getTokenCookie(ctx?.req);
    let user = null;
    if (ctx?.req) {
      user = await getAuth(token);
    } else {
      if (!token) {
        if (!process.browser) {
          if (ctx?.res) {
            ctx.res.writeHead(302, { location: "/login" });
            ctx.res.end();
          } else {
            router.push("/login");
          }
        }
      }
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
