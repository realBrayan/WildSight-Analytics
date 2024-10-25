import { useState } from "react";
import HeaderMessage from "../ui/HeaderMessage";
import UploadingComponent from "../ui/UploadingComponent";

function UploadImage() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mt-10 mb-[10rem]">
        {/* <HeaderMessage
          header={"Upload Image"}
          description={"Report invasive species"}
          /> */}
        <div>
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Upload Image
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Report invasive species
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
          <div className="relative group w-full h-80 flex justify-center items-center">
            <div className="absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>
            <input
              accept=".jpg, .jpeg .png, .svg, .webp"
              className="relative z-10 opacity-0 h-full w-full cursor-pointer"
              type="file"
              name="bgfile"
              id="bgfile"
              onChange={handleFileChange}
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
              <div className="space-y-6 text-center">
                <img
                  src={
                    "https://cdn3.iconfinder.com/data/icons/photo-tools/65/upload-1024.png"
                    // "https://th.bing.com/th/id/OIP.NOPu8s1ThZRXw0FTylDuAgHaHa?w=170&h=180&c=7&r=0&o=5&pid=1.7"
                  }
                  className="sm:w-40 w-32 m-auto  rounded-lg"
                  alt="uploaded"
                />

                <p className="text-gray-700 text-lg">
                  Drag and drop a file or{" "}
                  <label
                    htmlFor="dragOver"
                    title="Upload a file"
                    className="relative z-20 cursor-pointer text-blue-500 hover:text-blue-600 block"
                  >
                    Upload a file
                  </label>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row py-8 items-center">
            {imageUrl && (
              <img
                src={imageUrl}
                className="sm:w-40 w-32 m-auto"
                alt="uploaded"
              />
            )}
            {imageUrl && <UploadingComponent />}
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadImage;
