# D’ Gourmet — Gestão & Precificação

Interface completa recuperada da versão fornecida pela proprietária. Publicada pelo GitHub Pages na pasta /Precifica-o/.

## Funções

Login e cadastro, visão geral, ingredientes e histórico de preços, embalagens, fichas técnicas com impressão, simulador, produtos e variações de venda, kits, despesas, relatórios, configurações, categorias, canais de venda e backups.

## Arquivos

- index.html: entrada do sistema.
- 404.html: permite abrir diretamente as rotas do aplicativo no GitHub Pages.
- assets/app.js e assets/app.css: arquivos compilados recuperados da interface original. Não são o código-fonte React original.
- legacy/: versão anterior que usava armazenamento local, preservada para recuperação.

## Autenticação e dados

Esta versão usa o serviço de autenticação e o banco de dados do projeto original. As contas e dados continuam nesse serviço, não no GitHub. A senha da proprietária e os dados da conta não são armazenados neste repositório. A configuração pública de cliente utiliza somente a chave de papel anon, já presente no aplicativo original.

A disponibilidade do banco continua dependendo do provedor original. Uma migração independente do banco exigirá acesso ao projeto e exportação dos dados e políticas. As sessões são separadas por endereço: é necessário entrar novamente no endereço do GitHub Pages.

## Publicação

GitHub Pages: branch main, pasta / (root). Cada commit dispara nova publicação. O router foi adaptado ao prefixo /Precifica-o/ e o redirecionamento de confirmação de e-mail também foi ajustado para esse prefixo; permitir esse endereço nas configurações de autenticação do provedor pode ser necessário para novas contas com confirmação de e-mail.

Não altere o nome do repositório sem ajustar o prefixo em index.html, 404.html e assets/app.js.
