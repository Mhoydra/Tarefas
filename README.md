# Tarefas

- Projeto: Sistema de tarefas

- Integrantes: 
- Joel: Git, Github e zelador;
- Elem: Banco de dados;
- Yuri: Documentação;
- Guilherme: Backend;
- Jessica: Frontend;

- Atualmente possui:

- controller de tarefas .js
- route de tarefas . js
- banco de dados para tarefas . sql
- acesso ao banco por db . js

É um sistema de gerenciador de tarefas com as seguintes funcionalidades:

- Este é um aplicativo para planejar e organizar tarefas. Na interface existem 3 colunas chamadas de "Pendentes", "Em progresso" e "Concluídas". Além disso, existem 3 funcionalidades dentro do aplicativo: 

- CRIAR: Você é capaz de criar tarefas novas inserindo o nome e descrição delas. As tarefas recém criadas automaticamente recebem o status de "Pendente" e vão para uma coluna na interface que lista todas as tarefas pendentes.

- Caso você já tenha alguma tarefa criada, você tem as opções de remover ou editar estas tarefas, funcionando das seguintes formas:
- REMOVER: Você simplesmente apaga completamente a tarefa do banco de dados e da interface.
- EDITAR: Você tem as opções de editar tanto o nome e a descrição quanto o status da tarefa. Para alterar o status, você deve clicar numa caixinha que te mostra outras 2 opções além do status atual. No caso de pendente, aparece "Em progresso" ou "Concluída" como opções e caso você selecione alguma dessas opções e salve, a tarefa em questão é movida na interface para a coluna correspondente.


DESAFIO OPCIONAL:
- Quando o Guilherme foi fazer o merge do develop com o main, ele encontrou o seguinte problema: Reclamva que a pasta README não existia, mesmo ela existindo no main, não permitindo que ele concluísse o merge. A resposta que ele encontrou para este problema foi criar 1 README vazio no develop dele e então fazer o merge com o main. Ao fazer isso, ele teve a opção de manter o README do main ou o README vazio do develop, escolhendo manter o do main.
