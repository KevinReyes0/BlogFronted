import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addComments as addCommentsRequest } from "../../../services";
import toast from "react-hot-toast";

export const useCommentForm = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();

    const addComments = async ( namePublication, nameUser, comment ) => {
        setIsLoading(true)

        const response = await addCommentsRequest({namePublication, nameUser, comment})

        setIsLoading(false)

        if(response.error){
            console.log(response);

            return toast.error(
                response.message?.msg || 'Ocurrio un error al agregar el comentario'
            )
        }

        toast.success('Comentario agregado con exito')

        navigate('/commmentPage', { replace : true});
        
        window.location.reload();
    }

    return{
        addComments,
        isLoading
    }
}