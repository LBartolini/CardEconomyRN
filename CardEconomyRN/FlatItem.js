import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class FlatItem extends React.Component {
    render() {
        const descrizione = this.props.descr;
        const data = this.props.data;
        const costo = this.props.costo;
        const ricarica = this.props.ricarica;

        return (
            <View style={styles.Transaction}>
                <View style={styles.ViewDescr}>
                    <Text style={{ color: 'white', fontSize: 16, flex: 2 }}>{data}</Text>
                    <SafeAreaView style={{flex: 3}}>
                        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}>
                            <Text style={{ color: 'white', fontSize: 16 }}>{descrizione}</Text>
                        </ScrollView>
                    </SafeAreaView>
                    <Text style={{ color: (ricarica ? 'green' : 'orange'), fontSize: 18, flex: 1 }}>{(ricarica ? '' : '-')}{costo} €</Text>
                </View>
                <View style={styles.ViewButton}>
                    <TouchableOpacity onPress={this.props.openModal}>
                        <MaterialCommunityIcons color={'lightblue'} size={35} name="minus-box" style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Transaction: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        justifyContent: 'center',
        borderTopWidth: 1,
        borderColor: '#CFDBD5',
        paddingHorizontal: 8
    },

    ViewDescr: {
        flex: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },

    ViewButton: {
        flex: 1
    }
})