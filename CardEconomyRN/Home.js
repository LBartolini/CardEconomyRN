import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatItem from './FlatItem';

export default class Home extends React.Component {
    state = {
        isRefreshing: false,
        totalVisible: false,
        transactions: [],
        total: 0
    }

    onRefresh = () => {
        fetch('http://lbartolini.ddns.net:5000/get_partial', {
            method: 'get',
            headers: {
              'Accept': 'application/json, text/plain, */*',
            }
          })
            .then(response => response.json())
            .then(data => {
                this.setState({ transactions: data.reverse() });
            });
        
        fetch('http://lbartolini.ddns.net:5000/compute_total', {
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
                    <View style={styles.ViewButtonLeft}>
                        <TouchableOpacity onPress={() => this.setState({ totalVisible: !(this.state.totalVisible) })}>
                            <MaterialCommunityIcons name={ (this.state.totalVisible ? "eye-off-outline" : "eye-outline") } color={"lightgreen"} size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ViewSaldo}>
                        <Text style={styles.TextSaldo}>{ (this.state.totalVisible ? this.state.total.toFixed(2) : "-----" ) } €</Text>
                    </View>
                    <View style={styles.ViewButtonRight}>
                        <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                            <MaterialCommunityIcons name="menu" color={"lightgreen"} size={40} />
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

    ViewButtonRight: {
        flex: 1,
        paddingRight: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    ViewButtonLeft: {
        flex: 1,
        paddingLeft: 12,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
