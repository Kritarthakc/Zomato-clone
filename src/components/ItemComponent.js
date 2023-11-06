import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemComponent = () => {
  return (
    <View>
      <Text style={{fontSize: 19, fontWeight: 'bold'}}>
        Eat What makes you happy{' '}
      </Text>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <View style={{margin:9}}>
        <Image
          style={styles.MiddleImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU'
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'gray',
            margin: 10,
            textAlign: 'center',
          }}>
          Thalis
        </Text>
      </View>

      <View style={{margin:9}}> 
        <Image
          style={styles.MiddleImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU'
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'gray',
            margin: 10,
            textAlign: 'center',
          }}>
          Pizzas
        </Text>
      </View>

      <View style={{margin:9}}>
        <Image
          style={styles.MiddleImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU'
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'gray',
            margin: 10,
            textAlign: 'center',
          }}>
          Burger
        </Text>
      </View>
      <View style={{margin:9}}>
        <Image
          style={styles.MiddleImage}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU'
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: 'gray',
            margin: 10,
            textAlign: 'center',
          }}>
          Dosas
        </Text>
      </View>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
    MiddleImage:{
        width:70,
        height:70,
        borderRadius:35,
    }
});
