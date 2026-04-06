📊 Contagem de Dias de Estudo

Aplicação simples desenvolvida com foco em consolidar fundamentos de JavaScript e evolução prática como desenvolvedor.

🚀 Funcionalidades
Registro de dias de estudo com controle por data
Exibição da quantidade total de dias estudados
Listagem dinâmica dos dias registrados
Persistência de dados utilizando localStorage
Prevenção de registros duplicados no mesmo dia
🧠 Conceitos aplicados
🔹 Controle de estado

Os dados da aplicação são centralizados em um objeto estado, garantindo uma única fonte de verdade.

🔹 Fluxo da aplicação

A aplicação segue um fluxo bem definido:

evento → atualização do estado → renderização da interface

🔹 Manipulação do DOM
Criação dinâmica de elementos (createElement)
Inserção no DOM (appendChild)
Atualização de conteúdo (textContent)
🔹 Estrutura de dados

Uso de array de objetos para representar cada dia de estudo:

{
  dia: 1,
  data: "06/04/2026"
}
🔹 Persistência de dados
Armazenamento com localStorage
Conversão de dados com JSON.stringify e JSON.parse
🔹 Validação de regras
Impede múltiplos registros no mesmo dia utilizando .some()
🛠️ Tecnologias
HTML
JavaScript
📈 Aprendizados

Durante o desenvolvimento, foram consolidados conceitos fundamentais como:

Separação entre dados e interface
Controle manual de renderização
Estruturação de lógica de aplicação
Evolução de dados simples para estruturas mais complexas
🔄 Possíveis melhorias
Adicionar registro de tempo de estudo (minutos)
Melhorar feedback visual ao usuário
Permitir edição ou remoção de registros
Evoluir para integração com backend futuramente
💡 Sobre o projeto

Este projeto faz parte da minha jornada inicial em Engenharia de Software, com foco em construir uma base sólida antes de avançar para tecnologias mais complexas.
