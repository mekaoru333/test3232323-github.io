async function lordJson() {
    
    const response = await fetch("./MAPtest.json");
    const mapdata = await response.json();

    
for (var i = 0; i < 19; i++) { 
var list = document.createElement('p'); 
list.textContent = mapdata.results[i].name + 
document.getElementById('list').appendChild(list);
}
}

