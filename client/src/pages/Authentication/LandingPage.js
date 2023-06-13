import React from 'react';

function UserHomepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-white text-4xl font-bold">Gifts R Us</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Gifts R Us!</h2>
        <p className="text-gray-800 mb-8">Explore our wide range of gifts for all occasions.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Birthday Gifts</h3>
            <p>Find the perfect gift to make someone's birthday extra special.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Anniversary Gifts</h3>
            <p>Celebrate love and milestones with our collection of anniversary gifts.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Holiday Gifts</h3>
            <p>Discover unique gifts to spread joy during the holiday season.</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600">© 2023 Gifts R Us. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default UserHomepage;
