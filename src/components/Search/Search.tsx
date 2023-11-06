import React, { useRef, useState } from "react";

interface SearchProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ name, setName }: SearchProps) => {
  const [inputValue, setInputValue] = useState<string>(name);
  const inputref = useRef<HTMLInputElement | null>(null);
  const habdleSearchButton = () => {
    // setName(inputValue);
    setName(inputref.current?.value ?? "");
  };

  return (
    <div className="flex py-8 justify-center gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-neutral-200 py-2 w-1/2 rounded-lg shadow-lg"
        ref={inputref}
      />
      <button
        className="bg-green-400 px-4 py-2 rounded-lg shadow-lg text-white"
        onClick={() => habdleSearchButton()}
      >
        SEARCH
      </button>
    </div>
  );
};
export default Search;
