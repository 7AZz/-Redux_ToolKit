import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="bg-gray-900 flex py-10 px-10 gap-5"
      >
        <input
          value={text}
          required
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
