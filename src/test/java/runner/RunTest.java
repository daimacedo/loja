package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", 
glue = { "stepdefs" }, 
tags = { "~@NotRun" }, 
format = {
		"pretty", "html:target/cucumber-reports/report"})

public class RunTest{

}
