export const postingDate = (time) => {
    const dateNow = new Date();
    const dateAds = new Date(time);
    const howHours = 1000 * 60 * 60;
    const oneDay = 1000 * 60 * 60 * 24;
    const oneWeek = 1000 * 60 * 60 * 24 * 7;

    const diffInTime = dateNow.getTime() - dateAds.getTime();
    const diffInHurs = Math.round(diffInTime / howHours);
    const diffInDays = Math.round(diffInTime / oneDay);
    const diffInWeeks = Math.round(diffInTime / oneWeek);

    const month = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августра',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    if (diffInDays < 1) {
        if (diffInHurs < 23) {
            if (diffInHurs === 1 || diffInHurs === 21) {
                const textDate = diffInHurs + ' час назад ';

                return textDate;
            } else if (
                diffInHurs === 2 ||
                diffInHurs === 3 ||
                diffInHurs === 4 ||
                diffInHurs === 22 ||
                diffInHurs === 23
            ) {
                const textDate = diffInHurs + ' часа назад ';

                return textDate;
            } else {
                const textDate = diffInHurs + ' часов назад ';

                return textDate;
            }
        }
        // сегодня в 00:00 (пока не активно, может для общих объяв)
        const textDate = 'Сегодня в ' + dateAds.toLocaleTimeString().slice(0, -3);

        return textDate;
    } else if (diffInDays === 1) {
        // вчера
        const textDate = 'Вчера в ' + dateAds.toLocaleTimeString().slice(0, -3);

        return textDate;
    } else if (diffInDays > 1 && diffInDays < 7) {
        // Столько дней назад, до недели
        if (diffInDays === 1) {
            const textDate = diffInDays + ' день назад';

            return textDate;
        } else if (diffInDays === 2 || diffInDays === 3 || diffInDays === 4) {
            const textDate = diffInDays + ' дня назад';

            return textDate;
        } else {
            const textDate = diffInDays + ' дней назад';

            return textDate;
        }
    } else if ((diffInDays) => 7 && diffInDays <= 30) {
        // Столько недель
        if (diffInWeeks === 1) {
            const textDate = diffInWeeks + ' неделю назад';

            return textDate;
        } else {
            const textDate = diffInWeeks + ' недели назад';

            return textDate;
        }
    }
};
