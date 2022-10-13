import 'react-native-gesture-handler';
// import { enableExperimentalWebImplementation } from 'react-native-gesture-handler';
// enableExperimentalWebImplementation();

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// repro imports
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



const MyDrawer = createDrawerNavigator();

const NoSelect = () => {
	return (
		<View>
			<Text style={styles.paragraph}>This text is rendered by Drawer and CANNOT be selected</Text>
		</View>
	)
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
      <MyDrawer.Navigator>
        <MyDrawer.Screen name="react-navigation drawer user-select repro" component={NoSelect} />
      </MyDrawer.Navigator>
        <Text style={styles.paragraph}>
          This text is rendered outside of Drawer and CAN be selected
        </Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
