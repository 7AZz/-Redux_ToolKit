import { useDispatch, useSelector } from "react-redux";
import {
  addToCollection,
  removeFromCollection,
} from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();
  const isSaved = useSelector((store) =>
    store.collection.items.some((i) => i.id === item.id),
  );

  const handleSave = () => {
    if (isSaved) {
      dispatch(removeFromCollection(item.id));
    } else {
      dispatch(addToCollection(item));
    }
  };

  if (item.type === "video") {
    return (
      <div className="overflow-hidden rounded-lg bg-gray-800">
        <video
          src={item.src}
          poster={item.thumbnail}
          controls
          className="w-full h-60 object-cover"
        />
        <div className="flex items-center justify-between p-2">
          <p className="text-sm truncate flex-1">{item.title}</p>
          <button
            onClick={handleSave}
            className="ml-2 text-sm cursor-pointer px-2 py-1 rounded hover:bg-gray-700 transition-colors"
          >
            {isSaved ? "\u2665" : "\u2661"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg bg-gray-800">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="flex items-center justify-between p-2">
        <p className="text-sm truncate flex-1">{item.title}</p>
        <button
          onClick={handleSave}
          className="ml-2 text-sm cursor-pointer px-2 py-1 rounded hover:bg-gray-700 transition-colors"
        >
          {isSaved ? "\u2665" : "\u2661"}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
