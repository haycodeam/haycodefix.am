const translations = {
    hy: {
        nav_home: "Գլխավոր",
        nav_about: "Մեր մասին",
        nav_services: "Ծառայություններ",
        nav_courses: "Դասընթացներ",
        nav_contact: "Կապ",

        service_1: "Վեբ կայքերի մշակում",
        service_2: "UI / UX Դիզայն",
        service_3: "Կայքերի սպասարկում",
        service_4: "Օպտիմիզացիա և արագացում",

        //input//

        input_1: "Անուն",
        input_2: "Հեռախոս",
        input_3: "Հաղորդագրություն",

        h_2: "Դիմում",
        h_b1: "Ուղարկել",

        // First //

        li_1: "Մենք ստեղծում ենք ժամանակակից վեբ կայքեր",
        li_2: "Կառուցում ենք արագ և անվտանգ համակարգեր",
        li_3: "Օգտագործում ենք նոր տեխնոլոգիաներ (HTML, CSS, JS, React)",
        li_4: "Կայքերը հարմար են բոլոր սարքերի համար (responsive)",

        // Second //

        uu_1: "Մենք ստեղծում ենք գեղեցիկ և ժամանակակից ինտերֆեյսներ",
        uu_2: "Կենտրոնանում ենք օգտագործողի հարմարավետության վրա",
        uu_3: "Դիզայնը դարձնում ենք պարզ և հասկանալի",
        uu_4: "Օպտիմիզացնում ենք օգտագործողի փորձը (UX)",

        // third //

        wm_1: "Մենք ապահովում ենք կայքի անխափան աշխատանքը",
        wm_2: "Կատարում ենք սխալների շտկում և թարմացումներ",
        wm_3: "Պաշտպանում ենք կայքը տեխնիկական խնդիրներից",
        wm_4: "Աջակցում ենք և պահպանում ենք կայքի արագությունը",

        // fourth //

        os_1: "Մենք արագացնում ենք կայքի աշխատանքը",
        os_2: "Օպտիմիզացնում ենք կոդը և ռեսուրսները",
        os_3: "Բարելավում ենք բեռնման արագությունը",
        os_4: "Ապահովում ենք ավելի լավ օգտատիրոջ փորձ",


        btn1: "Դիմել"
    },

    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_courses: "Курсы",
        nav_contact: "Контакты",

        service_1: "Разработка веб-сайтов",
        service_2: "UI / UX дизайн",
        service_3: "Обслуживание сайтов",
        service_4: "Оптимизация и ускорение",

        // input //

        input_1: "Имя",
        input_2: "Телефон",
        input_3: "Сообщение",

        h_2: "Заявка",
        h_b1: "Отправить",

        // First //
        li_1: "Мы создаём современные веб-сайты",
        li_2: "Разрабатываем быстрые и безопасные системы",
        li_3: "Используем современные технологии (HTML, CSS, JS, React)",
        li_4: "Сайты адаптированы под все устройства (responsive)",

        // Second //

        uu_1: "Мы создаём красивые и современные интерфейсы",
        uu_2: "Фокусируемся на удобстве пользователя",
        uu_3: "Делаем дизайн простым и понятным",
        uu_4: "Улучшаем пользовательский опыт (UX)",

        // third //

        wm_1: "Мы обеспечиваем стабильную работу сайта",
        wm_2: "Исправляем ошибки и делаем обновления",
        wm_3: "Защищаем сайт от технических проблем",
        wm_4: "Поддерживаем и сохраняем скорость сайта",

        // fourth //

        os_1: "Мы ускоряем работу сайта",
        os_2: "Оптимизируем код и ресурсы",
        os_3: "Улучшаем скорость загрузки",
        os_4: "Обеспечиваем лучший пользовательский опыт",

        btn1: "Подать заявку"

    },
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_courses: "Courses",
        nav_contact: "Contact",

        service_1: "Web Development",
        service_2: "UI / UX Design",
        service_3: "Website Maintenance",
        service_4: "Optimization & Speed",

        // input //

        input_1: "Name",
        input_2: "Phone",
        input_3: "Message",

        h_2: "Application",
        h_b1: "Send",

        // first //

        li_1: "We build modern websites",
        li_2: "We develop fast and secure systems",
        li_3: "We use modern technologies (HTML, CSS, JS, React)",
        li_4: "Websites are responsive on all devices",

        // Second //

        uu_1: "We create modern and beautiful interfaces",
        uu_2: "We focus on user comfort and usability",
        uu_3: "We make design simple and clear",
        uu_4: "We improve user experience (UX)",

        // third //

        wm_1: "We ensure stable website performance",
        wm_2: "We fix errors and perform updates",
        wm_3: "We protect the website from technical issues",
        wm_4: "We maintain and improve website speed",

        // fourth //

        os_1: "We speed up website performance",
        os_2: "We optimize code and resources",
        os_3: "We improve loading speed",
        os_4: "We ensure better user experience",

        btn1: "To apply"

    }
}
function setLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        el.textContent = translations[lang][el.dataset.key];
    });

    document.querySelectorAll("[data-key-placeholder]").forEach(el => {
        el.placeholder = translations[lang][el.dataset.keyPlaceholder];
    });

    document.querySelectorAll("select option[data-key]").forEach(opt => {
        opt.textContent = translations[lang][opt.dataset.key];
    });

    localStorage.setItem("language", lang);
}

const savedLang = localStorage.getItem("language") || "hy";
setLanguage(savedLang);

document.querySelectorAll("select[data-key-placeholder]").forEach(select => {
    const placeholderKey = select.dataset.keyPlaceholder;
    const placeholderOption = select.querySelector("option[value='select']");
    placeholderOption.textContent = translations[savedLang][placeholderKey];
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
        setLanguage(btn.dataset.lang);
    });
});

document.querySelectorAll(".lang-switch-mobile button").forEach(btn => {
    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
        setLanguage(btn.dataset.lang);
    });
});

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}

// inputs //

// =======================
// MODAL SYSTEM
// =======================
const modal = document.getElementById("modal");
const openBtns = document.querySelectorAll(".btn1");
const closeBtn = document.getElementById("closeModal");

// открыть модалку
openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (modal) {
            modal.style.display = "flex";
        }
    });
});

// закрыть по крестику
if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// закрыть по клику вне окна
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// =======================
// MODAL FORM → TELEGRAM
// =======================

const modalForm = document.querySelector(".modal-box"); // контейнер модалки
const submitBtn = modalForm.querySelector("button");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    submitBtn.disabled = true;

    // TELEGRAM CONFIG
    const TELEGRAM_BOT_TOKEN = "8647889591:AAEHPZW2Zqbg1owkko6DfpSJoNQOXsx5YF8";
    const TELEGRAM_CHAT_ID = "8234163195";

    // ПОЛУЧАЕМ ДАННЫЕ
    const inputs = modalForm.querySelectorAll("input, textarea");

    const name = inputs[0].value;
    const phone = inputs[1].value;
    const messageText = inputs[2].value;

    const message = `
📩 Նոր դիմում կայքից

👤 Անուն: ${name}
📞 Հեռախոս: ${phone}
💬 Մեկնաբանություն: ${messageText || "Չկա"}

📅 Ամսաթիվ: ${new Date().toLocaleString("hy-AM")}
    `;

    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.ok) {
                alert("Ուղարկվեց ✅");

                inputs.forEach(input => input.value = "");

                // закрыть модалку
                document.getElementById("modal").style.display = "none";
            } else {
                alert("Սխալ ❌");
            }
        })
        .catch(() => {
            alert("Կապի սխալ ❌");
        })
        .finally(() => {
            submitBtn.disabled = false;
        });
});