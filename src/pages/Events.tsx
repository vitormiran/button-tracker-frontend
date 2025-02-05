import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ActionButton from "@/components/ActionButton";
import Card from "@/components/Card";

const Events = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [trackUserId, setTrackUserId] = useState("");
  const [eventName, setEventName] = useState("");
  const [properties, setProperties] = useState("");

  const handleIdentify = () => {
    datalayer.push({"event": "segment_identify", "userId":userId, "traits": { "firstName": firstName, "lastName": lastName } });
    console.log("Identify:", { userId, firstName, lastName });
  };

  const handleTrack = () => {
    console.log("Track:", { 
      userId: trackUserId, 
      eventName, 
      properties: properties ? JSON.parse(properties) : {} 
    });
  };

  return (
    <div className="min-h-screen p-6 space-y-8 max-w-4xl mx-auto page-transition">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => navigate("/")}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          ← Back
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Event Management</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Identify User">
          <div className="space-y-4">
            <Input
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full"
            />
            <ActionButton 
              onClick={handleIdentify}
              className="w-full bg-gray-900 text-white hover:bg-gray-800"
            >
              Identify
            </ActionButton>
          </div>
        </Card>

        <Card title="Track Event">
          <div className="space-y-4">
            <Input
              placeholder="User ID"
              value={trackUserId}
              onChange={(e) => setTrackUserId(e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="Event Name"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full"
            />
            <Textarea
              placeholder="Properties (JSON)"
              value={properties}
              onChange={(e) => setProperties(e.target.value)}
              className="w-full min-h-[100px]"
            />
            <ActionButton 
              onClick={handleTrack}
              className="w-full bg-gray-900 text-white hover:bg-gray-800"
            >
              Track
            </ActionButton>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Events;
