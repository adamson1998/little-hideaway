import React, { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    // Open RushTrek Tours in a new tab automatically
    window.open("https://rushtrektours.com/", "_blank", "noopener,noreferrer");

    // When user returns to this tab, do something automatically
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Example: redirect to homepage or refresh silently
        window.location.href = "/"; // <-- opens your site home automatically
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null; // Nothing is displayed
};

export default Experience;
