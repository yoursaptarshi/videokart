import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
//import { getCourseLectures } from '../../redux/actions/course';
//import Loader from '../Layout/Loader/Loader';

const CoursePage = ({user}) => {
    const [lectureNumber, setLectureNumber] = useState(0);
    //const { lectures, loading } = useSelector(state => state.course);
  //const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    //dispatch(getCourseLectures(params.id));
  }, [//dispatch,
     params.id]);
     if (
        user.role !== 'admin' &&
        (user.subscription === undefined || user.subscription.status !== 'active')
      ) {
        return <Navigate to={'/subscribe'} />;
      }
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      </Grid>
  )
}

export default CoursePage