package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import constantes.Usuarios;
import util.Util;

public class LoginPage extends Util{
	
	WebDriver driver;
	WebDriverWait wait;
	
	@FindBy(id="email-input")
	WebElement txtEmail;
	
	@FindBy(id="password-input")
	WebElement txtSenha;
	
	@FindBy(id="login-button")
	WebElement btnLogin;
	
	@FindBy(xpath="//div[@id='h_user']//div[@class='usr-grt-text']")
	WebElement labelOla;
	
	@FindBy(xpath="//span[text()='Teste']")
	WebElement labelUserName;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	private void preencherEmail(String email) {
		waitVisibilityOfElement(txtEmail, wait, driver);
		txtEmail.clear();
		txtEmail.sendKeys(email);	
	}
	
	private void preecherSenha(String senha) {
		waitVisibilityOfElement(txtEmail, wait, driver);
		txtSenha.clear();
		txtSenha.sendKeys(senha);
	}
	
	private void clicarBotaoLogin() {
		
		waitUntilElementTobeClickAble(btnLogin, wait, driver);
		btnLogin.click();
	}
	
	public void realizaLoginComSucesso(){
		preencherEmail(Usuarios.USUARIO_SUCESSO);
		preecherSenha(Usuarios.SENHA_SUCESSO);
		clicarBotaoLogin();
	}
	
	public String verificaMensagemLogado() {
		
		//waitVisibilityOfElement(labelOla, wait, driver);
		//waitUntilElementTobeClickAble(labelUserName, wait, driver);
		StringBuilder mensagem = new StringBuilder();
		mensagem.append(labelOla.getText()).append(" ").append(labelUserName.getText());
		return mensagem.toString();
	
	}

}
