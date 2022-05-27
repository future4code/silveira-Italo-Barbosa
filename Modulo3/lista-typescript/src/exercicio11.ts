
const number: string = prompt("um numero de 1 a 1990")

const NumerosConv:any|string[] = {
    
    0 : [
         ''		
        ,'I' 	
        ,'II'	
        ,'III'	
        ,'IV'	
        ,'V'	
        ,'VI'	
        ,'VII'	
        ,'VIII'	
        ,'IX'					
    ]
    
    ,1 : [
         ''		
        ,'X'	
        ,'XX'   
        ,'XXX'  
        ,'XL'   
        ,'L'    
        ,'LX'   
        ,'LXX'  
        ,'LXXX' 
        ,'XC'   
    ]
    ,2 : [
        ''
        ,'C'	
        ,'CC'   
        ,'CCC'  				
        ,'CD'   
        ,'D'    
        ,'DC'   
        ,'DCC'  
        ,'DCCC' 
        ,'CM' 	
    ]
    ,3 : [
         ''
        ,'M' 
    ]
};


function RetornaNumero(number:string){		
	
    number = number.replace(/[^0-9]/, "");
    if(number == '') return'';
    
    const Numero = parseInt(number);
    
    if(Numero > 1999){
        return "número maximo '1999'";
    }
    

   
    const ordNumero = Number(number).toString();
    const OrLength = ordNumero.length;
    
    
    const unidadeDezenaCentena = OrLength - 1;
    
    
    let NovaOrd = '';
    for(const i = unidadeDezenaCentena; i >= 0 ;i--){
        NovaOrd = NovaOrd + ordNumero.charAt(i);
    }
    
    let ReturnN = '';
    for(const i = unidadeDezenaCentena; i >= 0 ;i--){
        const neutra = parseInt(NovaOrd.charAt(i));
        ReturnN = ReturnN + NumerosConv[i][neutra];
    }
    
    return ReturnN;
}


console.log(RetornaNumero(number))


//observação: utilizei metodos não apresentados, não vejo outra forma.
// Obs2: código inpirado em metodos em c# e  em java.


/*Segunda versão*/

const Pnumeros = new Array();
Pnumeros[0] = "";
Pnumeros[1] = "I";
Pnumeros[2] = "II";
Pnumeros[3] = "III";
Pnumeros[4] = "IV";
Pnumeros[5] = "V";
Pnumeros[6] = "VI";
Pnumeros[7] = "VII";
Pnumeros[8] = "VIII";
Pnumeros[9] = "IX";
const Dnumeros = new Array();
Dnumeros[0] = "";
Dnumeros[1] = "X";
Dnumeros[2] = "XX";
Dnumeros[3] = "XXX";
Dnumeros[4] = "XL";
Dnumeros[5] = "L";
Dnumeros[6] = "LX";
Dnumeros[7] = "LXX";
Dnumeros[8] = "LXXX";
Dnumeros[9] = "XC";
const Cnumeros = new Array();
Cnumeros[0] = "";
Cnumeros[1] = "C";
Cnumeros[2] = "CC";
Cnumeros[3] = "CCC";
Cnumeros[4] = "CD";
Cnumeros[5] = "D";
Cnumeros[6] = "DC";
Cnumeros[7] = "DCC";
Cnumeros[8] = "DCCC";
Cnumeros[9] = "CM";
const Mnumeros = new Array();
Mnumeros[0] = "";
Mnumeros[1] = "M";
Mnumeros[2] = "MM";
Mnumeros[3] = "MMM";
function verificarNumero(number:any)
{
if((parseInt(number) < 4000) && (parseInt(number) > 0))
{
const numeral:any = CriaNumero(number);
if(numeral.indexOf("undefined") == -1)
{
numeral.value = numeral;
}
}else{
console.log('Entre com um numero, por favor coloque um entre. (1-3999)');
}
}
function CriaNumero(numero:any)
{
let NovoNumero = numero
const Milhares = Math.floor(NovoNumero / 1000);
NovoNumero -= Milhares * 1000;
const Centenas = Math.floor(NovoNumero / 100);
NovoNumero -= Centenas * 100;
const Dezenas = Math.floor(NovoNumero / 10);
NovoNumero -= Dezenas * 10;
const Unidades = Math.floor(NovoNumero / 1);
if((Milhares == NaN)||(Centenas == NaN)||(Dezenas == NaN)||(Unidades == NaN))
{
console.log('Numero Invalido.');
}else{
const array = new Array(Milhares,Centenas,Dezenas,Unidades);
return MostraNumero(array);
}
}
function MostraNumero(RetornaValor:any)
{
let numeral = "";
numeral += Mnumeros[RetornaValor[0]];
numeral += Cnumeros[RetornaValor[1]];
numeral += Dnumeros[RetornaValor[2]];
numeral += Pnumeros[RetornaValor[3]];
return numeral;
}


