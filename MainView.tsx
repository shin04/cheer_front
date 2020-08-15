import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

import Loginview from './LoginView'

export default function Mainview() {
    const [login_modal_visible, setLoginModalVisible] = useState(true);

    console.log(login_modal_visible);

    return (
        <View style={styles.container}>
            <Text>Main View</Text>

            <Modal 
                visible={login_modal_visible}
                animationType="slide"
                transparent={true}>

                <View>
                {/* <Text>this is Modal !!!</Text>
                <Button title="close" onPress={() => setLoginModalVisible(false)}/> */}
                <Loginview></Loginview>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});