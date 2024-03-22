import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput('');
    }
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={taskInput}
        onChangeText={text => setTaskInput(text)}
      />
      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    color: 'red',
    marginLeft: 10,
  },
});

export default TodoApp;
