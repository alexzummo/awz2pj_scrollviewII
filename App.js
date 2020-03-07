import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import { LinearGradient } from 'expo-linear-gradient';

import * as Facebook from 'expo-facebook';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './Components/LoadingScreen';
import HomeScreen from './Components/HomeScreen';
import * as SecureStore from 'expo-secure-store';
import moment from 'moment';
import MainCalendarScreen from './Components/MainCalendarScreen'

export default function App() {
  [events, setEvents] = useState([])



  const fetchData = async () => {
    let response = await fetch(
      'https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/cards.json'
    );
    let parseObject = await response.json();
    let eventArray = assignIDs(parseObject);
    setEvents(eventArray)
  }

  function assignIDs(events) {
    return events.map((event, index) => {
      event.id = index;
      event.rawDate = event.date
      event.date = moment(event.date, 'DD-MM-YYYY hh:mm:ss');
      return event;
    });
  }
  hardCodedEvents = [{
    "name": "George Samson",
    "date": "Thursday, 14/11/2019, 20:00:00",
    "pic": "1.png"
  }, {
    "name": "George Samson",
    "date": "Saturday, 14/12/2019, 20:00:00",
    "pic": "1.png"
  }, {
    "name": "Shane Padilla",
    "date": "Wednesday, 11/12/2019, 12:30:00",
    "pic": "2.png"
  }, {
    "name": "Christina Frazier",
    "date": "Friday, 13/12/2019, 18:00:00",
    "pic": "3.png"
  }, {
    "name": "Todd Bladwin",
    "date": "Thursday, 12/12/2019, 19:25:00",
    "pic": "4.png"
  }, {
    "name": "Jose Vasquez",
    "date": "Monday, 9/12/2019, 17:45:30",
    "pic": "5.png"
  }, {
    "name": "Jose Vasquez",
    "date": "Thursday, 9/1/2020, 17:45:30",
    "pic": "5.png"
  }]
  return <MainCalendarScreen eventsData={hardCodedEvents} />
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ImageBackground: {
    width: 258,
    height: 258,
  },
  topContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '90%'

  },
  dinDinText: {
    fontFamily: 'Helvetica',
    fontSize: 29,
    color: '#353535',
    letterSpacing: 0,
  },
  subText: {
    opacity: 0.5,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: '#000000',
    letterSpacing: 0,
  },
  buttonText: {
    fontFamily: "Helvetica",
    fontSize: 14,
    color: "#FFFFFF",
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 58,
    backgroundColor: "#0F8CFF",
  },
  label: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
