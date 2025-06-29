import { useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out. I'll contact you soon",
      confirmButtonColor: "#06b6d4",
    });

    setFormData({ phone: "", email: "", message: "" });
  };

  const handleWhatsAppClick = () => {
    Swal.fire({
      title: "Open WhatsApp?",
      text: "Do you want to continue to WhatsApp chat?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, open WhatsApp",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#f87171",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open("https://wa.me/8801302010102", "_blank");
      }
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white py-16 px-6 md:px-20"
    >
      <motion.h2
        className="text-3xl font-bold text-cyan-400 mb-12 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Main box */}
      <div className="bg-[#1e293b] rounded-lg shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row p-8 gap-10">
        {/* Left side: Contact info */}
        <motion.div
          className="flex-1 flex flex-col justify-center text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-cyan-300">
            Feel free to reach out for any project inquiries or just to say
            hello!
          </p>

          <div className="space-y-4 text-cyan-300">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-cyan-400" />
              <a href="mailto:alaminhossen@email.com" className="hover:underline">
                alaminhossen@email.com
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaPhone className="text-cyan-400" />
              <a href="tel:01882412260" className="hover:underline">
                01882412260
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaWhatsapp className="text-green-500" />
              <span
                onClick={handleWhatsAppClick}
                className="hover:underline cursor-pointer"
              >
                +880 1302-010102 (WhatsApp)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right side: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex-1 space-y-5"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            pattern="^01[3-9]\d{8}$"
            title="Please enter a valid  phone number "
            className="w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-cyan-400 outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-cyan-400 outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Description"
            required
            className="w-full p-3 rounded-md bg-[#0f172a] text-white border border-gray-600 focus:border-cyan-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-cyan-400 text-black font-semibold py-3 rounded-md hover:bg-cyan-500 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
