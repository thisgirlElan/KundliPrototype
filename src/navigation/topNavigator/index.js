import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Component } from 'react';
import Horoscope from '../../screens/horoscope';
import MatchMaking from '../../screens/matchMaking';

const Tab = createMaterialTopTabNavigator();

class TopTabs extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Horoscope"
                screenOptions={{
                    headerShown: false,
                    tabBarIndicatorStyle: {
                        backgroundColor: '#de6523',
                        width: 140,
                        marginLeft: 40,
                        marginRight: 70,
                        height: 3,
                        borderRadius: 20
                    },
                    tabBarActiveTintColor: '#de6523',
                    tabBarInactiveTintColor: '#797a7a',
                    tabBarLabelStyle: { width: 120, fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize' },
                    tabBarStyle: { backgroundColor: 'white', height: 55 },
                }}
            >
                <Tab.Screen name="Horoscope" component={Horoscope} />
                <Tab.Screen name="Match Making" component={MatchMaking} />
            </Tab.Navigator>
        );
    }
}

export default (TopTabs);