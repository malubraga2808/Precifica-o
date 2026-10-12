# D’ Gourmet — Gestão & Precificação

Sistema de precificação em HTML, CSS e JavaScript, sem dependências de instalação.

## Funcionalidades

- Cadastro de ingredientes e embalagens com custo por medida.
- Receitas com rendimento, mão de obra, perdas e despesas.
- Custo por unidade, preço sugerido com margem e taxas, resultado com preço atual.
- Exportação e importação de backup JSON.
- Interface responsiva em creme, chocolate e caramelo.

## Executar

Abra index.html em um navegador moderno ou sirva esta pasta por um servidor HTTP estático.

## Publicar no GitHub Pages

Em Settings → Pages, selecione Deploy from a branch, branch main e pasta / (root), e salve.

## Dados

Os dados ficam no localStorage do navegador, por endereço de site. Não há login, servidor ou sincronização entre aparelhos. Exporte um backup antes de trocar de navegador ou endereço.

## Escopo

Esta é a versão desenvolvida no chat para D’ Gourmet. Não é uma exportação do sistema Enter/Lovable de referência, cujo código e telas internas não estavam disponíveis.

## Cálculo

Preço sugerido = custo por unidade / (1 - margem/100 - taxas/100). Margem e taxas devem somar menos de 100%. O resultado depende dos custos informados.
