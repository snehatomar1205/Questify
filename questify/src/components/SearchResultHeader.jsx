import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/logo.svg";
import SearchInput from "./SearchInput";

import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
    const [selectedMenu, setSelectedMenu] = useState("All");
    const { setImageSearch } = useContext(Context);

    useEffect(() => {
        return () => setImageSearch(false);
    }, []);

    const clickHandler = (menuItem) => {
        let isTypeImage = menuItem.name === "Images";
        setImageSearch(isTypeImage ? true : false);
        setSelectedMenu(menuItem.name);
    };

    return (
        <div className="p-[15px] pb-0 md:pr-5 md:pl-20 md:pt-7 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center grow">
                    <Link to="/">
                        <img
                            className="hidden md:block w-[92px] mr-10"
                            src={Logo}
                            alt="Logo"
                        />
                    </Link>
                    <SearchInput from="searchResult" />
                </div>
                
            </div>

            <div className="flex ml-[-12px] mt-3">
                {menu.map((menu, index) => (
                    <span
                        key={index}
                        className={`flex items-center p-3 text-[#5f6368] cursor-pointer relative ${
                            selectedMenu === menu.name ? "text-[#1a73e8]" : ""
                        }`}
                        onClick={() => clickHandler(menu)}
                    >
                        <span className="hidden md:block mr-2">
                            {menu.icon}
                        </span>
                        <span className="text-sm">{menu.name}</span>
                        
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SearchResultHeader;