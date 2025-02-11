
import { useState } from "react";
import { Save } from "lucide-react";

export function NoteEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="flex-1 h-screen flex flex-col bg-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <input
          type="text"
          placeholder="Note title..."
          className="text-xl font-heading font-bold bg-transparent border-none focus:outline-none"
        />
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          <Save className="w-4 h-4" />
          <span className="text-sm">Save</span>
        </button>
      </div>

      <div className="flex-1 p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing your note..."
          className="w-full h-full resize-none bg-transparent border-none focus:outline-none font-sans text-gray-800"
        />
      </div>
    </div>
  );
}
