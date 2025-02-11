
import { useState } from "react";
import { FolderTree, Tag, Search, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface Folder {
  id: string;
  name: string;
  notes: number;
}

const DEMO_FOLDERS: Folder[] = [
  { id: "1", name: "Personal", notes: 5 },
  { id: "2", name: "Trabajo", notes: 3 },
  { id: "3", name: "Proyectos", notes: 2 },
];

export function NoteSidebar() {
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const sidebarContent = (
    <div className="w-64 h-screen border-r border-gray-200 bg-white/80 backdrop-blur-sm p-4 flex flex-col gap-6 animate-slideIn">
      {isMobile && (
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      <div className="flex items-center gap-2">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Buscar notas..."
          className="w-full bg-transparent border-none focus:outline-none text-sm"
        />
      </div>

      <div>
        <h2 className="font-heading font-bold text-lg mb-3 text-gray-800">Carpetas</h2>
        <div className="space-y-2">
          {DEMO_FOLDERS.map((folder) => (
            <button
              key={folder.id}
              onClick={() => setSelectedFolder(folder.id)}
              className={cn(
                "w-full flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                selectedFolder === folder.id
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <FolderTree className="w-4 h-4" />
              <span className="text-sm">{folder.name}</span>
              <span className="ml-auto text-xs text-gray-400">{folder.notes}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-heading font-bold text-lg mb-3 text-gray-800">Etiquetas</h2>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs">
            <Tag className="w-3 h-3" />
            Trabajo
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs">
            <Tag className="w-3 h-3" />
            Ideas
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-purple-50 text-purple-700 text-xs">
            <Tag className="w-3 h-3" />
            Tareas
          </span>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        {isOpen && (
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setIsOpen(false)}>
            <div onClick={e => e.stopPropagation()} className="h-full">
              {sidebarContent}
            </div>
          </div>
        )}
      </>
    );
  }

  return sidebarContent;
}
