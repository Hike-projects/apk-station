// pages/apks/[name].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const apks = [
  {
    name: "WhatsApp",
    version: "2.21.12.21",
    description: "A popular messaging app lets people stay in touch easily and for free.",
    image_url: "/assets/images/whatsapp.png",
    download_url: "https://github.com/YourUsername/YourRepo/releases/download/v1.0/whatsapp.apk",
  },
  // Add more APK data...
];

export default function ApkPage() {
  const router = useRouter();
  const { name } = router.query;
  const apk = apks.find(apk => apk.name.toLowerCase().replace(/\s+/g, '-') === name);

  return (
    <Layout>
      {apk ? (
        <>
          <h1 className="text-xl font-bold mb-4">{apk.name}</h1>
          <p><strong>Version:</strong> {apk.version}</p>
          <p>{apk.description}</p>
          <img src={apk.image_url} alt={apk.name} className="mb-4" />
          <a href={apk.download_url} className="btn btn-primary">Download {apk.name}</a>
        </>
      ) : (
        <p>APK Not Found</p>
      )}
    </Layout>
  );
}
