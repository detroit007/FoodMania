import React from 'react';
import {View, 
        Text, 
        TouchableOpacity, 
        StyleSheet,
        ImageBackground,
    } from 'react-native';

const MealItem = props =>{
    return(

        <View style={styles.container}>

            <TouchableOpacity 
                activeOpacity={.8} 
                style={styles.contBtn}
                onPress={props.onSelectMeal}
            >

                <View style={styles.mealItem}>

                  <View style={{...styles.mealRow, ...styles.mealBody}} >
                    <ImageBackground 
                        style={styles.bgImageg}
                        source={{uri: props.image.toString()}}
                    >
                        <Text numberOfLines={1} style={styles.mealTtileText}>{props.title}</Text>
                    </ImageBackground>
                  </View>

                  <View style={{...styles.mealRow, ...styles.mealDetail}} >
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                  </View>

                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles= StyleSheet.create({
    container :{
        flex: 1,
        
    },
    mealItem :{
        height: 200,
        margin: 10,
        overflow: 'hidden',
        borderRadius: 10,
    },
    bgImageg :{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    contBtn :{
        flex: 1
    },
    mealRow :{
        flexDirection: 'row',
    },
    mealBody :{
        width: '100%',
        height: '85%',
    },
    mealDetail :{
        width: '100%',
        height: '15%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5'
    },
    mealTtileText :{
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 5,
    }


});

export default MealItem;