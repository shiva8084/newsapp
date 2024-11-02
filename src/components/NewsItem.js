import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl?"https://images.axios.com/2CDAqkJm8gzAkUd2PLxvgwCSg7U=/0x0:1920x1080/1366x768/2024/10/31/1730402034081.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
