var searchYouTube = ({query, max, key}, cb) => {
  let baseURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=';
  let searchPartURL = `${query}&maxResults=${max}&key=${key}&type=video&videoEmbeddable=true`;
  let youTubeSearchURL = baseURL + searchPartURL;

  $.ajax({
    url: youTubeSearchURL,
    type: 'GET',
    part: 'snippet',
    contentType: 'application/json; charset=utf-8'
  })
  .done(function(data) {
    cb(data.items);
  })
  .fail(function(data) {
    console.log('error: ', data);
  });
};

window.searchYouTube = searchYouTube;
