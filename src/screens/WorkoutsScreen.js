import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import CategorieItem from '../components/CategorieItem'
import WorkoutItem from '../components/WorkoutItem'

const {width, height} = Dimensions.get('window')

export default class WorkoutsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {name: 'Recent'},
        {name: 'All'},
        {name: 'My favorites'},
        {name: 'Popular'},
        {name: '7 Minute'},
        {name: 'Beginner'},
        {name: 'Fat loss'},
      ],
      workoutItems: [
        {
          name: '10M ABS',
          level: 'Intermediate',
          time: 10,
          calories: 49,
          imageBackground: require('../images/abs2.jpg')
        },
        {
          name: '10M BUTT',
          level: 'Beginner',
          time: 10,
          calories: 42,
          imageBackground: require('../images/squats.jpg')
        },
        {
          name: '10M LEGS',
          level: 'Beginner',
          time: 10,
          calories: 34,
          imageBackground: require('../images/abs1.jpg')
        },
        {
          name: '10M ABS',
          level: 'Intermediate',
          time: 10,
          calories: 49,
          imageBackground: require('../images/abs2.jpg')
        },
      ]
    }
  }

  render() {
    const {
      main_container,
      up_container,
      input_container,
      input,
      categorie_list_container,
      categorie_list,
      list_container,
      list,
    } = styles
    return (
      <SafeAreaView style={main_container}>
        <View style={up_container}>
          <View style={input_container}>
            <Icon name="search" size={height*0.045} color="#999" />
            <TextInput style={input}
              placeholder="Search workouts"
            />
          </View>
          <View style={categorie_list_container}>
            <FlatList 
              data={this.state.categories}
              renderItem={(data) => <CategorieItem item={data.item} id={data.index} length={this.state.categories.length}/>}
              contentContainerStyle={categorie_list}
              keyExtractor={(item, key) => key.toString()}
              horizontal

              ItemSeparatorComponent={() => <Text>   </Text>}
              horizontal
            />
          </View>
        </View>
        <View style={list_container}>
          <FlatList 
            data={this.state.workoutItems}
            renderItem={(data) => <WorkoutItem item={data.item}/>}
            contentContainerStyle={list}
            keyExtractor={(item, key) => key.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  up_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  input_container: {
    flex: 1,
    width: width*0.95,
    borderRadius: 14,
    backgroundColor: 'rgb(225,225,225)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 5
  },
  input: {
    fontSize: height*0.023,
    width: '88%',
    fontWeight: '500',
  },
  categorie_list_container: {
    flex: 1,
    paddingLeft: 5,
  }, 
  categorie_list: {
    alignItems: 'center',
  },
  list_container: {
    flex: 5,
  },
  list: {

  },
})