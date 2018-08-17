Feature: Realizar compras com cartão de crédito
 	Como usuário do ecommerce
  Eu quero inserir produtos produtos no meu carrinho de compras
  Para realizar uma compra com forma da pagamento cartão de crédito
    
Scenario Outline: Compra com Cartão de Crédito
Given Eu esteja logado no sistema
Then Eu devo ver a mensagem de Olá Teste
When Consultar um produto
	And Eu seguir para a pagina de detalhes
	And Eu adicionar ao carrinho a quantidade <qtdProduto>
  And Eu selecionar a forma da pagamento "Cartão de Crédito"
	And check more outcomes
Then A mensagem "Pagar com cartão de crédito" deve ser exibida.


Examples:
    |  qtdProduto | 
    |  1          |
    |  2          | 
