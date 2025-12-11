import React, { useEffect, useState } from "react";
// Css
import Css from "./Filters.module.css";
// Icons
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/nannies/slice.js";
import { fetchNannies } from "../../redux/nannies/thunks.js";

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
      key: "price_per_hour",
      value: "lt10",
      title: "Less than 10$",
    },
    {
      key: "price_per_hour",
      value: "gt10",
      title: "Greater than 10$",
    },
    {
      key: "rating",
      value: "popular",
      title: "Popular",
    },
    {
      key: "rating",
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
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setIsSelectorOpen(false);
    dispatch(setFilter(filter));
    dispatch(fetchNannies());
  };

  const storedFilter = useSelector((state) => state.nannies.filter);
  useEffect(() => {
    const defaultFilter = storedFilter;
    setSelectedFilter(defaultFilter);
  }, [storedFilter]);

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
                selectFilter={handleFilterChange}
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
