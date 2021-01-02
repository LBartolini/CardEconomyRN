import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ModalComponent extends React.Component {

    render() {
        return (
            <View style={styles.Modal}>
                <Text>prova</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    Modal: {
        flex: 1,
        width: 300,
        height: 300
    }
});