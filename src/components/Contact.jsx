function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="mb-4">Tu peux me contacter ici :</p>

      <p className="mb-2">
        📧 <strong>Email :</strong> kardalm132@gmail.com
      </p>

      <p>
        🔗{" "}
        <a
          href="https://github.com/ton-github"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/ton-linkedin"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}

export default Contact;
