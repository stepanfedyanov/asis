import React from "react";
import { ScrollView, View, Image, Text, Button } from "react-native";
import DetailedTable from "../components/Layout/DetailedTable";
import TableView from "../components/Layout/TableView";
import Title from "../components/UI/Title";
import { LIGHT_THEME } from "../constants/color";
import { GLOBAL_CSS } from "../constants/styles";

const Settings = () => {
    return (
        <ScrollView style={GLOBAL_CSS.screen}>
            <Title title="Настройки" />

            <View style={{flex: 1, flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
                <Image style={{width: 60, height: 60, borderRadius: '100%', marginRight: 20}} source={{uri: 'https:/fedyanov.agency/img/asis/IMG_1089.jpg'}} />
                <View>
                    <Text style={GLOBAL_CSS.calloutRegular}>Федянов Степан</Text>
                    <Text style={{...GLOBAL_CSS.caption1Regular, color: LIGHT_THEME.gray}}>stepan@fedyanov.ru</Text>
                </View>
            </View>

            <DetailedTable name="Изменить данные">
                <TableView icon="mail" text="Сменить электронную почту"/>
                <TableView icon="lock-closed" text="Сменить пароль"/>
                <TableView icon="podium" text="Пройти тест заново"/>
            </DetailedTable>

            <View style={{marginTop: 50}}>
                <Button title="Выйти" />
            </View>
        </ScrollView>
    )
};

export default Settings