import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        //get param router dom

        const { match: { params } } = this.props;
        let url = `http://localhost:80/posts/${params.id}`;
        axios({
            method: 'get',
            url: url
        }).then(response => {
            if (response && response.data) {
                this.setState({data: response.data})
            }
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-dark table-bordered">
                    <tbody>
                        <tr>
                            <td>Title :</td>
                            <td>{this.state.data.title}</td>
                        </tr>
                        <tr>
                            <td>Slug :</td>
                            <td>{this.state.data.slug}</td>
                        </tr>
                        <tr>
                            <td>Content :</td>
                            <td>{this.state.data.content}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
