document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("dropdown-menu");

    menuButton.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    const languageButton = document.getElementById("language-button");
    const languageMenu = document.getElementById("language-menu");

    languageButton.addEventListener("click", function () {
        languageMenu.classList.toggle("show");
    });

    window.changeLanguage = function (lang) {
        const translations = {
            en: {
                welcome: "Welcome ",
                whoAmI: "Who Am I",
                expertise: "I Have Worked On These Programs",
                programmingLanguages: "My name is Homan Ali Abdi I live in Sheladze I am a student in Duhok University Department of Electrical and Computer Engineering I am working to get a bachelor's degree",
                backgroundColor: "linear-gradient(135deg, #20b2aa, #444)" // English background color
            },
            ku: {
                welcome: "بخێرهاتی",
                whoAmI: "ئەس كي مە",
                expertise: "پروگرامی من كار لسەر كری",
                programmingLanguages: "ناڤێ من هومان علي عبدي ئەس خەلكی شێلادزێم - قوتابيمه ل زانكويا دهوك بەشي ئەندازياري پشكي كارەباو كومپيوتەر ئەس كار دكەم دا باوەرناما بكالريوس ب دەست ڤه بينم",
                backgroundColor: "linear-gradient(135deg, #ff6347, #444)" // Kurdish background color
            },
            ar: {
                welcome: "مرحباً",
                whoAmI: "من انا؟",
                expertise: "البرنامج الذي عملت عليه",
                programmingLanguages: "اسمي هومان علي عبدي، من شيلادزي، طالب في جامعة دهوك، قسم الهندسة الكهربائية والحاسوب",
                backgroundColor: "linear-gradient(135deg, #4682b4, #444)" // Arabic background color
            }
        };

        // Change the welcome section text
        document.querySelector('#S1 h1').textContent = translations[lang].welcome;
        
        // Change the background color of the welcome section
        document.getElementById('S1').style.background = translations[lang].backgroundColor;
        
        // Update other sections similarly
        document.querySelector('.section h2').textContent = translations[lang].whoAmI;
        document.querySelector('.section h3').textContent = translations[lang].expertise;
        document.querySelector('.section p').textContent = translations[lang].programmingLanguages;
        
        alert("Language changed to: " + lang);
    };
});