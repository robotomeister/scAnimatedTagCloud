/*
 * 
 * jQuery Animated Tag Cloud
 * Version 0.1.0
 * @requires jQuery v1.2.3 or higher
 * 
 * Copyright (c) 2012 William Lee
 * Examples and docs at: https://github.com/robotomeister/scJqueryAnimatedTagCloud
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
/**
 * 
 * @description Creates an animated tag cloud effect
 * 
 * @example $(document).scAnimatedTagCloud();
 * @desc Create and initialize with default settings
 * 
 * @example $(document).scAnimatedTagCloud({density:40,initialStyles:'random'});
 * @desc Create and initialize with specific settings
 * 
 * @type jQuery
 * 
 * @name scAnimatedTagCloud
 * 
 * @cat Plugins/scAnimatedTagCloud
 * 
 * @todo - finish implement options, convert to OOP
 * 
 * @author William Lee/william@solidcoding.com/http://www.solidcoding.com 
 */
 
(function( $ ){
    $.extend({
        scAnimatedTagCloud: new
        function () {
            
            this.defaults = {
                styles: {1:'scExpressiveFontStyle1'}, //array of strings representing CSS classes to apply to tags
                density: 100, //values: 0-100, percentage of tags that are shown at one time (so some may be hidden at times)
                speed: 2000, //values in ms, for how fast animation occurs
                speedVariance: 0, //shift speed by +/- random value
                animateCount: 1, //value for how many elements to animate at once
                initialOrder: 'static', //options: static, random. random mixes tag order on page load
                initialStyles: 'static', //options: static, random, ascending, descending. random mixes tag styles on page load
                insertionOrder: 'random', //options: random, queue, queuereverse. determines how tags are removed/inserted
                animation: 'switch', //options: random, fade, slide, toggle, switch, removeonly, insertonly
                animationSpeed: 800, //values: jquery values
                position: 'fluid' //options: hold, fluid. hold keeps elements in place. fluid moves stuff around
            };
            
            this.construct = function (settings) {
                
                return this.each(function () {
                    var scope = $(this);
                      
                    // new blank config object
                    scope.config = {};
                    // merge and extend.
                    config = $.extend(scope.config, $.scAnimatedTagCloud.defaults, settings);                      
                    
                    initializeStyles(scope);   
                    
                    //scope.delay(scope.config['speed']).scAnimatedTagCloudAnimate(scope);
                    
                    setTimeout(function(){scope.scAnimatedTagCloudAnimate(scope)}, scope.config['speed']);                      
                });
            };     
                     
            //apply styles
            function initializeStyles(scope) {         
                if(scope.config['animation'] == 'switch') {
                    //need to set fixed height/width of LI because of absolutely positioned elements inside
                    scope.find('li').each(function() {
                        var thisLI = $(this);
                        
                        //get largest element inside LI and set its width/height accordinly
                        var greatestWidth = 0;
                        var greatestHeight = 0; 
                        thisLI.find('span').each(function() {
                            var thisItem = $(this);
                            
                            //place text into div container to determine text height/width
                            var testItem = thisItem.clone();
                            testItem.css('display','block');
                            
                            //keep container offscreen
                            testItem.css('left',-9999);
                            testItem.css('top',-9999);
                            
                            thisLI.append(testItem);
                            
                            if(testItem.width() > greatestWidth) {
                                greatestWidth = testItem.width();
                            }
                            if(testItem.height() > greatestHeight) {
                                greatestHeight = testItem.height();
                            }            
                            
                            testItem.remove();                
                        });
                        
                        thisLI.width(greatestWidth);    
                        thisLI.height(greatestHeight);  
                    });  
                }                
                              
                
                if(scope.config['initialStyles'] == 'static') {
                    //do nothing for static
                }
                else if(scope.config['initialStyles'] == 'random') {
                    for (key in scope.config['styles']) {
                        
                    }                                    
                }             
            }                                                     
            
            this.animate = function (scope) {
                var currentPosition = null;
                
                //select position
                positionElement = selectPosition(scope, 'visible');
                
                //remove element at position
                removeItem(scope, positionElement);
                
                //select element to insert

                
                //select position
                positionElement = selectPosition(scope, 'hidden');
                
                //insert element at position
                
                //scope.delay(scope.config['speed']).scAnimatedTagCloudAnimate(scope);                            
                setTimeout(function(){scope.scAnimatedTagCloudAnimate(scope)}, scope.config['speed']+100);                      
            }   

            function selectPosition(scope, filter) {
                var positionElement;
                
                var filterStr = null;
                
                if(filter == null || filter.length == 0) {
                    
                }
                else if(filter == 'hidden') {
                    filterStr = ':hidden';
                }
                else if(filter == 'visible') {
                    filterStr = ':visible';      
                }
                else {
                    filterStr = filter;
                }
                
                if(scope.config['insertionOrder'] == 'random') {
                    positionElement = scope.find('li');
                    
                    if(filterStr != null) {
                        positionElement = positionElement.filter(filterStr);    
                    }
                    
                    positionElement = positionElement.eq(Math.random() * positionElement.length);
                }
                
                return positionElement;
            }                 
            
            function removeItem(scope, positionElement) {
                if(scope.config['animation'] == 'fade') {
                    positionElement.fadeOut(scope.config['animationSpeed']);   
                }                
                else if(scope.config['animation'] == 'switch') {
                    
                    var otherElement = positionElement.find(':hidden');
                    
                    positionElement.find(':visible').fadeOut(scope.config['animationSpeed']);   
                    
                    //special -50 magic offset just to help browser timing
                    otherElement.delay(scope.config['animationSpeed']-50).fadeIn(scope.config['animationSpeed']);   

                    //positionElement.find(':visible').css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0},scope.config['animationSpeed']).delay(scope.config['animationSpeed']*2).css({opacity: 0, display: "none"});   
                    //otherElement.delay(scope.config['animationSpeed']).css({opacity: 0, display: "inline"}).animate({opacity: 100},scope.config['animationSpeed']);                       
                    
                    //positionElement.find(':visible')
                    
                    //positionElement.fadeOut(scope.config['animationSpeed']).fadeIn(scope.config['animationSpeed']);   
                    
                    //positionElement.css({opacity: 1.0, visibility: "visible"}).animate({opacity: 0}, 200);
                }
            }                             

            function insertItem(scope, positionElement) {
                
            }              
        }
    });
    
    
    //code snippet from: http://stackoverflow.com/questions/3739353/how-do-i-target-attribute-of-opacity-in-jquery
    $.extend($.expr[':'], {
        opacity: function(elem, i, attr){
          return( $(elem).css("opacity") === attr[3] + '' );
        }
    });    
      
    // extend plugin scope
    $.fn.extend({
        scAnimatedTagCloud: $.scAnimatedTagCloud.construct
    });      
    $.fn.extend({
        scAnimatedTagCloudAnimate: $.scAnimatedTagCloud.animate
    });          
      
})( jQuery );