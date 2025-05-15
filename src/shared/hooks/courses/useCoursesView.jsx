import { useEffect, useState } from "react";
import { getCourses } from "../../../services";

export const useCoursesView = (initialFilters = {}) => {

    const [ courses, setCourses ] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchCourses = async () => {

        setLoading(true);

        const response = await getCourses();

        if(response.error){
            console.error( "Error al obtenes Cursos: ", response.e);
        } else {
            setCourses(response.data.category);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchCourses();
    }, []);

    return {
        courses,
        loading,
        fetchCourses
    };
};