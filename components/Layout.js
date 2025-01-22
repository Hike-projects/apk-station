// components/Layout.js
export default function Layout({ children }) {
    return (
      <div>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl">APK Station</h1>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto">
            <p className="text-center">&copy; {new Date().getFullYear()} APK Station. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
  