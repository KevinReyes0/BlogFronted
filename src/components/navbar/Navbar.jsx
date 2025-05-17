'use client';

import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Spacer
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { DragHandleIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

const NavLink = ({ children }) => {
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}
        >
        {children}
        </Box>
    );
};

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>Blog</Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}
                                >
                                <Stack direction="row" spacing={4}>
                                    <DragHandleIcon boxSize={8} />
                                </Stack>
                                </MenuButton>
                                
                                <MenuList alignItems={'center'}>

                                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                                        <Box p='2'>
                                            <Button
                                                colorScheme='blue' 
                                                
                                                onClick={() => navigate(`/*`)}
                                            >
                                                cursos
                                            </Button>
                                        </Box>
                                        <Spacer />
                                    </Flex>

                                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                                        <Box p='2'>
                                            <Button
                                                colorScheme='blue' 
                                                
                                                onClick={() => navigate(`/allPublications`)}
                                            >
                                                Todas las publicaciones
                                            </Button>
                                        </Box>
                                        <Spacer />
                                    </Flex>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
