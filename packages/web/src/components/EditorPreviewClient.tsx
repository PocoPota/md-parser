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
        className="editor-textarea"
      />
      <div className="preview-pane">
        <article dangerouslySetInnerHTML={{ __html: previewHtml }} />
      </div>
    </>
  );
}
