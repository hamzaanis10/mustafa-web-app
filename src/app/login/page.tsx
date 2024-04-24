"use client";
import 'primeflex/primeflex.css';
import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import Login from '@/cu_components/common/login.dialogbox/login.dialogbox';
import { SuccessDialogContent } from '@/cu_components/common/success.dialog.content/success.dialog.content';
const login = () => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

  const closeForm = () => {
    setShowForm(false);
  };

  const onLoginContinue = () => {
    setShowForm(false);
    setShowSuccessDialog(true);
};

  return (
    <>
    <Dialog header="Welcome Back!" visible={showForm} modal style={{ width: '350px' }} onHide={closeForm} contentStyle={{ overflow: 'hidden' }}>
        <Login onContinue={onLoginContinue} />
    </Dialog>

    <Dialog header="" visible={showSuccessDialog} modal style={{ width: '350px'}} onHide={() => setShowSuccessDialog(false)} className='relative'>
    <SuccessDialogContent label="Let's get started" title="Login Successful!" description="You have successfully verified the account. Now it’s time to start your MUST journey..."/>
  </Dialog>
  </>
  )
}

export default login