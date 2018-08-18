@CompraComCartao
Feature: Realizar compras com cartão de crédito
 	Como usuário do ecommerce
  Eu quero inserir produtos no meu carrinho de compras
  Para realizar uma compra com forma da pagamento cartão de crédito
    
Scenario: Comprar uma unidade do produto com Cartão de Crédito
Given Eu esteja na home page
When Consultar um produto
	And Eu seguir para a pagina de detalhes
	And Eu adicionar 1 unidade do produto ao carrinho
	And Eu realizar login no sistema
	Then Eu devo ver a mensagem de Olá Teste
  When Eu selecionar a forma da pagamento "Cartão de Crédito"
Then A mensagem "Pagar com cartão de crédito" deve ser exibida.


Scenario: Comprar duas unidades do produto com Cartão de Crédito
Given Eu esteja na home page
When Consultar um produto
	And Eu seguir para a pagina de detalhes
	And Eu adicionar 2 unidades do produto ao carrinho
	And Eu realizar login no sistema
	Then Eu devo ver a mensagem de Olá Teste
  When Eu selecionar a forma da pagamento "Cartão de Crédito"
Then A mensagem "Pagar com cartão de crédito" deve ser exibida.