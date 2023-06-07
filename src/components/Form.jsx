import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.image = selectedImage;
    console.log(data);
    reset();
    
    try{
      const formData = new FormData();
      formData.append("title", data.name);
      formData.append("category_id", data.category_id);
      formData.append("content", data.content);
      formData.append("image", data.image, data.image.name);

      const response = await fetch("https://frontend-case-api.sbdev.nl/api/posts", {
        method: "POST",
        body: formData,
        headers: {
          token: "pj11daaQRz7zUIH56B9Z",
        },
      });

      const responseData = await response.json();
      console.log(response.status, responseData);

      if (response.ok) {
        console.log("Post created successfully!");
      }else {
        console.log("Failed to create post.");
      }
      }catch (error) {
        console.log("An error occurred:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  }

  return (
    <div className="bg-white p-6">
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <div className="flex flex-col text-xs space-y-6 font-light tracking-wide">
          <h1 className="text-2xl font-semibold tracking-wide">
            Plaats een blog bericht
          </h1>
          <div>
            <label className="" htmlFor="berichtnaam">
              Berichtnaam
            </label>
            <input
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 1,
                  message: "Min length is 1",
                },
              })}
              type="text"
              placeholder="Geen titel"
              id="berichtnaam"
              className="bg-neutral-50 italic"
            />
            <p>{errors.title?.message}</p>
          </div>
          <div>
            <label className="" htmlFor="categorie">
              Categorie
            </label>
            <select
              {...register("category_id", {
                required: "Categorie is required",
              })}
              id="categorie"
              className="bg-neutral-50 italic text-gray-400 cursor-pointer"
            >
              <option value={0}>Geen categorie</option>
              <option value={1}>Option 1</option>
              <option value={2}>Option 2</option>
              <option value={3}>Option 3</option>
            </select>
            <p>{errors.category_id?.message}</p>
          </div>
          <div>
            <label className="" htmlFor="image">
              Header afbeelding
            </label>
            <input
              {...register("image", { required: "Image is required" })}
              type="file"
              id="image"
              className="bg-neutral-50"
              onChange={handleImageChange}
            />
            <p>{errors.image?.message}</p>
          </div>
          <div>
            <label className="" htmlFor="bericht">
              Bericht
            </label>

            <textarea
              {...register("content", { required: "Blog is required" })}
              placeholder=""
              id="bericht"
              className="bg-neutral-50 resize-vertical"
              style={{ height: "186px" }}
            ></textarea>

            <p>{errors.content?.message}</p>
          </div>
          <input
            className="bg-orange hover:bg-hoverOrange cursor-pointer active:scale-95 rounded-full text-white font-semibold text-xs w-52 justify-center mx-auto"
            type="submit"
            value="Bericht aanmaken"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
