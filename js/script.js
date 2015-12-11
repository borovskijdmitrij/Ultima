
$(function(){

	var status_music = 'play';
	function controlMusic() {
		$('.btn-player').on('click', function() {
			if (status_music == 'play') {
				status_music = 'playing';
				$('.btn-player').css('backgroundImage', 'url(images/playing.png)');
				// $('#audio').play();
				$("#audio").trigger('play');
			} else {
					if (status_music == 'playing') {
						status_music = 'pause';
						$('.btn-player').css('backgroundImage', 'url(images/pause.png)');
						$("#audio").trigger('pause');	
					} else {
						status_music = 'playing';
						$('.btn-player').css('backgroundImage', 'url(images/playing.png)');
						$("#audio").trigger('play');
					}			
				} 	
				console.log(status_music);	
		})
	}
	controlMusic();
	$('.content-posts').jScrollPane();
})


