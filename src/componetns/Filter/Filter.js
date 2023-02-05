import { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { ProductContextDispatch } from "../../Provider/ProductProvider";
import { shopData } from "../../shopData/shopData";

const sortOptions = [
  {
    value: "",
    label: "ALL",
  },
  {
    value: "highest",
    label: "Highest Price",
  },
  {
    value: "lowest",
    label: "Lowest Price",
  },
];

const Filter = () => {
  const [sortSelectValue, setSortSelectValue] = useState("");
  const [typeSelectValue, setTypeSelectValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");
  const [typesSelectOptions, setTypesSelectOptions] = useState(null);

  useEffect(() => {
    typesSelectOptionsHandler();
  }, []);

  const typesSelectOptionsHandler = () => {
    let options = [
      {
        value: "",
        label: "ALL",
      },
    ];
    let types = [];
    shopData.forEach((product) => {
      types.push(product.type.toLowerCase());
    });
    types = [...new Set(types)];
    types.forEach((item) => {
      const arr = item.split(" ");
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }

      options.push({ value: item, label: arr.join(" ") });
    });
    setTypesSelectOptions(options);
  };

  const {
    searchProductsHandler,
    sortPriceProductsHandler,
    selectTypeProductsHandler,
  } = useContext(ProductContextDispatch);

  const searchInputHandler = (e) => {
    const value = e.target.value;
    searchProductsHandler(value);
    sortPriceProductsHandler(sortSelectValue);
    selectTypeProductsHandler(typeSelectValue);
    setSearchInputValue(value);
  };
  const sortSelectHndler = (e) => {
    const value = e.value;
    searchProductsHandler(searchInputValue);
    sortPriceProductsHandler(value);
    selectTypeProductsHandler(typeSelectValue);
    setSortSelectValue(value);
  };

  const typeSelectHndler = (e) => {
    const value = e.value;
    searchProductsHandler(searchInputValue);
    sortPriceProductsHandler(sortSelectValue);
    selectTypeProductsHandler(value);
    setTypeSelectValue(value);
  };

  return (
    <div className="space-y-2 md:w-[600px] md:mx-auto">
      <div className="space-y-2 sm:flex sm:space-x-2 sm:space-y-0">
        <Select
          className="w-full sm:w-1/2"
          defaultValue={sortSelectValue}
          options={sortOptions}
          onChange={sortSelectHndler}
        />
        <Select
          className="w-full sm:w-1/2"
          defaultValue={typeSelectValue}
          onChange={typeSelectHndler}
          options={typesSelectOptions}
        />
      </div>
      <input
        className="w-full py-[6px] px-[10px] rounded-[4px] border border-[#ccc] placeholder-gray-500 outline-[#2684ff]"
        type="text"
        value={searchInputValue}
        placeholder="Search..."
        onChange={searchInputHandler}
      />
    </div>
  );
};

export default Filter;
