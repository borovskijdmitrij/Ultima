'use strict'
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

	function togglePlayPause(obj) {
		console.log('6666');
		var currentBtn = obj;
		var currentRecord = $(currentBtn).parent().siblings('.record').children('audio');
		currentRecord.on('ended', function() {
			console.log('string');
			$(currentBtn).removeClass("pause");
		})
   		if (currentRecord.prop("paused")) {

   			// currentRecord.prop("currentTime", 10);
   			
   			$(currentBtn).addClass("pause");
   			currentRecord.trigger('play');
   		}
   		else {
   			$(currentBtn).removeClass("pause");
   			currentRecord.trigger('pause');
     	}
   	}

 	var timeFormat = (function (){
    	function num(val){
        	val = Math.floor(val);
        	return val < 10 ? '0' + val : val;
    	}
   		return function (ms){
        	var sec = ms / 1000, 
        		hours = sec / 3600  % 24, 
        		minutes = sec / 60 % 60, 
        		seconds = sec % 60;
        	return num(hours) + ":" + num(minutes) + ":" + num(seconds);
    	};
	})();

 	function initRecordArchive() {
   		var allRecordsArchive = $('.record-archive').find('audio'),
   			textFieldsDuration = $('.record-archive').find('.duration-record'),
   			arrDurationRecords = [],
   			counter = 0;

   		allRecordsArchive.each(function() {
   			arrDurationRecords.push(timeFormat($(this).prop("duration").toFixed()*1000)); 
   		});
   		console.log(arrDurationRecords);
   		textFieldsDuration.each(function() {
   			$(this).html(arrDurationRecords[counter++]);
   		});
   		//console.log(allRecordsArchive);
	}
	initRecordArchive();

	function updateProgressBar (obj) {
		var currentRecord = obj;
		var sec = parseInt($(currentRecord).prop("currentTime"));
		var min = parseInt($(currentRecord).prop("currentTime") / 60);
		if (sec < 10) {
			sec = '0' + sec;
		};
		console.log('sex' + sec);
		console.log('min' + min);
		$(currentRecord).parent().siblings(".duration-record").html(min + ':' + sec);
		console.log('duration= '+ $(currentRecord).prop("duration"));
		var progressBar = $(currentRecord).siblings('.progress-bar');
   		var percentage = Math.floor((100 / $(currentRecord).prop("duration")) * $(currentRecord).prop("currentTime"));
   		console.log('percentage ' + percentage);
   		// progressBar.prop("value", percentage);
   		// progressBar.prop("innerHTML", percentage + '% played');
   		$(currentRecord).siblings('.progress').find('.progress-val').width(percentage + "%");
   		// $(".progress-val").width(percentage + "%");
	}
	
	$('audio').on('timeupdate', function() {
		updateProgressBar(this);
	})

	$('.play-pause-button').on('click', function() {
		togglePlayPause(this);		
	})

	controlMusic();
})


