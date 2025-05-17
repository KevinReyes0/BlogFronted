import React, { useState } from 'react';
import { usePublicationsView } from "../../shared/hooks/publications/usePublicationsView.jsx";
import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Heading,
    ButtonGroup,
    Button,
    Text,
    Container,
    Input,
    Box,
    VStack,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { CommentsSection } from './CommentSection.jsx';

export const PublicationPage = () => {
    const { courseId } = useParams();
    const { publications, loading } = usePublicationsView();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    if (loading) return <p>Cargando publicaciones...</p>;

    const filteredByCourse = publications.filter(
        (publication) => publication.keeperCategory?._id === courseId
    );

    const filteredPublications = filteredByCourse.filter((publication) =>
        publication.namePublication
            .toLowerCase()
            .includes(searchTerm.trim().toLowerCase())
    );

    return (
        <Container maxW='container.lg'>

            <Container mt='40px'>
                <VStack spacing={4} align='stretch' mb={4}>
                    <Input
                        placeholder='Buscar por nombre de publicación'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        size='md'
                    />
                </VStack>
            </Container>

            <Box className="card-container" display="flex" flexWrap="wrap" gap="1rem" justifyContent="center">
                {filteredPublications.length > 0 ? (
                    filteredPublications.map((publication) => (
                        <Card key={publication._id} maxW='sm'>
                            <CardBody>
                                <Stack spacing='3'>
                                    <Heading size='md'>{publication.namePublication}</Heading>
                                    <Text>{publication.descriptionPublication}</Text>
                                    <Text fontSize="xs" color="gray.500">
                                        {new Date(publication.date).toLocaleDateString('es-ES', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })}
                                    </Text>
                                    <Stack spacing={1} mt={4}>
                                        <Heading size='sm'>Comentarios:</Heading>
                                        <CommentsSection initialComments={publication.keeperComment || []} />
                                    </Stack>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                        onClick={() => navigate(`/comment/${publication._id}`, {
                                            state: { namePublication: publication.namePublication },
                                        })}
                                    >
                                        Realizar comentario
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))
                ) : (
                    <Text>No hay publicaciones para este filtro.</Text>
                )}
            </Box>
        </Container>
    );
};
