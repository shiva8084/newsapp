import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://images.axios.com/2CDAqkJm8gzAkUd2PLxvgwCSg7U=/0x0:1920x1080/1366x768/2024/10/31/1730402034081.jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
                className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
                style={{ left: "90%", zIndex: "1" }}
              >
                {source}
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
