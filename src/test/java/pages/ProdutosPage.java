package pages;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import utils.Util;

public class ProdutosPage extends Util{

	WebDriver driver;
	WebDriverWait wait;
	
	@FindBy(xpath="//div[@class='row product-grid no-gutters main-grid']/div")
	List<WebElement> WebElementlistaProdutos;
	
	@FindBy(xpath="//div[@class='row product-grid no-gutters main-grid']/div[2]//a")
	WebElement PES2018;
	
	@FindBy(id="btn-buy")
	WebElement btnComprar;
	
	@FindBy(xpath="//select[@class='form-control select__quantity']")
	WebElement selectQuantidade;
	
	@FindBy(id="buy-button")
	WebElement btnContinuar;
	
	public ProdutosPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public boolean getListaProdutos(){

		waitVisibilityOfListOfElements(WebElementlistaProdutos, wait, driver);
		List<WebElement> listaSubMenusParaVoce = WebElementlistaProdutos;
		System.out.println(listaSubMenusParaVoce.size());
		if(listaSubMenusParaVoce.size()>0){
			return true;
		}
		return false;
	}
	
	private void selecionaQuantidadeDeProdutos(String quantidade) {
		Select select = new Select(selectQuantidade);
		select.selectByValue(quantidade);
	}
	
	
	public void inserirPES2018noCarrinho(String qtd){
		waitUntilElementTobeClickAble(PES2018, wait, driver);
		PES2018.click();
		waitUntilElementTobeClickAble(btnComprar, wait, driver);
		btnComprar.click();
		selecionaQuantidadeDeProdutos(qtd);
		waitUntilElementTobeClickAble(btnContinuar, wait, driver);
		btnContinuar.click();
	}
	
	
}
