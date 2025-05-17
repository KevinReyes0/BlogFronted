import React from 'react';
import {
    Editable,
    EditableInput,
    EditablePreview,
    useEditableControls,
    IconButton,
    ButtonGroup,
    Flex,
    Text
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import { useCommentUpdate } from '../../shared/hooks/comments/useCommentUpdate';

const EditableControls = () => {
    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
        <ButtonGroup justifyContent="start" size="sm" mt={1}>
            <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
        </ButtonGroup>
    ) : (
        <Flex justifyContent="start" mt={1}>
            <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
        </Flex>
    );
};

export const EditableComment = ({ comment, onUpdateSuccess }) => {
    const { updateComment } = useCommentUpdate();

    const handleUpdate = async (nextValue) => {
        const resp = await updateComment(comment._id, { comment: nextValue });
        if (resp.succes) {
            onUpdateSuccess(comment._id, nextValue);
        }
    };

    return (
        <Editable
            defaultValue={comment.comment}
            fontSize="sm"
            onSubmit={handleUpdate}
        >
            <Text as="span">
                • <strong>{comment.nameUser}:</strong> <EditablePreview />
            </Text>
            <EditableInput />
            <EditableControls />
        </Editable>
    );
};