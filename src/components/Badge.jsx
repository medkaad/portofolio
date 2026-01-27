function Badge({ text, type = "default" }) {
  const styles = {
    backend: "bg-blue-100 text-blue-700",
    frontend: "bg-green-100 text-green-700",
    database: "bg-purple-100 text-purple-700",
    tools: "bg-orange-100 text-orange-700",
    default: "bg-gray-200 text-gray-700",
  };

  return (
    <span
      className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${styles[type]}`}
    >
      {text}
    </span>
  );
}

export default Badge;
