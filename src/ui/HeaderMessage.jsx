function HeaderMessage({ header, description }) {
  return (
    <div className="py-4">
      <h1 className="text-4xl font-bold">{header}</h1>
      <p className="text-lg p-1">{description}</p>
    </div>
  );
}

export default HeaderMessage;
