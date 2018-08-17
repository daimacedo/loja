package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;
import pages.PagamentoPage;
import pages.ProdutosPage;
import runner.TestRunner;
import static org.assertj.core.api.Assertions.*;

import constantes.Mensagens;
import constantes.Produtos;

public class CompraComCartaoTest extends TestRunner {
	
	@Given("^Eu esteja logado no sistema$")
	public void eu_esteja_logado_no_sistema() throws Throwable {
		HomePage homePage = new HomePage(driver);
		homePage.acessarPaginaLogin();
		LoginPage loginPage = new LoginPage(driver);
		loginPage.realizaLoginComSucesso();
	}

	@Then("^Eu devo ver a mensagem de Olá Teste$")
	public void eu_devo_ver_a_mensagem_de_Olá_Teste() throws Throwable {
	   
		LoginPage loginPage = new LoginPage(driver);
		assertThat(loginPage.verificaMensagemLogado().startsWith("olá")).isTrue();
		assertThat(loginPage.verificaMensagemLogado().endsWith("Teste")).isTrue();
		// Eu sei que vai terminar com "Teste", pois o nome do usuario do meu e-mail é Teste.
	}

	@When("^Consultar um produto$")
	public void consultar_um_produto() throws Throwable {
	   HomePage homePage = new HomePage(driver);
	   homePage.realizarBusca(Produtos.PES_2018);
	}

	@When("^Eu seguir para a pagina de detalhes$")
	public void eu_seguir_para_a_pagina_de_detalhes() throws Throwable {
	   ProdutosPage produtosPage = new ProdutosPage(driver);
	   assertThat(produtosPage.getListaProdutos()).isTrue();
	  
	}

	@When("^Eu adicionar (\\d+) unidade do produto ao carrinho$")
	public void eu_adicionar_unidade_do_produto_ao_carrinho(int arg1) throws Throwable {
	   ProdutosPage produtosPage = new ProdutosPage(driver);
	   produtosPage.inserirPES2018noCarrinho("1");
	   LoginPage loginPage = new LoginPage(driver);
	   loginPage.realizaLoginComSucesso();
	}
	
	
	@When("^Eu adicionar (\\d+) unidades do produto ao carrinho$")
	public void eu_adicionar_unidades_do_produto_ao_carrinho(int arg1) throws Throwable {
		 ProdutosPage produtosPage = new ProdutosPage(driver);
		 produtosPage.inserirPES2018noCarrinho("2");
		 LoginPage loginPage = new LoginPage(driver);
		 loginPage.realizaLoginComSucesso();
	}
	
	@When("^Eu selecionar a forma da pagamento \"([^\"]*)\"$")
	public void eu_selecionar_a_forma_da_pagamento(String arg1) throws Throwable {
	   PagamentoPage pagamentoPage = new PagamentoPage(driver);
	   pagamentoPage.selecionarFormaDePagamentoCartaoDeCredito();
	}

	@Then("^A mensagem \"([^\"]*)\" deve ser exibida\\.$")
	public void a_mensagem_deve_ser_exibida(String arg1) throws Throwable {
		 PagamentoPage pagamentoPage = new PagamentoPage(driver);
		 assertThat(pagamentoPage.mensagemPagarComDoisCartoes().contains(Mensagens.MSG_PAGAR_COM_DOIS_CARTOES));
		 assertThat(pagamentoPage.mensagemPagarComUmCartao().contains(Mensagens.MSG_PAGAR_COM_UM_CARTAO));
	}

}
