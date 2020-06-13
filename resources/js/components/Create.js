import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import FlashError from "../view/FlashError";

export default class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            slug: '',
            content: '',
            flag: true
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        var self = this
        $('.text-danger').html('');
        let data = {
            title: this.state.title,
            slug: this.state.slug,
            content: this.state.content
        };
        let uri = 'http://localhost:80/posts';
        let redirectTo = '/#/home';
        axios({
            method: 'post',
            url: uri,
            data: data
        })
            .then((response) => {
                if (response && response.data) {
                    self.setState({flag: true});
                    window.location.href = redirectTo;
                }
            })
            .catch(function (error) {
                self.setState({flag: false});
                if (error.response) {
                    jQuery.each(error.response.data.errors, (index, value) => {
                        $('.' + index + '-error').html(value)
                    })
                }
            });
    };

    render() {
        let flag = this.state.flag;
        return (
            <div>
                {!flag && <FlashError />}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                        <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title"/>
                        <span className="text-danger title-error"></span>
                    </div>
                    <div className="form-group" >
                        <input className="form-control" type="text" name="slug" value={this.state.slug} onChange={this.handleChange} placeholder="Slug"/>
                        <span className="text-danger slug-error"></span>
                    </div>
                    <div className="form-group" >
                        <input className="form-control" type="text" name="content" value={this.state.content} onChange={this.handleChange} placeholder="Content"/>
                        <span className="text-danger content-error"></span>
                    </div>
                    <div className="form-group text-right" >
                        <button className="btn btn-success">Save</button>
                    </div>
                </form>
            </div>
        )
    }
}
