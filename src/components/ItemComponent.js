import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ItemComponent = () => {
  return (
    <View>
      <Text style={{fontSize: 19, fontWeight: 'bold'}}>
        Eat What makes you happy{' '}
      </Text>
      <View>
        <Image
          style={styles.MiddleImage}
          source={{
            uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.timesofindia.com%2Flife-style%2Ffood-news%2Fthe-right-way-to-arrange-meals-in-a-thali-as-per-tradition%2Fphotostory%2F94078326.cms&psig=AOvVaw2R7iRGGhFJvu8ID_DZdjCX&ust=1699061913649000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLC0s4DZpoIDFQAAAAAdAAAAABAJ',
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
