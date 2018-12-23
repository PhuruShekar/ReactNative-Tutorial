/* eslint-disable react-native/no-inline-styles */
//Import Library
import React from 'react';
import { View,AppRegistry } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//Make component
const App = () => (
    <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);

//Render it
AppRegistry.registerComponent('albums',() => App);