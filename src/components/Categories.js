import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';

const Categories = () => {
  const items = [
    {
      id: '1',
      name: 'fastest delivery',
    },
    {
      id: '2',
      name: 'ratimg 4.0',
    },
    {
      id: '3',
      name: 'offers',
    },
    {
      id: '4',
      name: 'cuisines',
    },
    {
      id: '5',
      name: 'MAX Saftey',
    },
    {
      id: '6',
      name: 'Pro',
    },
  ];
  return (
    <View style ={{marginTop:10}}>
      <FlatList horizontal={true} showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({item}) => (
          <Pressable style={{backgroundColor:"#E25822", margin:7, padding:5, borderRadius:6}}>
            <Text style={{color:"#FFF"}}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Categories;
