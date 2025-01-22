// components/Layout.js
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">APK Station</h1>
          <nav>
            <Link href="/">
              <a className="text-gray-300 hover:text-white mx-2">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-300 hover:text-white mx-2">About</a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} APK Station. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
