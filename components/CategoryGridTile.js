import React from 'react';
import { TouchableOpacity, 
         View, 
         Text, 
         StyleSheet, 
         TouchableNativeFeedback, 
         Platform,
        } from 'react-native';

const CategoryGridTile = props =>{
    let TouchableCom = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchableCom = TouchableNativeFeedback;
    }

    return(
        <View style={styles.gridItem}>
            <TouchableCom style={{flex: 1}}  onPress={props.onSelect}>
            <View style={{...styles.container, backgroundColor: props.color}}>
                <Text numberOfLines={2} style={styles.titleText}>{props.title}</Text>
            </View>
            </TouchableCom>
        </View>
      );
}

const styles = StyleSheet.create({
    gridItem :{
        flex: 1,
        margin: 10, 
        elevation: 5,
        height: 150,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        borderRadius: 10,
    },
    container :{
        flex: 1,
        borderRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    titleText :{
        fontSize: 22,
        textAlign: 'center',
        textShadowColor: 'grey',
        textShadowRadius: 2,
        textShadowOffset: {width: 0, height: 0.5},
    }
});

export default CategoryGridTile;