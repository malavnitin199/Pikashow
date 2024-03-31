import React from "react";

function Input(props) {
  const { options, setCatagory } = props;
  return (
    <div>
      <select
        defaultValue="trending"
        className="text-2xl font-semibold m-2 bg-slate-600 p-2 rounded-xl border-none outline-none"
        onChange={(e) => {
          e.preventDefault();
          setCatagory(e.target.value);
          // console.log(e.target.value);
        }}
      >
        {options?.map((option) => (
          <option value={option}>{option.toUpperCase()}</option>
        ))}
        {/* <option value="all">All</option>
        <option value="tv">TV</option>
        <option value="movie">Movies</option>
        <option value="person">Persons</option> */}
      </select>
    </div>
  );
}

export default Input;
