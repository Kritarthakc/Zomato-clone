import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Hotels = props => {
  const resturant = props.resturant;
  console.log(resturant);
  return (
    <View style={{}}>
      <View style={{margin: 10}}>
        <Image
          style={{
            witdth: '100',
            aspectRatio: 6 / 4,
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
          }}
          source={{uri: resturant.featured_image}}
        />
        <View
          style={{
            padding: 8,
            backgroundColor: '#FFF',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 17, fontWeight: '600'}}>
              {resturant.name}
            </Text>
            <Text style={{fontSize: 15, color: 'gray', marginVertical: 5}}>
              {resturant.cuisines}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#17B169',
              padding: 7,
              borderRadius: 6,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                paddingRight: 5,
                color: '#FFF',
                fontSize: 16,
              }}>
              {resturant.aggregate_rating}
            </Text>
            <AntDesign name="star" size={18} color="#FFF" />
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            right: 20,
            backgroundColor: '#FFF',
            top: 170,
            padding: 4,
            borderRadius: 5,
          }}>
          <Text>{resturant.time}</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#007FFF',
            padding: 6,
            borderTopRightRadius:5,
            borderBottomRightRadius:5,
            top: 160,
          }}>
          <Text>{resturant.offer}</Text>
          <Text style={{fontSize:12, fontWeight:"bold", color:"white",paddingTop:4}}>Upto ₹40</Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFF',
            padding: 5,
            marginBottom: 8,
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
          }}>
          <Text style={{borderColor: '#D3D3D3', height: 1, borderWidth: 1}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                backgroundColor: '#7CB9E8',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AntDesign name="doubleright" size={20} color="white" />
            </View>
            <Text style={{marginLeft: 5}}>
              {resturant.no_of_Delivery} +orders placed here
            </Text>

            <View style={{marginLeft: 60}}>
              <Text style={{fontSize: 12, fontWeight: 'bold'}}>MAX SAFTEY</Text>
              <Text style={{fontSize: 12, fontWeight: 'bold', color: 'gray'}}>
                DELIVERY
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hotels;

const styles = StyleSheet.create({});
