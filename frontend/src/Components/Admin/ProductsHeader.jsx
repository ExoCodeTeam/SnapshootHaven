

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortUp, faSortDown, faTrash } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from 'react';



const ProductsHeader = ({ sortConfig, requestSort, totalProducts, selectedCount, handleSelectAll, handleDelete }) => {
    const renderIcon = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? (
                <FontAwesomeIcon icon={faSortUp} className="ml-1 opacity-100" />
            ) : (
                <FontAwesomeIcon icon={faSortDown} className="ml-1 opacity-100" />
            );
        }
        return <FontAwesomeIcon icon={faSortUp} className="ml-1 opacity-0 group-hover:opacity-50" />;
    };


    const isAllSelected = () => {
        return totalProducts > 0 && selectedCount === 6;
    };

    return (
        <div className="head grid grid-cols-10 gap-5 px-[20px] border-b-2 border-b-[#eee] border-b-solid">

            {selectedCount > 0 ? (
                <div className="col-span-9 flex justify-end items-center gap-10 text-[20px] pb-[10px]">
                    <span>{selectedCount} Selected</span>
                    <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            ) : (<>
                <div className="col-span-1 flex justify-start items-center  pb-[10px] pl-[20px] gap-[10px] text-[16px] font-semibold text-[#3A4750] hover:border-b-solid hover:border-b-[#3A4750] hover:border-b-2 cursor-pointer group" onClick={() => requestSort('id')}>
                    <span>Id</span> {renderIcon('id')}
                </div>
                <div className="col-span-5 flex justify-start items-center  pb-[10px] pl-[20px] gap-[10px] text-[16px] font-semibold text-[#3A4750] hover:border-b-solid hover:border-b-[#3A4750] hover:border-b-2 cursor-pointer group" onClick={() => requestSort('name')}>
                    <span>Name</span> {renderIcon('name')}
                </div>
                <div className="col-span-1 flex justify-start items-center  pb-[10px] pl-[20px] gap-[10px] text-[16px] font-semibold text-[#3A4750] hover:border-b-solid hover:border-b-[#3A4750] hover:border-b-2 cursor-pointer group" onClick={() => requestSort('price')}>
                    <span>Price</span> {renderIcon('price')}
                </div>
                <div className="col-span-1 flex justify-start items-center  pb-[10px] pl-[20px] gap-[10px] text-[16px] font-semibold text-[#3A4750] hover:border-b-solid hover:border-b-[#3A4750] hover:border-b-2 cursor-pointer group" onClick={() => requestSort('category')}>
                    <span>Category</span> {renderIcon('category')}
                </div>
                <div className="col-span-1 flex justify-start items-center  pb-[10px] pl-[20px] gap-10 text-[16px] font-semibold text-[#3A4750]  group " >
                    <span>Action</span>

                </div>

            </>)}
            <div className='col-span-1 flex justify-center items-center  pb-[10px] pl-[20px] '>

                <Checkbox
                    checked={isAllSelected()}
                    onChange={handleSelectAll}
                    color="primary"
                />
            </div>

        </div>

    )
}



export default ProductsHeader;