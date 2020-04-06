import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import CategorieItem from '../components/CategorieItem'

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
      ],
      data: [{'key': 'a'}, {'key': 'b'}]
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
              renderItem={(data) => <CategorieItem item={data.item}/>}
              contentContainerStyle={categorie_list}
              keyExtractor={(item, key) => key.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <Text>   </Text>}
            />
          </View>
        </View>
        <View style={list_container}>
          <FlatList 
            data={this.state.data}
            renderItem={(data) => <Text>{data.item.key}</Text>}
            contentContainerStyle={list}
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
    flex: 1
  }, 
  categorie_list: {
    width: width,
    alignItems: 'center',
  },
  list_container: {
    flex: 5,
  },
  list: {

  },
})