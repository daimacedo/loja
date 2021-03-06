package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
glue = { "stepdefinitions" }, 
tags = { "@CompraComCartao,@RemocaoItensDoCarrinho" }, 
//format = {
//		"pretty", "html:target/cucumber-reports/report"})
plugin = {"json:target/cucumber-reports/json-report/cucumber.json"})
public class RunTest{

}
