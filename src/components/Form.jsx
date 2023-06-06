import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-white p-6">
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
        action=""
      >
        <div className="flex flex-col text-xs font-light tracking-wide">
          <h1 className="text-2xl font-semibold tracking-wide pb-6">
            Plaats een blog bericht
          </h1>
          <label className="" htmlFor="berichtnaam">
            Berichtnaam
          </label>
          <input
            {...register("Name", {
              required: "Name is required",
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
          <p>{errors.Name?.message}</p>
          <label className="" htmlFor="categorie">
            Categorie
          </label>
          <select
            {...register("Categorie", { required: "Categorie is required" })}
            id="categorie"
            className="bg-neutral-50 italic text-gray-400 cursor-pointer"
          >
            <option value="">Geen categorie</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <p>{errors.Categorie?.message}</p>
          <label className="" htmlFor="image">
            Header afbeelding
          </label>
          <input
            {...register("Image", { required: "Image is required" })}
            type="file"
            id="image"
            className="bg-neutral-50"
          />
          <p>{errors.Image?.message}</p>
          <label className="" htmlFor="bericht">
            Bericht
          </label>

          <textarea
            {...register("Bericht", { required: "Blog is required" })}
            placeholder=""
            id="bericht"
            className="bg-neutral-50 resize-vertical"
            style={{ height: "186px" }}
          ></textarea>

          <p>{errors.Bericht?.message}</p>
          <input
            className="form--btn cursor-pointer active:scale-95 rounded-full text-white text-sm text-semibold w-52 mx-auto"
            type="submit"
            value="Bericht aanmaken"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
