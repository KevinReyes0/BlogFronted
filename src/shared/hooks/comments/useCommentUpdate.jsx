import { updateComments as updateCommentsRequest } from '../../../services';
import toast from 'react-hot-toast';

export const useCommentUpdate = () => {

    const updateComment = async (id, data) => {

        try {

            const response = await updateCommentsRequest(id, data);

            if (response.error) {
                console.log(response);
            
                return toast.error(
                    response.message?.msg || 'Ocurrio un error al actualizar el comentario'
                );
            }
        
            toast.success('Comentario actualizado con exito');
            
            return response;

        } catch (error) {
            toast.error("Error inesperado al actualizar");
            return { error: true };
        }
    };

    return {
        updateComment
    };
};