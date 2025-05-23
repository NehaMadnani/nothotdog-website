import React, { useState } from "react";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-UpizvnjXgebn82TbY2b7zljiTtbjWOunknqO-QmqqeXuOQ/formResponse";

    const formParams = new URLSearchParams({
      "entry.922148394": formData.name,
      "entry.1042834200": formData.email,
      "entry.911103551": formData.comment,
    });

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    })
      .then(() => alert("Your response has been submitted successfully!"))
      .catch(() => alert("An error occurred. Please try again later."));

    setShowModal(false);
  };

  return (
<footer className="bg-[#0e0e0e] text-gray-300 py-8 border-t border-gray-800">
  <div className="container mx-auto px-4 text-center">
    <h3 className="text-xl font-bold mb-2 text-white">Get in Touch</h3>
    <button
      onClick={() => setShowModal(true)}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-2 
                 rounded-full hover:opacity-90 transition-all shadow-md text-white font-semibold"
    >
      Contact the Founders
    </button>
    {/* Social links, etc. */}
  </div>
</footer>
  );
};

export default Footer;
