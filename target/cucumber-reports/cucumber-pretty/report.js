$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CompraComCartao.feature");
formatter.feature({
  "line": 1,
  "name": "Realizar compras com cartão de crédito",
  "description": "Como usuário do ecommerce\r\nEu quero inserir produtos produtos no meu carrinho de compras\r\nPara realizar uma compra com forma da pagamento cartão de crédito",
  "id": "realizar-compras-com-cartão-de-crédito",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Compra com Cartão de Crédito",
  "description": "",
  "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Eu esteja logado no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu devo ver a mensagem de Olá",
  "keyword": "Then "
});
formatter.step({
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
  "name": "Eu adicionar ao carrinho a quantidade \u003cqtdProduto\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Eu selecionar a forma da pagamento \"Cartão de Crédito\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "A mensagem \"Pagar com cartão de crédito\" deve ser exibida.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito;",
  "rows": [
    {
      "cells": [
        "qtdProduto"
      ],
      "line": 18,
      "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 19,
      "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 20,
      "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Compra com Cartão de Crédito",
  "description": "",
  "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Eu esteja logado no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu devo ver a mensagem de Olá",
  "keyword": "Then "
});
formatter.step({
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
  "name": "Eu adicionar ao carrinho a quantidade 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Eu selecionar a forma da pagamento \"Cartão de Crédito\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "A mensagem \"Pagar com cartão de crédito\" deve ser exibida.",
  "keyword": "Then "
});
formatter.match({
  "location": "CompraComCartaoTest.eu_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 2785220939,
  "error_message": "org.openqa.selenium.WebDriverException: Element \u003ca id\u003d\"h_usr-signin\" class\u003d\"rp-primary rp h_btn-secondary h_btn usr-signin\" href\u003d\"https://cliente.americanas.com.br/simple-login/?next\u003dhttps%3A%2F%2Fwww.americanas.com.br%2F\"\u003e is not clickable at point (1122.0999755859375,157.88333129882812) because another element \u003ca id\u003d\"h_usr-signin\" class\u003d\"rp-primary rp h_btn-secondary h_btn usr-signin\" href\u003d\"https://cliente.americanas.com.br/simple-login/?next\u003dhttps%3A%2F%2Fwww.americanas.com.br%2F\"\u003e obscures it\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027dls210\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.5.0-040500-generic\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003d/tmp/rust_mozprofile.d6GpnIqe2ls0, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, moz:headless\u003dfalse, platform\u003dLINUX, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d60.0.2, platformVersion\u003d4.5.0-040500-generic, moz:processID\u003d29763, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dLINUX, moz:webdriverClick\u003dtrue}]\nSession ID: a55a5f25-033c-4dce-b4d6-9546f5b57ea3\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat pages.HomePage.acessarPaginaLogin(HomePage.java:32)\n\tat stepdefs.CompraComCartaoTest.eu_esteja_logado_no_sistema(CompraComCartaoTest.java:16)\n\tat ✽.Given Eu esteja logado no sistema(CompraComCartao.feature:7)\n",
  "status": "failed"
});
formatter.match({
  "location": "CompraComCartaoTest.eu_devo_ver_a_mensagem_de_Olá()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CompraComCartaoTest.consultar_um_produto()"
});
formatter.result({
  "status": "skipped"
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
      "val": "1",
      "offset": 38
    }
  ],
  "location": "CompraComCartaoTest.eu_adicionar_ao_carrinho_a_quantidade(int)"
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
  "location": "CompraComCartaoTest.check_more_outcomes()"
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
formatter.scenario({
  "line": 20,
  "name": "Compra com Cartão de Crédito",
  "description": "",
  "id": "realizar-compras-com-cartão-de-crédito;compra-com-cartão-de-crédito;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "Eu esteja logado no sistema",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Eu devo ver a mensagem de Olá",
  "keyword": "Then "
});
formatter.step({
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
  "name": "Eu adicionar ao carrinho a quantidade 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Eu selecionar a forma da pagamento \"Cartão de Crédito\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "check more outcomes",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "A mensagem \"Pagar com cartão de crédito\" deve ser exibida.",
  "keyword": "Then "
});
formatter.match({
  "location": "CompraComCartaoTest.eu_esteja_logado_no_sistema()"
});
formatter.result({
  "duration": 23199150850,
  "status": "passed"
});
formatter.match({
  "location": "CompraComCartaoTest.eu_devo_ver_a_mensagem_de_Olá()"
});
formatter.result({
  "duration": 4546817,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat stepdefs.CompraComCartaoTest.eu_devo_ver_a_mensagem_de_Olá(CompraComCartaoTest.java:24)\n\tat ✽.Then Eu devo ver a mensagem de Olá(CompraComCartao.feature:8)\n",
  "status": "pending"
});
formatter.match({
  "location": "CompraComCartaoTest.consultar_um_produto()"
});
formatter.result({
  "status": "skipped"
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
      "offset": 38
    }
  ],
  "location": "CompraComCartaoTest.eu_adicionar_ao_carrinho_a_quantidade(int)"
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
  "location": "CompraComCartaoTest.check_more_outcomes()"
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
  "duration": 303800,
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
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    });