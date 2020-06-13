import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { Button } from 'react-bootstrap';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            posts: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:80/posts')
            .then(response => {
                this.setState({ posts: response.data.posts });
                console.log(this.state.posts);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tableRow () {
        if (this.state.posts) {
            return this.state.posts.map((data, index) => {
                return (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{data.title}</td>
                        <td>{data.slug}</td>
                        <td>{data.content}</td>
                        <td><Link to={'/edit/' + data.id}><Button className="btn-success">Edit</Button></Link></td>
                    </tr>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Title</td>
                            <td>Slug</td>
                            <td>Content</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tableRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}
