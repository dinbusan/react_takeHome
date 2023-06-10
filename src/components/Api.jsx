import axios from "axios";

axios.defaults.headers.common["token"] = "pj11daaQRz7zUIH56B9Z";

export const createPost = async (data, selectedImage) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category_id", data.category_id);
    formData.append("content", data.content);
    formData.append("image", selectedImage, selectedImage.name);

    const response = await axios.post(
      "https://frontend-case-api.sbdev.nl/api/posts",
      formData
    );

    if (response.status === 201) {
      console.log("Post created successfully!");
    } else {
      console.log("Failed to create post.");
    }

    return response;
  } catch (error) {
    console.log("An error occurred:", error);
    throw error;
  }
};


