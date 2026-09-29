# Mercado Bom Preço — modelo de supermercado online (Criasiteweb)

Montado em 21/09/2026 a partir do modelo base (sistema do Rei Burgão).
Serve de demonstração para oferecer a mercados, e de ponto de partida quando
um mercado fechar.

## O que já funciona

- **5.722 produtos** com foto real, preço e setor, em 9 departamentos:
  hortifruti, açougue, peixaria, frios e laticínios, mercearia, bebidas,
  limpeza, bazar e pet shop.
- **Busca por nome** varrendo o catálogo inteiro, sem acento e por pedaço
  de palavra.
- **Vitrine por setor**, carregando de 48 em 48 produtos, para o celular não
  travar com milhares de itens.
- Carrinho, taxa de entrega por bairro e por distância, endereço pelo CEP,
  horário de funcionamento e envio do pedido pelo WhatsApp — tudo herdado do
  sistema já testado.

## De onde vieram os produtos

Catálogo público do site de uma rede de supermercados da região, usado como
**base de demonstração**: nome, foto e preço de referência. As fotos são
carregadas do servidor de origem.

**Preço é ilustrativo.** Numa venda real, entra a tabela do próprio mercado,
que sai do sistema de caixa dele numa planilha.

## O que trocar quando um mercado fechar

1. Nome, WhatsApp, endereço, horário e taxas — no começo de `assets/js/app.js`.
2. Marcadores `[ENDEREÇO DA LOJA]`, `[BAIRRO]`, `[CIDADE]`, `[CEP]` no
   `index.html`.
3. Cores — três linhas no fim de `assets/css/estilo.css`.
4. Catálogo — `assets/js/cardapio.js`, gerado da planilha do cliente.
5. **Servidor de pedidos**: `assets/js/firebase-config.js` está vazio de
   propósito. Enquanto estiver assim, o pedido vai só pelo WhatsApp e o painel
   não recebe nada. Preenchido, o painel volta a funcionar como no Rei Burgão.

## Pendente

- Publicar o site (criar o endereço na conta da Criasiteweb).
- Criar o servidor de pedidos deste modelo, se for para demonstrar o painel.
- Peso variável (carne, frios, hortifruti) e troca de produto em falta ainda
  não foram construídos — foram levantados como necessários para mercado.
