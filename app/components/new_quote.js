import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Text, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {addQuote, updateQuote} from "../actions";
import {Actions} from 'react-native-router-flux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

class NewQuote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: (props.edit) ? props.quote.author : "",
            quote: (props.edit) ? props.quote.quote : ""
        };
        this.generateID = this.generateID.bind(this);
        this.addQuote = this.addQuote.bind(this);
    }

    generateID() {
        let d = new Date().getTime();
        let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(5);
        });
        return id;
    }

    addQuote() {
        if (this.props.edit) {
            let quote = this.props.quote;
            quote['author'] = this.state.author;
            quote['quote'] = this.state.quote;
            this.props.updateQuote(quote);
        }
        else {
            let id = this.generateID();
            let quote = {"id": id, "author": this.state.author, "quote": this.state.quote};
            this.props.addQuote(quote);
        }
        Actions.pop();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
                    <TextInput
                        onChangeText={(text) => this.setState({author: text})}
                        placeholder={"Author"}
                        autoFocus={true}
                        style={[styles.title]}
                        value={this.state.author}
                    />
                    <TextInput
                        multiline={true}
                        onChangeText={(text) => this.setState({quote: text})}
                        placeholder={"Enter Quote"}
                        style={[styles.quote]}
                        value={this.state.quote}
                    />
                </View>
                <TouchableOpacity style={[styles.saveBtn]}
                                  disabled={(this.state.author.length > 0 && this.state.quote.length > 0) ? false : true}
                                  onPress={this.addQuote}>
                    <Text style={[styles.buttonText, {
                        color: (this.state.author.length > 0 && this.state.quote.length > 0) ? "#FFF" : "rgba(255,255,255,.5)"
                    }]}>
                        Save
                    </Text>
                </TouchableOpacity>
                <KeyboardSpacer/>
            </View>
        );
    }
}