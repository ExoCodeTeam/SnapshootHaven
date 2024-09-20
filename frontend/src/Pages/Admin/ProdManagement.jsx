import React, { useState } from 'react';
import filter from "../../assets/Admin/filter.svg";
import settings from "../../assets/Admin/settings-w.svg";
import plus from "../../assets/Admin/+.svg";
import Table from "../../Components/Admin/Table";
import MiniFilter from "../../Components/Admin/MiniFilter";
import { Dialog, DialogTitle, DialogContent, IconButton, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CategoryManage from '../../Components/Admin/CategoryManage';

export default function ProdManagment() {
    const [openFilter, setOpenFilter] = useState(false);
    const [openCategory, setOpenCategory] = useState(false);

    // Open/Close handlers for both dialogs
    const handleOpenFilter = () => setOpenFilter(true);
    const handleCloseFilter = () => setOpenFilter(false);

    const handleOpenCategory = () => setOpenCategory(true);
    const handleCloseCategory = () => setOpenCategory(false);

    const sampleProducts = [
        { id: 1, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 2, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 3, name: 'Tripod', price: 150, category: 'Accessories' },
        // Add more sample data...
    ];

    return (
        <div style={{ height: 'calc(100vh - 80px)' }} className="flex flex-col py-[30px] gap-10 px-[30px]">
            <h1 className="text-[32px] font-medium text-[#303841]">Product Management</h1>
            <div className="flex w-full justify-between items-center">
                <div className='flex items-center gap-5 w-[60%] '>
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="h-[50px] p-[10px] text-[18px] placeholder:text-[20px] placeholder:text-[#303841] placeholder:text-opacity-30 
                    placeholder:font-semibold focus:outline-none focus:border-[#F6C90E] focus:border-b-2"
                    />
                    <button className="bg-[#F6C90E] hover:bg-[#FFCE00] flex  px-[15px] h-[40px] items-center justify-center rounded-md whitespace-nowrap">
                        <FontAwesomeIcon className='text-[#3A4750]' icon={faMagnifyingGlass} />
                    </button></div>

                <div className="flex gap-5">
                    <button
                        onClick={handleOpenFilter}
                        className="bg-[#3A4750] hover:bg-[#303841] flex gap-[10px] px-[20px] h-[40px] items-center justify-center rounded-md"
                    >
                        <h1 className="text-[16px] text-white">Filters</h1>
                        <img src={filter} className="h-[20px]" alt="" />
                    </button>

                    <button
                        onClick={handleOpenCategory}
                        className="bg-[#3A4750] hover:bg-[#303841] flex gap-[10px] px-[20px] h-[40px] items-center justify-center rounded-md whitespace-nowrap"
                    >
                        <h1 className="text-[16px] text-white">Category Management</h1>
                        <img src={settings} className="h-[20px]" alt="" />
                    </button>

                    <button className="bg-[#F6C90E] hover:bg-[#FFCE00] flex gap-[10px] px-[20px] h-[40px] items-center justify-center rounded-md whitespace-nowrap">
                        <h1 className="text-[16px] font-medium text-[#3A4750]">Add Product</h1>
                        <img src={plus} className="h-[20px]" alt="" />
                    </button>
                </div>
            </div>

            {/* Filter Dialog */}
            <Dialog open={openFilter} onClose={handleCloseFilter}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseFilter}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </IconButton>
                <DialogContent>
                    <MiniFilter />
                </DialogContent>
            </Dialog>

            {/* Category Management Dialog */}
            <Dialog open={openCategory} onClose={handleCloseCategory}>
                <IconButton
                    aria-label="close"
                    onClick={handleCloseCategory}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </IconButton>
                <DialogContent>
                    <CategoryManage />
                </DialogContent>
            </Dialog>

            <div className="h-full">
                <Table products={sampleProducts} />
            </div>
        </div>
    );
}

