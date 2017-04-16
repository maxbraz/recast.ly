var searchYouTube = ({query, max = 5, key}, cb) => {

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: true
  })
  .done(({items}) => {
    if (cb) {
      cb(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(error));
  });
};

window.searchYouTube = searchYouTube;
