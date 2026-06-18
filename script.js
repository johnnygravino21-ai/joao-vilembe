// Referências dos elementos
var modal = document.getElementById("modalEquipa");
var btn = document.getElementById("btnEquipa");
var span = document.getElementById("fecharModal");

// Abrir modal
if(btn && modal){
    btn.onclick = function(){
        modal.style.display = "block";
    }
}
// Fechar modal no X
if(span && modal){
    span.onclick = function(){
        modal.style.display = "none";
    }
}

// Fechar ao clicar fora da modal
window.addEventListener("click", function(event){

    let modalEquipa = document.getElementById("modalEquipa");
    let modalCurso = document.getElementById("modalCurso");

    if(modalEquipa && event.target === modalEquipa){
        modalEquipa.style.display = "none";
    }

    if(modalCurso && event.target === modalCurso){
        modalCurso.style.display = "none";
    }

});
//Recebe como parâmetro o nome do curso clicado
function abrirCurso(nome) {
//Obtém os dados do curso
    const curso = cursos[nome];
//Atualiza o título, a descrição, a importância e o custo.
    document.getElementById("tituloCurso").innerText = curso.titulo;
    document.getElementById("descricaoCurso").innerText = curso.descricao;
    document.getElementById("importanciaCurso").innerText = curso.importancia;
    document.getElementById("custoCurso").innerText = curso.custo;
//Limpa a lista do programa, ou seja, antes de mostrar um novo curso, apaga os itens do curso anterior
    let lista = document.getElementById("programaCurso");
    lista.innerHTML = "";
//Cria os tópicos do programa
    curso.programa.forEach(item => {
        lista.innerHTML += `<li>${item}</li>`;
    });
//Abre a modal
    document.getElementById("modalCurso").style.display = "block";
}
//fecha(oculta) a modal
function fecharCurso() {
    document.getElementById("modalCurso").style.display = "none";
}
// Informacoes da janela modal de cada curso
const cursos = {

    matematica:{
        titulo:"Licenciatura em Matemática",
        descricao:"A Licenciatura em Matemática proporciona uma formação sólida em raciocínio lógico, modelação matemática, análise de dados e resolução de problemas complexos. O curso prepara profissionais para atuar no ensino, investigação científica, tecnologia, finanças e outras áreas que exigem pensamento analítico avançado.",
        importancia:"A Matemática é a linguagem universal da ciência. Está presente em praticamente todas as áreas do conhecimento, desde a engenharia e a informática até à economia e à medicina. O desenvolvimento tecnológico, a investigação científica e a tomada de decisões baseadas em dados dependem fortemente dos conhecimentos matemáticos.",
        programa:[
            "Álgebra Linear",
            "Cálculo Diferencial e Integral",
            "Geometria",
            "Estatística",
            "Análise Matemática",
            "Didática da Matemática"
        ],
        custo:"150.000 Kz por semestre"
    },

    informatica:{
        titulo:"Licenciatura em Informática",
        descricao:"A Licenciatura em Informática forma profissionais capazes de desenvolver software, criar aplicações, administrar sistemas informáticos e implementar soluções tecnológicas inovadoras. O curso combina conhecimentos teóricos e práticos para responder às exigências do mundo digital.",
        importancia:"A Informática é um dos principais motores da transformação digital. Empresas, governos e instituições dependem de sistemas informáticos para operar de forma eficiente. Os profissionais desta área desempenham um papel fundamental na inovação tecnológica, na automação de processos e na segurança da informação.",
        programa:[
            "Programação",
            "Base de Dados",
            "Redes de Computadores",
            "Inteligência Artificial",
            "Desenvolvimento Web",
            "Segurança Informática"
        ],
        custo:"180.000 Kz por semestre"
    },

    gestao:{
        titulo:"Licenciatura em Gestão de Empresas",
        descricao:"A Licenciatura em Gestão de Empresas prepara profissionais para planear, organizar e dirigir organizações públicas e privadas. O curso desenvolve competências em liderança, finanças, marketing, empreendedorismo e gestão estratégica.",
        importancia:"As organizações necessitam de gestores qualificados para utilizar recursos de forma eficiente e alcançar os seus objetivos. A Gestão de Empresas contribui para o crescimento económico, a criação de empregos e o desenvolvimento sustentável das instituições e da sociedade.",
        programa:[
            "Economia",
            "Contabilidade",
            "Marketing",
            "Gestão Financeira",
            "Empreendedorismo",
            "Recursos Humanos"
        ],
        custo:"170.000 Kz por semestre"
    },

    educacao:{
        titulo:"Licenciatura em Educação",
        descricao:"A Licenciatura em Educação forma profissionais comprometidos com o desenvolvimento humano e a transformação social através do ensino. O curso aborda metodologias pedagógicas modernas, psicologia da aprendizagem e tecnologias educacionais.",

        importancia:"A educação é um dos pilares fundamentais do progresso de qualquer sociedade. Professores e educadores desempenham um papel decisivo na formação de cidadãos conscientes, críticos e preparados para enfrentar os desafios do mundo contemporâneo.",
        programa:[
            "Psicologia da Educação",
            "Didática",
            "Avaliação Educacional",
            "Tecnologias Educacionais",
            "Currículo",
            "Metodologia de Ensino"
        ],
        custo:"140.000 Kz por semestre"
    }
};
