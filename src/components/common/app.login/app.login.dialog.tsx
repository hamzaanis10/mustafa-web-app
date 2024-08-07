import 'primeflex/primeflex.css';
import AppDialog from '../app.dialog/app.dialog';
import AppLoginStepOne from './app.login.step.one/app.login.step.one';
import AppLoginSuccessStepTwo from './app.login.success.step.two';

interface AppLoginDialogProps {
  showLoginForm: boolean;
  showSuccessDialog: boolean;
  onClose: () => void;
  onLoginContinue: () => void;
}
const AppLoginDialog: React.FC<AppLoginDialogProps> = (props:any) => {
  const { showLoginForm, showSuccessDialog } = props;
  const headerText = showSuccessDialog ? "" : "Welcome Back!";
  return (
    <>
      <AppDialog header={headerText} visible={showLoginForm || showSuccessDialog} modal onHide={props.onClose} 
      className={showSuccessDialog ? 'w-22rem' : 'w-22rem'}>
        {
          showSuccessDialog === true ?
            <AppLoginSuccessStepTwo />:
            <AppLoginStepOne onContinue={props.onLoginContinue} />
        }

      </AppDialog>
    </>
  )
}

export default AppLoginDialog