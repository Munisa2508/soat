// Soatni yangilash funktsiyasi
function updateClock() {
    // Joriy sanani va vaqtni olish
    var currentDate = new Date();
    
    // Kunlar va oylarga nom berish
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Sana formatini tayyorlash
    var formattedDate = days[currentDate.getDay()] + " " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear();
    document.getElementById("Date").textContent = formattedDate;

    // Soat, minut va sekundni olish va formatlash
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var seconds = currentDate.getSeconds().toString().padStart(2, '0');

    // Soat vaqti elementlarini yangilash
    document.getElementById("hours").textContent = hours;
    document.getElementById("min").textContent = minutes;
    document.getElementById("sec").textContent = seconds;
}

// Soatni har soniyada yangilab turish
setInterval(updateClock, 1000);

// Boshlanishi uchun soatni birinchi marta yangilash
updateClock();
