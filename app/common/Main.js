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
import { GLOBAL_CSS } from '../constants/styles';

const Main = ({navigation}) => {
    return (
        <ScrollView style={GLOBAL_CSS.screen}>
            <PageTop />
            <PageContent>
                <CategoryTitle title="Аналитика" />
                <Card1 navigation={navigation} title="Ваша активность на этой неделе" data={
                    {
                        cardTitle: 'Общая оценка активности',
                        dataType: 'activity',
                        chart: [70, 120, 30]
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
                                value: 4576
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
                                label: 'today',
                                value: 4576
                            },
                            {
                                type: 'steps',
                                label: 'last',
                                value: 8560
                            }
                        ]
                    }
                } />

                <CategoryTitle title="Рекомендации" />

                {/* <NewsCategory title="Сон" text="На прошлой неделе продолжительность вашего сна уменьшилась на 20%. Рекомендую прочитать статью и выполнить упражнения из рекомендации.">
                    <Article />
                </NewsCategory> */}

                <NewsCategory title="Общее" text="Поздравляю! Ваши показатели находятся в норме. Рекомендую ознакомиться с подборкой ниже для улучшения средних показателей">
                    
                    <Article navigation={navigation} />
                    
                </NewsCategory>

            </PageContent>
        </ScrollView>
    )
};  

export default Main;