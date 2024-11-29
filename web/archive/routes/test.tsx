import React, { useState, useEffect } from 'react'; // React import for compatibility with JSX
import { checkCapabilities } from '../utils/webaiApi';

function Test() {
  const [isAvailable, setIsAvailable] = useState<string | null>(null);

  useEffect(() => {
    const checkGemini = async () => {
      try {
        const capabilities = await checkCapabilities();
        setIsAvailable(capabilities.available);
      } catch (error) {
        console.error("Error checking Gemini availability:", error);
        setIsAvailable("error");
      }
    };

    checkGemini();
  }, []);

  return (
    <section className="bg-primary">
      <div className="bg-primary text-text min-h-screen py-24 container mx-auto">
        <h1 className="text-2xl font-bold">Gemini Nano Availability</h1>
        {isAvailable === "yes" && <p>Gemini Nano is available.</p>}
        {isAvailable === "no" && <p>Gemini Nano is not available.</p>}
        {isAvailable === "error" && <p>Error checking Gemini availability.</p>}
        {isAvailable === null && <p>Checking Gemini availability...</p>}
      </div>
    </section>
  );
}

export default Test;
