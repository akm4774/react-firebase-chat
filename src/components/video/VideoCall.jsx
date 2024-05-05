import React, { useEffect, useState } from "react";

const VideoCall = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    // Load the HTML content from index.html
    fetch("./index.html")
      .then((response) => response.text())
      .then((data) => {
        setHtmlContent(data);
        // Open the HTML content in a new window with the specified URL
        window.open("http://localhost:5000");
      })
      .catch((error) => {
        console.error("Error fetching HTML content:", error);
      });

    // Load the JavaScript file (app.js) dynamically
    const script = document.createElement("script");
    script.src = "./app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // Return null to avoid rendering anything in the component
};

export default VideoCall;
