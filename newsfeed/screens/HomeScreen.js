import React, { Component } from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import NewsCard from '../components/newsCard';

class HomeScreen extends Component {
    render() {
      return (
        <SafeAreaView style={styles.container}>
            <NewsCard/>
        </SafeAreaView>
      );
    }
  }
  
  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {

    }
  })