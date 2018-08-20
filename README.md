# loja

Para executar o projeto de testes é necessário ter "instalado" Maven 3.5 + e Java JRE 7+ e as devidas variaveis de ambientes configuradas (Linux/Windows) - Dado que a premissa acima seja atendida:

1- Realizar clone do projeto em uma pasta local `git clone https://github.com/daimacedo/loja.git`

2- Entrar na pasta do projeto `loja` e rodar o comando `mvn test`

3- Após a build terminar (provavelmente vai terminar com falha e explicarei os motivos abaixo) rodar o seguinte comando para gerar o relatório: `mvn cluecumber-report:reporting`

4: O relatório estará disponivel dentro do diretório: `target/cucumber-reports/formated-report`, o melhor jeito de visualizar é  abrir o arquivo index.html através do explorador do S.O. e navegar pelo report através do browser.

Notas:

- Os testes de compra falharam, pois o site trava com sistema de captcha a execução de testes automaticos no navegador. Para facilitar essa visualização do erro, a aplicação vai tirar um print quando a execução falhar, na imagem vai ser possivel visualizar o captcha, que é o que impede o teste de seguir com o login. Diretório das evidências dos erros: `target/screenshots`

- Os testes relacionados a compra com cartão de crédito, foram gerados utilizando DataTable do cucumber, deste modo, foi escrito somente um cenário de compra, alterando a quantidade de produtos comprados, por isso no report terão dois cenários com o mesmo nome, mas ao navegar dentro deles, poderá reparar no step que a quantidade de produtos comprado foi diferente.
