import React from "react";
import './css/Header.css'
export const Header = (props) => {
  const updateSearch = (e) => {
    props.onChange(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    props.onSubmit();
  };
  return (
    <div>
      <h1 className="heading">Recipe App</h1>
      <form onSubmit={getSearch} className="search-form">
        <input type="text" value={props.value} onChange={updateSearch} className="search-bar rounded form-control" placeholder="Search any recipe"/>
        <button type="submit" className="search-button btn ml-2">Search</button>
      </form>
    </div>
  );
};
