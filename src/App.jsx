import React from "react";
import { fetchGIF, fetchPhotos, fetchVideo } from "./api/mediaApi";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-950 text-white">
      <button
        className="bg-green-400 px-4 py-2 m-5 rounded"
        onClick={async () => {
          const data = await fetchPhotos("cat");

          console.log(data);
        }}
      >
        Get Photos
      </button>

      <button
        className="bg-green-400 px-4 py-2 m-5 rounded"
        onClick={async () => {
          const data = await fetchVideo("cat");
          console.log(data.videos);
        }}
      >
        Get Videos
      </button>

      <button
        className="bg-green-400 px-4 py-2 m-5 rounded"
        onClick={async () => {
          const data = await fetchGIF("cat");
          console.log(data.data);
        }}
      >
        Get GIF
      </button>
    </div>
  );
};

export default App;
