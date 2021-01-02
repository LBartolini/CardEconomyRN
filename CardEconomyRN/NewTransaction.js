import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class NewTransaction extends React.Component {
    state = {
        date: new Date(),
        dateText: '',
        show: false
    }

    updateDateText = () => {
        try{
        let tmp = this.state.date.getDate() + '/' + (this.state.date.getMonth() + 1) + '/' + this.state.date.getFullYear();
        this.setState({ dateText: tmp });
        }catch(e){}
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
                        <TextInput style={styles.InputDescr} multiline={true} maxLength={50}></TextInput>
                    </View>
                    <View style={styles.Description}>
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
                    <View style={styles.Description}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Importo: </Text>
                        <TextInput style={styles.InputDescr} multiline={true} maxLength={50}></TextInput>
                    </View>
                    <View style={styles.Description}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Ricarica: </Text>
                        <TextInput style={styles.InputDescr} multiline={true} maxLength={50}></TextInput>
                    </View>
                    <View style={styles.Description}>
                        <Text style={{ color: 'white', fontSize: 24, paddingLeft: 8 }}>Conferma </Text>
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
        flex: 1,
    },

    InputDescr: {
        color: 'white',
        fontSize: 24,
        backgroundColor: '#3D3D3D',
        borderRadius: 5,
        marginHorizontal: 16,
        marginTop: 8
    }
});
