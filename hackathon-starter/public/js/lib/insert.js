$(document).ready(function(){
	$.get({
		url: '/tumblrdata'
	}).done(function(data){
		var counter = -1
		data.posts.forEach(function(post){
			var x = [-2, -1.4, 0, 1.4, 2, -2, -1.2, 0, 1.2, 2, -2, -1.4, 0, 1.4, 2, -1, -.8, 0, .8, 1]
			var y= [-1.5, -1.5, -1.5, -1.5, -1.5, -.5, -.5, -.5, -.5, -.5, .5, .5, .5, .5, .5, 1.5, 1.5, 1.5, 1.5, 1.5]
			var z = [0, -.899, -1.5, -.899, 0, 0, -.899, -1.5, -.899, 0, 0, -.899, -1.5, -.899, 0, 0, -.899, -1.5, -.899, 0]
			var rotationy = [-15, -15, -15, -15, -15, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 30, 30, 30, 30, 30]
			var rotationz = [90, 45, 0, -45, -90]

			counter += 1
			$('a-scene').append('<a-image class="img-panel" src="' + post.photos[0].alt_sizes[1].url + '"' +
	 			'width="10" height="10" position="' + x[counter] + ' ' + y[counter] + ' ' + z[counter] + '" rotation="' + rotationy[counter] + ' ' +  rotationz[counter%5] + ' 0" scale=".1 .1 .1"></a-image>')
		})
	})
})
	