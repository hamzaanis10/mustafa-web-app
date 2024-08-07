"use client"
import React, { useState } from "react";
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import { sortProductList, PRODUCT_lIST } from '../../../components/common/util/util';
import "./app.sort.products.css"


interface sortProducts extends DropdownProps {
    name: string;
    code: string;
}

const sortProducts = () => {
    const [selectedSortOption, setSelectedSortOption] = useState<sortProducts | null>({ name: "Recommend", code: "RM"});
    const [productList, setProductList] = useState(PRODUCT_lIST);
    const sort: sortProducts[] = [
        { name: 'Recommend', code: 'RM' },
        { name: 'Newest', code: 'NW' },
        { name: 'Price: Low to high', code: 'LTH' },
        { name: 'Price: High to low', code: 'HTL' },
        { name: 'Top Rated', code: 'TR' }
    ];
    const sortOptionTemplate = (option: sortProducts) => {
        if(option) {
            return <span>Sort by: {option.name}</span>;
        }
    };

    const onSortChange = (e: { value: sortProducts }) => {
        setSelectedSortOption(e.value);
        const sortedProducts = sortProductList(e.value.code);
        setProductList(sortedProducts); 
        console.log("sorted",productList)
      };

      const renderProductList = () => {
        return productList.map((product) => (
            <div key={product.id} className="product-item">
                <img src={`/${product.image}`} alt={product.name} />
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{`$${product.price.toFixed(2)}`}</p>
                </div>
            </div>
        ));
    };

    return (
        <div className="card flex justify-content-start">
            <div>
            <Dropdown onChange={onSortChange} valueTemplate={sortOptionTemplate} checkmark value={selectedSortOption} options={sort} optionLabel="name" 
                placeholder="Select a Sort Option" className="w-18rem" />
                </div>
                <div className="product-list">
                {renderProductList()}
            </div>
                
        </div>
    )
}
        
export default sortProducts


// // to be places in util.js

// //SortProducts
// export const sortProductList = (sortCode: string) => {
//     switch (sortCode) {
//         case 'RM':
//           return [...PRODUCT_lIST].sort((a, b) => {
//             if (a.inventoryStatus === 'INSTOCK' && b.inventoryStatus !== 'INSTOCK') {
//               return -1;
//             } else if (b.inventoryStatus === 'INSTOCK' && a.inventoryStatus !== 'INSTOCK') {
//               return 1;
//             } else {
//               return b.rating - a.rating;
//             }
//           });
//         case 'NW':
//           //   return [...PRODUCT_lIST].sort((a, b) => {
//           //     const dateA = new Date(a.dateAdded).getTime();
//           //     const dateB = new Date(b.dateAdded).getTime();
//           //     return dateB - dateA;
//           // });
//         case 'LTH':
//             return [...PRODUCT_lIST].sort((a, b) => a.price - b.price);
//         case 'HTL':
//             return [...PRODUCT_lIST].sort((a, b) => b.price - a.price);
//         case 'TR':
//             return [...PRODUCT_lIST].sort((a, b) => b.rating - a.rating);
//         default:
//             return PRODUCT_lIST;
//     }
//   };
  