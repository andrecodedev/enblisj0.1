import type { Questao } from '../../types'

export const questoesRedesSistemas: Questao[] = [
  {
    id: 'redes-1',
    topicoId: 'redes-sistemas',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 28 (oficial)',
    enunciado:
      'O sistema operacional é um gerenciador de recursos: recebe solicitações de acesso a recursos por parte das aplicações e concede ou nega tais acessos. ' +
      'É péssima ideia permitir que programas tenham acesso sem restrição à memória uns dos outros: se um programa com defeito (ou malicioso) escreve no espaço de memória de outro, o segundo trava ou produz resultado incorreto, ou pode afetar todo o sistema.\n\n' +
      'A atividade do sistema operacional que garante essa proteção (um programa não interferir na memória de outro) é:',
    dica: 'A pergunta é sobre isolar o espaço de memória entre programas diferentes rodando ao mesmo tempo.',
    alternativas: [
      { letra: 'A', texto: 'o programa antivírus.' },
      { letra: 'B', texto: 'o gerenciamento de memória.' },
      { letra: 'C', texto: 'o gerenciamento de arquivos.' },
      { letra: 'D', texto: 'o gerenciamento de processos.' },
      { letra: 'E', texto: 'o gerenciamento de entrada e saída.' },
    ],
    gabarito: 'B',
    explicacao:
      'Isolar o espaço de memória de cada programa (impedir que um escreva na área do outro) é responsabilidade do gerenciamento de memória do sistema operacional, não do antivírus (que é software à parte) nem do gerenciamento de arquivos, processos ou E/S.',
  },
  {
    id: 'redes-2',
    topicoId: 'redes-sistemas',
    tipo: 'objetiva',
    fonte: 'ENADE 2021 - Questão 30 (oficial)',
    enunciado:
      'Três estações de trabalho numa rede:\n\n' +
      'PROFESSORES01: IP 175.16.10.200, máscara 255.255.255.0, gateway 175.16.1.1\n' +
      'PROFESSORES02: IP 175.16.20.200, máscara 255.255.0.0, gateway 175.16.1.1\n' +
      'PROFESSORES03: IP 175.16.30.200, máscara 255.255.0.0, gateway 175.16.1.1\n\n' +
      'PROFESSORES01 não consegue enviar documentos pra impressão numa impressora compartilhada corretamente em PROFESSORES03. Que alteração resolve o problema?',
    dica:
      'Calcule a sub-rede de cada máquina aplicando a máscara ao IP. PROFESSORES02 e PROFESSORES03 já enxergam uma à outra. Quem está configurado diferente das outras duas é quem provavelmente precisa mudar.',
    alternativas: [
      { letra: 'A', texto: 'Alterar o gateway da estação PROFESSORES03 para 175.16.10.200.' },
      { letra: 'B', texto: 'Alterar o endereço IP da estação PROFESSORES01 para 175.16.30.200.' },
      { letra: 'C', texto: 'Alterar a máscara de sub-rede da estação PROFESSORES01 para 255.255.0.0.' },
      { letra: 'D', texto: 'Alterar a máscara de sub-rede da estação PROFESSORES03 para 255.255.255.0.' },
      { letra: 'E', texto: 'Alterar o gateway da estação PROFESSORES01 para o endereço IP 175.16.30.200.' },
    ],
    gabarito: 'C',
    explicacao:
      'Com máscara 255.255.255.0 (/24), PROFESSORES01 só enxerga direto a sub-rede 175.16.10.0, então 175.16.30.200 fica fora do alcance dela. ' +
      'PROFESSORES02 e PROFESSORES03 usam 255.255.0.0 (/16) e já enxergam uma à outra na sub-rede maior 175.16.0.0. Igualar a máscara de PROFESSORES01 pra 255.255.0.0 a coloca na mesma sub-rede das outras duas, resolvendo o acesso.',
  },
]
