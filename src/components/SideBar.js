function SideBar({ menus, selected, handleSelect }) {
    
    const getLogo = () => {
        const result = [];
        for (let item in menus) {
            result.push([item, menus[item].icon])
        }
        return result;
    }
    return <div className="flex-col w-1/5">
        {getLogo().map((item, index) => (
            <div key={index} className="w-16 my-5 mx-auto text-center cursor-pointer">
                <img src={item[1]} alt="logo" className={`rounded-full border-4 border-solid mb-5 ${selected===item[0]?'outline outline-sky-700 scale-125':''}`} onClick={() => handleSelect(item[0])}/>
                <span className={`font-bold ${selected===item[0]?'text-sky-700':''}`}>{item[0]}</span>
            </div>
        ))}
    </div>
}

export default SideBar;