import { useState } from "react";
import { parseMarkdown } from '@pocopota/md-parser';

export default function EditorPreviewClient() {
  const [input, setInput] = useState("");
  const [previewHtml, setPreviewHtml] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
    const html = parseMarkdown(value);
    setPreviewHtml(html);
  };

  return (
    <>
      <textarea
        value={input}
        onChange={handleInput}
        style={{
          width: "50%",
          height: "100vh",
          padding: "1rem",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          width: "50%",
          height: "100vh",
          padding: "1rem",
          overflowY: "auto",
          boxSizing: "border-box",
          borderLeft: "1px solid #ccc",
        }}
        dangerouslySetInnerHTML={{ __html: previewHtml }}
      />
    </>
  );
}
