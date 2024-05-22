import React, { Component } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";

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
          <div className={css(styles.NotificationSyle)}>
            
            <button
              style={{
                position: "absolute",
                top: 20,
                right: 15,
                border: "none",
                background: "transparent",
              }}
              aria-label="Close"
              onClick={() => {
                console.log("Close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close-icon" width={"10px"} />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map((val, idx) => (
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
  NotificationSyle: {
    border: '1px dashed #c1384c',
    padding: '10px',
    width: '400px',
  },

  placing: {
    position: 'absolute',
    top: '0',
    right: '10px',
  },
  menuItem: {
    textAlign: 'end',
  }
})

export default Notifications;
