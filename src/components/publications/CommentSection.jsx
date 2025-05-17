import React, { useState } from 'react';
import { VStack, Flex, Text, Box } from '@chakra-ui/react';

import { EditableComment } from "../comments/CommentUpdatePage.jsx";
import { DeleteCommentButton } from "../comments/CommentDeletePage.jsx";

export const CommentsSection = ({ initialComments }) => {
    const [comments, setComments] = useState(initialComments);

    const handleUpdate = (id, newText) =>
        setComments(list => list.map(c =>
            c._id === id ? { ...c, comment: newText } : c
        ));

    const handleRemove = (id) =>
        setComments(list => list.filter(c => c._id !== id));

    if (comments.length === 0) {
        return <Text fontSize="sm" color="gray.500">Sin comentarios.</Text>;
    }

    return (
        <VStack align="stretch" spacing={4}>
            {comments.map((c) => (
                <Flex key={c._id} align="flex-start" justify="space-between">
                    <Box flex="1">
                        
                        <Text fontSize="xs" color="gray.500" mb={1}>
                            {new Date(c.date).toLocaleDateString('es-ES', {
                                day: '2-digit', month: 'short', year: 'numeric'
                            })}
                        </Text>

                        <EditableComment
                            comment={c}
                            onUpdateSuccess={handleUpdate}
                        />
                    </Box>

                    <DeleteCommentButton
                        commentId={c._id}
                        onDeleteSuccess={handleRemove}
                    />
                </Flex>
            ))}
        </VStack>
    );
};