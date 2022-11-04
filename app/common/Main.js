import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LIGHT_THEME, DARK_THEME } from '../constants/color';
import PageContent from '../components/Layout/PageContent';
import PageTop from './main/PageTop';
import { Card1 } from '../components/UI/cards/cards';

const Main = () => {
    return (
        <View style={styles.container}>
            <PageTop />
            <PageContent>
                <Card1 title="Общая оценка вашей активности за неделю" data={
                    {
                        cardTitle: 'Общая оценка активности',
                        chart: [4000, 2500, 3000, 4000, 1500, 3000, 3500]
                    }
                } />
            </PageContent>
        </View>
    )
};  

const styles = StyleSheet.create({
    container: {
      backgroundColor: LIGHT_THEME.bgColor,
      paddingLeft: '8%',
      paddingRight: '8%',
      height: '100%',
      paddingTop: '25%'
    }
});

export default Main;