import React, {Component} from 'react';
import { View, AsyncStorage } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/home'
import NewQuote from './components/new_quote'
import Data from './quotes.json'
import {connect} from 'react-redux';
import { getQuotes } from './actions'

class Main extends Component {
    componentDidMount(){
        var _this = this;
        AsyncStorage.getItem('data', (err,data) =>{
            if (data === null){
                AsyncStorage.setItem('data', JSON.stringify(Data.quotes));
                _this.props.getQuotes();
            }
        });
    }
    
}