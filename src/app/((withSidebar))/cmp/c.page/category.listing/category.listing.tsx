import CategoryBox from '@/components/common/category.box/category'
import React from 'react'

function CategoryListing() {
  return (
      <div className='flex flex-column gap-3 w-full' >
         <span className='text-2xl' style={{fontWeight:500, color:'#009736' }}>Category Name</span>
            <div className='mb-2 overflow-hidden '> 
               <CategoryBox/>
            </div>
       </div>
  )
}

export default CategoryListing
