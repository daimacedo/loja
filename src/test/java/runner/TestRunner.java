package runner;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import constantes.URLs;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import io.github.bonigarcia.wdm.WebDriverManager;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = { "stepdefs" }, tags = { "~@Ignore" }, format = {
		"pretty", "html:target/cucumber-reports/cucumber-pretty",
		"json:target/cucumber-reports/json-reports/CucumberTestReport.json",
		"rerun:target/cucumber-reports/rerun-reports/rerun.txt" })

public class TestRunner extends URLs {

	protected static WebDriver driver;

	@BeforeClass
	public static void setUpClass() throws Exception {
		WebDriverManager.firefoxdriver().setup();
		driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(HOME_URL);
	}

	@AfterClass
	public static  void tearDownClass() throws Exception {
		driver.quit();
	}
}
