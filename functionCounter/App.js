import React, { useState } from 'react';
import type { Node } from 'react';
import logoUri from './assets/logo.png';
import { Button, StyleSheet, Text, Image, View } from 'react-native';

const App: () => Node = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count1 => count1 + 1);
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Image
          accessibilityLabel="React logo"
          source={logoUri}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text style={styles.title}>React Native</Text>
      </View>
      <Text style={styles.subTitle}>{`Count: ${count}`}</Text>
      <Button onPress={incrementCount} title="Counter button" />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginTop: 32,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  logo: {
    height: 120,
    width: 120,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 36,
    marginTop: 25,
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 24,
    marginTop: 25,
  },
});

export default App;
