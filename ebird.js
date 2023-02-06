const head = document.createElement("h2");
head.setAttribute("class","text-center h_style");
head.textContent ="BIRDS";
document.body.append(head);

const para = document.createElement("p");
para.setAttribute("class","text-center para_txt");
para.textContent ="🪶🪶🪶 Page is show the birds sci-data check the table view use this!!!!!";
document.body.append(para);

const quot1 = document.createElement("p");
quot1.setAttribute("class","q_1");
quot1.textContent = "“My heart is like a singing bird.”";

const quot2 = document.createElement("p");
quot2.setAttribute("class","q_1");
quot2.textContent = "“No human ever lived in a birdless world.”";

const quot3 = document.createElement("p");
quot3.setAttribute("class","q_1");
quot3.textContent = "“If only the best birds sang, the forest would be silent.”";

const div1 = document.createElement("div");
div1.setAttribute("class","div_content");
div1.appendChild(quot1);
div1.appendChild(quot2);
div1.appendChild(quot3);

document.body.append(div1);

// -----------------! Table content
// table----------------------------!
const table = document.createElement("table");
table.setAttribute("class","table table-bordered");
table.setAttribute("id","tebody");

document.body.append(table)

// tablerow-----------------------!
const tablerow = document.createElement("tr");
tablerow.setAttribute("class","tab-row");
table.appendChild(tablerow);

// tablehead----------------------!
const tablehead1 = document.createElement("th");
tablehead1.setAttribute("class","tablehead");
tablehead1.setAttribute("id","tb1");
tablehead1.innerText ="speciesCode"
tablerow.appendChild(tablehead1)

const tablehead2 = document.createElement("th");
tablehead2.setAttribute("class","tablehead");
tablehead2.setAttribute("id","tb2");
tablehead2.innerText ="comName"
tablerow.appendChild(tablehead2)

const tablehead3 = document.createElement("th");
tablehead3.setAttribute("class","tablehead");
tablehead3.setAttribute("id","tb3");
tablehead3.innerText ="sciName"
tablerow.appendChild(tablehead3)

const tablehead4 = document.createElement("th");
tablehead4.setAttribute("class","tablehead");
tablehead4.setAttribute("id","tb4");
tablehead4.innerText ="locId"
tablerow.appendChild(tablehead4)

const tablehead5 = document.createElement("th");
tablehead5.setAttribute("class","tablehead");
tablehead5.setAttribute("id","tb5");
tablehead5.innerText ="locName"
tablerow.appendChild(tablehead5)

const tablehead6 = document.createElement("th");
tablehead6.setAttribute("class","tablehead");
tablehead6.setAttribute("id","tb6");
tablehead6.innerText ="obsDte"
tablerow.appendChild(tablehead6)

const tablehead7 = document.createElement("th");
tablehead7.setAttribute("class","tablehead");
tablehead7.setAttribute("id","tb7");
tablehead7.innerText ="howMany"
tablerow.appendChild(tablehead7)

const tablehead8 = document.createElement("th");
tablehead8.setAttribute("class","tablehead");
tablehead8.setAttribute("id","tb8");
tablehead8.innerText ="lat"
tablerow.appendChild(tablehead8)

const tablehead9 = document.createElement("th");
tablehead9.setAttribute("class","tablehead");
tablehead9.setAttribute("id","tb9");
tablehead9.innerText ="lng"
tablerow.appendChild(tablehead9)

const tablehead10 = document.createElement("th");
tablehead10.setAttribute("class","tablehead");
tablehead10.setAttribute("id","tb10");
tablehead10.innerText ="obsValid"
tablerow.appendChild(tablehead10)

const tablehead11 = document.createElement("th");
tablehead11.setAttribute("class","tablehead");
tablehead11.setAttribute("id","tb11");
tablehead11.innerText ="obsReviewed"
tablerow.appendChild(tablehead11)

const tablehead12 = document.createElement("th");
tablehead12.setAttribute("class","tablehead");
tablehead12.setAttribute("id","tb12");
tablehead12.innerText ="locationPrivate"
tablerow.appendChild(tablehead12)

const tablehead13 = document.createElement("th");
tablehead13.setAttribute("class","tablehead");
tablehead13.setAttribute("id","tb13");
tablehead13.innerText ="subId"
tablerow.appendChild(tablehead13)

// tablebody-----------------------!
const tabbody = document.createElement("tbody");
tabbody.setAttribute("class","tbody");
tabbody.setAttribute("id","tabbody");
table.appendChild(tabbody);

// -------------------!API functions
let url = "https://api.ebird.org/v2/data/obs/KZ/recent";

const ebirdRecord = async () => {
    const response = await fetch(url,{
        method: "GET",
        headers:{
            "X-eBirdApiToken" :"ncegv36igo7r"
        }
        });
    const details = await response.json();
    createcol(details)
};
const createcol = (details) => {
    let Tableval = "";
    details.map(details => {
    Tableval += `<tr>
    <td>${details.speciesCode}</td>
    <td>${details.comName}</td>
    <td>${details.sciName}</td>
    <td>${details.locId}</td>
    <td>${details.locName}</td>
    <td>${new Date(details.obsDte).toLocaleDateString()}</td>
    <td>${details.howMany}</td>
    <td>${details.lat}</td>
    <td>${details.lng}</td>
    <td>${details.obsValid}</td>
    <td>${details.obsReviewed}</td>
    <td>${details.locationPrivate}</td>
    <td>${details.subId}</td>
    </tr> ` ;

    });
   document.getElementById('tabbody').innerHTML=Tableval;
};
ebirdRecord();
