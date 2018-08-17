@RemocaoItensDoCarrinho
Feature: Remover itens do carrinho de Compras
 	Como usuário do ecommerce
  Eu desejo remover itens indesejados do meu carrinho de compras
  
    
Scenario: Remover itens do carrinho de compras
Given Eu possuo pelo menos um item adicionado ao meu carrinho de compras
Then Eu devo visualizar um item no carrinho
	And Clicar em remover um item
Then O item deve ser removido do meu carrinho