import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function AddCategoryModal({ onClose, onAddCategory }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [categoryName, setCategoryName] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); // Create image preview
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName && selectedImage) {
            onAddCategory({ name: categoryName, image: selectedImage, productCount: 0 });
            onClose(); // Close the modal after adding
        }
    };

    return (
        <div className="bg-white rounded-lg p-8 w-[500px] relative">
            {/* X Close Button */}
            <button
                className="absolute top-8 right-8 text-gray-600 hover:text-gray-800"
                onClick={onClose}
            >
                <FontAwesomeIcon icon={faTimes} size="xl" />
            </button>

            <h1 className="text-[28px] font-medium mb-6">Add New Category</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-[18px] font-medium">Category Name</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#F6C90E]"
                        placeholder="Enter category name"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </div>

                {/* Image File Input */}
                <div>
                    <label className="block text-[18px] font-medium">Category Image</label>
                    <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded-md text-sm 
                                   file:mr-4 file:py-2 file:px-4 file:rounded-md 
                                   file:border-0 file:text-sm file:font-semibold 
                                   file:bg-[#F6C90E] file:text-[#3A4750] 
                                   hover:file:bg-[#FFCE00] hover:file:text-[#303841]"
                        onChange={handleImageChange}
                    />

                    {/* Display selected image */}
                    {selectedImage && (
                        <div className="mt-4 flex gap-4 items-center">
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-16 h-16 object-cover rounded-md border border-gray-300"
                            />
                            <button
                                type="button"
                                onClick={() => setSelectedImage(null)} // Remove image
                                className="text-red-600 hover:text-red-800"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="flex justify-center items-center text-[20px] rounded-md p-[10px] bg-[#F6C90E] hover:bg-[#FFCE00] gap-5 text-[#3A4750] hover:text-[#303841]"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <h1>Add Category</h1>
                </button>
            </form>
        </div>
    );
}
