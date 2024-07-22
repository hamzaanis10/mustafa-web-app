import React, { ChangeEvent } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./app.toggle.input.scss";
import { classNames } from "primereact/utils";

interface Country {
  name: string;
  code: string;
  flag: string;
}

interface AppEmailOrPhoneInputProps {
  id?: string;
  page?: string;
  value: string;
  isEmail: boolean;
  countryCodes: Country[];
  selectedCountry: Country | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onCountryChange: (country: Country) => void;
  className?: string
}

const AppEmailOrPhoneInput: React.FC<AppEmailOrPhoneInputProps> = ({
  id,
  page,
  value,
  isEmail,
  countryCodes,
  selectedCountry,
  onChange,
  onClear,
  onCountryChange,
  className
}) => {
  const countryTemplate = (option: Country) => {
    return (
      <div>
        <img
          src={option.flag}
          alt={option.name}
          style={{ width: "20px", height: "auto", marginRight: "8px" }}
        />
        <span>{option.name}</span>
        <span className="country-code ml-2">{option.code}</span>
      </div>
    );
  };

  const dropdownValueTemplate = (option: Country | null) => {
    if (!option) {
      return "";
    }

    return (
      <div className="flex align-items-center">
        <img
          src={option.flag}
          alt={option.name}
          style={{
            width: "26px",
            height: "16px",
            marginRight: "8px",
            borderRadius: "6px",
          }}
        />
        <span className="country-code mr-0">{option.code}</span>
      </div>
    );
  };

  return (
    <div className="p-field" id="toggleInput">
      {/* <label htmlFor="emailOrPhone">{isEmail ? 'Email' : 'Phone Number'}</label> */}
      <div className={`p-inputgroup relative  ${isEmail ? "full-width " : " flex gap-1"}`}>
        <div>
          {!isEmail && (
            <Dropdown
              value={selectedCountry || countryCodes[0]}
              options={countryCodes}
              onChange={(e) => onCountryChange(e.value)}
              optionLabel="name"
              placeholder="Select a Country"
              className="p-inputgroup-addon"
              itemTemplate={countryTemplate}
              valueTemplate={dropdownValueTemplate}
              style={{ width: "100%", padding: "0", borderRadius: "8px" }}
              filter
            />
          )}
        </div>

        <div className="flex align-items-center relative w-full">
          {isEmail && (
            <i
              className="pi pi-user pl-1 "
              style={{ position: "absolute", marginLeft: "10px" }}
            />
          )}

          <InputText
            id="emailOrPhone"
            value={value}
            onChange={onChange}
            placeholder={
              page === "login" ? "Email/ Mobile number" : "123456789"
            }
            // style={{width:'100%' , borderRadius:"8px"}}
            style={{
              paddingRight: value ? "30px" : "10px",
              paddingLeft: isEmail? "37px" : "10px",
            }}
          />

          {value && (
            <i
              className={classNames(
                "pi",
                { "pi-times": value, "": !value },
                "clear-icon"
              )}
              onClick={onClear}
              style={{ position: "absolute", right: "10px" }}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppEmailOrPhoneInput;
