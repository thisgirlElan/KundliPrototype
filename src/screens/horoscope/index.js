import React, { Component } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ScrollView,
    Pressable,
    ActivityIndicator
} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';
import Modal from 'react-native-modal';
import DateTimePicker from '@react-native-community/datetimepicker';

class Horoscope extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Durlabh Jain",
            gender: 'Male',
            genderTrue: true,
            cob: 'India',
            pob: 'Delhi',
            location: '28.7041' + '\u00B0' +'N, 77.1025' +'\u00B0' + 'E',
            language: 'English',
            modalOpen: false,
            countryModal: false,
            cityModal: false,
            cityLoading: false,
            countryLoading: false,
            dateModal: false,
            timeModal: false,
            date: new Date(),
            time: new Date(Date.now()),
            displayDate: '15/07/1979',
            displayTime: '12:50 AM'
        }
    }

    nameChange = (name) => {
        this.setState({
            name: name
        })
    }

    genderChange = () => {
        this.setState({
            genderTrue: !this.state.gender
        })
    }

    dobChange = (event, value) => {
        const selectedDate = value || this.state.date;
        let tempDate = new Date(selectedDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        this.setState({
            date: selectedDate,
            displayDate: fDate,
            dateModal: false
        })
    }

    tobChange = (event, value) => {
        const selectedDate = value || this.state.date;
        let tempDate = new Date(selectedDate);
        this.setState({
            time: selectedDate,
            displayTime: tempDate.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
            timeModal: false
        })
    }

    languageChange = (lang) => {
        this.setState({
            language: lang
        })
    }

    openModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container} >
                <ScrollView style={styles.container}>
                    <View style={styles.viewContainer}>
                        <View style={styles.outerContainer}>
                            <Text style={styles.title}>Name</Text>
                            <View style={styles.innerContainer}>
                                <TextInput
                                    onChangeText={(name) => this.nameChange(name)}
                                    defaultValue={this.state.name}
                                    style={{ textAlign: 'center', fontSize: 16, fontWeight: '500' }}
                                />
                                <FontAwesome
                                    name={"user"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </View>
                        </View>
                        <View style={styles.hrLine} />
                    </View>


                    <View style={styles.viewContainer}>
                        <View style={styles.outerContainer}>
                            <Text style={styles.title}>Gender</Text>
                            <View style={styles.innerContainer}>
                                <View style={{
                                    borderWidth: 1.5,
                                    borderRadius: 20,
                                    borderColor: '#ccc',
                                    flexDirection: 'row'
                                }}>
                                    <Pressable
                                        onPress={() => {
                                            this.setState({
                                                gender: 'Male'
                                            })
                                        }}
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            borderColor: 'transparent',
                                            backgroundColor: this.state.gender == 'Male' ? '#de6523' : 'transparent'
                                        }}>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 16, fontWeight: '500',
                                            color: this.state.gender == 'Male' ? 'white' : 'black',
                                            paddingVertical: 5,
                                            paddingHorizontal: 20
                                        }}>Male</Text>
                                    </Pressable>

                                    <Pressable
                                        onPress={() => {
                                            this.setState({
                                                gender: 'Female'
                                            })
                                        }}
                                        style={{
                                            borderWidth: 1,
                                            borderRadius: 20,
                                            borderColor: 'transparent',
                                            backgroundColor: this.state.gender == 'Female' ? '#de6523' : 'transparent'
                                        }}>
                                        <Text style={{
                                            textAlign: 'center',
                                            fontSize: 16, fontWeight: '500',
                                            color: this.state.gender == 'Female' ? 'white' : 'black',
                                            paddingVertical: 5,
                                            paddingHorizontal: 20
                                        }}>Female</Text>
                                    </Pressable>
                                </View>

                                <Foundation
                                    name={"male-female"}
                                    size={25}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </View>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={[styles.outerContainer, { paddingVertical: 10 }]}>
                            <Text style={styles.title}>Birth Date</Text>
                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        dateModal: true
                                    })
                                }}
                                style={styles.innerContainer}>
                                <Text style={{ color: 'black', marginLeft: 5, textAlign: 'center', fontSize: 16, fontWeight: '500' }}>
                                    {this.state.displayDate}
                                </Text>
                                <FontAwesome
                                    name={"calendar"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={[styles.outerContainer, { paddingVertical: 10 }]}>
                            <Text style={styles.title}>Birth Time</Text>
                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        timeModal: true
                                    })
                                }}
                                style={styles.innerContainer}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome
                                        name={"calendar-check-o"}
                                        size={20}
                                    />
                                    <Text style={{ color: 'black', marginLeft: 5, textAlign: 'center', fontSize: 16, fontWeight: '500' }}>
                                        {this.state.displayTime}
                                    </Text>
                                </View>
                                <FontAwesome
                                    name={"clock-o"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={[styles.outerContainer, { paddingVertical: 10 }]}>
                            <Text style={styles.title}>Birth Country</Text>
                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        countryModal: true,
                                        countryLoading: true
                                    }, () => {
                                        setTimeout(() => {
                                            this.setState({
                                                countryLoading: false
                                            })
                                        }, 800);
                                    })
                                }}
                                style={styles.innerContainer}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'black' }}>{this.state.cob}</Text>
                                <FontAwesome
                                    name={"globe"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={[styles.outerContainer, { paddingVertical: 10 }]}>
                            <Text style={styles.title}>Birth Place</Text>
                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        cityModal: true,
                                        cityLoading: true
                                    }, () => {
                                        setTimeout(() => {
                                            this.setState({
                                                cityLoading: false
                                            })
                                        }, 800);
                                    })
                                }}
                                style={styles.innerContainer}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'black' }}>{this.state.pob}</Text>
                                <Entypo
                                    name={"location-pin"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </Pressable>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={[styles.outerContainer, { paddingVertical: 10 }]}>
                            <Text style={styles.title}>Lat/Long</Text>
                            <View style={styles.innerContainer}>
                                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '500', color: 'black' }}>
                                    {this.state.location}
                                </Text>
                                <FontAwesome
                                    name={"location-arrow"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </View>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={styles.viewContainer}>
                        <View style={styles.outerContainer}>
                            <Text style={styles.title}>Language</Text>
                            <View style={styles.innerContainer}>
                                <Pressable
                                    onPress={() => {
                                        this.openModal()
                                    }}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        paddingVertical: 10,
                                        marginLeft: 5
                                    }}>

                                    {!this.state.modalOpen &&
                                        <Text style={{ fontSize: 16, color: 'black' }}>{this.state.language}</Text>
                                    }
                                    <Pressable
                                        style={{ marginLeft: this.state.modalOpen ? 140 : 90 }}
                                        onPress={() => {
                                            this.openModal()
                                        }}>
                                        <FontAwesome
                                            name={"caret-down"}
                                            size={20}
                                        />
                                    </Pressable>
                                </Pressable>
                                <FontAwesome
                                    name={"language"}
                                    size={20}
                                    color={'black'}
                                    style={{ marginRight: 20 }}
                                />
                            </View>
                        </View>
                        <View style={styles.hrLine} />
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
                        <View style={{ backgroundColor: '#de6523', borderRadius: 5 }}>
                            <Text style={{ padding: 10, fontSize: 16, fontWeight: '500', color: 'white' }}>Get Horoscope</Text>
                        </View>
                        <View style={{ elevation: this.state.modalOpen ? -3 : 0, backgroundColor: '#de6523', borderRadius: 5, marginLeft: 20 }}>
                            <Text style={{ padding: 10, fontSize: 16, fontWeight: '500', color: 'white' }}>Post your question</Text>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: 'rgba(0,0,0,.05)',
                        flexDirection: 'row',
                        marginTop: 20,
                        height: 50,
                        alignItems: 'center',
                        width: '90%',
                        alignSelf: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <FontAwesome
                            name={"twitter"}
                            size={20}
                            color={'#44b6e3'}
                            style={{ marginLeft: 20 }}
                        />
                        <FontAwesome
                            name={"facebook"}
                            size={20}
                            color={'#1c63e8'}
                        />
                        <FontAwesome
                            name={"whatsapp"}
                            size={20}
                            color={'green'}
                        />
                        <Fontisto
                            name={"email"}
                            size={20}
                            color={'lightBlue'}
                        />
                        <Entypo
                            name={"dots-three-horizontal"}
                            size={20}
                            color={'lightBlue'}
                            style={{ marginRight: 20 }}
                        />
                    </View>
                    {this.state.modalOpen &&
                        <View style={{
                            flexDirection: 'column',
                            width: 120,
                            height: 120,
                            backgroundColor: 'white',
                            elevation: 5,
                            alignSelf: 'center',
                            left: 50,
                            bottom: 180,
                            justifyContent: 'center'

                        }}>
                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        language: 'English',
                                        modalOpen: false
                                    })
                                }}
                                style={{ marginLeft: 10, paddingTop: 10 }}
                            >
                                <Text style={{ fontSize: 16, color: 'black' }}>English</Text>

                            </Pressable>
                            <View style={[styles.hrLine, { top: 5 }]} />
                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        language: 'Hindi',
                                        modalOpen: false
                                    })
                                }}
                                style={{ marginLeft: 10, marginVertical: 15 }}>
                                <Text style={{ fontSize: 16, color: 'black' }}>Hindi</Text>
                            </Pressable>
                        </View>
                    }


                    <Modal
                        isVisible={this.state.countryModal}
                        hasBackdrop
                        backdropOpacity={0.93}
                    >
                        <View style={{
                            flexDirection: 'column',
                            width: '90%',
                            height: '80%',
                            backgroundColor: 'white',
                            alignSelf: 'center',

                        }}>
                            <TextInput
                                placeholder="Search Country"
                                style={{
                                    fontSize: 16,
                                    marginLeft: 10,
                                    paddingTop: 10
                                }}
                            />
                            <View style={[styles.hrLine, { top: 5 }]} />
                            {this.state.countryLoading ?
                                <View
                                    style={{ alignSelf: 'center', marginTop: 20 }}>
                                    <ActivityIndicator size='large' color={'green'} />
                                </View>
                                :
                                <View
                                    style={{ alignSelf: 'center', marginTop: 20 }}>
                                    <Text style={{ fontSize: 20, color: '#ccc', fontStyle: 'italic' }}>No matches</Text>
                                </View>
                            }
                        </View>
                        <Pressable
                            onPress={() => {
                                this.setState({
                                    countryModal: false,
                                    countryLoading: false
                                })
                            }}
                            style={{
                                backgroundColor: '#ccc',
                                marginVertical: 15,
                                alignSelf: 'center',
                                borderRadius: 10
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', padding: 20 }}>Cancel</Text>
                        </Pressable>
                    </Modal>

                    <Modal
                        isVisible={this.state.cityModal}
                        hasBackdrop
                        backdropOpacity={0.93}
                    >
                        <View style={{
                            flexDirection: 'column',
                            width: '90%',
                            height: '80%',
                            backgroundColor: 'white',
                            alignSelf: 'center',

                        }}>
                            <TextInput
                                placeholder="Search City"
                                style={{
                                    fontSize: 16,
                                    marginLeft: 10,
                                    paddingTop: 10
                                }}
                            />
                            <View style={[styles.hrLine, { top: 5 }]} />
                            {this.state.cityLoading ?
                                <View
                                    style={{ alignSelf: 'center', marginTop: 20 }}>
                                    <ActivityIndicator size='large' color={'green'} />
                                </View>
                                :
                                <View
                                    style={{ alignSelf: 'center', marginTop: 20 }}>
                                    <Text style={{ fontSize: 20, color: '#ccc', fontStyle: 'italic' }}>No matches</Text>
                                </View>
                            }

                        </View>
                        <Pressable
                            onPress={() => {
                                this.setState({
                                    cityModal: false,
                                    cityLoading: false
                                })
                            }}
                            style={{
                                backgroundColor: '#ccc',
                                marginVertical: 15,
                                alignSelf: 'center',
                                borderRadius: 10
                            }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey', padding: 20 }}>Cancel</Text>
                        </Pressable>
                    </Modal>

                    {this.state.timeModal && (
                        <DateTimePicker
                            testID={'dateTimePicker'}
                            display="spinner"
                            mode="time"
                            value={this.state.time}
                            is24Hour={false}
                            onChange={(event, value) => this.tobChange(event, value)}
                        />
                    )}

                    {this.state.dateModal && (
                        <DateTimePicker
                            testID={'dateTimePicker'}
                            display="spinner"
                            mode="date"
                            value={this.state.date}
                            is24Hour={false}
                            onChange={(event, value) => this.dobChange(event, value)}
                        />
                    )}

                </ScrollView>
            </SafeAreaView >
        )
    }

}

export default (Horoscope);