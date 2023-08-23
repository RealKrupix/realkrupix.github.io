const languageSwitcher = document.getElementById("language-switcher");
const flag = languageSwitcher.querySelector(".flag");

flag.addEventListener("click", function () {
  const currentLang = flag.getAttribute("data-lang");
  const newLang = currentLang === "en" ? "pl" : "en"; // Toggle between English ("en") and Polish ("pl")
  switchLanguage(newLang);
});

function switchLanguage(lang) {
  // Set the language flag and data-lang attribute
  const flagImage = languageSwitcher.querySelector(".flag");
  flagImage.setAttribute("data-lang", lang);
  flagImage.setAttribute("src", `images/flag_${lang}.png`);

  // Load different HTML files based on the selected language
  if (lang === "pl") {
    window.location.href = "index_pl.html"; // Load index_pl.html for Polish language
  } else {
    window.location.href = "index.html"; // Load index.html for English language
  }
}

const primaryNav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navElements = document.querySelectorAll('.primary-nav a');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')

    if(visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

} )

navElements.forEach(navElement => {
    navElement.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');

        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        } else if (visibility === "true") {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
    });
});


function sendEmail() {
  Email.send({
    SecureToken: "85c02d4f-15b7-4ceb-941c-dd3d030593d9",
    To : 'konopskajulia6@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Testujemy wariata",
    Body : "Name: " + document.getElementById("name").value 
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message send successfully")
);


} 









