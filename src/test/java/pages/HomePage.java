package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import util.Util;

public class HomePage extends Util{
	
	WebDriver driver;
	WebDriverWait wait;

	@FindBy(xpath = "//div[@id='h_user']//div[@class='usr-grt-text']")
	WebElement linkFacaSeuLogin;
	
	@FindBy(id="h_usr-signin")
	WebElement btnEntrar;
	
	@FindBy(id="h_search-input")
	WebElement txtBusca;
	
	@FindBy(id="h_search-btn")
	WebElement btnPesquisar;
	
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public void acessarPaginaLogin() throws InterruptedException {
		waitVisibilityOfElement(linkFacaSeuLogin, wait, driver);
		mouseOver(linkFacaSeuLogin, driver);
		waitUntilElementTobeClickAble(btnEntrar, wait, driver);
		btnEntrar.click();
	}
	
	public void realizarBusca(String produtoBuscado){
		txtBusca.sendKeys(produtoBuscado);
		btnPesquisar.click();
	}
	
	

}
