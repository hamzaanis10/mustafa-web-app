"use client";
import { useState, useEffect } from 'react';
import "./app.new.shipping.address.form.css";
import AppInputFullname from '@/components/common/app.input.fullname/app.input.fullname';
import { FullNameSchema } from '@/components/common/app.validation/app.validation';
import AppInputPhoneNumber from '@/components/common/app.input.phone.number/app.input.phone.number';
import { isValidPhoneNumber } from "react-phone-number-input";
import AppCountryDropdown from '@/components/common/app.country.dropdown/app.country.dropdown';
import AppInputZipCode from '@/components/common/app.input.zip.code/app.input.zip.code';
import AppBillingAddress from '@/components/common/app.billing.addresss/app.billing.address';
import AppInputOptional from '@/components/common/app.input.optional/app.input.optional';
import AppInputAddress from '@/components/common/app.input.address/app.input.address';
import AppButton from '@/components/common/app.button/app.button';
import AppGoogleMap from '@/components/common/app.google.map/app.google.map';


 
const AppNewShippingAddressForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullnameError, setFullnameError] = useState<{ firstName: string; lastName: string }>({ firstName: "", lastName: "" });
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNoValid, setisPhoneNoValid] = useState<boolean | undefined>();
  const [country, setCountry] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [originalPlaceholder, setOriginalPlaceholder] = useState<string>("Example: 123456");
  const [unitNumber, setUnitNumber] = useState<string>('');
  const [address, setAddress] = useState<string>("");
 
 
  useEffect(() => {
    if (!hasInteracted) return;
 
    const fullnameValidation = FullNameSchema.safeParse({ firstName, lastName });
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
  }, [firstName, lastName, hasInteracted]);
 
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (value: string) => {
    setter(value);
    setHasInteracted(true);
  };
 
  const handlePhoneNoChange = (phone: string) => {
    setPhoneNumber(phone);
    setisPhoneNoValid(phone ? isValidPhoneNumber(phone) : undefined);
  };
 
  const handleSelectCountry = (value: string) => {
    setCountry(value);
  };
 
  const handleSelectRegion = (value: string) => {
    setRegion(value);
  };
 
  const handleZipCodeChange = (value: string) => {
    setZipCode(value);
  };
 
  const handleUnitNumberChange = (value: string) => {
    setUnitNumber(value);
  };

  const handleAddressChange = (value: string) => {
    setAddress(value);
  };


  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
  };
 
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = originalPlaceholder;
  };
 
  return (
 
    <div className='p-dialog-contents' id='New-Address-Page'>
      
      <AppInputFullname
        firstName={firstName}
        lastName={lastName}
        setFirstName={handleInputChange(setFirstName)}
        setLastName={handleInputChange(setLastName)}
        fullnameError={fullnameError}
      />
      <AppInputPhoneNumber
        value={phoneNumber}
        onChange={handlePhoneNoChange}
        isValid={isPhoneNoValid} />
 
      <AppCountryDropdown
        country={country}
        region={region}
        onSelectCountry={handleSelectCountry}
        onSelectRegion={handleSelectRegion} />
 
      <AppInputZipCode
        value={zipCode}
        onChange={handleZipCodeChange}
        originalPlaceholder={originalPlaceholder}
        onFocus={handleFocus}
        onBlur={handleBlur} />

       <AppInputOptional
        value={unitNumber}
        setUnitNumber={handleUnitNumberChange}
        originalPlaceholder='Unit number (optional)'
      />
      <AppInputAddress
            value={address}
            setInputAddress={handleAddressChange}
            originalPlaceholder="House number, Building, Street name"
      />
       <AppGoogleMap/>

        <AppBillingAddress 
          label='set as default address'
           checked={false} />

        <div className=''>
            <AppButton label='Save' />
            <AppButton label='Back' style={{ backgroundColor: "transparent" , color:'#00CB56' }}  />
         </div>
    </div>
  );
};
 
export default AppNewShippingAddressForm;