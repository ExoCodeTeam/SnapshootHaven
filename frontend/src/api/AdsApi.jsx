// AdsApi.js
import { split } from "postcss/lib/list";
import { supabase } from "../config/supabaseClient"; // Import the Supabase client

// Function to fetch all ads
const fetchAds = async () => {
  const { data, error } = await supabase.from("ad").select("*");
  if (error) {
    throw new Error("Error fetching ads: " + error.message);
  }
  return data;
};

// Function to create a new ad
const createAd = async (newAd, img_url) => {
  if (img_url != "") newAd = { ...newAd, img_url };
  const { error } = await supabase.from("ad").insert([newAd]);

  if (error) {
    throw new Error("Error creating ad: " + error.message);
  }
};

// Function to update an existing ad
const updateAd = async (id, updatedAd) => {
  const { error } = await supabase.from("ad").update(updatedAd).eq("id", id);
  if (error) {
    throw new Error("Error updating ad: " + error.message);
  }
};

// Function to delete an ad
const deleteAd = async (id) => {
  const { error } = await supabase.from("ad").delete().eq("id", id);
  if (error) {
    throw new Error("Error deleting ad: " + error.message);
  }
};

async function uploadImage(file) {
  const fileName = `${Date.now()}_${file.name}`;
  const folderName = "ads";
  const path = `${folderName}/${fileName}`;
  const { error } = await supabase.storage.from("imgs").upload(path, file);

  if (error) {
    alert("Error uploading image: " + error.message);
    return null;
  }

  const { data } = supabase.storage.from("imgs").getPublicUrl(path);

  return data.publicUrl;
}

// Function to update an ad with image filename
//
async function updateImage(fullPath, file) {
  const relativePath = fullPath.split("/storage/v1/object/public/imgs/")[1];

  if (!relativePath) {
    alert("Invalid image path");
    return null;
  }

  const { error } = await supabase.storage
    .from("imgs")
    .update(relativePath, file);

  if (error) {
    alert("Error uploading image: " + error.message);
    return null;
  }

  // Return the image URL with a timestamp to force a refresh
  const updatedUrl = `${fullPath}?timestamp=${new Date().getTime()}`;
  return updatedUrl;
}

async function deleteImage(img_url) {
  const { error } = await supabase.storage
    .from("imgs")
    .remove([img_url.split("/storage/v1/object/public/imgs/")[1]]);

  if (error) alert("Error Delete image: " + error.message);
  return null;
}

// Export all functions in a single object
const AdsApi = {
  fetchAds,
  createAd,
  updateAd,
  deleteAd,
  uploadImage,
  updateImage,
  deleteImage,
};

export default AdsApi;
