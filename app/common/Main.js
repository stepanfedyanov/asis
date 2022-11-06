import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LIGHT_THEME, DARK_THEME } from '../constants/color';
import PageContent from '../components/Layout/PageContent';
import PageTop from './main/PageTop';
import { Card1, Card2, Card3 } from '../components/UI/cards/cards';

const Main = () => {
    return (
        <View style={styles.container}>
            <PageTop />
            <PageContent>
                <Card1 title="Общая оценка вашей активности за неделю" data={
                    {
                        cardTitle: 'Общая оценка активности',
                        dataType: 'activity',
                        chart: [4000, 2500, 3000, 4500, 1500, 3000, 3500]
                    }
                } />

                <Card2 title="Сегодня" data={
                    {
                        cardTitle: 'Сводка',
                        dataType: 'summary',
                        datas: [
                            {
                                type: 'calories',
                                group: 'activity',
                                value: 350
                            },
                            {
                                type: 'steps',
                                group: 'steps',
                                value: 10500
                            }
                        ]
                    }
                } />

                <Card3 data={
                    {
                        cardTitle: 'Количество шагов сегодня',
                        dataType: 'steps',
                        datas: [
                            {
                                type: 'steps',
                                group: 'today',
                                value: 10500
                            },
                            {
                                type: 'steps',
                                group: 'last',
                                value: 5600
                            }
                        ]
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