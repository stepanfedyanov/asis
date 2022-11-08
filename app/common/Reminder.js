import React from "react";
import { View, ScrollView, Button, Text } from "react-native";
import DetailedTable from "../components/Layout/DetailedTable";
import TableView from "../components/Layout/TableView";
import Btn from "../components/UI/Button";
import Title from "../components/UI/Title";
import { GLOBAL_CSS } from "../constants/styles";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MainScreen = ({navigation}) => {
    return (
        <ScrollView style={{...GLOBAL_CSS.screen}}>
            <Title title="Напоминания"/>

            <DetailedTable subtext="На сегодня напоминаний нет. Тренировка завтра в 10:00. Напоминание о воде сработает через 2 часа. Рекомендуем отдохнуть через час">
                <TableView icon="barbell" dataGroup="reminder" text="Напоминание о тренировке" subtext="Пн, Вт, Чт в 10:00" />
                <TableView icon="water" dataGroup="reminder" text="Напоминание о воде" subtext="Каждый день в 8:00, 12:00, 15:00, 18:00" />
                <TableView icon="battery-dead" dataGroup="reminder" text="Напоминание об отдыхе" subtext="Каждый день в 18:00" />
            </DetailedTable>

            <View style={{marginTop: 50}}>
                <Button onPress={() => navigation.navigate('add_reminder')} title="Добавить напоминание" />
            </View>

            
            
        </ScrollView>
    )
};

const AddReminder = () => {
    return (
        <View>
            <Text>Добавление напоминания</Text>
        </View>
    )
};

const Reminder = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="reminder" 
                component={MainScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="add_reminder"
                component={AddReminder}
            />

        </Stack.Navigator>
        
    )
};

export default Reminder