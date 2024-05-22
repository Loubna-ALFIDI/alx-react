import React, { PureComponent } from "react";
import PropType from "prop-types";

class NotificationItem extends PureComponent {
  static PropType = {
    __html: PropType.shape({
      html: PropType.string,
    }),
    type: PropType.string.isRequired,
    value: PropType.string,
    markAsRead: PropType.func,
    id: PropType.number,
  };

  static defaultProps = {
    type: "default",
    markAsRead: () => {
      return;
    },
    id: 0,
  };

  render() {
    const { type, html, value, markAsRead, id } = this.props;
    return (
      <>
        {type && value ? (
          <li onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={() => markAsRead(id)}
            data-notification-type={type}
            data-urgent
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        ) : null}
      </>
    );
  }
}

export default NotificationItem;
