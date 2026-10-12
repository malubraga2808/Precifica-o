# D’ Gourmet — Gestão & Precificação

Interface completa da confeitaria, hospedada no GitHub Pages.

## Login e banco próprios

O serviço de dados é o projeto Supabase dgourmet-precificacao (kimtzxvydbnfrjumiuib), pertencente à conta da proprietária. O endereço instável do provedor anterior foi substituído. O cliente usa somente uma chave publishable pública; senhas, chaves administrativas e dados privados não estão neste repositório.

Cada pessoa acessa somente seus próprios registros. database.sql descreve as 14 tabelas, chaves de propriedade, políticas RLS, inicialização de categorias e histórico de preços. O inicializador é SECURITY INVOKER e é chamado após autenticação.

As contas do provedor anterior não são transferidas automaticamente: crie a conta neste site e confirme o e-mail. Os dados anteriores também precisam de um backup para restauração. Nenhum cadastro do sistema antigo foi apagado.

## Aplicação

Fichas técnicas, ingredientes, embalagens, simulador, produtos e variações, kits, despesas, relatórios, canais, categorias e backups. assets/app.js e assets/app.css são os arquivos compilados recuperados. account-scope.js mantém a propriedade dos registros em gravações e restaurações. legacy/ preserva a versão local inicial.

## Publicação

Branch main, pasta / (root). index.html e 404.html iniciam o router com basename /Precifica-o/. O módulo possui versão na URL para atualizar o cache. Site URL e redirecionamento de confirmação no Supabase: https://malubraga2808.github.io/Precifica-o/.
