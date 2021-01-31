$(document).ready(function () {
  $("#gallery").nanogallery2({
    kind: '',
    itemsBaseURL: 'https://paulwood.github.io/oliviamayart/assets/',

    items: [
        { src: 'IMG_1A.jpg', srct: 'IMG_1A.jpg', title: 'Title Image 1' },
        { src: 'IMG_1B.jpg', srct: 'IMG_1B.jpg', title: 'Title Image 2' },
        { src: 'IMG_1C.jpg', srct: 'IMG_1C.jpg', title: 'Title Image 3' },
        { src: 'IMG_1D.jpg', srct: 'IMG_1D.jpg', title: 'Title Image 4' },
        { src: 'IMG_1E.jpg', srct: 'IMG_1E.jpg', title: 'Title Image 5' },
        { src: 'IMG_1F.jpg', srct: 'IMG_1F.jpg', title: 'Title Image 6' },
        { src: 'IMG_1G.jpg', srct: 'IMG_1G.jpg', title: 'Title Image 7' },
        { src: 'IMG_1H.jpg', srct: 'IMG_1H.jpg', title: 'Title Image 8' },
        { src: 'IMG_1I.jpg', srct: 'IMG_1I.jpg', title: 'Title Image 9' },
        { src: 'IMG_1J.jpg', srct: 'IMG_1J.jpg', title: 'Title Image 10' },
        { src: 'IMG_1K.jpg', srct: 'IMG_1K.jpg', title: 'Title Image 11' },
        { src: 'IMG_1L.jpg', srct: 'IMG_1L.jpg', title: 'Title Image 12' },
        { src: 'IMG_1M.jpg', srct: 'IMG_1M.jpg', title: 'Title Image 13' },
        { src: 'IMG_1N.jpg', srct: 'IMG_1N.jpg', title: 'Title Image 14' },
        { src: 'IMG_1O.jpg', srct: 'IMG_1O.jpg', title: 'Title Image 15' },
        { src: 'IMG_1P.jpg', srct: 'IMG_1P.jpg', title: 'Title Image 16' },
        { src: 'IMG_1Q.jpg', srct: 'IMG_1Q.jpg', title: 'Title Image 17' },
        { src: 'IMG_1R.jpg', srct: 'IMG_1R.jpg', title: 'Title Image 18' },
        { src: 'IMG_1S.jpg', srct: 'IMG_1S.jpg', title: 'Title Image 19' },
        { src: 'IMG_1T.jpg', srct: 'IMG_1T.jpg', title: 'Title Image 20' },
        { src: 'IMG_1U.jpg', srct: 'IMG_1U.jpg', title: 'Title Image 21' },
        { src: 'IMG_1V.jpg', srct: 'IMG_1V.jpg', title: 'Title Image 22' },
        { src: 'IMG_1W.jpg', srct: 'IMG_1W.jpg', title: 'Title Image 23' },
        { src: 'IMG_1X.jpg', srct: 'IMG_1X.jpg', title: 'Title Image 24' },
        { src: 'IMG_1Y.jpg', srct: 'IMG_1Y.jpg', title: 'Title Image 25' },
        { src: 'IMG_1Z.jpg', srct: 'IMG_1Z.jpg', title: 'Title Image 26' },
        { src: 'IMG_2A.jpg', srct: 'IMG_2A.jpg', title: 'Title Image 27' },
        { src: 'IMG_2B.jpg', srct: 'IMG_2B.jpg', title: 'Title Image 28' },
        { src: 'IMG_2C.jpg', srct: 'IMG_2C.jpg', title: 'Title Image 29' }
    ],

    "thumbnailHeight": "auto",
    "thumbnailBorderVertical": 0,
    "thumbnailBorderHorizontal": 0,
    "thumbnailDisplayTransitionDuration": 300,
    "thumbnailDisplayInterval": 50,
    "thumbnailHoverEffect2": "imageScale150",
    "thumbnailAlignment": "center",
    "thumbnailGutterWidth": 20,
    "thumbnailGutterHeight": 20,
    "gallerySorting": "titleasc",
    "thumbnailOpenImage": false,
    "thumbnailLabel": {
      "position": "overImageOnBottom",
      "display": false
    }
  });
});