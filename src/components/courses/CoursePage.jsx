import { useCoursesView } from "../../shared/hooks/courses/useCoursesView.jsx";
import { Card, CardBody, CardFooter, Stack , Heading, ButtonGroup, Button, Image, Text, Container  } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export const CoursesPage = () => {
    const { courses, loading, fetchCourses } = useCoursesView();
    const navigate = useNavigate();

    const courseImages = {
    "6823fa6d5100ca27839c92b3": "https://images.vexels.com/media/users/3/331160/isolated/preview/cd3af79afac0b6e745fc1f84338b6a2c-icono-de-una-llave-inglesa-en-la-pantalla-de-una-computadora.png",
    "6823fa6d5100ca27839c92b1": "https://images.vexels.com/media/users/3/331157/isolated/preview/4cbee01007ffb957e6bf876a76d8b002-pantalla-de-computadora-con-icono-de-codigo.png",
    "6823fa6d5100ca27839c92b5": "https://images.vexels.com/media/users/3/331160/isolated/preview/cd3af79afac0b6e745fc1f84338b6a2c-icono-de-una-llave-inglesa-en-la-pantalla-de-una-computadora.png",
    };

    if (loading) return <p>Cargando cursos...</p>;
    return (
        <>
            < Container maxW='2x2'>
                <div className="card-container">
                    {courses.map((category) => (
                        <Card className="card" key={category._id} maxW='sm'>
                            <CardBody>
                                <Image
                                    src={courseImages[category._id] || 'https://via.placeholder.com/300x200?text=Sin+Imagen'}
                                    alt={category.nameCategory}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{category.nameCategory}</Heading>
                                    <Text>{category.descriptionCategory}</Text>
                                </Stack>
                            </CardBody>
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                        onClick={() => navigate(`/publications/${category._id}`)}
                                    >
                                        Ver publicaciones
                                    </Button>
                            </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Container>
        </>
        

    )
}