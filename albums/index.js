//Import Library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Make component
const App = () => (
    <Header headerText={'Albums'} />
);

//Render it
AppRegistry.registerComponent('albums',() => App);