/*
	Hyperspace by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$sidebar = $('#sidebar');

		// Hack: Enable IE flexbox workarounds.
			if (skel.vars.IEVersion < 12)
				$body.addClass('is-ie');

		// Disable animations/transitions until the page has loaded.
			if (skel.canUse('transition'))
				$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Forms.

			// Fix: Placeholder polyfill.
				$('form').placeholder();

			// Hack: Activate non-input submits.
				$('form').on('click', '.submit', function(event) {

					// Stop propagation, default.
						event.stopPropagation();
						event.preventDefault();

					// Submit form.
						$(this).parents('form').submit();

				});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Sidebar.
			if ($sidebar.length > 0) {

				var $sidebar_a = $sidebar.find('a');

				$sidebar_a
					.addClass('scrolly')
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$sidebar_a.removeClass('active');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								top: '-20vh',
								bottom: '-20vh',
								initialize: function() {

									// Deactivate section.
										if (skel.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($sidebar_a.filter('.active-locked').length == 0) {

											$sidebar_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

			}

		// Scrolly.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: function() {

					// If <=large, >small, and sidebar is present, use its height as the offset.
						if (skel.breakpoint('large').active
						&&	!skel.breakpoint('small').active
						&&	$sidebar.length > 0)
							return $sidebar.height();

					return 0;

				}
			});

		// Spotlights.
			$('.spotlights > section')
				.scrollex({
					mode: 'middle',
					top: '-10vh',
					bottom: '-10vh',
					initialize: function() {

						// Deactivate section.
							if (skel.canUse('transition'))
								$(this).addClass('inactive');

					},
					enter: function() {

						// Activate section.
							$(this).removeClass('inactive');

					}
				})
				.each(function() {

					var	$this = $(this),
						$image = $this.find('.image'),
						$img = $image.find('img'),
						x;
						//var extraDiv = document.createElement("div");  // Create with DOM a <div> node
						//$image.append(extraDiv);                              // Append div to <a>
					// Assign image.
						//$divNode = $image.find('div');
						//$divNode.css('background-image', 'url(' + $img.attr('src') + ')');
						$image.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set background position.
						if (x = $img.data('position'))
							$image.css('background-position', x);
							//$divNode.css('background-position', x);

					// Hide <img>.
						$img.hide();

				});

		// Features.
			if (skel.canUse('transition'))
				$('.features')
					.scrollex({
						mode: 'middle',
						top: '-20vh',
						bottom: '-20vh',
						initialize: function() {

							// Deactivate section.
								$(this).addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$(this).removeClass('inactive');

						}
					});

			// Find all YouTube videos
			var $allVideos = $("iframe[src^='//www.youtube.com']"),
			    // The element that is fluid width
		    $fluidEl = $("body");
			// Figure out and save aspect ratio for each video
			$allVideos.each(function() {
			  $(this)
			    .data('aspectRatio', this.height / this.width)
			    // and remove the hard coded width/height
			    .removeAttr('height')
			    .removeAttr('width');
				console.log("a ver");
			});
			// When the window is resized
			$(window).resize(function() {
				console.log("hola");
		  		var newWidth = $fluidEl.width();
			 	// Resize all videos according to their own aspect ratio
			 	$allVideos.each(function() {
			    	var $el = $(this);
			    	$el
			      		.width(newWidth)
			      		.height(newWidth * $el.data('aspectRatio'));

			  	});
			// Kick off one resize to fix all videos on page load
			}).resize();
			
			// GUILLERMO, PROYECT MANAGER
			$toolbar = $('#one');
			$gamesMenu = $toolbar.find('#p1');
			$scenesMenu = $toolbar.find('#p2');
			$othersMenu = $toolbar.find('#p3');
			var gamesProyects = $('.proyect-selection-1');
			$proyects_game = $("#wrapper").find(gamesProyects);
			var scenesProyects = $('.proyect-selection-2');
			$proyects_scenes = $("#wrapper").find(scenesProyects);
			var othersProyects = $('.proyect-selection-3');
			$proyects_others = $("#wrapper").find(othersProyects);
			$proyects_scenes.hide();
			$proyects_others.hide();

			$gamesMenu.click(function() {
				if($proyects_game.is( ":hidden" ) && $proyects_scenes.is( ":visible" )) {
					$proyects_scenes.fadeOut("slow", "swing", function() {
						$proyects_game.fadeIn("slow", "swing");
					});
					$scenesMenu.focusout();
					$gamesMenu.focusin();
				}
				else if ($proyects_game.is( ":hidden" ) && $proyects_others.is( ":visible" )) {
					$proyects_others.fadeOut("slow", "swing", function() {
						$proyects_game.fadeIn("slow", "swing");
					});
					$othersMenu.focusout();
					$gamesMenu.focusin();
				}
			});
			$scenesMenu.click(function() {
				if($proyects_scenes.is( ":hidden" ) && $proyects_game.is( ":visible" )) {
					$proyects_game.fadeOut("slow", "swing", function() {
						$proyects_scenes.fadeIn("slow", "swing");
					});
					$gamesMenu.focusout();
					$scenesMenu.focusin();
				}
				else if ($proyects_scenes.is( ":hidden" ) && $proyects_others.is( ":visible" )) {
					$proyects_others.fadeOut("slow", "swing", function() {
						$proyects_scenes.fadeIn("slow", "swing");
					});
					$othersMenu.focusout();
					$scenesMenu.focusin();
				}
			});
			$othersMenu.click(function() {
				if($proyects_others.is( ":hidden" ) && $proyects_game.is( ":visible" )) {
					$proyects_game.fadeOut("slow", "swing", function() {
						$proyects_others.fadeIn("slow", "swing");
					});
					$gamesMenu.focusout();
					$othersMenu.focusin();
				}
				else if ($proyects_others.is( ":hidden" ) && $proyects_scenes.is( ":visible" )) {
					$proyects_scenes.fadeOut("slow", "swing", function() {
						$proyects_others.fadeIn("slow", "swing");
					});
					$scenesMenu.focusout();
					$othersMenu.focusin();
				}
			});

	});
})(jQuery);