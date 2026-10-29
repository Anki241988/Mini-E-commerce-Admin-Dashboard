function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        About ShopVibe
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          Project Description
        </h2>

        <p className="text-gray-600">
          ShopVibe is an e-commerce dashboard built using
          React, JavaScript,CSS and Tailwind CSS.
          The application allows users to browse products,
          view product details, and manage products.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Meet the Team
        </h2>

        <h3 className="text-xl font-medium mb-3">
          Team Member: Ankit & Andre
        </h3>

        <a
          href="https://github.com/Anki241988/Mini-E-commerce-Admin-Dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg inline-block"
        >
          <span>GitHub Profile</span>
        </a>
      </div>

    </div>
  );
}

export default AboutPage;