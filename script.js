// ==========================================
// PROVA DE GRAMÁTICA
// JAVASCRIPT
// ==========================================


// ------------------------------------------
// FUNÇÃO PARA PEGAR RADIO BUTTON
// ------------------------------------------

function pegarRadio(nome) {

    const selecionado = document.querySelector(
        `input[name="${nome}"]:checked`
    );

    return selecionado
        ? selecionado.value
        : "";

}


// ------------------------------------------
// NORMALIZAR TEXTO
// ------------------------------------------

function normalizar(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

}


// ------------------------------------------
// FINALIZAR PROVA
// ------------------------------------------

function finalizarProva() {

    let pontos = 0;

    const totalObjetivas = 15;

    let correcoes = [];


    // ======================================
    // QUESTÃO 1
    // ======================================

    if (pegarRadio("q1") === "a") {

        pontos++;

        correcoes.push({
            numero: 1,
            certo: true,
            texto:
                "Correto! Amar é infinitivo, amando é gerúndio e amado é particípio."
        });

    } else {

        correcoes.push({
            numero: 1,
            certo: false,
            texto:
                "Resposta correta: alternativa A — amar, amando e amado."
        });

    }


    // ======================================
    // QUESTÃO 2
    // ======================================

    if (pegarRadio("q2") === "c") {

        pontos++;

        correcoes.push({
            numero: 2,
            certo: true,
            texto:
                "Correto! Correr está no infinitivo."
        });

    } else {

        correcoes.push({
            numero: 2,
            certo: false,
            texto:
                "Resposta correta: alternativa C — correr."
        });

    }


    // ======================================
    // QUESTÃO 3
    // ======================================

    if (pegarRadio("q3") === "c") {

        pontos++;

        correcoes.push({
            numero: 3,
            certo: true,
            texto:
                "Correto! Estudando é uma forma nominal no gerúndio."
        });

    } else {

        correcoes.push({
            numero: 3,
            certo: false,
            texto:
                "Resposta correta: alternativa C — estudando."
        });

    }


    // ======================================
    // QUESTÃO 4
    // ======================================

    if (pegarRadio("q4") === "c") {

        pontos++;

        correcoes.push({
            numero: 4,
            certo: true,
            texto:
                "Correto! Escrito é particípio."
        });

    } else {

        correcoes.push({
            numero: 4,
            certo: false,
            texto:
                "Resposta correta: alternativa C — escrito."
        });

    }


    // ======================================
    // QUESTÃO 5
    // ======================================

    const respostas5 = [

        ["q5a", "infinitivo"],

        ["q5b", "gerundio"],

        ["q5c", "participio"],

        ["q5d", "gerundio"]

    ];


    let acertos5 = 0;


    respostas5.forEach(item => {

        const resposta =
            document.getElementById(item[0]).value;

        if (resposta === item[1]) {

            acertos5++;

        }

    });


    if (acertos5 === 4) {

        pontos++;

        correcoes.push({
            numero: 5,
            certo: true,
            texto:
                "Correto! Todas as classificações da tabela estão certas."
        });

    } else {

        correcoes.push({
            numero: 5,
            certo: false,
            texto:
                `Você acertou ${acertos5} de 4 itens da tabela.`
        });

    }


    // ======================================
    // QUESTÃO 6
    // ======================================

    if (pegarRadio("q6") === "c") {

        pontos++;

        correcoes.push({
            numero: 6,
            certo: true,
            texto:
                "Correto! Escrito é um particípio irregular."
        });

    } else {

        correcoes.push({
            numero: 6,
            certo: false,
            texto:
                "Resposta correta: alternativa C — escrito."
        });

    }


    // ======================================
    // QUESTÃO 7
    // ======================================

    if (pegarRadio("q7") === "c") {

        pontos++;

        correcoes.push({
            numero: 7,
            certo: true,
            texto:
                "Correto! Havia é uma forma do verbo haver."
        });

    } else {

        correcoes.push({
            numero: 7,
            certo: false,
            texto:
                "Resposta correta: alternativa C — haver."
        });

    }


    // ======================================
    // QUESTÃO 8
    // ======================================

    const respostas8 = [

        ["q8a", "feito"],

        ["q8b", "escrito"],

        ["q8c", "resolvido"]

    ];


    let acertos8 = 0;


    respostas8.forEach(item => {

        const resposta =
            document.getElementById(item[0]).value;

        if (resposta === item[1]) {

            acertos8++;

        }

    });


    if (acertos8 === 3) {

        pontos++;

        correcoes.push({
            numero: 8,
            certo: true,
            texto:
                "Correto! As três formas foram utilizadas adequadamente."
        });

    } else {

        correcoes.push({
            numero: 8,
            certo: false,
            texto:
                `Você acertou ${acertos8} de 3 itens.`
        });

    }


    // ======================================
    // QUESTÃO 9
    // ======================================

    if (pegarRadio("q9") === "c") {

        pontos++;

        correcoes.push({
            numero: 9,
            certo: true,
            texto:
                "Correto! 'Estuda' está no presente do indicativo."
        });

    } else {

        correcoes.push({
            numero: 9,
            certo: false,
            texto:
                "Resposta correta: alternativa C."
        });

    }


    // ======================================
    // QUESTÃO 10
    // ======================================

    const respostas10 = [

        ["q10a", "presente"],

        ["q10b", "imperfeito"],

        ["q10c", "futuro"]

    ];


    let acertos10 = 0;


    respostas10.forEach(item => {

        const resposta =
            document.getElementById(item[0]).value;

        if (resposta === item[1]) {

            acertos10++;

        }

    });


    if (acertos10 === 3) {

        pontos++;

        correcoes.push({
            numero: 10,
            certo: true,
            texto:
                "Correto! Os três tempos verbais foram identificados."
        });

    } else {

        correcoes.push({
            numero: 10,
            certo: false,
            texto:
                `Você acertou ${acertos10} de 3 itens.`
        });

    }


    // ======================================
    // QUESTÃO 11
    // ======================================

    if (pegarRadio("q11") === "b") {

        pontos++;

        correcoes.push({
            numero: 11,
            certo: true,
            texto:
                "Correto! A frase apresenta uma possibilidade e utiliza o subjuntivo."
        });

    } else {

        correcoes.push({
            numero: 11,
            certo: false,
            texto:
                "Resposta correta: alternativa B."
        });

    }


    // ======================================
    // QUESTÃO 12
    // ======================================

    if (pegarRadio("q12") === "b") {

        pontos++;

        correcoes.push({
            numero: 12,
            certo: true,
            texto:
                "Correto! 'Estudasse' pertence ao modo subjuntivo."
        });

    } else {

        correcoes.push({
            numero: 12,
            certo: false,
            texto:
                "Resposta correta: alternativa B — subjuntivo."
        });

    }


    // ======================================
    // QUESTÃO 13
    // ======================================

    if (pegarRadio("q13") === "c") {

        pontos++;

        correcoes.push({
            numero: 13,
            certo: true,
            texto:
                "Correto! 'Estude!' expressa uma ordem ou orientação."
        });

    } else {

        correcoes.push({
            numero: 13,
            certo: false,
            texto:
                "Resposta correta: alternativa C."
        });

    }


    // ======================================
    // QUESTÃO 14
    // ======================================

    const respostas14 = [

        ["q14a", "V"],

        ["q14b", "V"],

        ["q14c", "F"],

        ["q14d", "V"]

    ];


    let acertos14 = 0;


    respostas14.forEach(item => {

        if (pegarRadio(item[0]) === item[1]) {

            acertos14++;

        }

    });


    if (acertos14 === 4) {

        pontos++;

        correcoes.push({
            numero: 14,
            certo: true,
            texto:
                "Correto! Todas as afirmações foram classificadas corretamente."
        });

    } else {

        correcoes.push({
            numero: 14,
            certo: false,
            texto:
                `Você acertou ${acertos14} de 4 afirmações.`
        });

    }


    // ======================================
    // QUESTÃO 17
    // ======================================

    const resposta17a = normalizar(
        document.getElementById("q17a").value
    );

    const resposta17b = normalizar(
        document.getElementById("q17b").value
    );

    const resposta17c = normalizar(
        document.getElementById("q17c").value
    );


    let acertos17 = 0;


    if (resposta17a === "estudar") {

        acertos17++;

    }


    if (resposta17b === "estudando") {

        acertos17++;

    }


    if (resposta17c === "estudado") {

        acertos17++;

    }


    if (acertos17 === 3) {

        pontos++;

        correcoes.push({
            numero: 17,
            certo: true,
            texto:
                "Correto! Estudar — estudando — estudado."
        });

    } else {

        correcoes.push({
            numero: 17,
            certo: false,
            texto:
                `Você acertou ${acertos17} de 3 itens. ` +
                `Resposta esperada: estudar — estudando — estudado.`
        });

    }


    // ======================================
    // CALCULAR PORCENTAGEM
    // ======================================

    const percentual = Math.round(
        (pontos / totalObjetivas) * 100
    );


    // ======================================
    // NOME
    // ======================================

    const nome =
        document.getElementById("nome").value.trim();


    document.getElementById(
        "nomeResultado"
    ).innerHTML = nome

        ? `<strong>Aluno:</strong> ${nome}`

        : `<strong>Aluno:</strong> não informado`;


    // ======================================
    // NOTA
    // ======================================

    document.getElementById(
        "nota"
    ).textContent =
        `${pontos} / ${totalObjetivas}`;


    // ======================================
    // MENSAGEM
    // ======================================

    let mensagem;


    if (percentual >= 90) {

        mensagem =
            "🏆 Excelente! Você demonstrou ótimo domínio do conteúdo.";

    }

    else if (percentual >= 70) {

        mensagem =
            "👏 Muito bom! Você teve um bom desempenho.";

    }

    else if (percentual >= 50) {

        mensagem =
            "📚 Bom esforço! Revise alguns conteúdos e tente novamente.";

    }

    else {

        mensagem =
            "💪 Continue estudando! Revise as formas nominais e os modos verbais.";

    }


    document.getElementById(
        "mensagem"
    ).textContent = mensagem;


    // ======================================
    // CORREÇÃO
    // ======================================

    let htmlCorrecao = `
        <h3>📋 Correção</h3>
    `;


    correcoes.forEach(item => {

        htmlCorrecao += `

            <div class="correcao-item ${
                item.certo
                    ? "certo"
                    : "errado"
            }">

                <strong>
                    Questão ${item.numero}:
                    ${item.certo ? "✅" : "❌"}
                </strong>

                <div class="explicacao">
                    ${item.texto}
                </div>

            </div>

        `;

    });


    // ======================================
    // DISSERTATIVAS
    // ======================================

    const resposta15 =
        document.getElementById("q15")
        .value
        .trim();


    const resposta16 =
        document.getElementById("q16")
        .value
        .trim();


    htmlCorrecao += `

        <div class="aviso">

            <strong>
                Questão 15:
            </strong>

            ${
                resposta15

                ? "Resposta preenchida. Corrija manualmente."

                : "O aluno não respondeu."
            }

        </div>


        <div class="aviso">

            <strong>
                Questão 16:
            </strong>

            ${
                resposta16

                ? "Resposta preenchida. Corrija manualmente."

                : "O aluno não respondeu."
            }

        </div>

    `;


    document.getElementById(
        "correcao"
    ).innerHTML = htmlCorrecao;


    // ======================================
    // MOSTRAR RESULTADO
    // ======================================

    document.getElementById(
        "resultado"
    ).style.display = "block";


    // ======================================
    // ROLAR ATÉ O RESULTADO
    // ======================================

    document.getElementById(
        "resultado"
    ).scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// BOTÃO FINALIZAR
// ==========================================

document
    .getElementById("btnFinalizar")
    .addEventListener(
        "click",
        finalizarProva
    );


// ==========================================
// BOTÃO VOLTAR AO TOPO
// ==========================================

document
    .getElementById("btnTopo")
    .addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );
