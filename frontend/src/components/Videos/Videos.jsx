import {
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  import Alert from '@mui/material/Alert';
const Video = ({
    views,
    title,
    imageSrc,
    id,
    addToPlaylistHandler,
    creator,
    description,
    videoCount,
    loading,
  }) => {
  return (
    <VStack classname="video" alignItems={['center','flex-start']}>
        <Image src={imageSrc} boxSize="60" objectFit={'contain'}/>
        <Heading textAlign ={['center','left']}
        maxW="200px" size={'sm'} fontFamily={'sans-serif'} noOfLines={3} children={title} />
        <Text noOfLines={2} children={description}/>
        <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`videos - ${videoCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/video/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
        </Stack>
    </VStack>
  )
}

const Videos = ()=>{
    const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
 // const dispatch = useDispatch();
 const addToPlaylistHandler = async (couseId) => {
    //await dispatch(addToPlaylist(couseId));
   // dispatch(loadUser());
  };
  const categories = [
    'Nature',
    'Cars',
    'City',
    'Electronics',
    'People',
    'Misc',
  ];
//   const { loading, courses, error, message } = useSelector(
//     state => state.course
//   );
let error =false
let message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda'
let videos = [
    {
        _id:'28482481',
        title:'Title of the video',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa incidunt aliquid repellendus facilis dicta deserunt fugiat quam inventore neque voluptatem perspiciatis at tenetur quod ratione in nisi assumenda, labore rem. Quaerat perspiciatis odit a inventore rerum hic cumque laboriosam, facilis dolore quasi nostrum error.',
        views:45,
        poster:{url:'https://cc-prod.scene7.com/is/image/CCProdAuthor/draw-trees_P1_900x420?$pjpeg$&jpegSize=200&wid=900'},
        createdBy:'Saptarshi Samanta',
        numOfVideos:54,
    }
]
let loading=false
useEffect(() => {
  //  dispatch(getAllCourses(category, keyword));

    if (error) {
      
      <Alert severity="error">{error}</Alert>
      //dispatch({ type: 'clearError' });
    }

    if (message) {
      
      <Alert severity="success">{message}</Alert>
     // dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, error, message]);
  return(
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
    <Heading children="All Videos" m={'8'} />

    <Input
      value={keyword}
      onChange={e => setKeyword(e.target.value)}
      placeholder="Search a video..."
      type={'text'}
      focusBorderColor="yellow.500"
    />
    <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >{categories.map((item, index) => (
        <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
          <Text children={item} />
        </Button>
      ))}</HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {videos.length > 0 ? (
          videos.map(item => (
            <Video
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              creator={item.createdBy}
              videoCount={item.numOfVideos}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Videos Not Found" />
        )}
      </Stack>
    </Container>
  )
}

export default Videos