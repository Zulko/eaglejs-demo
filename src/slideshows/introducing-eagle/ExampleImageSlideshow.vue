<template lang="pug">
.eg-slideshow
  eg-image-slide(v-for='imageUrl, i in images[preference]',
              :enter="(i === 0) ? null : 'slideInRight'", leave='slideOutLeft', :url='imageUrl' :key='i')
</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  props: {
    preference: { default: 'funny kitties' }
  },
  data: function () {
    var images = {
      'baby bunnies': [
        'https://i.imgur.com/1PL2k1H.jpg',
        'https://i.imgur.com/GfFUcPQ.jpg',
        'https://i.imgur.com/et8w8Rn.gif'
      ],
      'funny kitties': [
        'https://i.imgur.com/P7iyH.png',
        'https://i.imgur.com/sHOqlJc.jpg',
        'https://i.imgur.com/wiAwNQZ.gif'
      ],
      'fluffy puppies': [
        'https://i.imgur.com/Scj7lzM.jpg',
        'https://i.imgur.com/FyFhTEE.jpg',
        'https://i.imgur.com/G62BWuI.gif'
      ]
    }
    return {
      images: images,
      preloadedImages: images[this.preference]
    }
  }
}
</script>
