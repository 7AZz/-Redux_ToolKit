import { useState } from "react";
import ResultGrid from "./components/ResultGrid";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import CollectionPage from "./pages/CollectionPage";

const App = () => {
  const [showCollection, setShowCollection] = useState(false);

  return (
    <div className="h-screen w-full bg-gray-950 text-white overflow-auto">
      <SearchBar />
      <div className="flex items-center justify-between px-4 pt-2">
        <Tabs />
        <button
          onClick={() => setShowCollection(!showCollection)}
          className="text-sm cursor-pointer px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          {showCollection ? "← Back to Search" : "♥ Collection"}
        </button>
      </div>
      {showCollection ? <CollectionPage /> : <ResultGrid />}
    </div>
  );
};

export default App;
