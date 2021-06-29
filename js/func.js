//loader

/*function boas() {
    document.querySelector(".pageloader").classList.toggle("is-active");
}

window.onload = function () { boas()} */

//menu mobile

/*var burguer = document.querySelector(".navbar-burger");

burguer.addEventListener("click", function () {
    burguer.classList.toggle("is-active");
    document.querySelector(".navbar-menu").classList.toggle("is-active");
});*/

//imagem em tela cheia

endereco = "";
        galeria = document.querySelector(".galeria")
        imagens = galeria.querySelectorAll("img")
        modal = galeria.querySelector(".modal")
        modalClose = modal.querySelector("#btnModal")
        imagemModal = document.querySelector("#imgModal")

        modalClose.addEventListener("click", function () {
            modal.classList.toggle("is-active")
        })

        for (x = 0; x < imagens.length; x++) {
            imagens[x].addEventListener("click", function () {
                endereco = this.getAttribute("src")
                imagemModal.setAttribute("src",endereco)
                modal.classList.toggle("is-active")

            })
        }

 //ensinos
/*
 var contInf="<p>A<span class='has-text-weight-bold'> Educação Infantil</span> tem como objetivo promover <u>interações e brincadeiras</u> que permitam a criança aprender em situações nas quais possam desempenhar um papel ativo em ambientes que as convidem a vivenciar desafios e a sentirem-se provocadas a resolvê-los, construindo significados sobre si, os outros e o mundo social e natural no qual convive.</p><p> É <u>a partir da brincadeira e da interação</u> que a nossa criança desenvolve, nesta etapa, as estruturas, habilidades e competências que serão importantes ao longo de toda a vida.</p>"
 var contFun="<p>Anos iniciais propõe o <u>estímulo ao pensamento lógico, criativo e crítico</u>, bem como sua capacidade de perguntar, argumentar, interagir e ampliar sua compreensão do mundo.</p><p> <span class=' has-text-weight-bold'>Nos Anos Finais</span> a progressão do conhecimento ocorre pela consolidação das aprendizagens anteriores e pela ampliação das práticas de linguagem e da experiência estética e intercultural dos alunos, <u>considerando tanto seus interesses e suas expectativas quanto o que ainda precisam aprender.</u></p>"
 var contMed="<p>Nesta fase oferecemos uma <u>estrutura adequada às necessidades contemporâneas</u> que contempla as competências essenciais para a <span class=' has-text-weight-bold'>formação integral do aluno</span>, tornando-o <u>protagonista do seu desenvolvimento pessoal</u>, de forma engajada e autônoma, para que ele participe ativamente do seu processo de aprendizagem e <u>seja capaz de elaborar seu projeto de vida</u> para que o tenha como um instrumento norteador e motivador para seguir em frente em busca de um futuro sempre melhor.</p><p>Oferecemos assim 3 formações nos seguintes eixos:<ul><li><span class='has-text-danger'>Saúde</span></li> <li><span class='has-text-info'>Tecnologia</span></li> <li><span class='has-text-success'>Preparo para o Trabalho</span></li></p>"

var grdEnsino = document.querySelector("#sec-2")
ensino = grdEnsino.querySelectorAll('.ensino')
modalEnsino = grdEnsino.querySelector(".modal")
mdlCardClose = grdEnsino.querySelector(".delete")

mdlCardClose.addEventListener("click", function () {
    modalEnsino.classList.toggle("is-active")
})

for (x = 0; x < ensino.length; x++) {
    ensino[x].addEventListener("click", function () {
        var title = modalEnsino.querySelector(".modal-card-title") 
       title.textContent = "Ensino "+this.querySelector(".title").textContent
       if(title.textContent =="Ensino Infantil"){
        modalEnsino.querySelector(".content").innerHTML = contInf
    }else if(title.textContent =="Ensino Fundamental"){
        modalEnsino.querySelector(".content").innerHTML = contFun
    }else if(title.textContent =="Ensino Médio"){
        modalEnsino.querySelector(".content").innerHTML = contMed
    }
     
       modalEnsino.classList.toggle("is-active")
    })
}*/
let menu = document.querySelector(".navbar-menu")
document.querySelector(" .navbar-burger").addEventListener("click",function(){
    this.classList.toggle("is-active")
    menu.classList.toggle("is-active")
    menu.classList.toggle("has-background-info-dark")
    menu.classList.toggle("has-text-centered")
    menu.classList.toggle("is-transparent")
})