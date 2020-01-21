import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text
} from 'react-native';

class Home extends Component {
  state = {
    goal: '',
    goals: [],
  }

  goalInputHandler = (newGoal) => {
    this.setState({goal: newGoal});
  }

  addGoalHandler = () => {
    this.setState(prevState => ({
      goals: [...prevState.goals, this.state.goal]
    }));
  }

  render () {
    return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" style={styles.input} onChangeText={this.goalInputHandler}/>
          <Button title="ADD" onPress={this.addGoalHandler} />
        </View>
        <View>
          {this.state.goals.map((goal) => <Text>{goal}</Text>)}
        </View>
        <View>
          <Button title="To About" onPress={() => {this.props.navigation.navigate('About')}}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10
  }
});

export default Home;
