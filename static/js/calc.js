function priceComputers() {
	var computers = document.getElementById("computers");
	var computersNum = 0;
	computersNum = parseInt(computers.value);
	if (computersNum >= 0) {
		var finalCN = computersNum * 200;
	}
	else {
		finalCN = 0;
	}
	return [finalCN, computersNum];
}

function pricePrinters() {
	var printers = document.getElementById("printers");
	var printersNum = 0;
	printersNum = parseInt(printers.value);
	if (printersNum >= 0) {
		var finalPN = printersNum * 30;
	}
	else {
		finalPN = 0;
	}
	return [finalPN, printersNum];
}

function priceServers() {
	var servers = document.getElementById("servers");
	var serversNum = 0;
	serversNum = parseInt(servers.value);
	if (serversNum >= 0) {
		var finalSN = serversNum * 400;
	}
	else {
		finalSN = 0;
	}
	return [finalSN, serversNum];
}

function additionalService1()
{
    var addServPrice1=0;
    var checkbox1 = document.getElementById("checkbox1");

    if (checkbox1.checked==true)
    {
        addServPrice1+=100;
    };

    return addServPrice1;
}

function additionalService2()
{
    var addServPrice2=0;
    var checkbox2 = document.getElementById("checkbox2");

    if (checkbox2.checked==true)
    {
        addServPrice2+=150;
    };

    return addServPrice2;
}

function additionalService3()
{
    var addServPrice3=0;
    var checkbox3 = document.getElementById("checkbox3");

    if (checkbox3.checked==true)
    {
        addServPrice3+=200;
    }

    return addServPrice3;
}

var support_prices = new Array();
support_prices["offf"] = 0;
support_prices["standartt"] = 300;
support_prices["247"] = 400;

function getSupportPrice() {
	var supportPrice = 0;
	var selectedSupport = document.getElementById("support");
	supportPrice = support_prices[selectedSupport.value];
	return supportPrice;
}

function answer() {
	pc = priceComputers()
	prnt = pricePrinters()
	srv = priceServers()
	var overallPrice = pc[0] + prnt[0] + srv[0] + additionalService1() + additionalService2() + additionalService3() + getSupportPrice();
	// document.getElementById("uniprice").setAttribute('value', overallPrice + " сомони.\n#PCs - ${pc[1]}.\n#Printers - ${pr[1]}.\n#Servers - ${srv[1]}.";
	document.getElementById("uprice").setAttribute('value', overallPrice + "," + pc[1] + "," + prnt[1] + "," + srv[1]  + "," + additionalService1() + "," + additionalService2() + "," + additionalService3() + "," + getSupportPrice());
	document.getElementById('output_answer').innerHTML = "Сумма обслуживания: " + overallPrice + " сомони.";
	document.getElementById("butt").style.display="block";
}

function showsendmail(){
	document.getElementById("sendprice").style.display = "block";
}
