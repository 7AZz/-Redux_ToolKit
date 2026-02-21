import React, { useState } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <form className="flex p-10 gap-5">
        <input
          required
          className="border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
