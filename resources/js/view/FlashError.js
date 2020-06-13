import React, {Component} from "react";
import {Alert} from "react-bootstrap";

export default function FlashError () {
    return (
        <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        </Alert>
    )
}
