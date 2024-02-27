import { SearchBar } from "./searchBar";
export const Appbar = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <img
          src="logo.png"
          alt=""
          className="inline-flex justify-center h-10 ml-5"
        />
        <div className="justify-center">
          <SearchBar />
        </div>
        <div className="mr-5 ">Icons</div>
      </div>
    </div>
  );
};
