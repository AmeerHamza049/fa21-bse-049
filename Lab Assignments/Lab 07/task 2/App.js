import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const StudentRecordsApp = () => {
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [students, setStudents] = useState([]);

  const handleAdd = () => {
    if (name && gpa) {
      const newStudent = { name, gpa };
      setStudents([...students, newStudent]);
      setName('');
      setGPA('');
    }
  };

  const handleSearch = () => {
    const searchQuery = name.trim().toLowerCase();

    
    const filteredStudents = students.filter(student =>
      student.name.toLowerCase().includes(searchQuery)
    );
  
    
    setStudents(filteredStudents);
  };

  const handleGPATextChange = (text) => {
    
    if (/^\d*\.?\d*$/.test(text) || text === '') {
      setGPA(text);
    }
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Records</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="GPA"
        value={gpa}
        onChangeText={handleGPATextChange}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAdd} />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <Text style={styles.heading}>Records</Text>
      <ScrollView style={styles.recordsContainer}>
        {students.map((student, index) => (
          <Text key={index} style={styles.recordText}>
            {index + 1}. {student.name} {student.gpa}
          </Text>
        ))}
      </ScrollView>
      <Button title="Clear All" onPress={handleClearAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'flex-start', 
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  recordsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  recordText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default StudentRecordsApp;
