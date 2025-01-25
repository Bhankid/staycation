function Header() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center p-4 border-b">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Stay</span>
          <span className="text-gray-900">cation.</span>
        </div>
        <nav className="space-x-4">
          <a href="#" className="text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-900">
            Browse by
          </a>
          <a href="#" className="text-gray-900">
            Stories
          </a>
          <a href="#" className="text-gray-900">
            Agents
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
