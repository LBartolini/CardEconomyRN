import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export function DrawerMenu(props) {
    return(
        <View style={{flex:1, backgroundColor: '#2F2F37'}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            label="Nuova Transazione"
                            labelStyle={{color: 'white'}}
                            onPress={() => {
                                props.navigation.navigate('new-transaction');
                            }}
                        />
                        <DrawerItem 
                            label="Tutte le transazioni"
                            labelStyle={{color: 'white'}}
                            onPress={() => {
                                props.navigation.navigate('history');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    label="Impostazioni"
                    labelStyle={{color: 'white'}}
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });