
angular.module("eu.luminis.devcon.schedule").service('technologyTinderService', function(sessionsService) {
	
	this.slideIndex = 0;
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
	this.slides = slides;
	
	this.current = function() {
		return this.slides[this.slideIndex];
	}
	
	this.next = function() {
		if (this.slideIndex+1 < this.slides.length ) {
			this.slideIndex++;
			return this.current();
		}
	}
	
	this.getFirst = function() {
		return this.slides[0];
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
				if (session.score === bestScore) {
					session.recommended = true;
				}
			});
		});
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
