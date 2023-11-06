import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Categories from '../components/Categories';
import ItemComponent from '../components/ItemComponent';
import hotels from '../data/hotels';
import Hotels from '../components/Hotels';

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView style={{backgroundColor: '#F0F0F0'}}>
      <View style={{margin:10}}> 
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D8D8D8',
            borderRadius: 6,
          }}>
          <AntDesign
            style={{margin: 5}}
            name="search1"
            size={20}
            color="#E52B50"
          />
          <TextInput
            style={{paddingLeft: 5}}
            placeholder="Resturant name , cuisines, or a dish "
          />
        </View>
        <Categories />
        <Pressable style={{margin: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU',
              }}
            />
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg',
              }}
            />
          </View>
        </Pressable>
        <ItemComponent />
        {data.map(item => (
          <Hotels resturant={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: 'cover',
  },
});
