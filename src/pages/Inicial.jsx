import Search from "../components/SearchBar/SearchBar";
import { useState } from "react";
import RespAPI from "../components/RespAPI/RespAPI";


const Inicial = () => {

    const [search, setSearch] = useState('');

    return (
        <>
            <Search onSearch={value => setSearch(value)} />
            <RespAPI search={search} />
        </>
    )
}

export default Inicial;