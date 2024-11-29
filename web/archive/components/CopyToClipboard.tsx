import React, { useState } from "react";

type CopyableTextBoxProps = {
  content: string; // The content to display and copy
};

export default function CopyableTextBox({ content }: CopyableTextBoxProps) {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000); // Clear success message after 2 seconds
    } catch (error) {
      console.error("Failed to copy text:", error);
      setCopySuccess("Failed to copy");
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md relative">
      <div className="mb-4">{content}</div>
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Copy
      </button>
      {copySuccess && (
        <span className="text-sm text-green-500 absolute top-2 right-2">
          {copySuccess}
        </span>
      )}
    </div>
  );
}
