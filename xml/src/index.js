import "./styles.css";

document.getElementById("app").innerHTML = `<table id ="xmlTable"></table>`

const getXml=function(fileName){
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", fileName, false)
    xmlhttp.send()
    return xmlhttp.responseXML

}

const generateTable = function(XMLContent) {
    let tableRows = "<tr><th>Title</th><th>Price</th></tr>"
    const gameElements = XMLContent.getElementsByTagName("game")
    for (let i = 0; i < gameElements.length; index++) {
        const game = gameElements[i];
        tableRows += "<tr><td>" +
            game.getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</td><td>" +
            game.getElementsByTagName("title")[0].childNodes[0].nodeValue +
            "</td></tr>"
        
    }
    document.getElementById("xmlTable").innerHTML = tableRows
}