const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600">Staycation.</h2>
          <p className="text-gray-500 mt-2">
            We kaboom your beauty holiday instantly and memorable.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800">
              For Beginners
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-500">
                  New Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Start Booking a Room
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Use Payments
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800">Explore Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="text-gray-500">
                  Our Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Connect Us</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="mailto:support@staycation.id"
                  className="text-gray-500"
                >
                  support@staycation.id
                </a>
              </li>
              <li>
                <a href="tel:02122081996" className="text-gray-500">
                  021 - 2208 - 1996
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500">
                  Staycation, Kemang, Jakarta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p className="text-gray-500">
          Copyright 2019 • All rights reserved • Staycation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
