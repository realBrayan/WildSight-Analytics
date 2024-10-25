import { useState, useEffect } from "react";

function UploadingComponent() {
  const [loadingMessage, setLoadingMessage] = useState(
    "Uplaoading image to api..."
  );

  useEffect(() => {
    const messages = [
      "Uploading image to api...",
      "Running image through model",
      "Invasive species confirmed✅",
    ];
    let index = 0;
    let runCount = 0;

    if (runCount >= messages.length) return;

    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingMessage(messages[index]);
      runCount++;

      // to stop once all messages have been displayed - so only runs once
      if (runCount >= messages.length - 1) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="text-gray-700 text-lg">
      {loadingMessage}
      <br />
      {loadingMessage === "Invasive species confirmed✅"
        ? "Added to map✅"
        : ""}{" "}
    </div>
  );
}

export default UploadingComponent;
