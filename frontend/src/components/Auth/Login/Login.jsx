import {
    Box,
    Button,
    Container,
    FormLabel,
    HStack,
    Heading,
    Input,
    VStack,
    Image
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { Link } from 'react-router-dom';
 // import { login } from '../../redux/actions/user';
import logo from '../../../assets/images/logo.png'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
   // const dispatch = useDispatch();
  
    const submitHandler = e => {
      e.preventDefault();
      //dispatch(login(email, password));
    };
  
  return (
    <Container h={'95vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <HStack>
            <Heading children={'Welcome to VideoKart'} />
            <Image src={logo} height='10vh'/>
        </HStack>

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link to="/forgetpassword">
              <Button fontSize={'sm'} variant="link">
                Forget Password?
              </Button>
            </Link>
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Login
          </Button>

          <Box my="4">
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant="link">
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  )
}

export default Login