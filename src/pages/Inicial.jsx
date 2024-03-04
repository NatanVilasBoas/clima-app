import Search from "../components/Search/Search";
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