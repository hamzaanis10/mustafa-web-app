import { Button } from 'primereact/button';

interface ButtonOneProps {
  label: string;
  disabled: boolean;
  onClick?: () => void;
}

const ButtonOne: React.FC<ButtonOneProps> = ({ label, disabled, onClick }) => {
return (
  <div>
      <Button label={label} onClick={onClick} disabled={disabled} className="w-full mb-3 text-sm font-semibold p-button-rounded" style={label !== "Send via Sms" ? { backgroundColor: '#00CB56' } : { backgroundColor: 'transparent', color: "#00CB56" }}/>
  </div>
);
}

export default ButtonOne