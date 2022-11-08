import React from "react";
import { ScrollView, View, Text, Button } from "react-native";

import DetailedTable from "../components/Layout/DetailedTable";
import Title from "../components/UI/Title";
import { GLOBAL_CSS } from "../constants/styles";
import TableView from "../components/Layout/TableView";
import Ionicons from '@expo/vector-icons/Ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LIGHT_THEME } from "../constants/color";
import {names} from "../constants/names";
import { Card2, Card3 } from "../components/UI/cards/cards";
const Stack = createNativeStackNavigator();

const MainScreen = ({navigation}) => {
    return (
        <ScrollView style={{...GLOBAL_CSS.screen}}>
            <Title title="Ваши данные" />
        
            <DetailedTable name="Активность">
                <TableView to={navigation} icon="flame" dataGroup="activity" text="Калории" />
                <TableView to={navigation} icon="bicycle" dataGroup="activity" text="Общие очки активности" />
                <TableView to={navigation} icon="walk" dataGroup="activity" text="Шаги" />
                <TableView to={navigation} icon="git-merge" dataGroup="activity" text="Дистанция" />
                <TableView to={navigation} icon="barbell" dataGroup="activity" text="Тренировки" />
            </DetailedTable>

            <DetailedTable name="Тело">
                <TableView to={navigation} icon="speedometer" dataGroup="body" text="Масса тела" />
                <TableView to={navigation} icon="stats-chart" dataGroup="body" text="Рост" />
                <TableView to={navigation} icon="triangle" dataGroup="body" text="ИМТ" />
                <TableView to={navigation} icon="water" dataGroup="body" text="Другие показатели" />
            </DetailedTable>

            <DetailedTable name="Питание">
                <TableView to={navigation} icon="restaurant" dataGroup="nutrition" text="Общие показатели" />
            </DetailedTable>

            <DetailedTable name="Осознанность">
                <TableView to={navigation} icon="rose" dataGroup="focus" text="Общие показатели" />
            </DetailedTable>

            <View style={{height: 150}}></View>
        </ScrollView>
    )
};

const DataPage = ({navigation, route}) => {
    let cards;

    if (route.params.datatype === 'activity') {
        cards = <View>
            <Card2 title="Сегодня" data={
            {
                cardTitle: 'Сводка',
                dataType: 'summary',
                datas: [
                    {
                        type: 'calories',
                        group: 'activity',
                        value: '26%'
                    },
                    {
                        type: 'steps',
                        group: 'steps',
                        value: '48%'
                    }
                ]
            }
        } />

        <Card2 title="На прошлой неделе" data={
            {
                cardTitle: 'Среднее значение',
                dataType: 'activity',
                datas: [
                    {
                        type: 'calories',
                        group: 'activity',
                        value: '89%'
                    },
                    {
                        type: 'steps',
                        group: 'steps',
                        value: '110%'
                    }
                ]
            }
        } />

    <Card3 data={
            {
                cardTitle: 'Активность за прошлую и текущую недели',
                dataType: 'steps',
                datas: [
                    {
                        type: 'activity',
                        label: 'this_week',
                        value: 73
                    },
                    {
                        type: 'activity',
                        label: 'last_week',
                        value: 89
                    }
                ]
            }
        } />
        </View>
    }

    if (route.params.datatype === 'body') {
        cards = <View>
            <Card2 title="Показатели" data={
            {
                cardTitle: 'Сводка',
                dataType: 'summary',
                datas: [
                    {
                        type: 'body',
                        group: 'body',
                        value: '60,3 кг'
                    },
                    {
                        type: 'body',
                        group: 'body',
                        value: '11,2% жира'
                    }
                ]
            }
        } />

        <Button title="Изменить данные" />

        

    <Card3 title="Последние изменения" data={
            {
                cardTitle: 'Сравнение последних месяцев',
                dataType: 'body',
                datas: [
                    {
                        type: 'weight',
                        label: 'this_month',
                        value: 60.3
                    },
                    {
                        type: 'weight',
                        label: 'last_month',
                        value: 59.8
                    }
                ]
            }
        } />
        </View>
    } 

    return (
        <ScrollView style={{...GLOBAL_CSS.screen}}>
            <View onStartShouldSetResponder={() => navigation.navigate('main_data')} style={{marginBottom: 30, flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="arrow-back" style={{marginRight: 5}} color={LIGHT_THEME.blue} />
                <Text style={{...GLOBAL_CSS.bodyRegular, color: LIGHT_THEME.blue}}>Назад</Text>
            </View>
            <Title title={names[route.params.datatype]} />

            {cards}
            
        </ScrollView>
    )
};

const Data = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="main_data" 
                component={MainScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="data_page"
                component={DataPage}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
        
    )
};

export default Data