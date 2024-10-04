import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import camera from "../../assets/Admin/camera.png";
import AddCategoryModal from './AddCategoryModal';

export default function CategoryManage() {
    const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState({ name: '', image: null, productCount: 0 });

    const toggleAddCategoryModal = () => {
        setIsAddCategoryOpen(!isAddCategoryOpen);
    };



    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewCategory({ ...newCategory, image: URL.createObjectURL(file) });
        }
    };
    const handleAddCategory = (newCategory) => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
    };
    return (
        <div className="flex flex-col w-[500px] gap-[30px] text-[#303841] ">
            <h1 className="text-[28px] font-medium">Category Management</h1>
            <div className="flex flex-col gap-5">

                {categories.map((category) => (
                    <div key={category.id} className="flex justify-between rounded-md bg-[#EEE] py-[10px] px-[30px]">
                        <div className="flex gap-5">
                            <div className="flex justify-center items-center w-[50px] p-[10px] rounded-md bg-white">
                                <img className="w-full" src={category.image} alt={category.name} />
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
                    <AddCategoryModal
                        onClose={toggleAddCategoryModal}
                        onAddCategory={handleAddCategory}
                        newCategory={newCategory}
                        setNewCategory={setNewCategory}
                        handleImageChange={handleImageChange}
                    />
                </div>
            )}
        </div>
    );
}
