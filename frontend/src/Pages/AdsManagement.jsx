import { useState, useEffect } from "react";
import AdsApi from "../api/AdsApi"; // Import the AdsApi object

function AdsManagement() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newAd, setNewAd] = useState({ order: "", title: "", type: "main" }); // Added type with default "main"
  const [imageFile, setImageFile] = useState(null);
  const [selectedAd, setSelectedAd] = useState(null); // To track the ad being updated
  const [imagePreview, setImagePreview] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  // Fetch all ads
  const fetchAds = async () => {
    setLoading(true);
    try {
      const data = await AdsApi.fetchAds();
      setAds(data);
    } catch (error) {
      console.error("Error fetching ads:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const openModal = (ad = null) => {
    setSelectedAd(ad);
    setIsModalOpen(true);
    if (ad) {
      setImagePreview(ad.img_url); // Preview existing ad image
    } else {
      setImagePreview("");
    }
  };

  const closeModal = () => {
    setSelectedAd(null);
    setImagePreview("");
    setImageFile(null);
    setNewAd({ order: "", title: "", type: "main" }); // Reset newAd with default type
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAd((prevAd) => ({ ...prevAd, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : "");
  };

  const handleCreateAd = async () => {
    try {
      let img_url = "";
      if (imageFile) {
        img_url = await AdsApi.uploadImage(
          imageFile,
          ads.reduce((maxId, ad) => (ad.id > maxId ? ad.id : maxId), 1)
        );
      }
      await AdsApi.createAd(newAd, img_url); // Include the ad type in newAd
      await fetchAds();
      closeModal(); // Close modal after creation
    } catch (error) {
      console.error("Error creating ad:", error.message);
    }
  };

  const handleUpdateAd = async () => {
    if (!selectedAd) return;
    try {
      let updateData = {
        order: selectedAd.order,
        title: selectedAd.title,
        type: selectedAd.type, // Add the type to update
      };
      if (imageFile) {
        const img_url = selectedAd.img_url
          ? await AdsApi.updateImage(selectedAd.img_url, imageFile)
          : await AdsApi.uploadImage(imageFile);
        updateData.img_url = img_url;
      }
      await AdsApi.updateAd(selectedAd.id, updateData);
      await fetchAds();
      closeModal(); // Close modal after update
    } catch (error) {
      console.error("Error updating ad:", error.message);
    }
  };

  const handleDeleteAd = async (id, img_url) => {
    try {
      await AdsApi.deleteAd(id);
      await AdsApi.deleteImage(img_url);
      await fetchAds();
    } catch (error) {
      console.error("Error deleting ad:", error.message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Ads Management</h2>
      {loading ? (
        <p className="text-gray-500">Loading ads...</p>
      ) : (
        <ul className="mb-6">
          {ads.map((ad) => (
            <li
              key={ad.id}
              className="flex items-center justify-between bg-gray-100 p-4 rounded-lg mb-2 shadow-sm"
            >
              <div>
                <p>
                  <span className="font-semibold">ID:</span> {ad.id}
                </p>
                <p>
                  <span className="font-semibold">Order:</span> {ad.order}
                </p>
                <p>
                  <span className="font-semibold">Title:</span> {ad.title}
                </p>
                <p>
                  <span className="font-semibold">Type:</span> {ad.type}{" "}
                  {/* Display the ad type */}
                </p>
                {ad.img_url && (
                  <img
                    src={ad.img_url}
                    alt="Ad Preview"
                    className="mt-2 w-32 h-32 object-cover rounded-lg"
                  />
                )}
              </div>
              <div>
                <button
                  onClick={() => openModal(ad)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteAd(ad.id, ad.img_url)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => openModal()}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        Add New Ad
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">
              {selectedAd ? "Update Ad" : "Add New Ad"}
            </h3>
            <input
              type="text"
              name="order"
              placeholder="Order"
              value={selectedAd ? selectedAd.order : newAd.order}
              onChange={(e) =>
                selectedAd
                  ? setSelectedAd({ ...selectedAd, order: e.target.value })
                  : handleInputChange(e)
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={selectedAd ? selectedAd.title : newAd.title}
              onChange={(e) =>
                selectedAd
                  ? setSelectedAd({ ...selectedAd, title: e.target.value })
                  : handleInputChange(e)
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
            />

            {/* Dropdown for Ad Type */}
            <select
              name="type"
              value={selectedAd ? selectedAd.type : newAd.type}
              onChange={(e) =>
                selectedAd
                  ? setSelectedAd({ ...selectedAd, type: e.target.value })
                  : handleInputChange(e)
              }
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            >
              <option value="main">Main</option>
              <option value="secondary">Secondary</option>
              <option value="private">Private</option>
            </select>

            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="mt-2 w-32 h-32 object-cover rounded-lg"
              />
            )}

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 mr-2"
              >
                Cancel
              </button>
              <button
                onClick={selectedAd ? handleUpdateAd : handleCreateAd}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                {selectedAd ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdsManagement;
