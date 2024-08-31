import { Text, View , StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises  from '../../assets/data/exercises.json';
import {Stack} from "expo-router";


export default function ExerciseDetailsScreen(){
    const params = useLocalSearchParams();
    console.log('Exercises:', exercises); // This will show the content of exercises
    const exercise = exercises.find(function(item){
        return item.name === params.name;
     });
    if(!exercise){
        return(
            <Text>
                Exercise not found
            </Text>
        )
    }

    return (
        <>
            <ScrollView contentContainerStyle={styles.container}>
                <Stack.Screen  options={{ title: exercise.name }} />
                <Text >Exercise Details : {params.name} </Text>

                <View style={styles.panel}> 
                    <Text style={styles.exerciseName}>{exercise.name} </Text>
                    <Text style={styles.exerciseSubtitle}>
                        <Text style={styles.subValue}>{exercise.muscle}</Text> |
                        <Text style={styles.subValue}>{exercise.equipment}</Text>
                    </Text>
                </View>

                <View style={styles.panel}>
                    <Text style={styles.instructions}>
                        { exercise.instructions}
                    </Text>
                </View>
            </ScrollView>
        </>

    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        gap:10, 
    },
    exerciseName : {
      fontSize:20,
      fontWeight:'500',
    },
    exerciseSubtitle : {
      color:'dimgray',
    },
    subValue : {
      textTransform :"capitalize",
    },
    instructions : {
        fontSize:16,
        lineHeight:22,
    },
    panel : {
        backgroundColor: 'white',
        padding:10,
        borderRadius: 5,

    }
});

