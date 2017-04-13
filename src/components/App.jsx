class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick(event) {
    // console.log('I got clicked');
    // console.log('onVideoClick event: ', event);
    // let context = this;
    // console.log('onVideoClick event this is: ', event.target);
    let videoID = event.target.getAttribute('id');
    console.log(videoID);
    this.setState({
      clicked: videoID
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.clicked || window.exampleVideoData[0]} />
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
