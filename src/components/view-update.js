import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import imageElement from "./../jarjar.jpg";

export default class ViewUpdate extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    imageSrc: PropTypes.string
  };

  static defaultProps = {
    imageSrc: imageElement
  };

  render() {
    const { by, text, created, imageSrc } = this.props;

    const createdDate = moment(created).fromNow();

    return (
      <div className={`card view-update`}>
        <div className="card-body">
          <img src={imageSrc} alt="" />
          <blockquote>{text}</blockquote>
          <em>
            - {by} ({createdDate})
          </em>
        </div>
      </div>
    );
  }
}
