;(function($){
    'use strict';
    if(typeof $ !== 'function'){
        return;
    }
    var SquareGriddy = function(rootElement){
        this.$root = $(rootElement);
        this.$window = undefined;
        this.defaultSelector = this.$root.attr('data-defaultSelector') || this.default.selectors.defaultElement;
        this.cellColLength = this.$root.attr('data-griddyColLength') || this.default.selectors.defaultCellLength; //number of the cells in a row
        this.responsiveSetting = this.$root.attr('data-griddyResponsiveSetting') || this.default.selectors.defaultResponsiveSetting;
        this.cellColWidth = 0;
        this.cellColHeight = 0;
        this.elHeight = 0;
        this.responsiveSettingLength;
        this.resizeTimer;
        this.getElements();
        this.bindCustomEvents();
    };
    SquareGriddy.prototype = {
        default: {
            selectors: {
                defaultElement: '#sq-griddy-inner',
                defaultCellLength: 4,
                defaultResponsiveSetting: '[{ "breakpoint":1024, "collength":4 },{ "breakpoint":767, "collength":2 }]'
            }
        },
        getElements: function(){
            this.$window = $(window);
            this.$document = $(document);
            this.$el = this.$root.find(this.defaultSelector).children();
            this.elLength = this.$el.length;

            // console.log(this.elLength);
        },
        bindCustomEvents: function(){
            this.showLoadingImg();
            this.$window.on('load', this.makeGriddy.bind(this));
            this.$window.on('resize', {_self: this},  this.madeGriddyResize);
        },
        showLoadingImg: function(){
            this.$root.find(this.defaultSelector).append('<img id="griddy-loading-img" src="./images/balls.svg"/>');
        },
        makeGriddy: function(){
            $('#griddy-loading-img').hide();
            this.windowWidth = this.$root.find(this.defaultSelector).innerWidth();
            this.windowHeight = this.$window.height();
            this.cellColSize = this.windowWidth / this.cellColLength; //one side length of a singel cell
            this.elHeight = this.cellColSize * this.elLength / this.cellColLength;
            this.elHeightCalc = this.cellColSize * Math.floor(this.elLength /  ( this.cellColLength ) );//height of element

            if( this.windowHeight < this.elHeightCalc){
                var self = this;
                $('html').css('height', self.elHeightCalc);
                self.windowWidth = self.$root.find(self.defaultSelector).innerWidth();
                setTimeout(function(){
                    self.cellColSize = self.windowWidth * ( 100 / Math.floor( self.cellColLength , 1) / 100);
                    self.$el.css({
                        'width': self.cellColSize,
                        'height': self.cellColSize
                    });
                    var responsiveSettingParsed = JSON.parse(self.responsiveSetting);
                    for(var key in responsiveSettingParsed){
                        if(responsiveSettingParsed.hasOwnProperty(key)){
                            var responsiveSettingObj = responsiveSettingParsed[key];
                            var breakpoint = responsiveSettingObj['breakpoint'];
                            var collength = responsiveSettingObj['collength'];

                            if(window.matchMedia('(max-width: '+ breakpoint + 'px)').matches){
                                self.cellColSize = self.windowWidth * ( (100 / collength) / 100 ) ;
                                self.$el.css({
                                    'width': self.cellColSize,
                                    'height': self.cellColSize
                                });
                            }
                        }
                    }
                }, 50)
                $('html').css('height', 'auto');
            }else{
                var self = this;
                self.$el.css({
                    'width': self.cellColSize,
                    'height': self.cellColSize
                });
                var responsiveSettingParsed = JSON.parse(self.responsiveSetting);
                for(var key in responsiveSettingParsed){
                    if(responsiveSettingParsed.hasOwnProperty(key)){
                        var responsiveSettingObj = responsiveSettingParsed[key];
                        var breakpoint = responsiveSettingObj['breakpoint'];
                        var collength = responsiveSettingObj['collength'];

                        if(window.matchMedia('(max-width: '+ breakpoint + 'px)').matches){
                            self.cellColSize = self.windowWidth * ( (100 / collength) / 100 ) ;
                            self.$el.css({
                                'width': self.cellColSize,
                                'height': self.cellColSize
                            });
                        }
                    }
                }
            }
        },
        madeGriddyResize: function(e){
            var self = e.data._self;
            clearTimeout(self.resizeTimer);
            self.resizeTimer = setTimeout(self.makeGriddy(), 250);
        }
    }

    $( document ).ready(function() {
        var $elConfig = $('#sq-griddy');
        var ins = new SquareGriddy($elConfig);
    });
})(jQuery);