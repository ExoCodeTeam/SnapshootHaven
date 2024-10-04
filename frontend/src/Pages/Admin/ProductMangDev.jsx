import { useState, useEffect } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
} from "../../api/ProductsApi";
import {
  fetchCategory,
  deleteCategort,
  createCategory,
} from "../../api/CategoryApi";

function ProductMangDev() {
  return (
    <>
      <CategoryManagement />
      <ProductManagement />
    </>
  );
}

export default ProductMangDev;

function ProductManagement() {
  const [categories, setCategories] = useState("");
  const fetchData = async () => {
    try {
      const data = await fetchCategory();
      setCategories(data);
    } finally {
      setLoading(false);
    }
  };
  const loadProducts = async () => {
    try {
      const data = await fetchProducts(searchTerm, {
        minPrice,
        maxPrice,
        categories: selectedCategory  ,
      });
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    id: null,
    name: "",
    price: "",
    category_id: "",
    img_url: "",
  });
  const [imgFile, setImgFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgPreview, setImgPreview] = useState(""); // For image preview
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [filterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filterDeecter, SetFilterDetecte] = useState(false);
  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    loadProducts();
  }, [searchTerm, filterDeecter]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term on input change
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImgFile(file);
      setImgPreview(URL.createObjectURL(file)); // Preview new selected image
    }
  };

  const handleCreateOrUpdateProduct = async () => {
    setLoading(true);
    try {
      let imgURL = newProduct.img_url;

      if (imgFile) {
        imgURL = await uploadImage(imgFile); // If new image is uploaded, update URL
      }

      if (isEditing) {
        // Update product
        await updateProduct(newProduct.id, { ...newProduct, img_url: imgURL });
        setIsEditing(false);
      } else {
        // Create new product
        await createProduct(newProduct, imgURL);
      }

      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts);
      resetForm();
    } catch (error) {
      console.error("Error creating/updating product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    setLoading(true);
    try {
      await deleteProduct(id);
      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditProduct = (product) => {
    setNewProduct(product);
    setIsEditing(true);
    setImgPreview(product.img_url); // Show current image in preview during edit
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setNewProduct({
      id: null,
      name: "",
      price: "",
      category_id: "",
      img_url: "",
    });
    setImgFile(null);
    setImgPreview("");
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Product Management
      </h1>

      {/* Create or Update Product Form */}
      <div className="bg-white shadow p-6 rounded-lg mb-8">
        <h2 className="text-2xl mb-4">
          {isEditing ? "Update Product" : "Create New Product"}
        </h2>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="border p-2 w-full mb-2"
            placeholder="Product Name"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="border p-2 w-full mb-2"
            placeholder="Product Price"
          />
        </div>
        <div className="mb-4">
          <select
            name="category_id"
            value={newProduct.category_id}
            onChange={handleInputChange}
            className="border p-2 w-full mb-2"
          >
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))
            ) : (
              <option value="">Loading categories...</option>
            )}
          </select>
        </div>
        <div className="mb-4">
          <input
            type="file"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
        </div>
        {imgPreview && (
          <div className="mb-4">
            <h3 className="text-lg">Image Preview:</h3>
            <img
              src={imgPreview}
              alt="Product Preview"
              className="w-full h-40 object-contain rounded"
            />
          </div>
        )}
        <button
          onClick={handleCreateOrUpdateProduct}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full"
          disabled={loading}
        >
          {loading
            ? isEditing
              ? "Updating..."
              : "Creating..."
            : isEditing
            ? "Update Product"
            : "Create Product"}
        </button>
        {isEditing && (
          <button
            onClick={resetForm}
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 w-full mt-2"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* Product Management */}
      <div className="bg-white shadow p-6 rounded-lg min-h-[660px]">
        <h2 className="text-2xl mb-4">Product Managment</h2>
        {/* Search Bar */}
        <div className="mb-4 flex">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border p-2 w-full mb-2"
            placeholder="Search Products by Name"
          />

          {/* Filter Button */}
          <button
            onClick={() => setFilterDropdownVisible(!filterDropdownVisible)}
            className="ml-2 p-2 border bg-gray-100"
          >
            Filter
          </button>
        </div>
        {filterDropdownVisible && (
          <div className="border p-4 w-full bg-white">
            <div className="mb-2">
              <label>Category:</label>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="border p-2 w-full"
              >
                <option value="">All Categories</option>
                <option value="Mirrorless">Mirrorless</option>
                <option value="DSLR">DSLR</option>
                <option value="Compact">Compact</option>
              </select>
            </div>
            <div className="mb-2">
              <label>Price Range:</label>
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="border p-2 mr-2"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="border p-2"
              />
            </div>
            <button
              onClick={() => {
                SetFilterDetecte(!filterDeecter);
              }}
              className="mt-2 p-2 bg-blue-500 text-white"
            >
              Apply Filters
            </button>
          </div>
        )}

        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="overflow-x-auto ">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="w-full bg-gray-200">
                  <th className="py-2 px-4 text-left">Product Name</th>
                  <th className="py-2 px-4 text-left">Price</th>
                  <th className="py-2 px-4 text-left">Category</th>
                  <th className="py-2 px-4 text-left">Image</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t">
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.price}</td>
                    <td className="py-2 px-4">
                      {product?.category?.name
                        ? product.category.name
                        : "No Category"}
                    </td>
                    <td className="py-2 px-4">
                      {product.img_url && (
                        <img
                          src={product.img_url}
                          alt={product.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                      )}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => handleEditProduct(product)}
                        className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mb-2"
                        disabled={loading}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                        disabled={loading}
                      >
                        {loading ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategory();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCategort(id);
      setCategories(categories.filter((category) => category.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCreate = async () => {
    if (!newCategoryName.trim()) {
      setError("Category name cannot be empty");
      return;
    }

    try {
      await createCategory({ name: newCategoryName });
      const data = await fetchCategory(); // Refresh category list
      setCategories(data);
      setNewCategoryName(""); // Clear input field
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Category Management
      </h1>

      {error && (
        <div className="bg-red-500 text-white p-2 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      <div className="mb-6">
        <input
          type="text"
          placeholder="New Category Name"
          className="border rounded p-2 mr-2"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white rounded p-2"
        >
          Create Category
        </button>
      </div>

      {loading ? (
        <div className="text-center">Loading categories...</div>
      ) : (
        <table className="table-auto w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((category) => (
                <tr key={category.id}>
                  <td className="border px-4 py-2">{category.id}</td>
                  <td className="border px-4 py-2">{category.name}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
