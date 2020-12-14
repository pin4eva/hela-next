import LoginComp from "@/components/auth/LoginComp";
import SignupComp from "@/components/auth/SignupComp";
import React, { useState } from "react";

const loginPage = () => {
  const [view, setView] = useState("signup");
  return (
    <div id="login">
      {view === "login" && <LoginComp onSwitch={() => setView("signup")} />}
      {view === "signup" && <SignupComp onSwitch={() => setView("login")} />}
    </div>
  );
};

export default loginPage;
