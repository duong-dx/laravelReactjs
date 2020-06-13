import React, {Component} from 'react';

export default class Create extends Component{
    render() {
        return (
            <form action="" method="POST">
                <div className="form-group" >
                    <input className="form-control" type="text" name="title" placeholder="Title"/>
                </div>
                <div className="form-group" >
                    <input className="form-control" type="text" name="slug" placeholder="Slug"/>
                </div>
                <div className="form-group" >
                    <input className="form-control" type="text" name="content" placeholder="Content"/>
                </div>
                <div className="form-group text-right" >
                    <button className="btn btn-success">Save</button>
                </div>
            </form>
        )
    }
}
