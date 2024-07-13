import { Flex, Image, VStack } from '@chakra-ui/react';
import loginImage from '../assets/login.jpg';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/users/user.actions';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const { auth, token, loading, error } = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Correct usage of useNavigate

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (auth) {
            navigate("/notes"); // Navigate to "/notes" if auth is true
        }
    }, [auth, navigate]); // useEffect dependency on auth and navigate

    const handleLogin = () => {
        dispatch(getUser({ email, password }));
    }

    return (
        <Flex padding={4} w="100%">
            {/* Adjusting the Image component */}
            <Image w="50%" src={loginImage} objectFit="cover" alt="Login Image" />

            {/* Adding VStack for content */}
            <VStack w="50%" alignItems="center" justifyContent="center" padding={4}>
                {/* Your login form or other content goes here */}
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={useColorModeValue('gray.50', 'gray.800')}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                        <Stack align={'center'}>
                            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                            <Text fontSize={'lg'} color={'gray.600'}>
                                to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
                            </Text>
                        </Stack>
                        <Box
                            rounded={'lg'}
                            bg={useColorModeValue('white', 'gray.700')}
                            boxShadow={'lg'}
                            p={8}>
                            <Stack spacing={4}>
                                <FormControl id="email">
                                    <FormLabel>Email address</FormLabel>
                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
                                </FormControl>
                                <FormControl id="password">
                                    <FormLabel>Password</FormLabel>
                                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                                </FormControl>
                                <Stack spacing={10}>
                                    <Stack
                                        direction={{ base: 'column', sm: 'row' }}
                                        align={'start'}
                                        justify={'space-between'}>
                                        <Checkbox>Remember me</Checkbox>
                                        <Text color={'blue.400'}>Forgot password?</Text>
                                    </Stack>
                                    <Button
                                        onClick={handleLogin}
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Sign in
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
            </VStack>
        </Flex>
    );
}
