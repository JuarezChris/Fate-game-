import React, { Component } from 'react';

export default class CreateServant extends Component {
    constructor(props) {
        super(props);

        this.onChangeServantClass = this.onChangeServantClass.bind(this);
        this.onChangeServantName = this.onChangeServantName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            servantName: '',
            servantClass: '',
            servants: []
        }
    }

    componentDidMount() {
        this.setState({
            servants: ['test servant'],
            servantName: 'test servantName'
        })
    }

    onChangeServantName(e) {
        this.setState({
            servantName: e.target.value
        })
    }

    onChangeServantClass(e) {
        this.setState({
            servantClass: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const servant = {
            servantName: this.state.servantName,
            servantClass: this.state.servantClass
        }
        console.log(servant);
        window.location = '/';
    }


    render() {
        return (
            <div>
                <h3>Create New Heroic Servant</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Hero Name: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value={this.state.servantName}
                            onChange={this.onChangeServantName}>
                            {
                                this.state.servants.map(function(servants) {
                                    return <option
                                    key={servants}
                                    value={servants}>{servants}
                                    </option>;
                                })
                            }    
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Heroic Class: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.servantClass}
                            onChange={this.onChangeServantClass}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Heroic Servant" className="btn-btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}