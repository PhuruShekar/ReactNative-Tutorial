import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBR9NUjyd-aWiZ6w40XjqN7ipw8cIju2xg',
            authDomain: 'auth-10101.firebaseapp.com',
            databaseURL: 'https://auth-10101.firebaseio.com',
            projectId: 'auth-10101',
            storageBucket: 'auth-10101.appspot.com',
            messagingSenderId: '798655242788'
          }
        );

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.logOutButton}>
                    <Button 
                    onPress={() => firebase.auth().signOut()}
                    >
                        Log Out 
                    </Button>
                    </View>
                );

            case false:
                return <LoginForm />;

            default: 
                return (
                    <View style={styles.spinStyle}>
                    <Spinner 
                        spinnerSize="large"
                        color="#007aff"
                    />
                    </View>);
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinStyle: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logOutButton: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

};

export default App;
