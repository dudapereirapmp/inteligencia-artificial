const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");
const textoResultado = document.querySelector("caixa-resultado");

const perguntas =[
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
            texto: "Isso é assustador!",
            afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
            },
            {
                 texto:"Isso é maravilhoso!",
                 afirmacao: "Quis saber como usar IA no seu dia a dia."
                }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internt que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
                },
                {
                    texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                    afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
                    }
                    ]
                    },
                    {
                        enunciado:"Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizado a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trbalho do futuro. Nesse debate, como você se posiciona?",
                        alternativas: [
                            {
                                texto: "Defende a ideia de que a IA pode criar novas oportunidades d emprego e melhorar habilidades humanas.",
                                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
                                },
                                {
                                    texto:"Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trbalhadores.",
                                    afirmacao:"Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
                                    }
                                    ]
                                    },
                                    {
                                        enunciado:"Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre a Ia. E agora?",
                                        alternativas:[
                                            {
                                                texto:"Criar uma imagem utilizando uma plataforma de desing com o Paint.",
                                                afirmacao:"Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de desing utilizando ferramentas de pintura digital para iniciantes."
                                                },
                                                {
                                                    texto:"Criar uma imagem utilizando um gerador de imagem IA.",
                                                    afirmacao:"Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
                                                    }
                                                    ]
                                                    },
                                                    {
                                                        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com a ajuda da IA. O problema é que o trbalho está totalmente igual ao do chat. O que você faz? ".
                                                        alternativas: [
                                                            {
                                                                texto:"Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                                                                afirmacao:"Infelizmente passou a utilizar a IA para fazer todas as suas tarefas e agora se sente dependente da IA para tudo."
                                                                },
                                                                {
                                                                    texto:"O chat pode ser uma tecnologia muita avançada, mas é preciso manter a atenção pois toda máquina erra,, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                                                                    afirmacao:"Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxilio e não resultado final."
                                                                    }
                                                                    ]
                                                                    },
                                                                ];


                                                                let atual=0;
                                                                let perguntaAtual;
                                                                let historiaFinal= "";

                                                                
]