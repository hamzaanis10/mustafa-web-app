import "./app.input.fullname.css"
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
interface AppInputFullnameProps {
  firstName: string;
  lastName: string;
  fullnameError: { firstName: string; lastName: string };
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const AppInputFullname: React.FC<AppInputFullnameProps> = (props: any) => {
  const { firstName, lastName, fullnameError } = props;
  return (
    <div className="card flex flex-column gap-3 md:flex-row lg:flex-row" id="fullName">
      <div className="flex flex-column w-full">
        <FloatLabel>
          <InputText id="firstName" value={firstName} onChange={(e) => props.setFirstName(e.target.value)} className="w-full"/>
          <label htmlFor="firstName">First name*</label>
        </FloatLabel>
        <div>
          {fullnameError.firstName && <p className="text-red-500 text-xs mt-0">{fullnameError.firstName}</p>}
        </div>
      </div>

      <div className="flex flex-column w-full">
        <FloatLabel>
          <InputText id="lastName" value={lastName} onChange={(e) => props.setLastName(e.target.value)}className="w-full"/>
          <label htmlFor="lastName">Last name*</label>
        </FloatLabel>
        <div>
          {fullnameError.lastName && <p className="text-red-500 text-xs mt-0">{fullnameError.lastName}</p>}
        </div>
      </div>

    </div>
  );
}

export default AppInputFullname;