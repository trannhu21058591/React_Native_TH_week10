import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

// Redux Saga
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasksRequest, deleteTaskRequest } from '../store/actions'; // Adjust path as necessary


//Redux tookit api
import { fetchTasks, deleteTask } from '../Redux_Tookit_API/tasksSlice';

//
const Item = ({ item, onDelete, onEdit }) => (
  <View style={styles.vitem}>
    <View style={styles.info_left}>
      <Image source={require('../assets/CheckBox.png')} style={{ marginRight: 10 }} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.task_name}</Text>
      </View>
    </View>
    <View style={styles.info_right}>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Image source={require('../assets/bin.png')} style={{ marginRight: 10, width: 30, height: 30 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onEdit(item)}>
        <Image source={require('../assets/pen.png')} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    </View>
  </View>
);

export default function Screen02({ navigation }) {

/**
 
  // Redux Saga
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks); // Select tasks from the Redux store

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTaskRequest(taskId)); // Dispatch delete action
  };

  const handleEditTask = (task) => {
    navigation.navigate('Screen03', { task, onGoBack: fetchTasksRequest });
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchTasksRequest()); // Fetch tasks when screen is focused
    }, [dispatch])
  );

  const renderItem = ({ item }) => (
    <Item item={item} onDelete={handleDeleteTask} onEdit={handleEditTask} />
  );

*/

  // Redux tookit api
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks); // Select tasks from the Redux store

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch delete action
  };

  const handleEditTask = (task) => {
    navigation.navigate('Screen03', { task, onGoBack: fetchTasks });
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(fetchTasks()); // Fetch tasks when screen is focused
    }, [dispatch])
  );

  const renderItem = ({ item }) => (
    <Item item={item} onDelete={handleDeleteTask} onEdit={handleEditTask} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_1}>
          <IconAntDesign name="arrowleft" color="#000" size={20} onPress={() => navigation.goBack()} />
          <View style={styles.v_info}>
            <Image style={styles.img} source={require('../assets/Avatar_27.png')} />
            <View style={styles.txt_info}>
              <Text style={styles.txt_info_1}>Hi Twinkle</Text>
              <Text style={styles.txt_info_2}>Have a great day ahead</Text>
            </View>
          </View>
        </View>
        <View style={styles.header_2}>
          <View style={styles.v_search}>
            <IconFeather name="search" color="#000" size={20} />
            <TextInput placeholder='Search' />
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.bt_add} onPress={() => navigation.navigate('Screen03', { onGoBack: fetchTasksRequest })}>
          <IconIonicons name="add" color="#ffffff" size={32} />
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
  info_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vitem: {
    backgroundColor: '#DEE1E678',
    marginBottom: 15,
    width: 335,
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_2: {
    alignItems: 'center',
  },
  bt_add: {
    backgroundColor: '#00BDD6',
    width: 69,
    height: 69,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  v_search: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    width: 334,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 4,
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
  v_info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  header: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  center: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
  },
});
