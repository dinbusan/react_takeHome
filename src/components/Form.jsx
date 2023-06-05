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
    <div className="bg-green-400 w-3/4 mx-auto">
      <div className="bg-white w-[451px] h-[659px]">
        <form
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          <div className="flex flex-col w-96 mx-auto bg-neutral-50">
            <h1 className="text-2xl font-semibold tracking-wide">
              Plaats een blog bericht
            </h1>
            <label className="text-xs" htmlFor="berichtnaam">
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
            />
            <p>{errors.Name?.message}</p>
            <label className="text-xs" htmlFor="categorie">
              Categorie
            </label>
            <input
              {...register("Categorie", { required: "Categorie is required" })}
              type="dropdown"
              placeholder="Geen categorie"
              id="categorie"
            />
            <p>{errors.Categorie?.message}</p>
            <label className="text-xs" htmlFor="image">
              Header afbeeling
            </label>

            <input
              {...register("Image", { required: "Image is required" })}
              type="input"
              id="image"
            />
            <p>{errors.Image?.message}</p>
            <label className="text-xs" htmlFor="bericht">
              Bericht
            </label>

            <input
              {...register("Bericht", { required: "Blog is required" })}
              type="text"
              placeholder=""
              id="bericht"
            />
            <p>{errors.Bericht?.message}</p>
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
