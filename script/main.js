//variables
var tl = new TimelineMax();

$(document).ready(function(){

    init();

});

//init
function init(){

    loadingPageAnimations();

};

function loadingPageAnimations(){

  var loadingBlurEffect = $('#loading-page .heading-caption .down'),
      loadingHeadingCaption = $('#loading-page .heading-caption'),
      loadingSmallHeading = $('#loading-page #small-sub-heading')
      loadingPage = $('#loading-page'),
      landingBlurEffect = $('.heading-caption .down'),
      landingHeadingCaption = $('.heading-caption'),
      wrapper = $('.wrapper'),
      navigationHolder = $('.navigation-holder'),
      down = $('.down'),
      svgRectBox1 = $('#landing-page-cta .box-1 rect')
      svgRectBox2 = $('#landing-page-cta .box-2 rect'),
      svgText = $('.btn-1 a');

  tl
    .staggerTo(loadingBlurEffect, 1.5, {webkitFilter:'blur(0px)',opacity:'1',top:'0px',ease:Power2.easeInOut},'.3')
    .to(loadingHeadingCaption,1,{top:'0px',ease:Power3.easeInOut},'-=1.2')
    .to(loadingSmallHeading,.5,{opacity:'1',ease:Power2.easeInOut})
    .to(loadingPage,2,{opacity:0,autoAlpha:0,ease:Power4.easeInOut},'+=.6')
    .staggerTo(landingBlurEffect,1.3,{webkitFilter:'blur(0px)',opacity:'1',top:'0px',ease:Power2.easeInOut},'.3')
    .to(landingHeadingCaption,1,{top:'0px',ease:Power3.easeInOut},'-=3.8')
    .to(wrapper,5,{scale:'1',opacity:1,ease:Power2.easeInOut})
    .to(navigationHolder,3.5,{opacity:'1',top:'0%',ease:Power4.easeInOut},'-=2.5')
    .add('grow','-=2')
    .to(svgRectBox1,1,{strokeDashoffset:'0px',opacity:'1'},'grow')
    .to(svgRectBox2,1,{strokeDashoffset:'0px',opacity:'1'},'grow')
    .to(svgText,1,{opacity:'1',onComplete:ctaLinkHoverEffects},'-=.7')
};

//cta-link hover
function ctaLinkHoverEffects(){

  //cta hover effect
  $('.btn-1').hover(function(){
      tl
        .add('animate')
        .to($('.box-1 rect'),.5,{strokeDashoffset:'333px',ease:Power4.easeInOut},'animate')
        .to($('.box-2 rect'),.2,{fill:'rgba(255,255,255,1)',ease:Power4.easeInOut},'animate')
        .to($('.btn-1 a'),.1,{color:'#000',ease:Power4.easeInOut},'.animate')
    }, function(){
      tl
        .add('animate')
        .to($('.box-1 rect'),.5,{strokeDashoffset:'0px',ease:Power4.easeInOut},'animate')
        .to($('.box-2 rect'),.2,{fill:'rgba(255,255,255,0)',ease:Power4.easeInOut},'animate')
        .to($('.btn-1 a'),.1,{color:'#fff',ease:Power4.easeInOut},'animate')
    });

}
