class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  componentWillMount() {
    this.getYoutubeVideos('monkey throws racoon into space');
  }

  getYoutubeVideos(query) {
    let options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYoutube(options, (videos) => {
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      });
    });
  }

  onVideoClick(event) {
    let searchID = event.target.getAttribute('id');
    let filteredVideo = window.exampleVideoData.filter(vid => vid.id.videoId === searchID )[0];

    this.setState({
      currentVideo: filteredVideo
    });
  }

  render () {
    let selectedVideo = this.state.currentVideo;

    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} clickFunction={this.onVideoClick}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
