$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CompraComCartao.feature");
formatter.feature({
  "line": 1,
  "name": "Realizar compras com cartão de crédito",
  "description": "Como usuário do ecommerce\r\nEu quero inserir produtos no meu carrinho de compras\r\nPara realizar uma compra com forma da pagamento cartão de crédito",
  "id": "realizar-compras-com-cartão-de-crédito",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Comprar uma unidade do produto com Cartão de Crédito",
  "description": "",
  "id": "realizar-compras-com-cartão-de-crédito;comprar-uma-unidade-do-produto-com-cartão-de-crédito",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given Eu esteja logado no sistema"
    },
    {
      "line": 8,
      "value": "#Then Eu devo ver a mensagem de Olá Teste"
    }
  ],
  "line": 9,
  "name": "Consultar um produto",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Eu seguir para a pagina de detalhes",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Eu adicionar 1 unidade do produto ao carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Eu selecionar a forma da pagamento \"Cartão de Crédito\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "A mensagem \"Pagar com cartão de crédito\" deve ser exibida.",
  "keyword": "Then "
});
formatter.match({
  "location": "CompraComCartaoTest.consultar_um_produto()"
});
formatter.result({
  "duration": 6019765392,
  "status": "passed"
});
formatter.match({
  "location": "CompraComCartaoTest.eu_seguir_para_a_pagina_de_detalhes()"
});
formatter.result({
  "duration": 1966670625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "CompraComCartaoTest.eu_adicionar_unidade_do_produto_ao_carrinho(int)"
});
formatter.result({
  "duration": 10044131971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cartão de Crédito",
      "offset": 36
    }
  ],
  "location": "CompraComCartaoTest.eu_selecionar_a_forma_da_pagamento(String)"
});
formatter.result({
  "duration": 2046381,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.CompraComCartaoTest.eu_selecionar_a_forma_da_pagamento(CompraComCartaoTest.java:65)\n\tat ✽.And Eu selecionar a forma da pagamento \"Cartão de Crédito\"(CompraComCartao.feature:12)\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagar com cartão de crédito",
      "offset": 12
    }
  ],
  "location": "CompraComCartaoTest.a_mensagem_deve_ser_exibida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Comprar duas unidades do produto com Cartão de Crédito",
  "description": "",
  "id": "realizar-compras-com-cartão-de-crédito;comprar-duas-unidades-do-produto-com-cartão-de-crédito",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#Given Eu esteja logado no sistema"
    },
    {
      "line": 18,
      "value": "#Then Eu devo ver a mensagem de Olá Teste"
    }
  ],
  "line": 19,
  "name": "Consultar um produto",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Eu seguir para a pagina de detalhes",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Eu adicionar 2 unidades do produto ao carrinho",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Eu selecionar a forma da pagamento \"Cartão de Crédito\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "A mensagem \"Pagar com cartão de crédito\" deve ser exibida.",
  "keyword": "Then "
});
formatter.match({
  "location": "CompraComCartaoTest.consultar_um_produto()"
});
formatter.result({
  "duration": 20160852879,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #h_search\\-input\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027dls210\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.5.0-040500-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/tmp/rust_mozprofile.bPVHgdKfk1Qk, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dLINUX, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d60.0.2, platformVersion\u003d4.5.0-040500-generic, moz:processID\u003d9407, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dLINUX, moz:webdriverClick\u003dtrue}]\nSession ID: 18f95e3a-eeaa-4620-a992-59d9ae6f04c0\n*** Element info: {Using\u003did, value\u003dh_search-input}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\n\tat pages.HomePage.realizarBusca(HomePage.java:42)\n\tat stepdefs.CompraComCartaoTest.consultar_um_produto(CompraComCartaoTest.java:37)\n\tat ✽.When Consultar um produto(CompraComCartao.feature:19)\n",
  "status": "failed"
});
formatter.match({
  "location": "CompraComCartaoTest.eu_seguir_para_a_pagina_de_detalhes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "CompraComCartaoTest.eu_adicionar_unidades_do_produto_ao_carrinho(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cartão de Crédito",
      "offset": 36
    }
  ],
  "location": "CompraComCartaoTest.eu_selecionar_a_forma_da_pagamento(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pagar com cartão de crédito",
      "offset": 12
    }
  ],
  "location": "CompraComCartaoTest.a_mensagem_deve_ser_exibida(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("RemoverItensdoCarrinho.feature");
formatter.feature({
  "line": 1,
  "name": "Remover itens do carrinho de Compras",
  "description": "Como usuário do ecommerce\r\nEu desejo remover itens indesejados do meu carrinho de compras",
  "id": "remover-itens-do-carrinho-de-compras",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Remover itens do carrinho de compras",
  "description": "",
  "id": "remover-itens-do-carrinho-de-compras;remover-itens-do-carrinho-de-compras",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Eu possuo pelo menos um item adicionado ao meu carrinho de compras",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu devo visualizar um item no carrinho",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Visualizar minha cesta",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Clicar em remover um item",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "O item deve ser removido do meu carrinho",
  "keyword": "Then "
});
formatter.match({
  "location": "RemoverItemDoCarrinho.eu_possuo_pelo_menos_um_item_adicionado_ao_meu_carrinho_de_compras()"
});
formatter.result({
  "duration": 221215,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.RemoverItemDoCarrinho.eu_possuo_pelo_menos_um_item_adicionado_ao_meu_carrinho_de_compras(RemoverItemDoCarrinho.java:13)\n\tat ✽.Given Eu possuo pelo menos um item adicionado ao meu carrinho de compras(RemoverItensdoCarrinho.feature:7)\n",
  "status": "pending"
});
formatter.match({
  "location": "RemoverItemDoCarrinho.eu_devo_visualizar_um_item_no_carrinho()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RemoverItemDoCarrinho.visualizar_minha_cesta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RemoverItemDoCarrinho.clicar_em_remover_um_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RemoverItemDoCarrinho.o_item_deve_ser_removido_do_meu_carrinho()"
});
formatter.result({
  "status": "skipped"
});
});