// components/SearchInput.js

import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SearchInput = () => {

  return (
    <div className="p-inputgroup flex-order-4 w-full mt-2 lg:flex-order-3 lg:w-6 xl:w-8">
      <Button icon="pi pi-search" className='h-3rem' style={{background:"#E6FFED", color:"#00CB56", border:"none",borderTopLeftRadius:"25px",borderBottomLeftRadius:"25px"}}/>
      <InputText type="text"  placeholder="Search"  className='h-3rem' style={{background:"#E6FFED",border:"none",borderTopRightRadius:"25px", borderBottomRightRadius:"25px"}}/>
    </div>
  );
};

export default SearchInput;
