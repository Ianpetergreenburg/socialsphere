function oscillate(input, min, max) {
    var range = max - min ;
    return min + Math.abs(((input + range) % (range * 2)) - range);
}


$(document).ready(function(){
	$.get({
		url: '/tumblrdata'
	}).done(function(data){
		var counter = -1
		data.posts.forEach(function(post){
			console.log(counter)
			counter += 1
			$('a-scene').append('<a-image class="img-panel" src="' + post.photos[0].alt_sizes[1].url + '"' +
	 			'width="10" height="10" position="' + (Math.floor(counter/4) - 2) + ' ' + (counter%4 - 2) + ' ' + '-2' + '" rotation="0 ' + '0' + ' 0" scale=".1 .1 .1"></a-image>')
		})
	})
})
	