import React, { Component } from "react";
import { RouteComponentProps } from "react-router";
import BoardEntity from "../entity/Board";
import { State as GlobalState } from "../reducer/reducer";
import { connect } from "react-redux";
import { Client as StompClient, Message as StompMessage } from "@stomp/stompjs";

type DispatchProps = {};
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
      `/topic/boards/${this.props.board.id}`, this.onMessage
    );
  }

  onMessage(message: StompMessage) {
    const changeObject = JSON.parse(message.body);
    console.log("received", changeObject);
  }

  componentDidMount() {
    this.stompClient.configure(this.stompConfig);
    this.stompClient.activate();
  }

  componentWillUnmount() {
    this.stompClient.deactivate();
  }

  render() {
    return <h1>{this.props.board.id}</h1>;
  }
}

export default connect(
  undefined,
  {}
)(BoardWebSockets);
