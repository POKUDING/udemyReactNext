import { fetchSearchResults } from "@/api";
import SubLayout from "../../components/SubLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Searchbar from "@/components/Searchbar";
import CountryList from "@/components/CountryList";

export default function Search() {
    const router = useRouter();
    const { q } = router.query;

    const [countries, setCountries] = useState([]);

    const setData = async () => {
        const data = await fetchSearchResults(q);
        setCountries(data);
    }

    useEffect(() => {
        if (q) {
            setData();
        }
    }, [q]);

    return <>
        <Searchbar q={q} />
        <CountryList countries={countries} />
    </>;
}

Search.Layout = SubLayout;
