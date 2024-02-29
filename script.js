//your code here
const image = document.querySelector('#img');
let selectedImages = [];
function createImg(){
	let random = parseInt(Math.random()*5+1);
	for(let i=1 ; i<=5 ; i++){
		let img = new Image();
		img.className = `img${i}`;
		image.appendChild(img);
		img.addEventListener('click' , selectImg);
		if(i===random){
			img = new Image();
			img.className = `img${i}`;
			image.appendChild(img);
			img.addEventListener('click' , selectImg);
		} 
	}
}
createImg();
function selectImg(e){
	e.target.classList.toggle('selected');
	if(selectedImages.length < 2 ){
		selectedImages.push(event.target.className);
		if(selectedImages.length === 2) {
			document.getElementById('verify').style.display = 'block';
		}
		if(selectedImages.length >= 1) {
			document.getElementById('reset').style.display = 'block';
		}
	}  
}
document.getElementById('reset').addEventListener('click', function() {
    // Clear selected images array
    selectedImages = [];

    // Hide verify and reset buttons
    document.getElementById('verify').style.display = 'none';
    this.style.display = 'none';
	
    // Clear message
    document.getElementById('para').innerText = '';
	image.innerHTML = '';
	createImg();
});
document.getElementById('verify').addEventListener('click', function() {
    // Check if selected images are identical
    if(selectedImages[0] === selectedImages[1]) {
        document.getElementById('para').innerText = "You are a human. Congratulations!";
    } else {
        document.getElementById('para').innerText = "We can't verify you as a human. You selected the non-identical tiles.";
    }

    // Hide verify button
    this.style.display = 'none';
});