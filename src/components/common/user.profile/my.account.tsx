import React, { useState } from "react";
import AppLoginDialog from "../app.login/app.login.dialog";

interface MyAccountProps {
  onClose: () => void;
}

const MyAccount: React.FC<MyAccountProps> = ({ onClose }) => {
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const onLoginContinue = () => {
    setShowSuccessDialog(true);
  };

  return (
    <AppLoginDialog
      showLoginForm={!showSuccessDialog}
      showSuccessDialog={showSuccessDialog}
      onClose={onClose}
      onLoginContinue={onLoginContinue}
    />
  );
};

export default MyAccount;