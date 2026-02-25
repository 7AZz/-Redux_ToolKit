import { useSelector, useDispatch } from "react-redux";
import { removeFromCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((store) => store.collection);

  if (!items.length) {
    return (
      <p className="text-center mt-10 text-gray-400">
        No saved items yet. Like some results to add them here.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="overflow-hidden rounded-lg bg-gray-800">
          {item.type === "video" ? (
            <video
              src={item.src}
              poster={item.thumbnail}
              controls
              className="w-full h-60 object-cover"
            />
          ) : (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
            />
          )}
          <div className="flex items-center justify-between p-2">
            <p className="text-sm truncate flex-1">{item.title}</p>
            <button
              onClick={() => dispatch(removeFromCollection(item.id))}
              className="ml-2 text-sm cursor-pointer px-2 py-1 rounded hover:bg-gray-700 transition-colors text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPage;
