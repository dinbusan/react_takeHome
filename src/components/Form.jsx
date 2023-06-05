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
    <div className="bg-white">
        <h1 className="text-2xl font-semibold tracking-wide">Plaats een blog bericht</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="">
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
        />
        <p>{errors.Name?.message}</p>
        <input
          {...register("Categorie", { required: "Categorie is required" })}
          type="dropdown"
          placeholder="Geen categorie"
        />
        <p>{errors.Categorie?.message}</p>
        <input
          {...register("Image", { required: "Image is required" })}
          type="dropdown"
        />
        <p>{errors.Image?.message}</p>
        <input
          {...register("Bericht", { required: "Blog is required" })}
          type="text"
          placeholder="Geen titel"
        />
        <p>{errors.Bericht?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
