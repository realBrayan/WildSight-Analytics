import HeaderMessage from "../ui/HeaderMessage";
import MiniMap from "../features/MapFeatures/MiniMap";

function SpeciesMap() {
  return (
    <>
      {/* <HeaderMessage header={"Map"} description={"Track invasive species"} /> */}
      <div className="flex items-center justify-center mt-24 mb-[6rem]">
        {/* <HeaderMessage
          header={"Upload Image"}
          description={"Report invasive species"}
          /> */}
        <div>
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Species Map
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Track invasive species
          </p>
        </div>
      </div>
      <MiniMap />
    </>
  );
}

export default SpeciesMap;
