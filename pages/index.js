// pages/index.js
import Head from 'next/head';
import Layout from '../components/Layout';

const apps = [
  {
    name: "WhatsApp",
    version: "2.21.12.21",
    description: "A popular messaging app lets people stay in touch easily and for free.",
    imageUrl: "/images/whatsapp.png",
    downloadUrl: "https://example.com/download/whatsapp.apk",
  },
  {
    name: "TikTok",
    version: "19.2.3",
    description: "Create and share your short-form videos with the world.",
    imageUrl: "/images/tiktok.png",
    downloadUrl: "https://example.com/download/tiktok.apk",
  },
  {
    name: "Instagram",
    version: "150.0.0.33.120",
    description: "Connect with friends, share what you’re up to, or see what’s new from others all over the world.",
    imageUrl: "/images/instagram.png",
    downloadUrl: "https://example.com/download/instagram.apk",
  },
];

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>APK Station</title>
        <meta name="description" content="APK Station - Discover the best APKs" />
      </Head>

      <section className="text-center py-10 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Discover the Best APKs</h2>
        <p className="text-xl text-gray-700 mb-4">
          Find and download the latest and greatest APKs right here at APK Station.
        </p>
        <input 
          type="text" 
          className="w-full max-w-md mx-auto px-4 py-2 rounded shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Search for APKs..." 
        />
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={app.imageUrl} alt={app.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                  <p className="text-gray-600 mb-2">{app.description}</p>
                  <p className="text-sm text-gray-500">Version: {app.version}</p>
                  <div className="mt-4">
                    <a href={app.downloadUrl} className="text-blue-500 hover:underline">Download</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
