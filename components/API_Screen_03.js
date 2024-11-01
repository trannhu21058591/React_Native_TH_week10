import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEditTaskRequest } from '../store/actions'; // Adjust path as necessary

//Redux tookit api
import { addEditTask } from '../Redux_Tookit_API/tasksSlice';

export default function Screen03({ navigation, route }) {
  /** 
  const { task, onGoBack } = route.params || {};
  const [taskName, setTaskName] = useState(task ? task.task_name : '');
  const dispatch = useDispatch();

  const handleFinish = () => {
    if (taskName.trim()) {
      const taskData = { task_name: taskName, id: task ? task.id : undefined };
      dispatch(addEditTaskRequest(taskData)); // Dispatch add/edit action
      if (onGoBack) onGoBack(); // Call the callback to refresh tasks
      navigation.navigate('Screen02'); // Navigate back to Screen02
    } else {
      alert('Please input a task name.');
    }
  };

  */
 //Redux tookit api
  const { task, onGoBack } = route.params || {};
  const [taskName, setTaskName] = useState(task ? task.task_name : '');
  const dispatch = useDispatch();

  const handleFinish = () => {
    if (taskName.trim()) {
      const taskData = { task_name: taskName, id: task ? task.id : undefined };
      dispatch(addEditTask(taskData)); // Dispatch add/edit action
      if (onGoBack) onGoBack(); // Call the callback to refresh tasks
      navigation.navigate('Screen02'); // Navigate back to Screen02
    } else {
      alert('Please input a task name.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.v_info}>
          <IconAntDesign name="arrowleft" color="#000" size={20} onPress={() => navigation.goBack()} />
        </View>
      </View>
      <View style={styles.center}>
        <Text style={styles.ct_txt}>{task ? 'EDIT YOUR JOB' : 'ADD YOUR JOB'}</Text>
        <View style={styles.txt_view}>
          <Image style={{ marginRight: 10 }} source={require('../assets/list_job.png')} />
          <TextInput
            placeholder='Input your job'
            value={taskName}
            onChangeText={setTaskName}
          />
        </View>
        <TouchableOpacity style={styles.bt_finish} onPress={handleFinish}>
          <Text style={styles.txt_finish}>{task ? 'UPDATE' : 'FINISH'}</Text>
          <IconAntDesign name="arrowright" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  img_footer: {
    width: 150,
    height: 150,
  },
  txt_finish: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 16,
  },
  bt_finish: {
    backgroundColor: '#00BDD6',
    width: 190,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  txt_view: {
    borderColor: '#9095A0',
    borderWidth: 1,
    flexDirection: 'row',
    width: 334,
    height: 44,
    alignItems: 'center',
    borderRadius: 4,
  },
  ct_txt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  txt_info_2: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#171A1F',
  },
  txt_info_1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#171A1F',
  },
  txt_info: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  img_info: {
    flexDirection: 'row',
  },
  v_info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  header: {
    marginTop: 10,
    justifyContent: 'space-between',
  },
  center: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
