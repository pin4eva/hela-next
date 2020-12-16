import Test from "@/components/auth/Test";
import React from "react";
import withAuth from "utils/withAuth";

const test = ({ token, user }) => {
  console.log({ token, user });
  return (
    <div>
      <h4>With Auth</h4>
    </div>
  );
};

export default withAuth(test);
