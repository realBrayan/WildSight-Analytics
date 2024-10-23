function Logo({ w = 32 }) {
  return (
    <img
      src="https://img.logoipsum.com/243.svg"
      className={`overflow-hidden transition-all w-${w}`}
      alt="Logo"
    />
  );
}

export default Logo;
