import { deleteComments as deleteCommentsRequest } from '../../../services';
import toast from 'react-hot-toast';

export const useCommentDelete = () => {

    const deleteComment = async (id) => {

        try {
            
            const response = await deleteCommentsRequest(id);

            if (response.error) {
                console.log(response);
            
                return toast.error(
                    response.message?.msg || 'Ocurrio un error al eliminar el comentario'
                );
            }
        
            toast.success('Comentario eliminado con exito');

            return response;

        } catch (error) {
            toast.error("Error inesperado al eliminar");
            return { error: true };
        }
    };

    return {
        deleteComment
    };
};