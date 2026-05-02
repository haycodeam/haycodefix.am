const translations = {
    hy: {
        nav_home: "Գլխավոր",
        nav_about: "Մեր մասին",
        nav_services: "Ծառայություններ",
        nav_courses: "Դասընթացներ",
        nav_contact: "Կապ",

        hero_title: "Բացահայտեք թվային հնարավորությունների նոր աշխարհը մեզ հետ",
        hero_text: "HayCode.am — ժամանակակից վեբ լուծումներ",
        hero_btn: "Գրանցվել",

        about_title: "Մեր մասին",
        about_text: "HayCode.am-ը ժամանակակից վեբ զարգացման ստուդիա է, որտեղ տեխնոլոգիան և ստեղծագործական միտքը միավորվում են՝ ստեղծելու հզոր թվային լուծումներ։ Մենք նախագծում և իրականացնում ենք արագ, անվտանգ և բարձրորակ կայքեր՝ կենտրոնանալով յուրաքանչյուր մանրուքի վրա։ Մեր նպատակը ոչ միայն գեղեցիկ դիզայն ստեղծելն է, այլև ապահովել ձեր բիզնեսի արդյունավետ աճն ու հաջողությունը թվային աշխարհում։",
        about_box: "Թվային լուծումներ՝ իրական արդյունքով",

        contact_title: "Կապ մեզ հետ",
        send_btn: "Ուղարկել",

        name: "Անուն",
        email: "Էլ․ հասցե",
        phone: "Հեռախոսահամար",
        message: "Հաղորդագրություն",
        select_purpose: "Ընտրեք նպատակ",
        purpose_course: "Դասերի համար",
        purpose_website: "Կայքի ստեղծման համար",

        success: "Շնորհակալություն, ձեր հայտը ուղարկված է"
    },

    ru: {
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_courses: "Курсы",
        nav_contact: "Контакты",

        hero_title: "Откройте новый мир цифровых возможностей вместе с нами",
        hero_text: "HayCode.am — современные веб-решения",
        hero_btn: "Записаться",

        about_title: "О нас",
        about_text: "HayCode.am — это современная студия веб-разработки, где технологии сочетаются с креативным мышлением для создания мощных цифровых решений. Мы разрабатываем быстрые, безопасные и качественные сайты, уделяя внимание каждой детали. Наша цель — не просто создать красивый дизайн, а помочь вашему бизнесу расти и успешно развиваться в цифровой среде.",
        about_box: "Цифровые решения — с реальным результатом",

        contact_title: "Связаться с нами",
        send_btn: "Отправить",

        name: "Имя",
        email: "Email",
        phone: "Номер телефона",
        message: "Сообщение",
        select_purpose: "Выберите цель",
        purpose_course: "Для уроков",
        purpose_website: "Для создания сайта",

        success: "Спасибо, ваша заявка отправлена"
    },

    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_courses: "Courses",
        nav_contact: "Contact",

        hero_title: "Discover a new world of digital opportunities with us",
        hero_text: "HayCode.am — modern web solutions",
        hero_btn: "Join Now",

        about_title: "About us",
        about_text: "HayCode.am is a modern web development studio where technology meets creativity to build powerful digital solutions. We design and develop fast, secure, and high-quality websites with attention to every detail. Our goal is not only to create visually appealing designs but also to help your business grow and succeed in the digital world.",
        about_box: "Digital solutions with real results",

        contact_title: "Contact Us",
        send_btn: "Send",

        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        select_purpose: "Select purpose",
        purpose_course: "For courses",
        purpose_website: "For website creation",

        success: "Thank you, your request has been sent"
    }
};

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

/// theme section ///

function darkmode() {
    const body = document.body
    const wasDarkmode = localStorage.getItem("darkmode") == "ture"

    localStorage.setItem("darkmode", !wasDarkmode);
    body.classList.toggle("modechange", !wasDarkmode)
}
document.querySelector(".modechange").addEventListener('click', darkmode)

//////////////////////////

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

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});
var navlinks = document.querySelectorAll("nav a")
navlinks.forEach((e) => {
    e.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
})
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;

    //--------------//


    const TELEGRAM_BOT_TOKEN = "8647889591:AAEHPZW2Zqbg1owkko6DfpSJoNQOXsx5YF8";
    const TELEGRAM_CHAT_ID = "8234163195";

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const purpose = form.purpose.value;
    const messageText = form.message.value;

    const message = `
📩 Նոր դիմում կայքից

👤 Անուն: ${name}
📧 Email: ${email}
📞 Հեռախոս: ${phone}
🎯 Նպատակ: ${purpose}
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
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Հաղորդագրությունը հաջողությամբ ուղարկվեց ✅");
                form.reset();
            } else {
                alert("Սխալ տեղի ունեցավ ❌");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Կապի սխալ ❌");
        })
        .finally(() => {
            submitBtn.disabled = false;
        });
});