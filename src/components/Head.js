import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
const Head = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchRecommendations, setSearchRecommendations] = useState([]);
  console.log(searchItem);
  const dispatch = useDispatch();
  function toggleSidebar() {
    dispatch(toggleMenu());
  }
  useEffect(() => {
    const timer = setTimeout(() => getSearchResults(), 200);
    return () => {
      clearInterval(timer);
    };
  }, [searchItem]);
  async function getSearchResults() {
    const data = await fetch(YOUTUBE_SEARCH_API + searchItem);
    const json = await data.json();
    setSearchRecommendations(json[1]);
    console.log(searchRecommendations);
  }
  return (
    <>
      <div className="grid grid-flow-col p-5 shadow-md">
        <div className="flex col-span-1">
          <img
            onClick={() => toggleSidebar()}
            className="h-8"
            alt="icon"
            src="https://imgs.search.brave.com/1GG5wF6GQ_XYcHbpRj99p6o1UbDoIve7dUVJkRzaRn4/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbmF2aWdhdGlv/bi00MC8yNC9oYW1i/dXJnZXItbWVudS01/MTIucG5n"
          />

          <img
            className="h-8 mx-3"
            src="https://imgs.search.brave.com/miiwOzlHHfHRZ0duaOl-Qw3CaUFh4Yj9tr5Xtl8Co-Y/rs:fit:2139:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/X2l1Qll2cVh4ZnZi/N2V4dDhPNktnSGFC/cCZwaWQ9QXBp"
          />
        </div>
        <div className=" col-span-10	">
          <div>
            <input
              className="px-2 h-8 rounded-l-full border-2 w-1/2"
              type="text"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <button className="h-8 pl-2 pr-2 my-auto rounded-r-full border-2 border-l-0">
              Search
            </button>
          </div>
          <div className="fixed bg-white w-[29.5rem] rounded-sm shadow-lg ">
            <ul>
              {searchRecommendations.map((val) => (
                <li key={val} className="shadow-sm px-2 py-2 ">{val}</li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <img
            className="h-8 "
            src="https://imgs.search.brave.com/Y61c9jRwIkLPF29tFBF212oqdWjSIY6LqfYjMTLjgOI/rs:fit:512:512:1/g:ce/aHR0cDovL2dldGRy/YXdpbmdzLmNvbS9m/cmVlLWljb24tYncv/Z2VuZXJpYy1hdmF0/YXItaWNvbi0zLnBu/Zw"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
