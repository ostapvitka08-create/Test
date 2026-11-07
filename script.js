document.addEventListener("DOMContentLoaded", function () {

    // 1. Привітання при відкритті сайту
    let hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
        alert("Доброго ранку! Вітаємо у Logika Burgers! 🍔");
    } 
    else if (hour >= 12 && hour < 18) {
        alert("Доброго дня! Час смачно поїсти у Logika Burgers! 🍔");
    } 
    else {
        alert("Доброго вечора! Завітайте до Logika Burgers! 🍔");
    }


    // 2. Кнопка замовлення
    const orderButton = document.querySelector(".order");

    if (orderButton) {
        orderButton.addEventListener("click", function () {
            alert(
                "Дякуємо за інтерес до Logika Burgers! 🍔\n\n" +
                "Для замовлення телефонуйте:\n" +
                "+380 (097) 234 64 19\n\n" +
                "Ми працюємо з 10:00 до 20:00!"
            );
        });
    }


    // 3. Анімація карток бургерів
    const burgerCards = document.querySelectorAll(".burgercard");

    burgerCards.forEach(function (card) {

        card.style.transition = "0.3s";

        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.05)";
            card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "none";
        });

        // 4. Повідомлення при натисканні на бургер
        card.addEventListener("click", function () {
            let burgerName = card.querySelector("p");

            if (burgerName) {
                alert(
                    "Ти обрав " + burgerName.textContent + "! 🍔\n\n" +
                    "Смачний вибір! Чекаємо на тебе у Logika Burgers!"
                );
            }
        });

    });


    // 5. Повернення на початок сторінки при натисканні на логотип
    const logo = document.querySelector(".logo");

    if (logo) {
        logo.style.cursor = "pointer";

        logo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // 6. Анімація фотографій
    const images = document.querySelectorAll(
        ".burgercard img, .action img"
    );

    images.forEach(function (img) {

        img.style.transition = "0.4s";
        img.style.cursor = "pointer";

        img.addEventListener("mouseenter", function () {
            img.style.transform = "scale(1.08)";
        });

        img.addEventListener("mouseleave", function () {
            img.style.transform = "scale(1)";
        });

    });


    // 7. Анімація кнопки замовлення
    if (orderButton) {

        orderButton.style.transition = "0.3s";
        orderButton.style.cursor = "pointer";

        orderButton.addEventListener("mouseenter", function () {
            orderButton.style.transform = "scale(1.1)";
            orderButton.style.backgroundColor = "orange";
        });

        orderButton.addEventListener("mouseleave", function () {
            orderButton.style.transform = "scale(1)";
            orderButton.style.backgroundColor = "yellow";
        });

    }


    // 8. Плавна поява карток при завантаженні
    burgerCards.forEach(function (card, index) {

        card.style.opacity = "0";

        setTimeout(function () {
            card.style.transition = "opacity 0.7s";
            card.style.opacity = "1";
        }, index * 300);

    });


    // 9. Повідомлення про акції
    const actionTitle = document.querySelector(".actiontext");

    if (actionTitle) {
        actionTitle.style.cursor = "pointer";

        actionTitle.addEventListener("click", function () {
            alert(
                "🔥 Акції Logika Burgers! 🔥\n\n" +
                "1. Logika Combo — бургер, картопля фрі та напій за 150 грн!\n\n" +
                "2. Акція 1+1=3 — третя порція у подарунок!"
            );
        });
    }


    // 10. Плавна прокрутка сторінки
    document.documentElement.style.scrollBehavior = "smooth";


    // 11. Зміна кольору заголовка при наведенні
    const headings = document.querySelectorAll(
        "h1, h2, h3"
    );

    headings.forEach(function (heading) {

        heading.style.transition = "0.3s";

        heading.addEventListener("mouseenter", function () {
            heading.style.color = "orange";
        });

        heading.addEventListener("mouseleave", function () {
            heading.style.color = "";
        });

    });


    // 12. Повідомлення при натисканні на контакти
    const contactInfo = document.querySelector(".contacts-info");

    if (contactInfo) {
        contactInfo.addEventListener("click", function () {
            alert(
                "📍 Logika Burgers\n\n" +
                "Адреса: Вулиця 15-го квітня 3\n" +
                "Телефон: +380 (097) 234 64 19\n" +
                "Час роботи: 10:00 - 20:00\n\n" +
                "Завітайте до нас! 🍔"
            );
        });
    }


    // 13. Повідомлення при натисканні на логотип знизу
    const bottomLogo = document.querySelector(".logo-bottom img");

    if (bottomLogo) {
        bottomLogo.style.cursor = "pointer";

        bottomLogo.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            alert("Logika Burgers — заряджай свій мозок і шлунок! 🍔");
        });
    }


    // 14. Повідомлення при натисканні на назву ресторану
    console.log("Logika Burgers успішно завантажено! 🍔");
    console.log("Бажаємо смачного!");

    // 15. Слайдер фотографій
const sliderImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLp-OC_6UoA5sMcfwEP8Gra9O2phIgphEwzQQCilwzvg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkz6mWP93Gyn2cldqAfGjrQD6aHiUhKEduAh8iSGKVQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwn8nj7YLtKpa__ebadWiswqbjkpr_e5UR6yRTCwqGQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHslE1KltbpMAb5Q8sHdU93CZiHGyx_gn1u0xVkbOESg&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_ZltTOCmkZ0zUmHCPxeEpvFUk-Goxie54cd4OB0FwQ&s=10"
];

let currentSlide = 0;

const slideImage = document.querySelector("#slideImage");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide() {
    slideImage.src = sliderImages[currentSlide];
}

prevButton.addEventListener("click", function() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = sliderImages.length - 1;
    }

    showSlide();
});

nextButton.addEventListener("click", function() {
    currentSlide++;

    if (currentSlide >= sliderImages.length) {
        currentSlide = 0;
    }

    showSlide();
});

});