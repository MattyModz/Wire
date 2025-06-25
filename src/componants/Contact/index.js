// import Submit from "./submit";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

export default function Contact() {
  const [setFormStatus] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: "",
    senderEmail: "",
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, senderEmail, contactNumber, message } = formValues;

    if (!fullName || !senderEmail || !contactNumber || !message) {
      toast.error("All fields must be filled before enquiring.");
      return;
    }

    const subject = encodeURIComponent(`New enquiry from ${fullName}`);
    const body = encodeURIComponent(
      `From: ${fullName}\nEmail: ${senderEmail}\nPhone: ${contactNumber}\n\n${message}`
    );

    const recipient = "mikewire@hotmail.com";
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setFormStatus(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="py-8">
      <motion.section
        className="w-full bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        <div className="relative px-4 container">
          <div className="relative items-center p-6 overflow-hidden shadow-2xl bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
            <div className="absolute top-0 right-0">
              <svg
                viewBox="0 0 487 487"
                className="object-cover w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  fill="#FFF"
                  fillRule="nonzero"
                  fillOpacity=".1"
                ></path>
              </svg>
            </div>
            <h1 className="text-white font-bold text-center lg:text-6xl text-5xl">
              Send us an email
            </h1>

            <section className="py-8">
              <form
                onSubmit={handleSubmit}
                className="grid max-w-3xl gap-4 mx-auto"
              >
                {/* Name */}
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Name"
                    value={formValues.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                  />
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <input
                    type="email"
                    name="senderEmail"
                    placeholder="Email"
                    value={formValues.senderEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                  />
                </div>

                {/* Contact Number */}
                <div className="sm:col-span-2">
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formValues.contactNumber}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <textarea
                    name="message"
                    placeholder="How can we help you"
                    value={formValues.message}
                    onChange={handleChange}
                    className="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="relative flex items-center justify-center sm:col-span-2 px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-md outline-none bg-blue-400 md:text-base"
                >
                  Submit
                </button>
              </form>
            </section>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

//  ) : (
//       <motion.h2
//         className="text-white text-5xl font-bold flex justify-center"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//           transition: { duration: 0.55 },
//         }}
//         viewport={{ once: true }}
//       >
//         <Submit />
//       </motion.h2>
//     )}
