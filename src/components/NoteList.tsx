
import { useState } from "react";
import { Calendar, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface Note {
  id: string;
  title: string;
  preview: string;
  date: string;
  tags: string[];
}

const DEMO_NOTES: Note[] = [
  {
    id: "1",
    title: "Notas de Reunión",
    preview: "Discusión sobre la nueva línea de tiempo del proyecto...",
    date: "2024-02-20",
    tags: ["Trabajo"],
  },
  {
    id: "2",
    title: "Ideas de Proyecto",
    preview: "- Crear un nuevo sistema de diseño\n- Implementar modo oscuro",
    date: "2024-02-19",
    tags: ["Ideas"],
  },
  {
    id: "3",
    title: "Tareas Semanales",
    preview: "1. Revisar pull requests\n2. Actualizar documentación",
    date: "2024-02-18",
    tags: ["Tareas"],
  },
];

export function NoteList() {
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const isMobile = useIsMobile();

  return (
    <div className={cn(
      "border-r border-gray-200 bg-white/60 backdrop-blur-sm flex flex-col",
      isMobile ? "w-full h-[300px]" : "w-80 h-screen"
    )}>
      <div className="p-4 border-b border-gray-200">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          <Plus className="w-4 h-4" />
          <span className="text-sm">Nueva Nota</span>
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        {DEMO_NOTES.map((note) => (
          <button
            key={note.id}
            onClick={() => setSelectedNote(note.id)}
            className={cn(
              "w-full p-4 text-left border-b border-gray-200 transition-all",
              selectedNote === note.id
                ? "bg-gray-50"
                : "hover:bg-gray-50/50"
            )}
          >
            <h3 className="font-heading font-bold text-gray-900 mb-1">
              {note.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
              {note.preview}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              <span>{note.date}</span>
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 rounded-full bg-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
