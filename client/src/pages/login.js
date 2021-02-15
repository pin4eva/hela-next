import LoginComp from "@/components/auth/LoginComp";
import SignupComp from "@/components/auth/SignupComp";
import Head from "next/head";
import React, { useState } from "react";

const loginPage = () => {
  const [view, setView] = useState("Login");
  return (
    <>
      <Head>
        <title>{view}</title>
      </Head>
      <div id="login">
        {view === "Login" && <LoginComp onSwitch={() => setView("Signup")} />}
        {view === "Signup" && <SignupComp onSwitch={() => setView("Login")} />}
      </div>
    </>
  );
};

export default loginPage;
