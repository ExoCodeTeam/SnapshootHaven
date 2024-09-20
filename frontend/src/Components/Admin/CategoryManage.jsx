import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';


import camera from "../../assets/Admin/camera.png"



export default function CategoryManage() {

    const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [newCategoryImage, setNewCategoryImage] = useState(null);

    const toggleAddCategoryModal = () => {
        setIsAddCategoryOpen(!isAddCategoryOpen);
    };

    const handleImageChange = (e) => {
        setNewCategoryImage(e.target.files[0]);
    };
    return (
        <div className="flex flex-col w-[500px] gap-[30px] text-[#303841] ">
            <h1 className="text-[28px] font-medium">Category Management</h1>
            <div className="flex flex-col gap-5">
                {categories.map((category) => (
                    <div key={category.id} className="flex justify-between rounded-md bg-[#EEE] py-[10px] px-[30px]">
                        <div className="flex gap-5">
                            <div className="flex justify-center items-center w-[50px] p-[10px] rounded-md bg-white">
                                <img className="w-full" src={category.image || camera} alt="" />
                            </div>
                            <div>
                                <h1 className="font-medium text-[20px]">{category.name}</h1>
                                <h1 className="font-light">{category.productCount} Products</h1>
                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <button className="text-[#3A4750] hover:text-[#303841] text-[22px]">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button className="text-red-500 hover:text-red-700 text-[22px]">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </div>
                ))}

                {/* Add Category Button */}
                <button
                    className="flex justify-center items-center text-[20px] rounded-md p-[10px] bg-[#F6C90E] hover:bg-[#FFCE00] gap-5 text-[#3A4750] hover:text-[#303841]"
                    onClick={toggleAddCategoryModal}
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <h1>Add Category</h1>
                </button>
            </div>

            {/* Add Category Modal */}
            {isAddCategoryOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 w-[400px]">
                        <div className="flex justify-between items-center mb-6">
                            <h1 className="text-[24px] font-medium">Add New Category</h1>
                            <button onClick={toggleAddCategoryModal} className="text-[#3A4750] hover:text-[#303841] text-[22px]">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>

                        {/* Add Category Form */}
                        <form className="flex flex-col gap-4">
                            <div>
                                <label className="block text-[18px] font-medium">Category Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F6C90E]"
                                    placeholder="Enter category name"
                                />
                            </div>

                            <div>
                                <label className="block text-[18px] font-medium">Category Image</label>
                                <input
                                    type="file"
                                    className="w-full p-2 border border-gray-300 rounded-md text-sm 
                   file:mr-4 file:py-2 file:px-4 file:rounded-md 
                   file:border-0 file:text-sm file:font- 
                   file:bg-[#F6C90E] file:text-[#3A4750] 
                   hover:file:bg-[#FFCE00] hover:file:text-[#303841]"
                                    onChange={handleImageChange}
                                />
                            </div>


                            <button
                                type="submit"
                                className="w-full text-center text-[20px] rounded-md p-[10px] bg-[#F6C90E] hover:bg-[#FFCE00] text-[#3A4750] hover:text-[#303841]"
                            >
                                Add Category
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}