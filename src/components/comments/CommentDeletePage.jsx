import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useCommentDelete } from '../../shared/hooks/comments/useCommentDelete';

export const DeleteCommentButton = ({ commentId, onDeleteSuccess }) => {
    const { deleteComment } = useCommentDelete();

    const handleDelete = async () => {
        if (!window.confirm('¿Estás seguro de eliminar este comentario?')) return;
        const resp = await deleteComment(commentId);
        if (resp.succes) {
            onDeleteSuccess(commentId);
        }
    };

    return (
        <Tooltip label="Eliminar comentario">
            <IconButton
                aria-label="Eliminar comentario"
                icon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                onClick={handleDelete}
                type="button"
            />
        </Tooltip>
    );
};