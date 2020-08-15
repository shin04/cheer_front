import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import axios from 'axios';

const login = () => {
    axios.get('http://192.168.3.2:8080/posts')
        .then((response) => {
            console.log('success !!!');
            console.log(response);
        })
        .catch((error) => {
            console.log('error !!!');
            console.log(error);
        })
    // axios
    //     .post('login', {
    //         email: 'user1@user.com',
    //         password: 'useruser'
    //     })
    //     .then((response) => {
    //         console.log('success !!!')
    //         console.log(response.data)
    //     })
    //     .catch((error) => {
    //         console.log('error !!!')
    //         console.log(error);
    //     });
}

export default function loginVoew() {
    return (
        <View style={styles.container}>
            <Text>Login View</Text>
            <Button title="login" onPress={() => login()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
});