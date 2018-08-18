package pages;

import java.util.List;
import java.util.NoSuchElementException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import util.Util;

public class CarrinhoDeProdutosPage extends Util {
	
	WebDriver driver;
	WebDriverWait wait;
	
	@FindBy(xpath="//select[@class='form-control select__quantity']")
	WebElement selectQuantidade;
	
	@FindBy(id="buy-button")
	WebElement btnContinuar;
	
	@FindBy(xpath="//ul[@class='list-unstyled basket-items']")
	List<WebElement> listaDeItens;
	
	@FindBy(xpath="//ul[@class='list-unstyled basket-items']/li[1]//a[text()='remover']")
	WebElement btnRemover;
	
	@FindBy(xpath="//h2[text()='Sua cesta está vazia']")
	WebElement labelCestaVazia;
	
	public CarrinhoDeProdutosPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void selecionaQuantidadeDeProdutos(String quantidade) {
		Select select = new Select(selectQuantidade);
		select.selectByValue(quantidade);
	}
	
	public void seguirParaPagamento() {
		waitUntilElementTobeClickAble(btnContinuar, wait, driver);
		btnContinuar.click();
	}
	
	public void removerDoCarrinho(){
		waitUntilElementTobeClickAble(btnRemover, wait, driver);
		btnRemover.click();
	}
	
	public boolean existeItemNoCarrinho() {
		try {
			if(listaDeItens.size()>0) {
				return true;
			}
		}
		catch (NoSuchElementException e) {
			System.out.println(e);
			return false;
		}
		
		return false;
	}
	
	public String getMensagemCestaVazia() {
		waitVisibilityOfElement(labelCestaVazia, wait, driver);
		return labelCestaVazia.getText();
	}

}
