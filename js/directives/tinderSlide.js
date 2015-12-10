
angular.module("eu.luminis.devcon.schedule").directive('tinderSlide', function() {
	return {
		restrict: 'E',
		scope: {
			slide: '=',
			onDislike : '=?',
			onLike : '=?',
			options : '=?'
		},
		template: 
				"<div class='wrap'>" + 
					"<center>" +
						"<div id='tinderslide'>" +
							"<div class='paneWrapper'>" +
								"<div class='pane'>" +
									"<div class='img {{slide.imageClass}}'></div>" +
									"<div class='like'></div>" +
									"<div class='dislike'></div>" +
								"</div>" +
							"</div>" +
						"</div>" +
					"</center>" +
				"</div>",
		controller: function($scope, $element) {

			var defaults = {
				animationRevertSpeed: 200,
				animationSpeed: 400,
				threshold: 1,
				likeSelector: '.like',
				dislikeSelector: '.dislike'
			};

			var settings = angular.extend({}, defaults, $scope.options||{});

			var container = null;
			var pane = null;
			var $that = null;
			var xStart = 0;
			var yStart = 0;
			var touchStart = false;
			var posX = 0, posY = 0, lastPosX = 0, lastPosY = 0, pane_width = 0;
			
			var handler = function (ev){
				ev.preventDefault();
				
				switch (ev.type) {
					case 'touchstart':
						if(touchStart === false) {
							touchStart = true;
							xStart = ev.originalEvent.touches[0].pageX;
							yStart = ev.originalEvent.touches[0].pageY;
						}
					case 'mousedown':
						if(touchStart === false) {
							touchStart = true;
							xStart = ev.pageX;
							yStart = ev.pageY;
						}
					case 'mousemove':
					case 'touchmove':
						if(touchStart === true) {
							var pageX = typeof ev.pageX == 'undefined' ? ev.originalEvent.touches[0].pageX : ev.pageX;
							var pageY = typeof ev.pageY == 'undefined' ? ev.originalEvent.touches[0].pageY : ev.pageY;
							var deltaX = parseInt(pageX) - parseInt(xStart);
							var deltaY = parseInt(pageY) - parseInt(yStart);
							var percent = (100 / pane_width) * deltaX;
							posX = deltaX + lastPosX;
							posY = deltaY + lastPosY;

							pane.css("transform", "translate(" + posX + "px," + posY + "px) rotate(" + (percent / 2) + "deg)");

							var opa = (Math.abs(deltaX) / settings.threshold) / 100 + 0.2;
							if(opa > 1.0) {
								opa = 1.0;
							}
							if (posX >= 0) {
								pane.find(settings.likeSelector).css('opacity', opa);
								pane.find(settings.dislikeSelector).css('opacity', 0);
							} else if (posX < 0) {
								pane.find(settings.dislikeSelector).css('opacity', opa);
								pane.find(settings.likeSelector).css('opacity', 0);
							}
						}
						break;
					case 'mouseup':
					case 'touchend':
						touchStart = false;
						var pageX = (typeof ev.pageX == 'undefined') ? ev.originalEvent.changedTouches[0].pageX : ev.pageX;
						var pageY = (typeof ev.pageY == 'undefined') ? ev.originalEvent.changedTouches[0].pageY : ev.pageY;
						var deltaX = parseInt(pageX) - parseInt(xStart);
						var deltaY = parseInt(pageY) - parseInt(yStart);

						posX = deltaX + lastPosX;
						posY = deltaY + lastPosY;
						var opa = Math.abs((Math.abs(deltaX) / settings.threshold) / 100 + 0.2);

						if (opa >= 1) {
							if (posX > 0) {
								pane.animate({"transform": "translate(" + (pane_width) + "px," + (posY + pane_width) + "px) rotate(60deg)"}, settings.animationSpeed, function () {
									if($scope.onLike) {
										$scope.onLike(pane);
										$scope.$apply();
									}
									next();
								});
							} else {
								pane.animate({"transform": "translate(-" + (pane_width) + "px," + (posY + pane_width) + "px) rotate(-60deg)"}, settings.animationSpeed, function () {
									if($scope.onDislike) {
										$scope.onDislike(pane);
										$scope.$apply();
									}
									next();
								});
							}
						}
						/*
						else {
							lastPosX = 0;
							lastPosY = 0;
							pane.animate({"transform": "translate(0px,0px) rotate(0deg)"}, settings.animationRevertSpeed);
							pane.find(settings.likeSelector).animate({"opacity": 0}, settings.animationRevertSpeed);
							pane.find(settings.dislikeSelector).animate({"opacity": 0}, settings.animationRevertSpeed);
						}
						*/
						break;
				}
			}
			
			var next = function () {
				if ($scope.slide) {
					pane.attr("style","").css('display','block');
					pane.find('.like').css('opacity','0');
					pane.find('.dislike').css('opacity','0');
				}
			}
			
			container = $(">div", $element);
			pane = $element.find("div.pane")
			pane_width = container.width();
			
			$element.bind('touchstart mousedown', handler);
			$element.bind('touchmove mousemove', handler);
			$element.bind('touchend mouseup', handler);
			
		}
	};
})