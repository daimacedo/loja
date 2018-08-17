package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
glue = { "stepdefinitions" }, 
tags = { "@CompraComCartao , @RemocaoItensDoCarrinho" }, 
format = {
		"pretty", "html:target/cucumber-reports/report"})
public class RunTest{

}
