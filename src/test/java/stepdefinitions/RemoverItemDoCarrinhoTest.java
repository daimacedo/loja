package stepdefinitions;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import constantes.Mensagens;
import constantes.Produtos;
import constantes.URLs;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.SetUp;
import pages.CarrinhoDeProdutosPage;
import pages.HomePage;
import pages.ProdutosPage;
import util.Util;

public class RemoverItemDoCarrinhoTest extends SetUp{
	
	@Given("^Eu possuo pelo menos um item adicionado ao meu carrinho de compras$")
	public void eu_possuo_pelo_menos_um_item_adicionado_ao_meu_carrinho_de_compras() throws Throwable {
		driver.get(URLs.HOME_URL);
		HomePage homePage = new HomePage(driver);
		homePage.realizarBusca(Produtos.PES_2018);
		ProdutosPage produtosPage = new ProdutosPage(driver);
		assertThat(produtosPage.getListaProdutos()).isTrue();
		produtosPage.inserirPES2018noCarrinho();
		
	}

	@Then("^Eu devo visualizar um item no carrinho$")
	public void eu_devo_visualizar_um_item_no_carrinho() throws Throwable {
	    
		CarrinhoDeProdutosPage carrinhoPage = new CarrinhoDeProdutosPage(driver);
		assertThat(carrinhoPage.existeItemNoCarrinho()).isTrue();
	}

	@When("^Eu clicar em remover um item$")
	public void eu_clicar_em_remover_um_item() throws Throwable {
		CarrinhoDeProdutosPage carrinhoPage = new CarrinhoDeProdutosPage(driver);
		carrinhoPage.removerDoCarrinho();
	}

	@Then("^O item deve ser removido do meu carrinho$")
	public void o_item_deve_ser_removido_do_meu_carrinho() throws Throwable {
		CarrinhoDeProdutosPage carrinhoPage = new CarrinhoDeProdutosPage(driver);
		try {
			assertThat(carrinhoPage.getMensagemCestaVazia().contains(Mensagens.MSG_CESTA_VAZIA));
			assertThat(carrinhoPage.existeItemNoCarrinho()).isFalse();
		}
		catch (Exception e) {
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
