<template lang='pug'>
#MyFirstSlideshow
  .eg-slideshow
    slide(enter='bounceInDown' leave='fadeOut')
      h3 A small talk about
      include assets/habiticaLogo.svg

    slide(enter='bounceInRight' leave='fadeOut')
      h3 Hey modify me !
      p.
        Come on modify me ! If you are running the development server,
        you will see the changes take effect immediately

    slide(enter='fadeIn')
      h3 Want cool effects?
      p.
        Code your own, or try stealing for the other slideshows !
</template>

<script>
import eagle from 'eagle.js'
export default {
  mixins: [ eagle.slideshow ],
  infos: {
    // These infos appear on the home page, below the slideshow's thumbnail
    title: 'Your First Slideshow',
    description: 'A boilerplate to get you started',
    path: 'your-first-slideshow'
  }
}
</script>

<style lang='scss'>
@import url(https://fonts.googleapis.com/css?family=Raleway);
#MyFirstSlideshow{
  .eg-slideshow{
    font-family: 'Raleway';
    background-image: url('assets/habiticaBackground.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .eg-slide{
      .eg-slide-content{
        width: 25em;
        max-width: 80%;
        margin: 0 auto;
        color: #432874;
        transform: translateY(50%);
      }
    }
  }
  .eg-slide-content{
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }

  #habiticaLogo{
    filter: drop-shadow( 3px 3px 2px rgba(255, 255, 255, .7));

  }
}
</style>
