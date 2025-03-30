import { useNavigation } from 'expo-router'
import { View, Text, StyleSheet } from 'react-native'
import { useEffect } from 'react'

export default function app() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart<br />Pet Collar</Text>
      <Text style={styles.heading}>Project Summary</Text> 
      <Text style={styles.text}>The smart pet collar is a revolution within 
        the already existing niche of smart/IoT based pet devices.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },

  title: {
    color: 'grey',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})