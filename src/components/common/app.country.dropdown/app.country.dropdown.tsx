import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import './app.country.dropdown.css';
 
interface AppCountryDropdownProps {
    country: string;
    region: string;
    onSelectCountry: (value: string) => void;
    onSelectRegion: (value: string) => void;
}
 
const AppCountryDropdown: React.FC<AppCountryDropdownProps> = (props:any) => {
  const { country, region } = props;
 
  return (
    <div className='flex flex-column justify-content-center align-items-center gap-3' id='CountryDropdown'>
    
      <CountryDropdown 
        value={country}
        onChange={(val:any) => props.onSelectCountry(val)}
         />
     
   
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val:any) => props.onSelectRegion(val)} />
     
    </div>
  );
};
 
export default AppCountryDropdown;