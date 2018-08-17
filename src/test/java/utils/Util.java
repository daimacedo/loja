package utils;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Util {
	
	public void mouseOver(WebElement e, WebDriver driver) {
		Actions action = new Actions(driver);
		action.moveToElement(e).build().perform();	
	}
	
	public void waitUntilElementTobeClickAble(WebElement e, WebDriverWait wait, WebDriver driver){
		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(e));
	}
	
	public void waitVisibilityOfElement(WebElement e, WebDriverWait wait, WebDriver driver){
		wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(e));
	}

}
