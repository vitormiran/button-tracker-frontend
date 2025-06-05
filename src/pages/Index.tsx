import { useNavigate } from "react-router-dom";
import ActionButton from "@/components/ActionButton";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 page-transition">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Welcome</h1>
        <p className="text-gray-600">Select an action to get started</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        <ActionButton className="bg-gray-100 text-gray-900 hover:bg-gray-200">
          New Client
        </ActionButton>
        

        <ActionButton
          className="bg-gray-900 text-white hover:bg-gray-800"
          onClick={() => navigate("/events")}
        >
          Trigger Events
        </ActionButton>

        <ActionButton
          className="bg-gray-100 text-gray-900 hover:bg-gray-200"
          onClick={() => navigate("/news")}
        >
          News Today
        </ActionButton>
        
        <ActionButton className="bg-gray-100 text-gray-900 hover:bg-gray-200">
          Alert
        </ActionButton>
        
        <ActionButton className="bg-gray-100 text-gray-900 hover:bg-gray-200">
          Settings
        </ActionButton>
      </div>
    </div>
  );
};

export default Index;