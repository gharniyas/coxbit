import CloudinaryUploader from "../../components/CloudinaryUploader";

export const metadata = {
  title: "Cloudinary Uploads | COXBIT",
};

export default function CloudinaryUploadPage() {
  return (
    <main className="min-h-screen bg-amber-100/60">
      <CloudinaryUploader />
    </main>
  );
}
