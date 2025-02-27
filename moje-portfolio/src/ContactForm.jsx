import React from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import "./styles/main.scss";

const ContactForm = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = texts[language].errorName;
    if (!formData.email) {
      errors.email = texts[language].errorNoEmail;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      //testovani spravneho formatu emailove adresy
      errors.email = texts[language].errorEmail;
    }
    if (!formData.message)
      errors.message = texts[language].errorMessage;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          //emailjs send function
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then((response) => {
          toast.success(texts[language].success);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error(texts[language].error);

          console.log("SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
          console.log("TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
          console.log("PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  const texts = {
    cz: {
      contactTitle: "Potřebujete posádku pro svůj další projekt? Napište mi!",
      name: "Jmeno",
      errorName: "Vyplňte prosím jméno",
      errorNoEmail: "Vyplňte prosím e-mailovou adresu",
      errorEmail: "Neplatná e-mailová adresa",
      errorMessage: "Vyplňte prosím zprávu pro příjemce",
      message: "Zpráva",
      success: "Zpráva odeslána.",
      error: "Odeslání selhalo. Prosím zkuste znovu později.",
      sending: "Posílám...",
      sent: "Poslat",
      
    },
    en: {
      contactTitle: "Do you need a crew for your next project? Drop me a message!",
      name: "Name",
      errorName: "Enter your name",
      errorNoEmail: "Enter your e-mail address",
      errorEmail: "Invalid e-mail address",
      errorMessage: "Please enter your message",
      message: "Message",
      success: "Message sent.",
      error: "Submission failed. Please try again later.",
      sending: "Sending...",
      sent: "Sent",
    },
  };

  return (
    <div id="contact">
      <Toaster />
      <h2>
        {/* Pojďme se spojit! */}
        <FontAwesomeIcon icon={faUserAstronaut} /> {texts[language].contactTitle}
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="name">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder={texts[language].name}
              onChange={handleChange}
              className="name-input"
            />
            {errors.name && (
              <p className="error-message">{errors.name}</p>
            )}
          </div>
          <div className="email">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="e-mail"
              onChange={handleChange}
              className="email-input"
            />
            {errors.email && (
              <p className="error-message">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="textarea">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder={texts[language].message}
            onChange={handleChange}
            className="textarea-box"
          />
          {errors.message && (
            <p className="error-message">{errors.message}</p>
          )}
        </div>
        <div className="submit-button">
        <button
          type="submit"
          className={`btn ${isSending ? "sending" : ""}`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? texts[language].sending : texts[language].sent}
            <FiSend />
          </div>
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;