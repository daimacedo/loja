package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import utils.Util;

public class PagamentoPage extends Util {

	WebDriver driver;
	WebDriverWait wait;

	@FindBy(xpath = "//li[@id='payment-option-menu-CREDIT_CARD']//span[@class='btn btn-primary btn-sm btn-thin ng-binding']")
	WebElement linkSelecionarCartaoCredito;

	@FindBy(id = "creditCard-multiple-card-single-label")
	WebElement labelPagarComUmCartao;

	@FindBy(id = "creditCard-multiple-card-multiple-label")
	WebElement labelPagarComDoisCartoes;

	public PagamentoPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	public void selecionarFormaDePagamentoCartaoDeCredito() {

		waitUntilElementTobeClickAble(linkSelecionarCartaoCredito, wait, driver);
		linkSelecionarCartaoCredito.click();
	}

	public String mensagemPagarComDoisCartoes() {
		
		waitVisibilityOfElement(labelPagarComDoisCartoes, wait, driver);
		return labelPagarComDoisCartoes.getText();
	}

	public String mensagemPagarComUmCartao() {
		waitVisibilityOfElement(labelPagarComUmCartao, wait, driver);
		return labelPagarComUmCartao.getText();
	}

}
