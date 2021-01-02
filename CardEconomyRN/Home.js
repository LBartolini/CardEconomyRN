import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FlatItem from './FlatItem';
import ModalComponent from './Modal';

export default class Home extends React.Component {
    state = {
        modalOpen: false,
        isRefreshing: false,
        transactions: [
            {
                id: '0',
                descr: 'pluto',
                costo: '159',
                data: '19/09/2020',
                ricarica: false
            }
        ],
    }

    onRefresh = () => {
        setState({isRefreshing: false});
    }

    openModal = () => {
        setState({modalOpen: true});
    }

    renderItem = ({ item }) => {
        return (<FlatItem descr={item.descr} costo={item.costo} data={item.data} ricarica={item.ricarica} openModal={this.openModal}/>);
    }

    render() {
        return (
            <View style={styles.Body}>
                <View style={styles.Header}>
                    <View style={styles.ViewSaldo}>
                        <Text style={styles.TextSaldo}>5000€</Text>
                    </View>
                    <View style={styles.ViewButton}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="plus-thick" color={"lightgreen"} size={45} />
                        </TouchableOpacity>
                    </View>

                </View>
                <SafeAreaView style={styles.Flat}>
                    <FlatList
                        data={this.state.transactions}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this.onRefresh}
                    />
                </SafeAreaView>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.modalOpen}
                >
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <ModalComponent />
                    </View>
                </Modal>
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
