import { LIGHT_THEME } from "./color";

export const GLOBAL_CSS = {
    screen: {
        backgroundColor: LIGHT_THEME.bgColor,
        paddingLeft: '8%',
        paddingRight: '8%',
        height: '100%',
        paddingTop: 100,
        // paddingBottom: 1000
    },
    cardStyle: {
        borderRadius: '12px',
        backgroundColor: LIGHT_THEME.cardBg,
        width: '100%',
        marginTop: 10,
        padding: '5%'
    },
    articleCard: {
        borderRadius: '20px',
        backgroundColor: LIGHT_THEME.cardBg,
        minHeight: 250,
        borderRadius: 15,
        overflow: 'hidden'
    },
    headlineBold: {
        fontWeight: '600',
        fontSize: '17px'
    },
    title1Bold: {
        fontWeight: '700',
        fontSize: '28px',
        textAlign: 'left'
    },
    title2Bold: {
        fontWeight: '700',
        fontSize: '22px'
    },
    title3Regular: {
        fontSize: '20px',
        fontWeight: '400'
    },
    title3Bold: {
        fontWeight: '600',
        fontSize: '20px'
    },
    title2Regular: {
        fontWeight: '400',
        fontSize: '22px'
    },
    bodyRegular: {
        fontWeight: '400',
        fontSize: '17px'
    },
    calloutRegular: {
        fontWeight: '400',
        fontSize: '16px'
    },
    caption1Regular: {
        fontWeight: '400',
        fontSize: '12px',
    },
    caption2Bold: {
        fontWeight: '600',
        fontSize: '11px',
    },
    footnoteBold: {
        fontWeight: '600',
        fontSize: '13px'
    }
};