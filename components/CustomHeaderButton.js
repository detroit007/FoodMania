import React from 'react';
import { Platform, TouchableOpacity, withNavigation } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import Icon from 'react-native-vector-icons/FontAwesome5';

import Color from '../constants/Color';



const CustomHeaderButton = props => {

const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=>props.onPress}
      
    >
        <Icon name="bars" 
             color={Platform.OS === 'android' ? 'white' : Color.primaryColor} 
            style={{paddingLeft: 5}} size={22}
        />

    </TouchableOpacity>
  );
};

export default CustomHeaderButton;