package stepdefinitions;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import constantes.Mensagens;
import constantes.Produtos;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.SetUp;
import pages.CarrinhoDeProdutosPage;
import pages.HomePage;
import pages.LoginPage;
import pages.PagamentoPage;
import pages.ProdutosPage;
import util.Util;

public class CompraComCartaoTest extends SetUp {

	@Given("^Eu esteja na home page$")
	public void eu_esteja_na_home_page() throws Throwable {

		driver.get(HOME_URL);
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
		produtosPage.inserirPES2018noCarrinho();
		CarrinhoDeProdutosPage carrinhoPage = new CarrinhoDeProdutosPage(driver);
		carrinhoPage.selecionaQuantidadeDeProdutos("1");
		carrinhoPage.seguirParaPagamento();

	}

	@When("^Eu adicionar (\\d+) unidade\\(s\\) do produto ao carrinho$")
	public void eu_adicionar_unidade_s_do_produto_ao_carrinho(String qtdProduto) throws Throwable {

		ProdutosPage produtosPage = new ProdutosPage(driver);
		produtosPage.inserirPES2018noCarrinho();
		CarrinhoDeProdutosPage carrinhoPage = new CarrinhoDeProdutosPage(driver);
		carrinhoPage.selecionaQuantidadeDeProdutos(qtdProduto);
		Thread.sleep(3000);
		carrinhoPage.seguirParaPagamento();

	}

	@When("^Eu realizar login no sistema$")
	public void eu_realizar_login_no_sistema() throws Throwable {
		LoginPage loginPage = new LoginPage(driver);
		loginPage.realizaLoginComSucesso();
	}

	@Then("^Eu devo ver a mensagem de Olá Teste$")
	public void eu_devo_ver_a_mensagem_de_Olá_Teste() throws Throwable {

		LoginPage loginPage = new LoginPage(driver);
		assertThat(loginPage.verificaMensagemLogado().startsWith("olá")).isTrue();
		assertThat(loginPage.verificaMensagemLogado().endsWith("Teste")).isTrue();
		// Eu sei que vai terminar com "Teste", pois o nome do usuario do meu e-mail é
		// Teste.
	}

	@When("^Eu selecionar a forma da pagamento \"([^\"]*)\"$")
	public void eu_selecionar_a_forma_da_pagamento(String arg1) throws Throwable {
		PagamentoPage pagamentoPage = new PagamentoPage(driver);
		pagamentoPage.selecionarFormaDePagamentoCartaoDeCredito();
	}

	@Then("^A mensagem \"([^\"]*)\" deve ser exibida\\.$")
	public void a_mensagem_deve_ser_exibida() throws Throwable {
		PagamentoPage pagamentoPage = new PagamentoPage(driver);

		try {
			assertThat(pagamentoPage.mensagemPagarComDoisCartoes().contains(Mensagens.MSG_PAGAR_COM_DOIS_CARTOES));
			assertThat(pagamentoPage.mensagemPagarComUmCartao().contains(Mensagens.MSG_PAGAR_COM_UM_CARTAO));
		}

		catch (WebDriverException e) {
			System.out.println(e);
		}

	}

	@After
	public void tearDown(Scenario cenario) throws IOException {
//		if (cenario.isFailed()) {
//			SimpleDateFormat formatoData = new SimpleDateFormat("yyyyMMddHH:mm:ss");
//			Calendar data = Calendar.getInstance();
//			File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
//			FileUtils.copyFile(scrFile, new File("target/screenshots/" + cenario.getName().toString() + "_" + formatoData.format(data.getTime()).toString() + ".png"));
//		}
		driver.quit();
	}

}
