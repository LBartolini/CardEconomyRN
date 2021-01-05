import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'react-native-check-box';

export default class NewTransaction extends React.Component {
    state = {
        date: new Date(),
        dateText: '',
        show: false,
        ricaricaChecked: false,
        importo: '',
        descrizione: ''
    }

    sendNewTransaction = () => {
        let transObj = {
            descrizione: this.state.descrizione,
            giorno: this.state.date.getDate(),
            mese: (this.state.date.getMonth()+1),
            anno: this.state.date.getFullYear(),
            importo: this.state.importo,
            ricarica: this.state.ricaricaChecked
        };

        fetch('http://192.168.1.5:5000/new_transaction', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json, text/plain, */*',
            },
            body: JSON.stringify(transObj)
          })
            .then(response => response.json())
            .then(data => {});
        
        this.props.navigation.navigate("home");
    }

    updateDateText = () => {
        try {
            let tmp = this.state.date.getDate() + '/' + (this.state.date.getMonth() + 1) + '/' + this.state.date.getFullYear();
            this.setState({ dateText: tmp });
        } catch (e) { }
    }

    componentDidMount() {
        this.updateDateText();
    }

    onDateChange = (event, selectedDate) => {
        if (event.type == 'set') {
            this.setState({ show: false });
            this.setState({ date: selectedDate });
            this.updateDateText();
        }
    }

    render() {
        return (
            <View style={styles.Body}>
                <View style={styles.Header}>
                    <View style={styles.ViewButton}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("home")}>
                            <MaterialCommunityIcons name="keyboard-backspace" color={"lightgreen"} size={45} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Content}>

                    <View style={styles.Description}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Descrizione: </Text>
                        <TextInput style={styles.InputDescr}
                            multiline={true}
                            maxHeight={80}
                            onChangeText={(value) => this.setState({ descrizione: value })}
                        ></TextInput>
                    </View>

                    <View style={styles.Data}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Data: </Text>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'white', fontSize: 32, paddingLeft: 16 }}>{this.state.dateText}</Text>
                            <TouchableOpacity onPress={() => { this.setState({ show: true }) }}>
                                <Text style={{ color: 'orange', fontSize: 16, paddingRight: 16 }}>MODIFICA</Text></TouchableOpacity>
                        </View>
                        {this.state.show && (<DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.date}
                            mode={'date'}
                            is24Hour={true}
                            display="spinner"
                            onChange={this.onDateChange}
                        />)}
                    </View>

                    <View style={styles.Importo}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Importo: </Text>
                        <TextInput
                            style={styles.InputImp}
                            multiline={false} maxLength={13}
                            placeholderTextColor={"lightgray"} placeholder={"Inserisci importo..."}
                            keyboardType={'numeric'}
                            onChangeText={(value) => this.setState({ importo: value })}
                        ></TextInput>
                    </View>

                    <View style={styles.Ricarica}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Ricarica: </Text>
                        <CheckBox
                            style={{ marginRight: 24 }}
                            checkBoxColor={'white'}
                            onClick={() => {
                                this.setState({
                                    ricaricaChecked: !this.state.ricaricaChecked
                                })
                            }}
                            isChecked={this.state.ricaricaChecked}
                        />
                    </View>

                    <View style={styles.Confirm}>
                        <TouchableOpacity onPress={() => this.sendNewTransaction()}
                            style={{
                                borderRadius: 10,
                                backgroundColor: '#3D3D3D',
                                borderColor: 'black',
                                borderWidth: 1,
                                marginRight: 16
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 24,
                                padding: 20,
                            }}>Conferma </Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

    ViewButton: {
        flex: 1,
        paddingRight: 16,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },

    Content: {
        flex: 7,
        flexDirection: 'column'
    },

    Description: {
        flex: 2,
    },

    Data: {
        flex: 1,
    },

    Importo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Ricarica: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Confirm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    InputDescr: {
        flex: 1,
        color: 'white',
        fontSize: 24,
        backgroundColor: '#3D3D3D',
        borderRadius: 5,
        marginHorizontal: 16,
        marginTop: 4,
        paddingLeft: 6
    },

    InputImp: {
        color: 'white',
        fontSize: 22,
        backgroundColor: '#3D3D3D',
        borderRadius: 5,
        paddingVertical: 4,
        marginHorizontal: 16,
        marginTop: 8,
        textAlign: 'center'
    }
});
