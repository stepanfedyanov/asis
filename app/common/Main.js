import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { LIGHT_THEME, DARK_THEME } from '../constants/color';
import CardLayout from '../components/Layout/CardLayout';
import PageContent from '../components/Layout/PageContent';
import PageTop from './main/PageTop';

// const [OSCOLOR, osColorChange] = useState(Appearance.getColorScheme());

// Appearance.addChangeListener(function () {
//     osColorChange(Appearance.getColorScheme());
// });

const Main = () => {
    return (
        <View style={styles.container}>
            <PageTop />
            <PageContent>
                <CardLayout title="Общая оценка вашей активности за неделю" data={
                    {
                        type: 1,
                        cardTitle: 'Общая оценка активности',

                    }
                } />
                {/* <CardLayout title="Сегодня" /> */}
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