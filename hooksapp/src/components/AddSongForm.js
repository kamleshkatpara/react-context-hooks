import React, { Component } from 'react';

class AddSongForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ title: event.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSong(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song name:</label>
                <input type="text" value={this.state.title} onChange={this.handleChange} required />
                <input type="submit" value="add song" />
            </form>
        )
    }

}

export default AddSongForm;