import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CityList from "./CityList";

export default function SearchInput({
  inputValue,
  onChange,
  onClickRestText,
  searchToggle,
  handleSearchList,
  onClickSearchIcon,
  openSearchBar,
  searchBarRef,
}) {
  return (
    <div ref={searchBarRef} className="absolute top-5 px-3">
      <form>
        <div
          className={
            (openSearchBar ? "bg-white shadow-lg border-white/70 " : " ") +
            "cursor-pointer relative rounded-full flex items-center px-3 w-fit	text-slate-700 border border-white/30 duration-300"
          }
        >
          <span className="py-3">
            <MagnifyingGlassIcon
              className={
                (openSearchBar ? "text-slate-500" : "text-white") + " w-5 h-5"
              }
              onClick={onClickSearchIcon}
            />
          </span>
          {openSearchBar && (
            <input
              type="text"
              placeholder="Search City"
              value={inputValue}
              onChange={onChange}
              className="py-2.5 px-3 text-base bg-transparent outline-none placeholder-black/75 capitalize"
            />
          )}

          <span>
            {searchToggle && (
              <XMarkIcon
                onClick={onClickRestText}
                className="w-5 h-5 absolute right-[15px] top-1/2 translate-y-[-50%] cursor-pointer"
              />
            )}
          </span>
        </div>
      </form>
      {inputValue.length > 0 && (
        <CityList
          handleClick={handleSearchList}
          queryCity={inputValue}
          searchToggle={searchToggle}
        />
      )}
    </div>
  );
}
