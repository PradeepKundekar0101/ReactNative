import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Horizontal from './components/Horizontal';
import FlatCards from './components/FlatCards';
import NewsCard from './components/NewsCard';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <Horizontal />
        <NewsCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
