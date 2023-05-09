import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import CityList from "./CityList";

export default function SearchInput({
  inputValue,
  onChange,
  onClick,
  onSubmit,
  searchToggle,
  handleSearchList,
  logoutRef,
}) {
  return (
    <div className="relative pt-5 h-[10%]">
      <form onSubmit={onSubmit}>
        <div className="relative px-12 border border-white rounded-full">
          <span className="absolute left-[15px] top-1/2 translate-y-[-50%]">
            <MagnifyingGlassIcon className="w-5 h-5" />
          </span>
          <input
            type="text"
            placeholder="Search City..."
            value={inputValue}
            onChange={onChange}
            className="w-full py-3 text-sm bg-transparent outline-none placeholder-white/75 "
          />
          <span>
            {searchToggle && (
              <XMarkIcon
                onClick={onClick}
                className="w-5 h-5 absolute right-[15px] top-1/2 translate-y-[-50%] cursor-pointer"
              />
            )}
          </span>
        </div>
      </form>
      <CityList
        handleClick={handleSearchList}
        queryCity={inputValue}
        searchToggle={searchToggle}
        logoutRef={logoutRef}
      />
    </div>
  );
}
