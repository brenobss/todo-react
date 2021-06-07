#ToDo React
App para listar atividades a fazer e marcar as concluídas

#Como funciona
Para inserir uma tarefa clique no "+" para aparecer um modal, basta digitar e apertar o botão "Add", então aparecerá um card com a tarefa e um botão para marcar se está concluída e um outro para excluir.

#Programação
Um ponto importante da aplicação é que o redux gerencia o estado das variáveis globais mais importante, ele recebe a tarefa junto de um id e um boolean para saber se a tarefa foi concluída e então salva no localStorage do navegador, quando o navegador é reiniciado uma função busca o que está no localStorage e a entrega ao redux que renderiza o que tiver que renderizar

#Tecnologias
###Reactjs
###HTML, CSS
###Redux
###Material UI

#Dependências
###nodejs
###npm
###yarn

#Como usar na sua máquina
##Certifique-se de ter as dependências
###Digite o comando no terminal > git clone https://github.com/brenobss/todo-react.git
###Após isso entre na pasta do projeto com > cd todo-react
###Em seguida > yarn | ou | > npm install
###Por fim > yarn start | ou | > npm start