import React from "react";

export default function ImageUploader({ imageList = [], onUpload, onPick }) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handlePick = (id, url) => {
    setSelectedImage(url);
    onPick(id);
  };
  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("files", file);

    const randomString = generateRandomString();

    const response = await fetch(
      `https://humanaigc-outfitanyone.hf.space/--replicas/o90fr/upload?upload_id=${randomString}`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    setSelectedImage(URL.createObjectURL(file));
    const data = await response.json();
    onUpload({
      orig_name: file.name,
      path: data[0],
    });
    // console.log("upload", data);
  };

  const handleClear = () => {
    setSelectedImage(null);
    onUpload(null);
  };
  return (
    <div className="flex flex-col h-full self-stretch">
      {/* Image preview section */}
      {selectedImage ? (
        <div className="mb-4 relative flex h-full self-stretch items-center justify-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-contain"
          />

          <button
            className="absolute top-0 right-0 m-2 bg-red-500 text-white px-2 py-1 text-sm rounded"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      ) : (
        <button
          className={`w-full flex-1 flex justify-center items-center bg-gray-200 border border-dashed border-gray-400 rounded-lg ${
            !onUpload ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => fileInputRef.current?.click()}
          disabled={!onUpload}
        >
          <span>{!onUpload ? "Pick Image" : "Upload Image"}</span>
        </button>
      )}

      {/* Hidden file input for triggering the file selection */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(event) => {
          if (event.target.files && event.target.files[0]) {
            // setSelectedImage(event.target.files[0]);
            handleUpload(event.target.files[0]);
          }
        }}
      />

      {/* Image selection strip */}
      <div className="flex overflow-x-auto py-2">
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index}`}
            className="h-20 w-auto mx-2 cursor-pointer"
            onClick={() => handlePick(image.id, image.url)}
          />
        ))}
      </div>
    </div>
  );
}
const generateRandomString = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
