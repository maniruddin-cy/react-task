import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };
  const password = watch("password");

  const [data, setData] = useState("");
  // const onchange = (handle) => {
  //   alert("Your form is submitted");
  // };
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <div className="form">
        <label>Name:</label>
        <input
          type="text"
          {...register("name", { required: "Name is Required" })}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email format",
            },
          })}
        />
        <br />
        <br />
        <label>Age:</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is Required",
            min: { value: 18, message: "You must be at least 18 years old" },
          })}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        <br />
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
      </div>
      <p>{data}</p>
      <button type="submit" onClick={onchange}>
        Submit
      </button>
    </form>
  );  
}

export default Form;
