// Seleciona os elementos do DOM
const cookieBanner = document.getElementById("cookieBanner");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");

// Função para salvar o consentimento no localStorage
function setCookieConsent(consentType) {
    localStorage.setItem("cookieConsent", consentType);
    cookieBanner.classList.add("hidden");
}

// Verifica se o consentimento já foi dado
if (!localStorage.getItem("cookieConsent")) {
    cookieBanner.classList.remove("hidden");
} else {
    cookieBanner.classList.add("hidden");
}

// Evento de clique para aceitar os cookies
acceptCookies.addEventListener("click", () => {
    setCookieConsent("accepted");
});

// Evento de clique para recusar os cookies e voltar para a página anterior
rejectCookies.addEventListener("click", () => {
    history.back();
});