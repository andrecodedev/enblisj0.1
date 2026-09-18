import type { Questao } from '../../types'

export const questoesDiscursivas: Questao[] = [
  {
    id: 'discursiva-1',
    topicoId: 'discursivas-programacao',
    tipo: 'discursiva',
    fonte: 'ENADE 2021 - Discursiva D2, Formação Geral (oficial)',
    enunciado:
      'Texto I: uma cidade é considerada inteligente quando usa tecnologia pra melhorar infraestrutura e serviços (administração, educação, saúde, segurança, moradia, transporte), tornando-os mais interconectados e eficientes pra toda a população, ' +
      'e quando está comprometida com o meio ambiente e sua herança histórica/cultural.\n\n' +
      'Texto II: a evolução pra uma cidade mais inteligente pressupõe visão holística do espaço urbano e integração dos vários atores/setores, exigindo inovar não só em tecnologia, mas também em gestão, planejamento, governança e política pública.\n\n' +
      'A partir do conceito de cidade inteligente:\n\n' +
      'a) Explique como cidades inteligentes contribuem pra melhorar questões de desenvolvimento sustentável (5 pontos).\n' +
      'b) Apresente uma proposta de intervenção urbana que gere impacto social e contribua pra melhoria da vida em comunidade (5 pontos).',
    dica:
      'Pro item a, conecte tecnologia a um ganho ambiental concreto (energia, emissão). Pro item b, pense num grupo específico que se beneficia (idosos, população em situação de rua) em vez de uma ideia genérica.',
    respostaEsperada:
      'a) Cidades inteligentes reduzem o impacto ambiental (menos consumo de energia, menos emissão de CO2) ao usar tecnologia pra modernizar infraestrutura e serviços urbanos.\n\n' +
      'b) Exemplos aceitos pelo padrão oficial: apps de carona ou de doação de itens, planos de ação voltados a grupos vulneráveis (idosos, população em situação de rua), artefatos urbanos pra facilitar mobilidade ou passagem de fauna.',
  },
  {
    id: 'discursiva-2',
    topicoId: 'discursivas-programacao',
    tipo: 'codigo',
    linguagem: 'pseudocodigo',
    fonte: 'ENADE 2021 - Discursiva D3, Componente Específico (oficial)',
    enunciado:
      'Uma pesquisa entrevistou 1000 pessoas e registrou a altura de cada uma. Desenvolva um algoritmo (pseudocódigo) que calcule: a maior altura, a menor altura, a média das alturas ' +
      'e a quantidade de pessoas com altura abaixo da média.',
    dica:
      'Você só sabe se uma altura fica abaixo da média depois de ter a média calculada, e a média só existe depois de ler todo mundo. Isso pede dois laços separados, não dá pra fazer tudo num laço só.',
    respostaEsperada:
      'algoritmo "pesquisa"\n' +
      'var altura[1000], menor, maior, total=0, media: real\n' +
      'var qtdmenor=0, ctpessoas: inteiro\n' +
      'inicio\n' +
      '    leia altura[1]\n' +
      '    menor = altura[1]\n' +
      '    maior = altura[1]\n' +
      '    total = altura[1]\n' +
      '    para ctpessoas=2 até 1000 faça\n' +
      '        leia (altura[ctpessoas])\n' +
      '        total = total + altura[ctpessoas]\n' +
      '    fimpara\n' +
      '    media = total/1000\n' +
      '    para ctpessoas=1 até 1000 faça\n' +
      '        se menor > altura[ctpessoas] então menor = altura[ctpessoas]\n' +
      '        se maior < altura[ctpessoas] então maior = altura[ctpessoas]\n' +
      '        se media > altura[ctpessoas] então qtdmenor = qtdmenor + 1\n' +
      '    fimpara\n' +
      '    escreva ("Maior =", maior, " Menor=", menor, " Média=", media, " Quantidade de alturas menores que a média=", qtdmenor)\n' +
      'fim',
    explicacao:
      'Precisa de dois laços: o primeiro lê tudo e já soma pra achar a média no fim; o segundo (só possível depois de ter a média) percorre de novo pra comparar cada altura com a média e contar quem fica abaixo.',
  },
  {
    id: 'discursiva-3',
    topicoId: 'discursivas-programacao',
    tipo: 'codigo',
    linguagem: 'c',
    fonte: 'ENADE 2021 - Discursiva D5, Componente Específico (oficial)',
    enunciado:
      'Sistema de triagem hospitalar com fila encadeada em C, baseado neste código:\n\n' +
      'struct lista {\n' +
      '    int numero;\n' +
      '    char cor;\n' +
      '    struct lista* prox;\n' +
      '};\n' +
      'typedef struct lista Lista;\n\n' +
      'Lista* inserir_fim(Lista* l, Lista* no) {\n' +
      '    Lista* aux;\n' +
      '    no->prox = NULL;\n' +
      '    aux = l;\n' +
      '    while (aux->prox != NULL)\n' +
      '        aux = aux->prox;\n' +
      '    aux->prox = no;\n' +
      '    return l;\n' +
      '}\n\n' +
      'Lista* inserir(Lista* l, int numero, char cor) {\n' +
      '    Lista* no = (Lista*) malloc(sizeof(Lista));\n' +
      '    no->numero = numero;\n' +
      '    no->cor = cor;\n' +
      '    if (l == NULL) {\n' +
      '        no->prox = l;\n' +
      '        l = no;\n' +
      '    } else {\n' +
      "        if (no->cor == 'V')\n" +
      '            l = inserir_fim(l, no);\n' +
      '        else\n' +
      '            l = inserir_prioridade(l, no);\n' +
      '    }\n' +
      '    return l;\n' +
      '}\n\n' +
      'Cartão verde (V) entra sempre no fim da fila (inserir_fim, já implementada). ' +
      'Cartão amarelo (A) tem prioridade: deve entrar no início da fila, ou depois do último amarelo já existente (nunca depois de um verde). ' +
      'Exemplo: chegando na ordem 10-V, 11-V, 5-A, 12-V, 6-A, a fila final deve ficar 5-A, 6-A, 10-V, 11-V, 12-V.\n\n' +
      'Implemente a função inserir_prioridade(Lista* l, Lista* no), que insere o nó amarelo no lugar certo.',
    dica:
      'Separe em dois casos: o primeiro nó da fila já é verde (aí o amarelo vira o novo primeiro), ou o primeiro já é amarelo (aí você precisa andar enquanto o próximo também for amarelo, pra parar bem antes do primeiro verde ou do fim da fila).',
    respostaEsperada:
      'Lista* inserir_prioridade(Lista* l, Lista* no) {\n' +
      "    if (l->cartao == 'V') {\n" +
      '        no->prox = l;\n' +
      '        l = no;\n' +
      '    } else {\n' +
      '        Lista* ant = l;\n' +
      '        Lista* aux = ant->prox;\n' +
      "        while (aux != NULL && aux->cartao == 'A') {\n" +
      '            ant = aux;\n' +
      '            aux = aux->prox;\n' +
      '        }\n' +
      '        ant->prox = no;\n' +
      '        no->prox = aux;\n' +
      '    }\n' +
      '    return l;\n' +
      '}',
    explicacao:
      'Se o primeiro da fila já é verde, não existe amarelo ainda: insere no início. Se o primeiro já é amarelo, percorre enquanto for amarelo até achar o fim dos amarelos (ou o primeiro verde, ou o fim da fila) e insere ali.',
  },
  {
    id: 'discursiva-4',
    topicoId: 'discursivas-programacao',
    tipo: 'discursiva',
    fonte: 'ENADE 2021 - Discursiva D1, Formação Geral (oficial)',
    enunciado:
      'Texto I: em época de censura, a própria existência da arte é questionada. O cineasta Jean-Luc Godard diz que "a cultura é a regra; a arte é a exceção": a cultura regula, a arte tensiona e movimenta, questiona e transforma. ' +
      'Os psicanalistas Suely Rolnik e Félix Guattari veem o conceito de cultura como reacionário, uma forma de separar e padronizar atividade semiótica; a arte existe plenamente quando junta o que é separado e questiona o geralmente aceito. ' +
      'Discutir os limites da arte é, na verdade, discutir os limites da nossa tolerância.\n\n' +
      'Texto II (Constituição Federal, art. 5º, IX): "é livre a expressão da atividade intelectual, artística, científica e de comunicação, independentemente de censura ou licença."\n\n' +
      'Considerando os textos I e II, discorra sobre a relação entre arte, cultura e censura, à luz da liberdade artística garantida pela Constituição de 1988. Apresente duas ações educativas que podem contribuir pra minimizar essas tensões e garantir a liberdade artística prevista em lei. (10,0 pontos)',
    dica:
      'O padrão de resposta espera que você reconheça a ilegitimidade de movimentos de censura à luz do art. 5º, e cite duas ações educativas concretas (não uma opinião genérica sobre "liberdade é importante").',
    respostaEsperada:
      'Refletir sobre as tensões entre arte e cultura no Brasil contemporâneo e a liberdade artística garantida pelo art. 5º, IX, percebendo a ilegitimidade de movimentos de censura que eclodem em certos segmentos da sociedade.\n\n' +
      'Duas ações educativas aceitas pelo padrão oficial: encontros de artistas e público em escolas/espaços públicos; projetos de visitação a espaços culturais (museus, galerias) voltados à formação de público/plateia; debates públicos sobre liberdade artística.',
  },
  {
    id: 'discursiva-5',
    topicoId: 'discursivas-programacao',
    tipo: 'discursiva',
    fonte: 'ENADE 2021 - Discursiva D4, Componente Específico (oficial)',
    enunciado:
      'Um analista de requisitos levantou 4 histórias de usuário pra um sistema web de reserva de passagem aérea:\n\n' +
      'HST01: como cliente, quero me cadastrar informando e-mail, nome, CPF, telefone e endereço, pra poder usar os serviços da empresa.\n' +
      'HST02: como cliente, quero pesquisar preço de passagem informando data, hora, cidade e aeroporto de ida/volta, pra escolher uma reserva que me interesse.\n' +
      'HST03: como cliente, quero confirmar uma reserva escolhendo forma de pagamento, pra poder viajar ao local escolhido.\n' +
      'HST04: como cliente, quero fazer check-in online da reserva, pra poder embarcar.\n\n' +
      'Elabore um diagrama de classes UML pra esse sistema: no máximo 6 classes, identificando atributos e associações com multiplicidade. ' +
      'As reservas de ida e de volta devem ser representadas como classes numa associação de generalização (herança) a partir de uma classe Reserva, que precisa ter pelo menos 3 métodos identificados. ' +
      'Não precisa identificar método das demais classes nem multiplicidade de atributo.',
    dica:
      'Pensa em quem "é um tipo de" quem (herança) e quem só "se relaciona com" quem (associação). Reserva de ida e volta compartilham dado e comportamento com uma Reserva genérica, isso é herança. Cliente e Reserva só se relacionam, isso é associação com multiplicidade.',
    respostaEsperada:
      '6 classes: Cliente (CPF, Nome, Email, Telefone, Endereco), Reserva (Codigo, Status, Valor_Total; métodos Solicitar(), Pagar(), Emitir_Check_In()), Forma_Pagamento (Descricao), ' +
      'Reserva_Ida (Data_Ida, Hora_Ida, Valor_Ida) e Reserva_Volta (Data_Volta, Hora_Volta, Valor_Volta) como subclasses de Reserva (generalização/herança), e Cidade (Nome, Aeroporto, Pais).\n\n' +
      'Associações: Cliente 1..1 "Realiza" Reserva 0..* (um cliente realiza zero ou várias reservas). Reserva 0..* "Possui" Forma_Pagamento 1..* (uma reserva usa uma ou mais formas de pagamento). ' +
      'Reserva_Ida 0..* associada a Cidade 1..1 (associação "Ida"). Reserva_Volta 0..* associada a Cidade 1..1 (associação "Volta"). Reserva_Ida e Reserva_Volta herdam de Reserva (seta de generalização apontando pra Reserva).',
    explicacao:
      'O ponto central da questão é reconhecer que ida/volta compartilham estrutura (código, status, valor total, os 3 métodos) com uma Reserva mãe, então isso é herança, não duas classes soltas. ' +
      'A forma de pagamento se liga à Reserva (não ao Cliente diretamente), e cada perna da viagem (ida/volta) se liga a uma Cidade.',
  },
]
