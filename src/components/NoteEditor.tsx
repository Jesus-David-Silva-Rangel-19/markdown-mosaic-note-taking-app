
import { useState } from "react";
import { Save, Bold, Italic, Underline, Type, Quote, Heading1, AlignLeft, LineHeight, LetterSpacing } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function NoteEditor() {
  const [content, setContent] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const isMobile = useIsMobile();

  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection) {
      setSelectedText(selection.toString());
    }
  };

  const applyFormatting = (format: string) => {
    const textarea = document.querySelector('textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    let newText = text;
    switch (format) {
      case 'bold':
        newText = text.slice(0, start) + `**${text.slice(start, end)}**` + text.slice(end);
        break;
      case 'italic':
        newText = text.slice(0, start) + `*${text.slice(start, end)}*` + text.slice(end);
        break;
      case 'heading':
        newText = text.slice(0, start) + `# ${text.slice(start, end)}` + text.slice(end);
        break;
      case 'quote':
        newText = text.slice(0, start) + `> ${text.slice(start, end)}` + text.slice(end);
        break;
      default:
        break;
    }

    setContent(newText);
  };

  return (
    <div className={cn(
      "flex-1 h-screen flex flex-col bg-white",
      isMobile && "w-full"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <input
          type="text"
          placeholder="Título de la nota..."
          className="text-xl font-heading font-bold bg-transparent border-none focus:outline-none flex-1 mr-2"
        />
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          <Save className="w-4 h-4" />
          <span className="text-sm hidden md:inline">Guardar</span>
        </button>
      </div>

      <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2 bg-gray-50">
        <button
          onClick={() => applyFormatting('bold')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Negrita"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => applyFormatting('italic')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Cursiva"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => applyFormatting('heading')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Título"
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() => applyFormatting('quote')}
          className="p-2 hover:bg-gray-200 rounded"
          title="Cita"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          className="p-2 hover:bg-gray-200 rounded"
          title="Tamaño de letra"
        >
          <Type className="w-4 h-4" />
        </button>
        <button
          className="p-2 hover:bg-gray-200 rounded"
          title="Alineación"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          className="p-2 hover:bg-gray-200 rounded"
          title="Altura de línea"
        >
          <LineHeight className="w-4 h-4" />
        </button>
        <button
          className="p-2 hover:bg-gray-200 rounded"
          title="Espaciado entre letras"
        >
          <LetterSpacing className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onSelect={handleTextSelect}
          placeholder="Empieza a escribir tu nota..."
          className="w-full h-full resize-none bg-transparent border-none focus:outline-none font-sans text-gray-800"
        />
      </div>
    </div>
  );
}
