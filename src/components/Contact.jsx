// components/Contact.jsx

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          rows="5"
          placeholder="Enter Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>

        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;