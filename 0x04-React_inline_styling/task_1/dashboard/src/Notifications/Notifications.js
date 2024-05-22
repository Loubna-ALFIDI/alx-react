import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends Component {
  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  };

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate = (nextProps) => {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className={css(styles.placing)}>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            <div className={css(styles.menuItem)}>Your notifications</div>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close-icon" className={css(styles.closeIcon)} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map((val) => (
                  <NotificationItem
                    key={val.id}
                    type={val.type}
                    html={val.html}
                    value={val.value}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>
        ) : (
          <div className={css(styles.menuItem)}>Your notifications</div>
        )}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  placing: {
    position: 'relative',
  },
  notifications: {
    border: '2px dashed #e1484c',
    padding: '10px',
    position: 'absolute',
    top: '30px',
    right: '0',
    width: '300px',
    backgroundColor: 'white',
    zIndex: 100,
  },
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 15,
    border: 'none',
    background: 'transparent',
  },
  closeIcon: {
    width: '10px',
  },
});

export default Notifications;
