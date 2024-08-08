import React, { useState } from "react";
import MyAccount from "./my.account";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { USER_INFO_DETAILS } from "../util/util";
import { Sidebar } from "primereact/sidebar";
import "./user-profile.css";

const UserProfile: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.login.userInfo);
  const isAuthenticated = useSelector(
    (state: RootState) => state.login.isAuthenticated
  );

  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);

  const [visible, setVisible] = useState<boolean>(false);

  const identifier = isAuthenticated ? userInfo?.identifier : "My Account";

  const openLoginForm = () => {
    if(isAuthenticated)
    {
      setVisible(true)
    }
    else{
          setShowLoginForm(true);
    }
  }

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <>
      <div
        className="flex gap-2 align-items-center cursor-pointer"
        onClick={openLoginForm}
      >
        <i
          className="pi pi-user text-base lg:text-2xl"
        ></i>
        <span>{identifier}</span>
      </div>
      {isAuthenticated && (
        <Sidebar
          header={false}
          visible={visible}
          position="right"
          onHide={() => setVisible(false)} // Call parent function to hide the sidebar
          showCloseIcon={false}
          className="w-16rem md:w-15rem"
          id="user-profile"
        >
          <div
            className="overflow-auto content-container"
            // style={{ height: "80vh" }}
          >
            {/* <div
          className="flex justify-content-between  p-3 text-sm md:text-base"
          style={{ backgroundColor: "#FFF2E3", color: "#FFAD4C" }}>
          Buy €5.00 more to enjoy FREE Delivery!
          <span className="underline font-semibold text-sm md:text-base">Add more</span>
        </div>
        <div
          className="flex justify-content-between p-3 text-sm md:text-base"
          style={{ backgroundColor: "#E6FFED", color: "#009736" }}>
          Eligible to pick an add-on item
          <span className="underline font-semibold text-sm md:text-base">Pick</span>
        </div> */}
            {USER_INFO_DETAILS &&
              USER_INFO_DETAILS.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-2 align-items-center pt-4 pb-0 text-base text-color"
                  >
                    <img src={item.image} alt={item.name} width="auto" />
                    {item.name}
                  </div>
                );
              })}
          </div>
        </Sidebar>
      )}
      {showLoginForm && <MyAccount onClose={closeLoginForm} />}
    </>
  );
};

export default UserProfile;
