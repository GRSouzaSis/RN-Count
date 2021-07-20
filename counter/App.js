import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

import logoUri from './assets/logo.png';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    let { count } = this.state;
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
        <Button
          onPress={() => {
            this.incrementCount();
          }}
          title="Counter button"
        />
      </View>
    );
  }
}

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
