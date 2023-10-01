import {View, Text} from 'react-native';
import React from 'react';
import { useGetPostByNameQuery } from '../services';

const Page = () => {
  const {data, error, isLoading} = useGetPostByNameQuery('1');
  React.useEffect(() => {
    console.log("data",data,"error",error,"load",isLoading);
  }, [data, error, isLoading])


  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>App.js</Text>
  </View>
  );
};

export default Page;
