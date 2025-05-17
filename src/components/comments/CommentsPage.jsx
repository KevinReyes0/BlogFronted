import { Field, Form, Formik } from 'formik';
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Button,
    Box,
    Container 
} from '@chakra-ui/react';

import { useCommentForm } from "../../shared/hooks/comments/useCommentForm";
import { useParams } from 'react-router-dom';
import { usePublicationsView } from "../../shared/hooks/publications/usePublicationsView";

export const CommentsPage = () => {
    const { publicationId } = useParams();
    const { publications } = usePublicationsView();
    const { addComments, isLoading } = useCommentForm();

    const publication = publications.find(p => p._id === publicationId);
    const namePublication = publication?.namePublication;

    const validateName = (value) => {
        let error;
        if (!value) error = "El nombre es requerido";
        return error;
    };

    const validateComment = (value) => {
        let error;
        if (!value) error = "El comentario es requerido";
        return error;
    };

    return (
        <>
            <Container maxW='container.sm' mt='50px'>
                <Box p={4}>
                    {!namePublication ? (
                        <p>Publicación no encontrada.</p>
                    ) : (
                        <Formik
                            initialValues={{ nameUser: "", comment: "" }}
                            onSubmit={(values, actions) => {
                                addComments(namePublication, values.nameUser, values.comment);
                                actions.setSubmitting(false);
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <Field name="nameUser" validate={validateName}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.nameUser && form.touched.nameUser}>
                                                <FormLabel>Nombre</FormLabel>
                                                <Input {...field} placeholder="Tu nombre" />
                                                <FormErrorMessage>{form.errors.nameUser}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    
                                    <Field name="comment" validate={validateComment}>
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.comment && form.touched.comment} mt={4}>
                                                <FormLabel>Comentario</FormLabel>
                                                <Input {...field} placeholder="Tu comentario" />
                                                <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    
                                    <Button
                                        mt={4}
                                        colorScheme="blue"
                                        isLoading={props.isSubmitting || isLoading}
                                        type="submit"
                                    >
                                        Enviar Comentario
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    )}
                </Box>
            </Container>
        </>
    );
};
