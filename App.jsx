import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import DataProvider from './src/context/DataContext';
import Feed from './src/components/Feed';
import Footer from './src/components/Footer';

export default function App() {
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
