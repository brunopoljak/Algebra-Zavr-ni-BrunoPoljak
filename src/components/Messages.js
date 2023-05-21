import { Component } from "react";
import React from "react";

class Messages extends Component {
  render() {
    const { messages } = this.props;
    return (
      <ul className="Messages-list">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }

  renderMessage(message) {
    const { member, text, timestamp } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";
    return (
      <li className={className}>
        {/*slovo unutar avatara*/}
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        >
          <div>{member.clientData.username[0]}</div>
        </span>
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
          <div className="username">{timestamp}</div>
        </div>
      </li>
    );
  }
}

export default Messages;
