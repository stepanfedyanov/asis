import React, { useState } from 'react';
import { Text, StyleSheet, View, ScrollView, FlatList, Button } from 'react-native';
import { LIGHT_THEME, DARK_THEME } from '../constants/color';
import PageContent from '../components/Layout/PageContent';
import PageTop from './main/PageTop';
import { Card1, Card2, Card3 } from '../components/UI/cards/cards';
import CategoryTitle from '../components/CategoryTitle';
import { NewsCategory, Article } from '../components/UI/news';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Main = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <PageTop />
            <PageContent>
                <CategoryTitle title="Аналитика" />
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

                <CategoryTitle title="Рекомендации" />

                {/* <NewsCategory title="Сон" text="На прошлой неделе продолжительность вашего сна уменьшилась на 20%. Рекомендую прочитать статью и выполнить упражнения из рекомендации.">
                    <Article />
                </NewsCategory> */}

                <NewsCategory title="Сон" text="На прошлой неделе продолжительность вашего сна уменьшилась на 20%. Рекомендую прочитать статью и выполнить упражнения из рекомендации.">
                    
                    <Article navigation={navigation} />
                    
                </NewsCategory>

            </PageContent>
        </ScrollView>
    )
};  

const styles = StyleSheet.create({
    container: {
      backgroundColor: LIGHT_THEME.bgColor,
      paddingLeft: '8%',
      paddingRight: '8%',
      height: '100%',
      paddingTop: 30
    }
});

export default Main;