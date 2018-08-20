package hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import constantes.URLs;

public class SetUp extends URLs {

	protected static WebDriver driver;

	public SetUp() {
		System.setProperty("webdriver.gecko.driver","src/test/resources/drivers/geckodriver");
		//WebDriverManager.chromedriver().setup();
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

}
