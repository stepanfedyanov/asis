import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import CardLayout from '../components/Layout/CardLayout';
import PageContent from '../components/Layout/PageContent';
import PageTop from './main/PageTop';

const Main = () => {
    return (
        <View style={styles.container}>
            <PageTop />
            <PageContent>
                <CardLayout type='fullBar' title="Общая оценка вашей активности за неделю" />
                <CardLayout type='circleBarHalf' title="Сегодня" />
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