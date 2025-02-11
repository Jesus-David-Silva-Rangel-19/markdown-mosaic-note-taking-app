
import { NoteSidebar } from "@/components/NoteSidebar";
import { NoteList } from "@/components/NoteList";
import { NoteEditor } from "@/components/NoteEditor";
import { Heart, Rocket, Flag } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-blue-50 p-4 text-center text-sm text-blue-800">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          Apoyamos a Ucrania <Flag className="w-4 h-4 text-blue-500" /> en la agresión rusa. 
          Somos defensores de la democracia <Flag className="w-4 h-4 text-red-500" /> y 
          resistimos el autoritarismo con institucionalidad.
        </p>
      </div>
      
      <div className={cn(
        "flex-1 flex",
        isMobile && "flex-col"
      )}>
        <NoteSidebar />
        <NoteList />
        <NoteEditor />
      </div>

      <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        <p className="flex items-center justify-center gap-2 flex-wrap">
          Desarrollado con <Heart className="w-4 h-4 text-red-500 fill-current" /> por 
          Jesús David Silva Rangel <Rocket className="w-4 h-4 text-blue-500" />
        </p>
      </footer>
    </div>
  );
};

export default Index;
