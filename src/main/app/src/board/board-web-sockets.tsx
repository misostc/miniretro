import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import BoardEntity from "../entity/Board";
import { State as GlobalState } from "../reducer/reducer";
import { connect } from "react-redux";
import { Client as StompClient, Message as StompMessage } from "@stomp/stompjs";
import { StateChange } from "../entity/StateChange";
import { stateChanged, StateChangeAction } from "../actions/state-change";

type DispatchProps = { stateChanged: (change:StateChange) => StateChangeAction };
type OwnProps = { board: BoardEntity };
type StateProps = {};

type State = {  };

type Props = DispatchProps & OwnProps & StateProps;

class BoardWebSockets extends Component<Props, State> {
  stompConfig = {
    brokerURL: `ws://${window.location.hostname}:${window.location.port}/websocket`,
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
      `/topic/boards/${this.props.board.id}`, (m) => {this.onMessage(m)}
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
