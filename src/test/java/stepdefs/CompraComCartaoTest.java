package stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.LoginPage;
import runner.TestRunner;
import static org.assertj.core.api.Assertions.*;

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
		// Eu sei que vai terminar com "Teste", pois o nome do usuario do meu e-mail é teste.
	}

	@When("^Consultar um produto$")
	public void consultar_um_produto() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^Eu seguir para a pagina de detalhes$")
	public void eu_seguir_para_a_pagina_de_detalhes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^Eu adicionar ao carrinho a quantidade (\\d+)$")
	public void eu_adicionar_ao_carrinho_a_quantidade(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^Eu selecionar a forma da pagamento \"([^\"]*)\"$")
	public void eu_selecionar_a_forma_da_pagamento(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^check more outcomes$")
	public void check_more_outcomes() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^A mensagem \"([^\"]*)\" deve ser exibida\\.$")
	public void a_mensagem_deve_ser_exibida(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
