$(document).ready(function(){
	$.get({
		url: '/tumblrdata'
	}).done(function(data){
		console.log(data);
		var counter = 0
			// var x = [-2, -1.4, 0, 1.4, 2, -2, -1.2, 0, 1.2, 2, -2, -1.4, 0, 1.4, 2, -1, -.8, 0, .8, 1]
			// var y= [-1.5, -1.5, -1.5, -1.5, -1.5, -.5, -.5, -.5, -.5, -.5, .5, .5, .5, .5, .5, 1.5, 1.5, 1.5, 1.5, 1.5]
			// var z = [0, -.899, -1.5, -.899, 0, 0, -.899, -1.5, -.899, 0, 0, -.899, -1.5, -.899, 0, 0, -.899, -1.5, -.899, 0]
			var x = [0, 0, 0, 0, ,0 ,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			var y= [-2,0, 2, 4, 6, 8, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 53, 56]
			var z = [-2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2, -2]
			var rotationy = [-15, -15, -15, -15, -15, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 30, 30, 30, 30, 30]
			var rotationz = [90, 45, 0, -45, -90]



			

			setInterval(newItem,2000)





			function addImage(){
				console.log("adding image", counter)
								$('a-scene').append(`<a-image id="image${counter}" class="img-panel"
										  src="${data.posts[counter].photos[0].alt_sizes[1].url}"
	 									  width="10"
										  height="10" 
										  position="${x[0]} ${y[0]} ${z[0]} 
										  rotation="0 0 0" scale=".1 .1 .1">						  									  
										   </a-image>`)
								for(var i = 0; i < 4; i++){
								 console.log("appending animation"+y[i])
								$(`#image${counter}`).append(`
											<a-animation id="animation${counter}-${i}"
												attribute="position"
												delay="${(i+1)*2000}"											                
												dur="2000"
												fill="forward"
												from="${x[i]} ${y[i]} ${z[i]}"
												to="${x[i+1]} ${y[i+1]} ${z[i+1]}"
												easing="ease-out"
												repeat="0"
												
												>
											</a-animation>`);
											// $(`#animation${counter}-${i}`).addEventListener('animationend',updatePosition($(`#animation${counter}-${i}`)));	

								}		   
											
											counter++;
			}


			function moveUp(){





			}


			function newItem(){
				addImage()



			}
			function updatePosition(anim){
				console.log(anim)
			}
			
	})
	
});
	