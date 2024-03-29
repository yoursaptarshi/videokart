import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
  } from '@chakra-ui/react';
  import React,{useState,useEffect} from 'react';
  
  import { Link } from 'react-router-dom';
  
  //import { courseRequest } from '../../redux/actions/other';
  import toast from 'react-hot-toast';
//import { useDispatch, useSelector } from 'react-redux';
const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [video, setVideo] = useState('');
 // const dispatch = useDispatch();
//   const {
//     loading,
//     error,
//     message: stateMessage,
//   } = useSelector(state => state.other);
let error = false;
let stateMessage ='abfjbaj';
let loading = false;
const submitHandler = e => {
    e.preventDefault();
   // dispatch(courseRequest(name, email, course));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
     // dispatch({ type: 'clearError' });
    }

    if (stateMessage) {
      toast.success(stateMessage);
     // dispatch({ type: 'clearMessage' });
    }
  }, [ error, stateMessage]);
  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Request a Video" />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@mail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box my={'4'}>
            <FormLabel htmlFor="video" children="Video" />
            <Textarea
              required
              id="video"
              value={video}
              onChange={e => setVideo(e.target.value)}
              placeholder="Explain the video...."
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button
            isLoading={loading}
            my="4"
            colorScheme={'yellow'}
            type="submit"
          >
            Send Mail
          </Button>

          <Box my="4">
            See available Videos!{' '}
            <Link to="/videos">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  )
}

export default Request