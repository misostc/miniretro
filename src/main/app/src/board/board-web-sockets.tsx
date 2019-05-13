import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import { State as GlobalState } from "../reducer/reducer";
import { connect } from "react-redux";
import { Client as StompClient, Message as StompMessage } from "@stomp/stompjs";
import { stateChanged, StateChangeAction } from "../actions/state-change";
import {  StateChange } from "../entity/entities";

const wsProtocol = window.location.href.match('https:') ? 'wss' : 'ws';

type DispatchProps = { stateChanged: (change:StateChange) => StateChangeAction };
type OwnProps = { boardId: string };
type StateProps = {};

type State = {  };

type Props = DispatchProps & OwnProps & StateProps;

class BoardWebSockets extends Component<Props, State> {
  stompConfig = {
    brokerURL: `${wsProtocol}://${window.location.hostname}:${window.location.port}/websocket`,
    debug: function(str: string) {
      console.log(str);
    },
    onConnect: () => this.onConnect(),
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000
  };

  stompClient = new StompClient();

  onConnect() {
    this.stompClient.subscribe(
      `/topic/boards/${this.props.boardId}`, (m) => {this.onMessage(m)}
    );
  }

  onMessage(message: StompMessage) {
    const changeObject = JSON.parse(message.body);
    this.props.stateChanged(changeObject);
  }

  componentDidMount() {
    this.stompClient.configure(this.stompConfig);
    this.stompClient.activate();
  }

  componentWillUnmount() {
    this.stompClient.deactivate();
  }

  render() {
    return null;
  }
}

export default connect(
  undefined,
  { stateChanged }
)(BoardWebSockets);
