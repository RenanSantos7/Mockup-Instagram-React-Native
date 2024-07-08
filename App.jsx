import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import DataProvider from './src/context/DataContext';
import Feed from './src/components/Feed';
import Footer from './src/components/Footer';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("white");
  }, []);

  return (
    <DataProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header />
        <Feed />
        <Footer />
      </View>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },

});
