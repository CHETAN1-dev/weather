import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
  import React, {useState} from 'react';
  import {deviceHeight, deviceWidth} from './Dimensions';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Cards from './Cards';
  
  export default function Home(props) {
    const [city, setCity] = useState('');
  
    const cities = [
      {
        name: 'New Delhi'
      },
      {
        name: 'Indore'
     
      },
      {
        name: 'Bhopal'
    
      },
      {
        name: 'Ujjain'
        
      },
      {
        name: 'Mumbai'
    
      },
    ];
  
    return (
      <View>
        <ImageBackground
          source={require('../assets/images/streetlight-cloudy-day.jpg')}
          style={{height: deviceHeight, width: deviceWidth}}
          imageStyle={{opacity: 10}}
        />
        <View
          style={{
            position: 'absolute',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: deviceWidth - 20,
            }}>
            <Icon name="menu" size={46} color="white" />
            <Image
              source={require('../assets/images/streetlight-cloudy-day.jpg')}
              style={{height: 46, width: 46, borderRadius: 50}}
            />
          </View>
  
          <View style={{paddingHorizontal: 20, marginTop: 100}}>
            <Text style={{fontSize: 40, color: 'white'}}>Weather </Text>
            <Text style={{color: 'yellow', fontSize: 18, fontWeight: 'bold'}}>
              Search the city by the name
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'white',
                marginTop: 16,
                paddingHorizontal: 10,
              }}>
              <TextInput
                value={city}
                onChangeText={val => setCity(val)}
                placeholder="Search City"
                placeholderTextColor="white"
                style={{paddingHorizontal: 10, color: 'white', fontSize: 20}}
              />
              <TouchableOpacity onPress={() => props.navigation.navigate('Details', {name: city})}>
                <Icon name="search" size={22} color="white" />
              </TouchableOpacity>
            </View>
  
            <Text style={{color: 'white', fontSize: 25, paddingHorizontal: 10, marginTop: 220, marginBottom: 20}}>
              Location You migth know:-
            </Text>
            <FlatList
            horizontal
              data={cities}
              renderItem={({item}) => (
                <Cards name={item.name} navigation={props.navigation} />
              )}
            />
          </View>
        </View>
      </View>
    );
  }