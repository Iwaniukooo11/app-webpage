console.log('hello test')
import fullpage from 'fullpage.js'

new fullpage('#fullpage', {
    navigation: false,
    // responsiveWidth: 700,
    anchors: ['home', 'jak-to-dziala', 'tworcy'],
    parallax: true,
    onLeave: function (origin, destination, direction) {
        console.log('Leaving section' + origin.index)
    },
})
