//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function(){
	const message = document.getElementById('text').value;
	const delay = parseInt(document.getElementById('delay').value);
	await display(message,delay);
});

function display(message,delay) {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			document.getElementById('output').innerHTML = message;
		},delay);
	});
}
