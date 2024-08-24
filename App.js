import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseFlatList from './src/components/ExerciseFlatList';


export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        contentContainerStyle={{gap:5}}
        keyExtractor={(item,index) => item.name + index}
        renderItem ={({item}) => <ExerciseFlatList item={item} /> }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    // alignItems: 'center',
    justifyContent: 'center',
    padding:10,
    paddingTop:70,
  },
  
});
