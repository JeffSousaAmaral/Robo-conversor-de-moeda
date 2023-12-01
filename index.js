const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync')
console.log('Bem vindo ao Bot conversor ')

async function tipsRobo(){
    const navegador = await puppeteer.launch({headless: true});
    const paginaWeb = await navegador.newPage();
    const moedaBase = readlineSync.question("Digite a moeda base ") || 'dolar';
    const moedaFinal =readlineSync.question("Digite a moeda que você deseja: ") || 'real';
    const urlGoogle = `https://www.google.com/search?q=${moedaBase}+para+${moedaFinal}&rlz=1C1UEAD_enBR1086BR1086&oq=${moedaBase}+para+${moedaFinal}&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyBggCEEUYOzIGCAMQRRg70gEIMTg2NmowajeoAgCwAgA&sourceid=chrome&ie=UTF-8`

    await paginaWeb.goto(urlGoogle);

    await paginaWeb.screenshot({path: 'foto001.png'});
    const resultado = await paginaWeb.evaluate( () => {
        return document.querySelector('.lWzCpb.a61j6').value;
    } );
    await navegador.close();
   
    console.log(`o valor de 1 ${moedaBase} em ${moedaFinal} é de ${resultado}`)
 
};

tipsRobo();