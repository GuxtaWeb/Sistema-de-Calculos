let continuar = true;
while (continuar) {
  let converter = prompt(
    "O que você deseja converter: \n1. Moedas\n2. Temperatura\n3. Distancia\n4. Sair"
  );
  switch (converter) {
    case "1":
      ConverterMoedas();
      break;
    case "2":
      ConverterTemperatura();
      break;
    case "3":
      ConverterDistancia();
      break;
    case "4":
      alert("Fim do programa.");
      continuar = false;
      break;
    default:
      continue;
  }
}

function ConverterMoedas() {
  //moedas
  const cotacaoDolar = 5.32;
  const cotacaoBtc = 181267.26;
  const cotacaoPesoArg = 0.014;
  const cotacaoEuro = 5.25;

  while (true) {
    let valorReal;
    let moeda = prompt(
      "Qual moeda deseja converter para Real: \n1. Dolar\n2. Peso Argentino\n3. Euro\n4. Bitcoin"
    );

    switch (moeda) {
      case "1":
        let dolar = Number(
          prompt("Insira um valor em Dolar para ser convertido em reais:")
        );
        valorReal = cotacaoDolar * dolar;
        break;
      case "2":
        let pesoArg = Number(
          prompt(
            "Insira um valor em Pesos Argentinos para ser convertido em reais:"
          )
        );
        valorReal = cotacaoPesoArg * pesoArg;
        break;
      case "3":
        let euro = Number(
          prompt("Insira um valor em Euros para ser convertido em reais:")
        );
        valorReal = cotacaoEuro * euro;
        break;
      case "4":
        let bitcoin = Number(
          prompt("Insira um valor em Bitcoin para ser convertido em reais:")
        );
        valorReal = cotacaoBtc * bitcoin;
        break;
      default:
        continue;
    }
    alert(`O valor da moeda selecionada em reais é: ${valorReal}`);

    let continuar = prompt(
      "Deseja continuar convertendo moedas?\n1. Sim\n2. Não"
    );
    if (continuar === "2") {
      break;
    }
  }
}

function ConverterTemperaturas() {
  while (true) {
    let graus;

    let temperatura = prompt(
      "Insira a temperatura que deve ser convertida para Graus Celcius: \n1. Fahrenheit\n2. Kelvin"
    );

    switch (temperatura) {
      case "1":
        let fahrenheit = Number(prompt("Insira o valor em Fahreiheit: "));
        graus = (fahrenheit - 32) * 0.555;
        break;
      case "2":
        let kelvin = Number(prompt("Insira o valor em Kelvin"));
        graus = kelvin - 273.15;
        break;
      default:
        continue;
    }

    alert(`O valor da temperatura escolhida em Graus Celcius é: ${graus}`);

    let continuar = prompt(
      "Deseja continuar convertendo temperaturas?\n1. Sim\n2. Não"
    );
    if (continuar === "2") {
      break;
    }
  }
}

function ConverterDistancia() {
  let anosLuz;

  while (true) {
    let distancia = Number(
      prompt("Insira o valor em quilimetros para ser convertido em anos luz: ")
    );

    anosLuz = distancia * 0.0000000000001057;

    alert(`O valor de ${distancia}km em anos luz é: ${anosLuz}`);

    let continuar = prompt(
      "Deseja continuar convertendo temperaturas?\n1. Sim\n2. Não"
    );
    if (continuar === "2") {
      break;
    }
  }
}
