import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideo, fetchGIF } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;

      const getData = async () => {
        dispatch(setLoading());
        try {
          let data;
          if (activeTab === "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description || "photo",
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab === "videos") {
            let response = await fetchVideo(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user?.name || "video",
              thumbnail: item.image,
              src: item.video_files?.[0]?.link,
            }));
          }
          if (activeTab === "gif") {
            let response = await fetchGIF(query);
            data = response.data.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title || "gif",
              thumbnail: item.images.fixed_height.url,
              src: item.images.original.url,
            }));
          }

          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };

      getData();
    },
    [query, activeTab, dispatch],
  );

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!results.length && query)
    return <p className="text-center mt-10 text-gray-400">No results found.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
