import HeaderMessage from "../ui/HeaderMessage";

function UploadImage() {
  return (
    <>
      <HeaderMessage
        header={"Upload Image"}
        description={"Report invasive species"}
      />
      <div>
        <div className="m-auto px-6 sm:px-0 sm:w-8/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
          <div className="relative group w-full h-64 flex justify-center items-center">
            <div className="absolute inset-0 w-full h-full rounded-xl bg-white bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:scale-110 transition duration-300"></div>
            <input
              accept=".jpg, .jpeg .png, .svg, .webp"
              className="relative z-10 opacity-0 h-full w-full cursor-pointer"
              type="file"
              name="bgfile"
              id="bgfile"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
              <div className="space-y-6 text-center">
                <img
                  src="../public/images/file.png"
                  className="sm:w-40 w-32 m-auto"
                  alt="illustration"
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
        </div>
      </div>
    </>
  );
}

export default UploadImage;
