//fetch stock data from four symbols using the yahoo finance API, jsons it into a object, then uses the object in stocklist function 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2206c92412mshfededba622042d3p1fe656jsne999fc364494',
		'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
	}
};


button.addEventListener('click', getimages)
async function getimages() {
    const response = await fetch(`https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${document.getElementById("dateUserInput").value}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}

