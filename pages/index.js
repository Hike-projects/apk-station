// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

const apks = [
  {
    name: "WhatsApp",
    version: "2.21.12.21",
    description: "A popular messaging app lets people stay in touch easily and for free.",
    image_url: "/assets/images/whatsapp.png",
    download_url: "https://github.com/YourUsername/YourRepo/releases/download/v1.0/whatsapp.apk",
  },
  // Add more APK data here...
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>APK Station</title>
      </Head>

      {/* Image Banner Carousel */}
      <div id="top-trending-carousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[
            { src: "/assets/images/trending-1.jpg", name: "Free Fire MAX", description: "Experience the ultimate battle royale on mobile!" },
            { src: "/assets/images/trending-2.jpg", name: "WhatsApp", description: "Stay connected with friends and family, anywhere in the world." },
            { src: "/assets/images/trending-3.jpg", name: "TikTok", description: "Create and share your short-form videos with the world." }
          ].map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img src={item.src} className="d-block w-full h-64 object-cover" alt={item.name} />
              <div className="carousel-caption d-none d-md-block bg-black bg-opacity-50 p-2 rounded">
                <h5 className="text-xl">{item.name}</h5>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#top-trending-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#top-trending-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="container my-4">
        <input
          type="text"
          id="search-bar"
          className="form-control"
          placeholder="Search for APKs..."
        />
      </div>

      {/* Search Results */}
      <div id="search-results" className="row mb-4"></div>

      {/* Default List (Hidden when search is active) */}
      <div id="default-apk-list" className="row mb-4">
        {apks.map((apk, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-lg">
              <img src={apk.image_url} className="card-img-top" alt={apk.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{apk.name}</h5>
                <p className="card-text">{apk.description}</p>
                <p><strong>Version:</strong> {apk.version}</p>
                <a href={`/apks/${apk.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-secondary btn-sm">Details</a>
                <a href={apk.download_url} className="btn btn-primary btn-sm">Download</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
