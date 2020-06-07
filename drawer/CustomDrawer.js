import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { exp } from 'react-native-reanimated';
import { Alert, StyleSheet, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



  const CustomDrawer = (props) =>{
      return(
        <DrawerContentScrollView {...props}>
                <View style={styles.drawerHead}>
                    <ImageBackground 
                        style={styles.drawerimg}
                        source={require('./assets/img/drawerbg.jpg')}    
                    >
                        <View style={styles.imgtransparet}></View>
                        <Text style={styles.drawerTitle}>Food Mania</Text>
                    </ImageBackground>
                </View >
            <DrawerItemList {...props} />
      </DrawerContentScrollView>
      );
  }

  const styles = StyleSheet.create({
    drawerHead :{
        paddingTop: 0,
        marginTop: 0,
        height: 200,
        backgroundColor: 'grey',
    },
    drawerimg :{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    imgtransparet :{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        position: 'absolute',
        opacity: 0.4,
    },
    drawerTitle :{
        fontSize: 22,
        color: 'white',
        paddingLeft: 10,
        paddingBottom: 5,
        fontWeight: 'bold'
    }
  });

  export default CustomDrawer;