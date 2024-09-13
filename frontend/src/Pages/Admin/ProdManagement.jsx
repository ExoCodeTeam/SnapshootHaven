import React, { useState } from 'react';
import filter from "../../assets/Admin/filter.svg";
import settings from "../../assets/Admin/settings-w.svg";
import plus from "../../assets/Admin/+.svg";
import Table from "../../Components/Admin/Table";
import MiniFilter from "../../Components/Admin/MiniFilter";
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function ProdManagment() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const sampleProducts = [
        { id: 1, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 2, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 3, name: 'Tripod', price: 150, category: 'Accessories' },
        { id: 4, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 5, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 6, name: 'Tripod', price: 150, category: 'Accessories' },
        { id: 7, name: 'Camera', price: 1000, category: 'Cameras' },
        { id: 8, name: 'Lens', price: 200, category: 'Lenses' },
        { id: 9, name: 'Tripod', price: 150, category: 'Accessories' },
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
                        onClick={handleOpen}
                        className="bg-[#3A4750] hover:bg-[#303841] flex gap-[10px] px-[20px] h-[40px] items-center justify-center rounded-md"
                    >

                        <h1 className="text-[16px] text-white">Filters</h1>
                        <img src={filter} className="h-[20px]" alt="" />
                    </button>
                    <button className="bg-[#3A4750] hover:bg-[#303841] flex gap-[10px] px-[20px] h-[40px] items-center justify-center rounded-md whitespace-nowrap">

                        <h1 className="text-[16px] text-white">Category Management</h1>
                        <img src={settings} className="h-[20px]" alt="" />
                    </button>
                    <button className="bg-[#F6C90E] hover:bg-[#FFCE00] flex gap-[10px] px-[20px] h-[40px] items-center justify-center rounded-md whitespace-nowrap">

                        <h1 className="text-[16px] font-medium text-[#3A4750]">Add Product</h1>
                        <img src={plus} className="h-[20px]" alt="" />
                    </button>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose}>

                <IconButton
                    aria-label="close"
                    onClick={handleClose}
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

            <div className="h-full">
                <Table products={sampleProducts} />
            </div>
        </div>
    );
}
