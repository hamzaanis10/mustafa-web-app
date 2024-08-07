"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import {
  FullNameSchema,
  emailSchema,
} from "@/components/common/app.validation/app.validation";
import AppInputFullname from "@/components/common/app.input.fullname/app.input.fullname";
import AppInputEmail from "@/components/common/app.input.email/app.input.email";
import AppCountryDropdown from "@/components/common/app.country.dropdown/app.country.dropdown";
import AppInputAddress from "@/components/common/app.input.address/app.input.address";

function AppBillingAddressForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullnameError, setFullnameError] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const removeLabel = false;

  useEffect(() => {
    const emailValidation = emailSchema.safeParse(email);
    setEmailError(
      email
        ? emailValidation.success
          ? ""
          : emailValidation.error.errors[0].message
        : ""
    );

    if (!hasInteracted) return;
    const fullnameValidation = FullNameSchema.safeParse({
      firstName,
      lastName,
    });
    if (!fullnameValidation.success) {
      const newErrors = { firstName: "", lastName: "" };
      for (const error of fullnameValidation.error.errors) {
        if (error.path.includes("firstName")) {
          newErrors.firstName = error.message;
        } else if (error.path.includes("lastName")) {
          newErrors.lastName = error.message;
        }
      }
      setFullnameError(newErrors);
    } else {
      setFullnameError({ firstName: "", lastName: "" });
    }
  }, [firstName, lastName, email, hasInteracted]);

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (value: string) => {
      setter(value);
      setHasInteracted(true);
    };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSelectCountry = (value: string) => {
    setCountry(value);
  };

  const handleSelectRegion = (value: string) => {
    setRegion(value);
  };

  const handleAddressChange = (value: string) => {
    setAddress(value);
  };

  return (
      <div id="Billing-Address">
         <div className="p-dialog-contentS mt-4" >
        <AppInputFullname
          firstName={firstName}
          lastName={lastName}
          setFirstName={handleInputChange(setFirstName)}
          setLastName={handleInputChange(setLastName)}
          fullnameError={fullnameError}
        />

        <AppInputEmail
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          removeLabel={removeLabel}
        />
          <AppCountryDropdown
            country={country}
            region={region}
            onSelectCountry={handleSelectCountry}
            onSelectRegion={handleSelectRegion}
          />

          <AppInputAddress
            value={address}
            setInputAddress={handleAddressChange}
            originalPlaceholder="House number, Building, Street name"
          />
      </div>
      </div>
  );
}

export default AppBillingAddressForm;
