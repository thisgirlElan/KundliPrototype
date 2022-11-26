import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  NativeModules,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TopTabs from './src/navigation/topNavigator';

import Entypo from 'react-native-vector-icons/Entypo';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loading: true
    }
  }
  componentDidMount(){
    if (Platform.OS === 'android'){
      NativeModules.SplashScreenModule.hide();
    }
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 1000);
  }
  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={{height: 70, backgroundColor: '#de6523'}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'#de6523'}
        />
        <View style={styles.titleContainer}>
          <Entypo 
          name='menu'
          size={30}
          style={styles.sectionIcon}
          />
          <Text style={styles.sectionTitle}>Kundli by Durlabh Jain</Text>
        </View>
        </SafeAreaView>
        <TopTabs />
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    height: 70,
    backgroundColor: '#de6523',
  },
  sectionIcon: {
    marginLeft: 20, 
    color: 'white'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginLeft: 50
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
