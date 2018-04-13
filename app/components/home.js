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
}