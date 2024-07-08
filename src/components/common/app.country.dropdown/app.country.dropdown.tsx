import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import "./app.country.dropdown.css";

interface AppCountryDropdownProps {
    country: string;
    region: string;
    onSelectCountry: (value: string) => void;
    onSelectRegion: (value: string) => void;
}

const AppCountryDropdown: React.FC<AppCountryDropdownProps> = (props:any) => {
  const { country, region } = props;
  
  return (
    <div id='CountryDropdown' className='flex flex-column gap-3'>
      <CountryDropdown
        value={country}
        onChange={(val) => props.onSelectCountry(val)} 
        classes='custom'
        />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => props.onSelectRegion(val)} />
    </div>
  );
};

export default AppCountryDropdown;