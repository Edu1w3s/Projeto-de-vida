// ====================== SISTEMA DE ABAS ======================
const botoes = document.querySelectorAll('.botao');
const abasConteudo = document.querySelectorAll('.aba-conteudo');

// Função para remover classe 'ativo' de todos os botões e abas
function desativarAbasEBotoes() {
    botoes.forEach(btn => {
        btn.classList.remove('ativo');
    });
    abasConteudo.forEach(aba => {
        aba.classList.remove('ativo');
    });
}

// Ativar aba específica e botão correspondente
function ativarAbaEbotao(indice) {
    if (botoes[indice] && abasConteudo[indice]) {
        botoes[indice].classList.add('ativo');
        abasConteudo[indice].classList.add('ativo');
    }
}

// Adicionar evento de clique para cada botão
botoes.forEach((botao, idx) => {
    botao.addEventListener('click', () => {
        desativarAbasEBotoes();
        ativarAbaEbotao(idx);
    });
});

// ====================== CONTADORES REGRESSIVOS ======================
// Definindo datas para cada objetivo (ano de 2025)
const datasObjetivos = [
    new Date(2025, 5, 30, 23, 59, 59),   // 30 de junho 2025 - cursos
    new Date(2025, 7, 31, 23, 59, 59),   // 31 de agosto 2025 - projetos JS
    new Date(2025, 9, 31, 23, 59, 59),   // 31 de outubro 2025 - portfolio
    new Date(2025, 11, 15, 23, 59, 59)   // 15 de dezembro 2025 - currículo
];

// Obter os elementos dos contadores
const contadorEls = [
    document.getElementById('contador0'),
    document.getElementById('contador1'),
    document.getElementById('contador2'),
    document.getElementById('contador3')
];

// Função que calcula o tempo restante
function calculaTempoRestante(dataObjetivo) {
    const agora = new Date();
    let diferencaMs = dataObjetivo - agora;
    
    // Se o prazo já passou
    if (diferencaMs <= 0) {
        return {
            dias: 0,
            horas: 0,
            minutos: 0,
            segundos: 0,
            expirado: true
        };
    }
    
    // Cálculo preciso
    let segundosTotal = Math.floor(diferencaMs / 1000);
    let dias = Math.floor(segundosTotal / 86400);
    segundosTotal %= 86400;
    let horas = Math.floor(segundosTotal / 3600);
    segundosTotal %= 3600;
    let minutos = Math.floor(segundosTotal / 60);
    let segundos = segundosTotal % 60;
    
    return {
        dias: dias,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
        expirado: false
    };
}

// Formatar número com dois dígitos
function formatarNumero(num) {
    return num < 10 ? '0' + num : num;
}

// Atualizar todos os contadores na tela
function atualizarContadores() {
    for (let i = 0; i < datasObjetivos.length; i++) {
        const tempo = calculaTempoRestante(datasObjetivos[i]);
        const elemento = contadorEls[i];
        if (elemento) {
            if (tempo.expirado) {
                elemento.textContent = '🎯 Prazo finalizado! ✅';
                elemento.style.color = "#b3ffcf";
            } else {
                const textoContador = `${tempo.dias} dias  ${formatarNumero(tempo.horas)}h ${formatarNumero(tempo.minutos)}min ${formatarNumero(tempo.segundos)}s`;
                elemento.textContent = textoContador;
            }
        }
    }
}

// Iniciar contadores (vai rodar infinitamente enquanto a página estiver aberta)
atualizarContadores();
setInterval(atualizarContadores, 1000);

console.log("✅ App de objetivos funcionando perfeitamente! Contadores atualizando a cada segundo.");
