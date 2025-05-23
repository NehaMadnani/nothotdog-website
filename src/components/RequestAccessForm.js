import React, { useState } from "react";

const RequestAccessForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-Ap9oxoIjCMRJE3kKHa4RCmAWeJeVqQOG8-AQkYKFSc3egg/formResponse";

    const formParams = new URLSearchParams({
      "entry.1433578333": email,
    });

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formParams.toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => {
          onClose();
        }, 2000);
      })
      .catch(() => alert("An error occurred. Please try again."));
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-6">Request Early Access</h2>
      {isSubmitted ? (
        <div className="text-green-600 font-bold">
          Thank you! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 border rounded-lg 
                       focus:ring-2 focus:ring-blue-650 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg 
                       hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RequestAccessForm;
