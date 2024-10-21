// Функция, която проверява дали е изтекъл 1 час бездействие или е първо влизане
function checkPasswordProtection() {
    const lastActivity = localStorage.getItem('lastActivity');
    const currentTime = new Date().getTime();

    // Проверка дали е минал 1 час или това е първото влизане
    if (!lastActivity || currentTime - lastActivity > 3600000) {
        // Вземаме само името на файла, без водещия наклон
        const currentPath = window.location.pathname.split('/').pop();

        // Пренасочване към страницата за въвеждане на парола
        window.location.href = `password.html?redirect=${currentPath}`;
    } else {
        // Обновява времето на последна активност
        localStorage.setItem('lastActivity', currentTime);
    }
}

// Викаме функцията при зареждане на страницата
window.onload = checkPasswordProtection;
