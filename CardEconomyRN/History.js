import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatItem from './FlatItem';

export default class TransactionHistory extends React.Component {
    state = {
        isRefreshing: false,
        transactions: [],
    }

    onRefresh = () => {
        fetch('http://lbartolini.pythonanywhere.com/get_all', {
            method: 'get',
            headers: {
              'Accept': 'application/json, text/plain, */*',
            }
          })
            .then(response => response.json())
            .then(data => {
                this.setState({ transactions: data.reverse() });
            });
    }

    componentDidMount() {
        this.onRefresh();
    }

    renderItem = ({ item }) => {
        return (<FlatItem descr={item.descr} costo={item.importo} data={item.data} ricarica={item.ricarica} id={item.id} refresh={this.onRefresh} />);
    }

    render() {
        return (
            <View style={styles.Body}>
                <View style={styles.Header}>
                    <View style={styles.ViewButtonRight}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('home')}>
                            <MaterialCommunityIcons name="keyboard-backspace" color={"lightgreen"} size={40} />
                        </TouchableOpacity>
                    </View>
                </View>

                <SafeAreaView style={styles.Flat}>
                    <FlatList
                        data={this.state.transactions}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => { this.onRefresh() }}
                    />
                </SafeAreaView>
                <StatusBar style="light" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Body: {
        flex: 1,
        backgroundColor: '#292929',
    },

    Header: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: '10%',
    },

    Flat: {
        flex: 7,
        width: '100%',
    },


    ViewButtonRight: {
        flex: 1,
        paddingRight: 8,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});
