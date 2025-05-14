import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveComment as saveCommentRequest } from "../../../services";
import toast from "react-hot-toast";

export const useCommentForm = () => {
    const [ isLoading, setIsLoading ] = useState(false);
    const navigate = useNavigate();

    const saveComment = async ( namePublication, nameUser, comment) => {
        setIsLoading(true)

        const response = await saveCommentRequest({namePublication, nameUser, comment})

        setIsLoading(false)

        if(response.error){
            console.log(response);

            return toast.error(
                response.message?.msg || 'Ocurrio un error al agregar el comentario'
            )
        }

        toast.succes('Comentario agregado con exito')
        navigate('/commmentPage', { replace : true});
        window.location.reload();
    }

    return{
        svaeClient,
        isLoading
    }
}