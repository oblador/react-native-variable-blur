import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VariableBlur } from 'react-native-variable-blur';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
        <VariableBlur isRed={true} style={styles.view} testID="variable-blur" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 200,
    height: 200
  }});

export default App;