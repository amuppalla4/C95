import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  TextInput,
} from 'react-native';
import  { genTimeBlock } from 'react-native-timetable';

import events_data from "./events_data";
import TimeTableView from 'react-native-timetable/components/TimeTable/TimeTableView';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 5;
    this.pivotDate = genTimeBlock('mon');
  }

  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={events_data}
            pivotTime={9}
            pivotEndTime={20}
            pivotDate={this.pivotDate}
            nDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            lo
           <TextInput
              style={styles.Box}
              placeholder="Routine"
              
             
             />cale="ko"
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8'
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Box:{
    width:200,
    height:50,
    borderWidth:1.5,
    fontSize:20,
    margin:10,
    paddingLeft:12,
  backgroundColor:'lightblue'
  }
});

