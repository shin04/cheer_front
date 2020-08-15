import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal } from 'react-native';

export default function settingView() {
    const [login_modal_visible, setLoginModalVisible] = useState(false);

    console.log(login_modal_visible);

    return (
        <View style={styles.container}>
            <Text>Setting View</Text>

            <Modal 
                visible={login_modal_visible}
                animationType="slide"
                transparent={true}>

                <View>
                <Text>this is Modal !!!</Text>
                <Button title="close" onPress={() => setLoginModalVisible(false)}/>
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