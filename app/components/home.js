'use strict';

import React, { Component } from 'react';
import {
    StyleSheet, FlatList, View, Text, ActivityIndicator
} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../actions/';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount(){
        return this.props.getData();
    }

    render(){
        if (this.props.loading){
            return (
                <View style={ styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        }
        else {
            return (
                <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item,index) => index}/>
                </View>
            );
        }
    }

    renderItem({item,index}){
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}(". "){item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        );
    }
};