import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function AddProductModal({ categories, onAddProduct }) {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState(''); // New state for description
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const imageUrls = files.map((file) => URL.createObjectURL(file));
        setSelectedImages((prevImages) => prevImages.concat(imageUrls));
    };

    const handleRemoveImage = (imageUrl) => {
        setSelectedImages((prevImages) => prevImages.filter((img) => img !== imageUrl));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddProduct({
            name: productName,
            price: productPrice,
            description: productDescription, // Include description in submission
            images: selectedImages,
            category: selectedCategory,
        });
        // Reset the form
        setProductName('');
        setProductPrice('');
        setProductDescription(''); // Reset description
        setSelectedImages([]);
        setSelectedCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 bg-white rounded-md">
            <h1 className="text-[28px] font-medium mb-6">Add New Product</h1>

            <div>
                <label className="block text-[18px] font-medium">Product Name</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter product name"
                    required
                />
            </div>

            <div>
                <label className="block text-[18px] font-medium">Product Price</label>
                <input
                    type="number"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter product price"
                    required
                />
            </div>

            <div>
                <label className="block text-[18px] font-medium">Product Description</label>
                <textarea
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter product description"
                    required
                />
            </div>

            <div>
                <label className="block text-[18px] font-medium">Product Category</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-[18px] font-medium ">Product Images</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-gray-300 rounded-md text-sm 
                                   file:mr-4 file:py-2 file:px-4 file:rounded-md 
                                   file:border-0 file:text-sm file:font-semibold 
                                   file:bg-[#F6C90E] file:text-[#3A4750] 
                                   hover:file:bg-[#FFCE00] hover:file:text-[#303841]"
                />

                <div className="mt-4 flex gap-4">
                    {selectedImages.map((imageUrl, index) => (
                        <div key={index} className="relative">
                            <img
                                src={imageUrl}
                                alt={`Selected ${index}`}
                                className="w-16 h-16 object-cover rounded-md border border-gray-300"
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveImage(imageUrl)}
                                className="absolute top-0 right-0 text-red-600 hover:text-red-800"
                            >
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="submit"
                className="flex justify-center items-center text-[20px] rounded-md p-[10px] bg-[#F6C90E] hover:bg-[#FFCE00] gap-5 text-[#3A4750] hover:text-[#303841]"
            >
                <FontAwesomeIcon icon={faPlus} />
                <h1>Add Product</h1>
            </button>
        </form>
    );
}
