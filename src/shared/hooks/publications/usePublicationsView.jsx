import { useEffect, useState } from "react";
import { getPublications } from "../../../services";

export const usePublicationsView = (initialFilters = {}) => {

    const [ publications , setPublications ] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchCPublications = async () => {

        setLoading(true);

        const response = await getPublications();

        if(response.error){
            console.error( "Error al obtenes publicaciones: ", response.e);
        } else {
            setPublications(response.data.publication);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchCPublications();
    }, []);

    return {
        publications,
        loading,
        fetchCPublications
    };
};