import HeaderMessage from "../ui/HeaderMessage";
import MiniMap from "../features/MapFeatures/MiniMap";

function SpeciesMap() {
  return (
    <>
      <HeaderMessage header={"Map"} description={"Track invasive species"} />
      <MiniMap />
    </>
  );
}

export default SpeciesMap;
