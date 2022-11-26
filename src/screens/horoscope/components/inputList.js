import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

class InputList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {IconType} = this.props.iconType
        return (
            <View style={styles.viewContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginLeft: 20, fontSize: 18, color: 'black' }}>Name</Text>
                    <TextInput
                        onChangeText={this.props.onChange()}
                        defaultValue={this.props.title}
                        style={{ textAlign: 'center', fontSize: 18 }}
                    />
                    <IconType
                        name={this.props.icon}
                        size={20}
                        color={'black'}
                        style={{ marginRight: 20 }}
                    />
                </View>
                <View style={styles.hrLine} />
            </View>
        )
    }
}

export default (InputList);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    hrLine: {
        marginTop: 10,
        width: '100%',
        height: 1.5,
        backgroundColor: '#ccc'
    },
    viewContainer: {
        paddingVertical: 20
    }
})