import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    company: "", // honeypot
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startTime] = useState(Date.now());

  const validate = () => {
    const newErrors = {};

    if (!formData.from_name.trim()) {
      newErrors.from_name = "Le nom est obligatoire.";
    }

    if (!formData.from_email.trim()) {
      newErrors.from_email = "L’email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      newErrors.from_email = "Format d’email invalide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message ne peut pas être vide.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    // Anti-spam
    if (formData.company) return;
    if (Date.now() - startTime < 3000) return;

    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess(true);
        setFormData({
          from_name: "",
          from_email: "",
          message: "",
          company: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>

        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Un projet, une opportunité ou une question ?  
          N’hésitez pas à me contacter.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Infos */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <p className="mb-6">
              <strong>📧 Email</strong><br />
              <a href="mailto:kardalm132@gmail.com" className="text-blue-600">
                kardalm132@gmail.com
              </a>
            </p>

            <p>
              <strong>🔗 Réseaux</strong><br />
              <a
                href="https://github.com/medkaad"
                target="_blank"
                className="text-blue-600 mr-4"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-kardal-7748021a9/"
                target="_blank"
                className="text-blue-600"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="hidden"
              tabIndex="-1"
            />

            {/* Nom */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Nom</label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:ring-2 ${
                  errors.from_name
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-600"
                }`}
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.from_name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:ring-2 ${
                  errors.from_email
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-600"
                }`}
              />
              {errors.from_email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.from_email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border rounded px-3 py-2 focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-blue-600"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 rounded text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
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
