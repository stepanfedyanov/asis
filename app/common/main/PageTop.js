import React from "react";
import Title from '../../components/UI/Title';

const hours = new Date().getHours();
let title = 'Привет!';

if (hours >= 0 && hours < 6) {
    title = 'Доброй ночи!';
} else if (hours >= 6 && hours < 12) {
    title = 'Доброе утро!';
} else if (hours >= 12 && hours < 18) {
    title = 'Добрый день!';
} else {
    title = 'Добрый вечер!';
}

const PageTop = () => {
    return (
        <Title title={title}/>
    )
};

export default PageTop;