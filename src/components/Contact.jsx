import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("Erreur EmailJS:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Un projet, une opportunité ou une question ?
          N’hésitez pas à me contacter.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="mb-6">
                <span className="font-semibold">📧 Email</span><br />
                <a
                  href="mailto:kardalm132@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  kardalm132@gmail.com
                </a>
              </p>

              <p>
                <span className="font-semibold">🔗 Réseaux</span><br />
                <a
                  href="https://github.com/medkaad"
                  target="_blank"
                  className="text-blue-600 hover:underline mr-4"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammed-kardal-7748021a9/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
              <label className="block mb-1 font-medium">Nom</label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Envoyer le message
            </button>

            {success && (
              <p className="text-green-600 mt-4 text-center font-medium">
                Message envoyé avec succès ✅
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
