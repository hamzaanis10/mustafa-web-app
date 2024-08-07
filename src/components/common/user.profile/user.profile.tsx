import React, { useState } from "react";
import MyAccount from "./my.account";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const UserProfile: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.login.userInfo);
  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);

  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  console.log("user info", userInfo);

  const identifier = isAuthenticated? userInfo?.identifier: "My Account";

  const openLoginForm = () => {
    setShowLoginForm(true);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <div className="flex gap-2 align-items-center cursor-pointer" onClick={openLoginForm}>
        <i className="pi pi-user text-base lg:text-2xl"></i>
        <span>{identifier}</span>
      </div>
      {showLoginForm && <MyAccount onClose={closeLoginForm} />}
    </>
  );
};

export default UserProfile;