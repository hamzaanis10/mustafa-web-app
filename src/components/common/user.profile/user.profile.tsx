import React, { useState } from "react";
import MyAccount from "./my.account";

const UserProfile: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

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
        <span>My Account</span>
      </div>
      {showLoginForm && <MyAccount onClose={closeLoginForm} />}
    </>
  );
};

export default UserProfile;