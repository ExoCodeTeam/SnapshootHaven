import { useEffect, useState } from "react";
import AdsApi from "../../api/AdsApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function AdsManagment() {
  const [uploading, setUploading] = useState(false);
  const [secondaryAds, setSecondaryAds] = useState([]);
  const [typeNewAd, setTypeNewAd] = useState(null);
  const [mainAds, setMainAds] = useState([]);
  const [adToDelete, setAdToDelete] = useState(null); // State to store the ad to delete
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for showing the delete modal

  // State for image upload
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImagePreview, setShowImagePreview] = useState(false); // State for showing image preview modal
  const [imageFile, setImageFile] = useState(null);

  const fetchAds = async () => {
    try {
      const response = await AdsApi.fetchAds();
      setSecondaryAds(
        response
          .filter((ad) => ad.type === "secondary")
          .sort((a, b) => a.order - b.order)
      );
      setMainAds(
        response
          .filter((ad) => ad.type === "main")
          .sort((a, b) => a.order - b.order)
      );
    } catch (error) {
      console.error("Error fetching ads:", error.message);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const handleDeleteAd = async () => {
    if (!adToDelete) return;
    try {
      await AdsApi.deleteAd(adToDelete.id);
      await AdsApi.deleteImage(adToDelete.img_url);
      await fetchAds();
      setShowDeleteModal(false);
      setAdToDelete(null);
    } catch (error) {
      console.error("Error deleting ad:", error.message);
    }
  };

  const handleMoveAdOrder = async (currentAd, type) => {
    try {
      if (currentAd.order > 1) {
        const updatedCurrentAd = { order: currentAd.order - 1 };
        await AdsApi.updateAd(currentAd.id, updatedCurrentAd);
        const ads = type === "main" ? mainAds : secondaryAds;
        const previousAd = ads.find(
          (adItem) => adItem.order === currentAd.order - 1
        );
        if (previousAd) {
          const updatedPreviousAd = { order: previousAd.order + 1 };
          await AdsApi.updateAd(previousAd.id, updatedPreviousAd);
        }
        await fetchAds();
      }
    } catch (error) {
      console.error("Error updating ad order:", error.message);
    }
  };

  const openDeleteModal = (ad) => {
    setAdToDelete(ad);
    setShowDeleteModal(true);
  };

  // Handle image selection
  const handleImageUpload = (event, type) => {
    setTypeNewAd(type);
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      setSelectedImage(URL.createObjectURL(file));
      setShowImagePreview(true); // Show the preview dialog
    }
  };

  // Confirm image upload
  const confirmImageUpload = async () => {
    setUploading(true); // Set loading state to true
    try {
      let img_url = "";
      if (imageFile) {
        img_url = await AdsApi.uploadImage(imageFile);
      }
      let newOrder = 1; // Default order if no ads exist

      // Determine the maximum order for the specified ad type
      const ads = typeNewAd === "main" ? mainAds : secondaryAds;
      if (ads.length > 0) {
        newOrder = Math.max(...ads.map((ad) => ad.order)) + 1;
      }

      // Create the new ad with the determined order
      await AdsApi.createAd({ order: newOrder, type: typeNewAd }, img_url);
      await fetchAds(); // Fetch the updated ads list
      setShowImagePreview(false); // Close the preview modal
      setImageFile(null);
      setTypeNewAd(null);
    } catch (error) {
      console.error("Error uploading image:", error.message);
    } finally {
      setUploading(false); // Reset loading state after completion
    }
  };

  return (
    <>
      <section className="py-[70px]">
        <h2 className="text-[22px]">Ads Management</h2>
        <div className="ps-5 max-w-[1213px] overflow-hidden">
          <div>
            <h3 className="capitalize text-[17px] py-3">main ads</h3>
            <div>
              <Swiper modules={[Navigation, Scrollbar]} slidesPerView={4}>
                {mainAds
                  .filter((ad) => ad.type === "main")
                  .map((ad, ind) => (
                    <SwiperSlide key={ind}>
                      <div className="relative w-fit group">
                        <img
                          src={ad.img_url}
                          alt="Ad Preview"
                          className="w-[250px] h-[150px] object-cover rounded-lg"
                        />
                        <div className="absolute top-2 right-1 flex gap-1 items-center">
                          <button
                            onClick={() => handleMoveAdOrder(ad)}
                            className="bg-gray-100 text-gray-700 w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <FontAwesomeIcon icon={faChevronLeft} />
                          </button>

                          <button
                            onClick={() => openDeleteModal(ad)}
                            className="text-white bg-red-500 w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}

                {/* Button to trigger image upload */}
                <SwiperSlide>
                  <label className="text-[#8e8c8c] text-5xl w-[250px] h-[150px] object-cover rounded-lg bg-[#E0E0E0] flex items-center justify-center relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(ev) => handleImageUpload(ev, "main")}
                    />
                    <FontAwesomeIcon icon={faPlus} />
                  </label>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
            <h3 className="capitalize text-[17px] py-3">secondary ads</h3>
            <div>
              <Swiper modules={[Navigation, Scrollbar]} slidesPerView={4}>
                {secondaryAds.map((ad, ind) => (
                  <SwiperSlide key={ind}>
                    <div className="relative w-fit group">
                      <img
                        src={ad.img_url}
                        alt="Ad Preview"
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                      />
                      <div className="absolute top-2 right-1 flex gap-1 items-center">
                        <button
                          onClick={() => handleMoveAdOrder(ad)}
                          className="bg-gray-100 text-gray-700 w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <button
                          onClick={() => openDeleteModal(ad)}
                          className="text-white bg-red-500 w-9 h-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {/* Button to trigger image upload */}
                <SwiperSlide>
                  <label className="text-[#8e8c8c] text-5xl w-[250px] h-[150px] object-cover rounded-lg bg-[#E0E0E0] flex items-center justify-center relative cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(ev) => handleImageUpload(ev, "secondary")}
                    />
                    <FontAwesomeIcon icon={faPlus} />
                  </label>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this ad?</p>
            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAd}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {/* Image Preview Modal */}
      {showImagePreview && (
        <div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">Confirm Image Upload</h2>
            <div className="flex justify-center mb-4">
              <img
                src={selectedImage}
                alt="Image Preview"
                className="w-[360px] h-[260px] object-contain rounded-lg"
              />
            </div>
            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded-lg">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-2">Uploading...</p>
                  <div className="w-16 h-16 border-4 border-t-4 border-gray-300 border-t-[#f6c90e] rounded-full animate-spin"></div>
                </div>
              </div>
            )}
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowImagePreview(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  confirmImageUpload();
                }}
                className={`px-4 py-2 bg-[#f6c90e] text-white rounded-md ${
                  uploading ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
