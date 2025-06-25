import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const SimpleForm = () => {
  // [state, setterFunc] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Gender is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const onGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.checked ? e.target.name : "",
    });
    setErrors({
      ...errors,
      gender: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      toast("Form Submitted Successfully");
    }
  };

  useEffect(() => {
    setFormData({
      ...formData,
      gender: "female",
    });
  }, []);

  const resetFunc = () => {
    setFormData({
      name: "",
      email: "",
      gender: "",
    });
  };

  return (
    <form className="name-email-form" onSubmit={handleSubmit} noValidate>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div className="">
        <label>Gender</label>
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="checkbox"
            name="male"
            id="male"
            checked={formData.gender === "male"}
            onChange={onGenderChange}
          />{" "}
          Male
          <input
            type="checkbox"
            name="female"
            id="female"
            checked={formData.gender === "female"}
            onChange={onGenderChange}
          />{" "}
          Female
        </div>
        {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
      </div>
      <div className="gap-10">
        <button type="submit">Submit</button>
        <button type="reset" onClick={resetFunc}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default SimpleForm;
