import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatItem from './FlatItem';

export default class Home extends React.Component {
    state = {
        isRefreshing: false,
        transactions: [],
        total: 0
    }

    onRefresh = () => {
        fetch('http://192.168.1.5:5000/get_all', {
            method: 'get',
            headers: {
              'Accept': 'application/json, text/plain, */*',
            }
          })
            .then(response => response.json())
            .then(data => {
                this.setState({ transactions: data.reverse() });
            });
        
        fetch('http://192.168.1.5:5000/compute_total', {
                method: 'get',
                headers: {
                  'Accept': 'application/json, text/plain, */*',
                }
              })
                .then(response => response.json())
                .then(data => {
                    this.setState({ total: data.total });
                    this.setState({ isRefreshing: false });
                });
    }

    componentWillMount() {
        this.onRefresh();
    }

    renderItem = ({ item }) => {
        return (<FlatItem descr={item.descr} costo={item.importo} data={item.data} ricarica={item.ricarica} id={item.id} refresh={this.onRefresh} />);
    }

    render() {
        return (
            <View style={styles.Body}>
                <View style={styles.Header}>
                    <View style={styles.ViewSaldo}>
                        <Text style={styles.TextSaldo}>{this.state.total} €</Text>
                    </View>
                    <View style={styles.ViewButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("new-transaction")}>
                            <MaterialCommunityIcons name="plus" color={"lightgreen"} size={45} />
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

    TextSaldo: {
        color: 'white',
        fontSize: 45
    },

    ViewSaldo: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    ViewButton: {
        flex: 1,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
