
angular.module("eu.luminis.devcon.schedule").service('technologyTinderService', function(sessionsService) {
	
	var slides = [
		{
			imageClass:"java",
			keyword: "java",
			liked: undefined
		},
		{
			imageClass:"android",
			keyword: "android",
			liked: undefined
		},
		{
			imageClass:"docker",
			keyword: "docker",
			liked: undefined
		},
		{
			imageClass:"java9",
			keyword: "java9",
			liked: undefined
		},
		{
			imageClass:"opensource",
			keyword: "opensource",
			liked: undefined
		}
	];
	
	this.getSlides = function() {
		return slides;
	}
	
	this.calculateMatches = function() {
		angular.forEach(sessionsService.getAllBlocks(), function(block) {
			var bestScore = 0;
			angular.forEach(block.sessions, function(session) {
				session.score = calculateScore(session);
				
				if (session.score>bestScore){
					bestScore = session.score;
				}
			});
			
			angular.forEach(block.sessions, function(session) {
				session.recommended = session.score === bestScore;
			});
		});
		sessionsService.save();
	}
	
	function calculateScore(session) {
		if (session.keywords != undefined) {
			var score = 0;
			angular.forEach(session.keywords, function(keyword) {
			
				var slide = getSlide(keyword);
				
				if (slide && slide.liked != undefined) {
					if (slide.liked) {
						score++;
					} else {
						score--;
					}
				}
				
			});
		}
		return score;
	}
	
	function getSlide(keyword) {
		var result;
		angular.forEach(slides, function(slide) {
			if (keyword === slide.keyword) {
				result = slide;
			}
		});
	
		return result;
	}
	
});
