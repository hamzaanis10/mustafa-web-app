import React from "react";
import './account.setting.css';

interface AppAccountSettingProps{
  openNickName?: () => void
  goBack?: () => void
  openEmailVerify?: () => void
  openPasswordChange?: () => void
};
const AppAccountSetting: React.FC<AppAccountSettingProps> = (props: any) => {
  const {openNickName, goBack, openEmailVerify, openPasswordChange} = props
  return (
    <div id="AccountSetting" className="pt-6 flex flex-column align-items-center">
      <div className="flex align-items-center  justify-content-center pb-4">
      <i className="pi pi-angle-left text-5xl text-900 cursor-pointer mr-4" onClick={goBack} />
        <span className="text-4xl font-semibold"> Account Setting </span>
      </div>
      <div className="pt-5 container">
        <div
          className="flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium"
          style={{ borderBottom: "1px solid #C5C5C5", color: "#000000" }}
        >
          <span>Nickname</span>
          <span style={{ display: "flex", justifyContent: "center" }}>
            User Name
            <i className="pi pi-angle-right ml-2" onClick={openNickName}></i>
          </span>
        </div>
        <div
          className="flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium"
          style={{ borderBottom: "1px solid #C5C5C5", color: "#000000" }}
        >
          <span>Email</span>
          <span style={{ display: "flex", justifyContent: "center" }}>
            Unverified
            <i className="pi pi-angle-right ml-2" onClick={openEmailVerify}></i>
          </span>
        </div>
        <div
          className="flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium"
          style={{ color: "#000000", borderBottom: "1px solid #C5C5C5" }}
        >
          <span>Phone Number</span>
          <span style={{ display: "flex", justifyContent: "center", color:"#FF4C72" }}>
            Add
            <i className="pi pi-angle-right ml-2" onClick={props.onClick}></i>
          </span>
        </div>
        <div
          className="flex align-items-center justify-content-between bg-white pt-3 pr-4 pb-3 pl-4 font-medium"
          style={{ color: "#000000" }}
        >
          <span>Change Password</span>
          <span style={{ display: "flex", justifyContent: "center" }}>
            <i className="pi pi-angle-right" onClick={openPasswordChange}></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AppAccountSetting;
