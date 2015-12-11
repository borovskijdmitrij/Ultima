
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
		})
	}
	var status_music_archive = 'play';
	function controlsMusicArchive () {
			$('.record-control').on('click', function() {
			if (status_music_archive == 'play') {
				status_music_archive = 'playing';
				$(this).css('backgroundImage', 'url(images/playing-2.png)');
	
			} else {
				status_music_archive = 'play';
				$(this).css('backgroundImage', 'url(images/play-2.png)');
			}
					
		})
	}
	controlMusic();
	controlsMusicArchive();
})


