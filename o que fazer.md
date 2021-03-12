## O que Fazer
* Desenvolver um chat aberto (sem a necessidadede cadastro prévio de usuário);
* Para participar da sala, o usuário precisa inserir uma identificação (nickname);
* Ao entrar na sala do Chat, devem ser exibidas a lista de mensagens já enviadas nesta sala;
* As mensagens deverão ser ordenadas por data de envio e de forma crescente;
* Durante a conversa, o usuário deverá visualizar novas mensagens enviadas e também ser alertado quando   outro usuário entrar/ou sair do Chat;
* O usuário pode sair a qualquer momento sair do chat, através de um botão de logoff. Ao sair da aplicação sem fazer logoff, o usuário permanece logado e apto a enviar mensagens quando retornar à aplicação;
* Sua API deve ser acessível/testável independente do front-end;

| Setor      | Tecnologia      |
| -----------|-----------------|
| Front-end  | React com hooks |
| Back-end   | Node.js         |
| API        | Apollo GraphQL  |
| BD         | MongoDB         |


## Regras
1) Não pode existir nickname ativo igual.
1) Não pode existir nome da sala ativa igual.
1) Existir uma sala default (Galera).
1) Listar as conversas da sala somente do mesmo dia.
1) Limitar a listagem de salas par até 5 salas ativas.
1) Excluir a sala quando não existir mais usuário nela (Deixando somente a sala default ativa).
1) Notificar usuários quando receber mensagem.
1) Usuário ao sair da aba envia a ação de deletar.