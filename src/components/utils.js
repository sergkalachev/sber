export function greetings(hour) {
    if (hour < 0 || hour > 23) {
        throw new Error("Неверное количество часов");
    }
    if (hour >= 5 && hour < 12) {
        return 'Доброе утро!';
    }
    if (hour >= 12 && hour < 18) {
        return 'Добрый день!';
    }
    if (hour >= 18 && hour < 22) {
        return 'Добрый вечер!';
    }
    return 'Доброй ночи!';
}
