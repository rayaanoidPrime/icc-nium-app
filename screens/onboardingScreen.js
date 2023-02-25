import { View, Text  , Button} from 'react-native';

export default function OnboardingScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Onboarding Screen</Text>
        <Button title='Home' onPress={() => navigation.navigate("Home")}/>
        <Button title='Learn' onPress={() => navigation.navigate("Learn")}/>
        <Button title='Watch' onPress={() => navigation.navigate("Watch")}/>
        <Button title='Shop' onPress={() => navigation.navigate("Shop")}/>
      </View>
    );
  }