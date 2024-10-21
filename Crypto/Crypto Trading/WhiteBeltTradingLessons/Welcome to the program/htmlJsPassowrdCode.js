const correctPassword = "V09R89G"; // Сложи си правилната парола

document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const enteredPassword = document.getElementById('password').value;

    if (enteredPassword === correctPassword) {
        // Взимаме параметъра redirect от URL-а
        const urlParams = new URLSearchParams(window.location.search);
        const redirectPath = urlParams.get('redirect');

        // Записваме времето на последна активност
        const currentTime = new Date().getTime();
        localStorage.setItem('lastActivity', currentTime);

        // Пренасочваме към оригиналната страница след успешна парола
        if (redirectPath) {
            window.location.href = redirectPath; // Връщаме към правилния файл
        } else {
            window.location.href = 'index.html'; // Пренасочваме към началната страница (ако няма redirect)
        }
    } else {
        alert('Wrong password. Please try again.');
    }
});