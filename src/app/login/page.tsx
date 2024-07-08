// "use client";
// import 'primeflex/primeflex.css';
// import { useState } from 'react';
// import AppLogin from '@/components/common/app.login.dialogbox/app.login.dialogbox';
// import AppDialog from '@/components/common/app.dialog/app.dialog';
// import AppSuccessDialog from '@/components/common/app.success.dialog.content/app.success.dialog.content';
// const login = () => {
//   const [showForm, setShowForm] = useState<boolean>(true);
//   const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false);

//   const closeForm = () => {
//     setShowForm(false);
//   };

//   const onLoginContinue = () => {
//     setShowForm(false);
//     setShowSuccessDialog(true);
// };

//   return (
//     <>
//     <AppDialog header="Welcome Back!" visible={showForm} modal onHide={closeForm} className='w-20rem'>
//         <AppLogin onContinue={onLoginContinue} />
//     </AppDialog>

//     <AppDialog header="" visible={showSuccessDialog} modal onHide={() => setShowSuccessDialog(false)} className='relative w-22rem'>
//     <AppSuccessDialog label="Let's get started" title="Login Successful!" description="You have successfully verified the account. Now it’s time to start your MUST journey..."/>
//   </AppDialog>
//   </>
//   )
// }

// export default login