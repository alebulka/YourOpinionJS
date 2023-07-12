# Requisitos do usuário
>O que o usuário final espera
- Poder cadastrar a sua opinião;
- Apenas usuários cadastrados podem emitir opinião;
- Não serão permitidas respostas em opiniões alheias;
- Será possível editar e deletar opiniões;
- Será possível editar e deletar usuários;
- Ter uma barra de pesquisa por argumento;
- Ter um perfil admin.
# Requisitos funcionais
>O que o sistema precisa fazer
- Endpoint do tipo post (para cadastro de opiniões);
- Endpoint de cadastro e autenticação de usuário;
- Validar se o usuário está autenticado (middleware);
- Endpoint do tipo get para listar as opiniões;
- Endpoint do tipo delete para deletar usuários ou opiniões;
- Endpoint patch(atualiza dados parciais) ou put(atualizar todos os dados) para editar usuários ou opiniões;
- Endpoint do tipo get que vai receber Query Param;
- Admin terá permissões de excluir e alterar opiniões.
# Requisitos não funcionais
>Não impacta no fluxo da aplicação mas é importante ter ali
- Usaremos banco relacional;
- Usaremos autenticação jwt;
- Chave única para cadastro de usuários será o CPF;
- O registro de opinião será buscado pelo usuário;
- Teremos uma tabela para cadastro de usuário e outra para cadastro de opiniões.
# Requisitos de sistemas
>Ferramentas e tecnologias que vamos usar
- Node.js;
- PostgreSQL;
- React;
- Prisma.io (orm);
- Docker.
# Regras de negócio
- Apenas usuários autenticados podem cadastrar opiniões;
- As opiniões serão visíveis para qualquer usuário sem autenticação;
- Poder pesquisar por categorias;
- O usuário só pode ter um cadastro (validado por cpf);
- O usuário não pode alterar opiniões de outros usuários, apenas o admin tem esse poder.
