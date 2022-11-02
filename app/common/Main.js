import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import PageContent from '../components/Layout/PageContent';
import PageTop from './main/PageTop';

const Main = () => {
    return (
        <View style={styles.container}>
            <PageTop />
            <PageContent>
                
            </PageContent>
        </View>
    )
};  

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#02161D',
      paddingLeft: '8%',
      paddingRight: '8%',
      height: '100%',
      paddingTop: '40%'
    }
});

export default Main;