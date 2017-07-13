import React from "react"
require("../css/meme.css");

class Meme extends React.Component {
  render() {
    const style = {
      //background: "url('http://www.slate.com/content/dam/slate/blogs/browbeat/2014/02/10/wonka.jpg.CROP.promo-xlarge2.jpg')",
    }
    return (
      <div className="meme-box" style={{ backgroundImage: `url("${this.props.url}")` }}>
        <h1 className="top">{this.props.top}</h1>
        {/*<img id="image" src="http://www.slate.com/content/dam/slate/blogs/browbeat/2014/02/10/wonka.jpg.CROP.promo-xlarge2.jpg" />*/}
        <h1 className="bottom">{this.props.bottom}</h1>
      </div >
    )
  }
}

export default Meme;