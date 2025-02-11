
import { NoteSidebar } from "@/components/NoteSidebar";
import { NoteList } from "@/components/NoteList";
import { NoteEditor } from "@/components/NoteEditor";

const Index = () => {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <NoteSidebar />
      <NoteList />
      <NoteEditor />
    </div>
  );
};

export default Index;
