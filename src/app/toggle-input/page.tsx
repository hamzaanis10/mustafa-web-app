"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import "./toggle-input.scss";
import { classNames } from 'primereact/utils';

const EmailOrPhoneInput = () => {
    const [value, setValue] = useState('');
    const [isEmail, setIsEmail] = useState(false);
    const [countryCodes, setCountryCodes] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const fetchCountryCodes = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                const countries = response.data.map(country => ({
                    name: country.name.common,
                    code: country.idd?.root + (country.idd?.suffixes?.[0] || ''),
                    flag: country.flags?.svg || country.flags?.png,
                })).filter(country => country.code);

                console.log('Country codes:', countries);
                setCountryCodes(countries);
                setSelectedCountry(countries[0]);
            } catch (error) {
                console.error('Error fetching country codes:', error);
            }
        };

        fetchCountryCodes();
    }, []);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setValue(inputValue);

        // setIsEmail(/[@!#$%^&*(),.?":{}|<>a-zA-Z]/.test(inputValue))

        setIsEmail(inputValue.includes('@') || /[^\d]/.test(inputValue));

        if (isEmail) {
            setSelectedCountry(null);
        }
    };

    const handleClear = () => {
        setValue('');
        setIsEmail(false);
        setSelectedCountry(countryCodes[0]);
    };

    const countryTemplate = (option) => {
        return (
            <div>
                <img src={option.flag} alt={option.name} style={{ width: '20px', height: 'auto', marginRight: '8px' }} /> {/* Displaying the flag image */}
                <span>{option.name}</span>
                <span className="country-code ml-2">{option.code}</span>
            </div>
        );
    };

    const dropdownValueTemplate = (option) => {
        if (!option) {
            return '';
        }

        return (
            <div>
                <img src={option.flag} alt={option.name} style={{ width: '20px', height: 'auto', marginRight: '6px' }} />
                <span className="country-code mr-0">{option.code}</span>
            </div>
        );
    };

    return (
        <div className="p-field">
            <label htmlFor="emailOrPhone">{isEmail ? 'Email' : 'Phone Number'}</label>
            <div className="p-inputgroup relative">
                {/* <div className='w-7rem'> */}
                <div>
                    {!isEmail && (
                        <Dropdown
                            value={selectedCountry || countryCodes[0]}
                            options={countryCodes}
                            onChange={(e) => setSelectedCountry(e.value)}
                            optionLabel="name"
                            placeholder="Select a Country"
                            className="p-inputgroup-addon"
                            itemTemplate={countryTemplate}
                            valueTemplate={dropdownValueTemplate}
                            style={{ width: '100%', padding: '0' }}
                            filter
                            // showClear
                        />
                    )}
                </div>
    
                <InputText
                    id="emailOrPhone"
                    value={value}
                    onChange={handleChange}
                    placeholder={isEmail ? 'Enter your email' : 'Enter your phone number'}           
                />

                {value && (
                    <i className={classNames('pi', { 'pi-times': value, '': !value },"clear-icon")} onClick={handleClear}></i>
                )}
            </div>
        </div>
    );
};

export default EmailOrPhoneInput;
