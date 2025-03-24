function pesquisar(){

// pegando o input text
let searchs = document.querySelector("#search").value;

let section = document.querySelector("#resultados");

// ! - operador de negacao, ele verifica se a pesquisa é falsa, se ela for vazia ele vai executar o comando abaixo
if(!searchs) {
    section.innerHTML = "<p>Nada foi encontrado</p>"
    return 
}
   
// dados onde a pessoa vai digitar e será exibido o 'conteudo'
dados = [
{ 
    titulo: 'PATRONO',
    descricao: 'É um <u>feitiço defensivo</u> que conjura um <u>patrono</u>, um ser mágico feito de energia positiva que toma a forma de um animal prateado, único para cada bruxo. É a única defesa conhecida contra <u>dementadores</u>. Para conjurá-lo, é preciso concentrar-se em um pensamento positivo. Pode ser usado também como uma forma de comunicação entre bruxos, visto que em diversas passagens dos livros o bruxo conjura o patrono que leva mensagens, avisos, recados (como se o bruxo gravasse uma mensagem de voz no patrono) ou até para proteger outros lugares.',
    link:'https://harrypotter.fandom.com/pt-br/wiki/Feiti%C3%A7o_do_Patrono',
    tags: 'Patrono patrono'
},
{ 
    titulo: 'CASAS DE HOGWARTS',
    descricao: 'Em Hogwarts, todos os alunos do primeiro são selecionados para uma de quatro casas, sendo elas: <u>Gryffindor</u>, <u>Ravenclaw</u>, <u>Hufflepuff</u> e <u>Slytherin</u>. Na tradução brasileira receberam o nome: Grifinória, Corvinal, Lufa-lufa e Sonserina (respetivamente).<br> <br> A seleção é feita pelo <u>Chapéu Selecionador</u> (Chapéu Seletor, na tradução brasileira), um artefacto mágico que determina magicamente a casa de cada aluno. No banquete de abertura de início de ano, os alunos do primeiro ano colocam o chapéu e após um momento, o chapéu grita em voz alta o nome da casa a qual o aluno irá pertencer. A seleção tem em conta a personalidade e habilidades do(a) aluno(a), uma vez que as casas foram criadas e apelidadas pelos próprios fundadores de Hogwarts, representando as características que cada um prezava',
    link:'https://pt.wikipedia.org/wiki/Hogwarts',
    tags: 'casa casas Casas Casa'
},
{ 
    titulo: 'Filmes',
    descricao: 'Harry Potter é uma <u>série de sete romances de fantasia</u> escrita pela autora britânica <u>J. K. Rowling</u>. A série narra as aventuras de um jovem chamado Harry James Potter(Harry Tiago Potter, no Brasil), que descobre aos 11 anos de idade que é um bruxo ao ser convidado para estudar na Escola de Magia e Bruxaria de <u>Hogwarts</u>. O arco de história principal diz respeito às amizades de Harry com outros bruxos de sua idade, como <u>Ron Weasley</u> e <u>Hermione Granger</u>, e também com o diretor de Hogwarts <u>Albus Dumbledore</u>, considerado o maior dos magos, e seus conflitos com o bruxo das trevas <u>Lord Voldemort</u>, que pretende se tornar imortal, conquistar o mundo dos bruxos, subjugar as pessoas não-mágicas e destruir todos aqueles que estão em seu caminho, especialmente Harry Potter, a quem ele considera seu maior rival.',
    link:'https://www.cnnbrasil.com.br/entretenimento/filmes-harry-potter/',
    tags: 'Filmes filmes filme Filme'
},
{ 
    titulo: 'Personagens - O Trio principal',
    descricao: '<u>Harry James Potter é o protagonista da série</u>. Ele descobre aos 11 anos que é um bruxo e que sobreviveu a um ataque do temido Lord Voldemort quando era bebê. Marcado por uma cicatriz em forma de raio, Harry é corajoso, leal e determinado a proteger aqueles que ama. Como o "Menino que Sobreviveu", ele carrega o fardo de enfrentar Voldemort e lutar pelo bem do mundo bruxo.<br> <br> <u>Ronald Bilius Weasley, conhecido como Ron, é o melhor amigo de Harry</u> e membro da família Weasley, uma família tradicional e numerosa de bruxos de sangue puro. Ele é leal e divertido, mas às vezes inseguro por viver à sombra de seus irmãos mais velhos e de Harry. Apesar disso, Ron se prova um grande amigo e companheiro ao longo da série.<br> <br> <u>Hermione Jean Granger é a melhor amiga de Harry e Ron</u>. Nascida em uma família trouxa, ela é extremamente inteligente, dedicada aos estudos e uma das alunas mais detalhadas de Hogwarts. Sua inteligência e conhecimento de magia muitas vezes salvam o trio de situações perigosas. Além disso, ela luta contra injustiças, como a opressão dos elfos domésticos.',
    link:'https://criticalhits.com.br/livros/os-24-personagens-mais-importantes-de-harry-potter/',
    tags: 'personagens Personagens'
},
]

// colocando uma string vazia para armazenar os resultados da pesquisa feita pelo usuário
let resultados = '';
let titulo = '';
let descricao = '';
let tags = '';

// faz cada elemento mostrar o conteudo
for (let dado of dados){
    titulo = dado.titulo;
    descricao = dado.descricao;
    tags = dado.tags;
    
if (titulo.includes(searchs) || descricao.includes(searchs) || tags.includes(searchs) ) {
    
    // resultados = resultados + 
    resultados +=

    `<div class="itens">
    
    <div class="titulo"><h2>${dado.titulo}</h2></div>

    <div class="description"><p class="descricao">${dado.descricao}</p></div>

    <a href="${dado.link}" target="_blank">mais informações</a>

    </div>`;
  } 
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

  section.innerHTML = resultados;
 }
