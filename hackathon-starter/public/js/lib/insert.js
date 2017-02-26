$(document).ready(function(){
	$.get({
		url: '/tumblrdata'
	}).done(function(data){
		var counter = -1
		data.posts.forEach(function(post){
			console.log(counter)
			var arr = [0,-1.4,-2,-1.4,0]
			var arr2 = [-2,-1.4,0,1.4,2]
			counter += 1
			$('a-scene').append('<a-image class="img-panel" src="' + post.photos[0].alt_sizes[1].url + '"' +
	 			'width="10" height="10" position="' + arr2[counter%5] + ' ' + (Math.floor(counter/5) - 1.5) + ' ' + (arr[counter%5] + Math.abs(Math.floor(counter/5) - 1) - .5) + '" rotation="' + (Math.floor(counter/5)*15 - 15) + ' ' +  ((counter%5 - 2)*-45) + ' 0" scale=".1 .1 .1"></a-image>')
		})
	})
})
	