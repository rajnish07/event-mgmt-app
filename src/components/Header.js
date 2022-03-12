import { useState } from "react";

function Header() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(searchText)
    }

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    return <div className="flex grow shadow-md full h-20">
        <div className="w-1/5 flex justify-center">
            <img src="SmartQ Logo.png" className="relative h-3/4 my-2 mx-36" alt="logo" />
        </div>
        <input type="text" placeholder="Search Item" value={searchText} className="mx-5 w-2/4 h-12 mt-3 outline-none rounded shadow-md px-5" onChange={handleChange} onKeyUp={handleSearch} />
    </div>
}

export default Header;