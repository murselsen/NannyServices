import React, { useState } from "react";
// Css
import Css from "./Filters.module.css";
// Icons
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Filters = () => {
  const filterList = [
    {
      key: "name",
      value: "asc",
      title: "A to Z",
    },
    {
      key: "name",
      value: "desc",
      title: "Z to A",
    },
    {
      key: "price",
      value: "lt10",
      title: "Less than 10$",
    },
    {
      key: "price",
      value: "gt10",
      title: "Greater than 10$",
    },
    {
      key: "popularity",
      value: "popular",
      title: "Popular",
    },
    {
      key: "popularity",
      value: "notpopular",
      title: "Not Popular",
    },
    {
      key: "all",
      value: null,
      title: "Show All",
    },
  ];
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    key: "all",
    value: null,
    title: "Show All",
  });
  console.log(selectedFilter);
  return (
    <div className={Css.Filters}>
      <b className={Css.Title}>Filters</b>
      <div className={Css.Selector}>
        <div
          className={Css.OptionSelected}
          onClick={() => setIsSelectorOpen(!isSelectorOpen)}
        >
          <span className={Css.Title}>
            {selectedFilter && selectedFilter.title}
          </span>
          {isSelectorOpen ? (
            <RiArrowDropUpLine size={22} className={Css.Icon} />
          ) : (
            <RiArrowDropDownLine size={22} className={Css.Icon} />
          )}
        </div>
        {isSelectorOpen && (
          <div className={Css.OptionList}>
            {filterList.map((filter, index) => (
              <Option
                key={index}
                title={filter.title}
                filterCode={{
                  key: filter.key,
                  value: filter.value,
                  title: filter.title,
                }}
                isActive={
                  selectedFilter.key === filter.key &&
                  selectedFilter.value === filter.value
                }
                selectFilter={setSelectedFilter}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Option = ({ isActive, filterCode, title, selectFilter }) => {
  {
    return isActive ? (
      <div className={Css.OptionActive}>{title}</div>
    ) : (
      <div
        className={Css.OptionInactive}
        onClick={() => selectFilter(filterCode)}
      >
        {title}
      </div>
    );
  }
};

export default Filters;
