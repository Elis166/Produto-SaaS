// ============================
// INDEX.HTML
// ============================
const btnContinuar = document.getElementById("btn-continuar");
const inputEmail = document.getElementById("email");
const btnEntrarIndex = document.getElementById("btn-entrar");

if (btnContinuar) {
    btnContinuar.addEventListener("click", () => {
        const email = inputEmail.value.trim();

        if (email === "") {
            alert("Digite um email válido");
            return;
        }

        localStorage.setItem("email", email);
        window.location.href = "cadastro.html";
    });
}

if (btnEntrarIndex) {
    btnEntrarIndex.addEventListener("click", () => {
        window.location.href = "entrando.html";
    });
}

// ============================
// CADASTRO.HTML
// ============================
const formCadastro = document.getElementById("form-cadastro");

if (formCadastro) {
    formCadastro.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (nome === "" || senha === "") {
            alert("Preencha todos os campos");
            return;
        }

        localStorage.setItem("nome", nome);
        localStorage.setItem("senha", senha);

        window.location.href = "sucesso.html";
    });
}

// ============================
// ENTRANDO.HTML (LOGIN)
// ============================
const formEntrar = document.getElementById("form-entrar");

if (formEntrar) {
    formEntrar.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailDigitado = document.getElementById("login-email").value.trim();
        const senhaDigitada = document.getElementById("login-senha").value.trim();

        const emailSalvo = localStorage.getItem("email");
        const senhaSalva = localStorage.getItem("senha");

        if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva) {
            localStorage.setItem("logado", "true");
            window.location.href = "mostruario.html";
        } else {
            alert("Usuário não encontrado ou senha incorreta");
        }
    });
}

// ============================
// MOSTRUARIO.HTML
// ============================
function protegerPagina() {
    const logado = localStorage.getItem("logado");

    if (logado !== "true") {
        alert("Você precisa estar logado para acessar esta página");
        window.location.href = "index.html";
    }
}

function sair() {
    localStorage.removeItem("logado");
    window.location.href = "index.html";
}
