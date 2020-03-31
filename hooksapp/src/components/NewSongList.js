import React, { Component } from 'react';
import { v4 as uuid } from 'uuid'
import AddSongForm from './AddSongForm';

class NewSongList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: [
                { id: 1, title: 'almost home' },
                { id: 2, title: 'memory gospel' },
                { id: 3, title: 'this wild darkness' }
            ]
        }

        this.addSong = this.addSong.bind(this);
    }

    addSong = (title) => {
        this.setState({
            songs: [...this.state.songs, { id: uuid(), title: title }]
        })
    }

    componentDidMount() {
        console.log('componentDidMount =>', this.state.songs);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate =>', this.state.songs);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount =>', this.state.songs);
    }


    render() {
        const { songs } = this.state;
        return (
            <div className="song-list">
                <ul>
                    {songs.map(song => {
                        return (<li key={song.id}>{song.title}</li>)
                    })}
                </ul>
                <AddSongForm addSong={this.addSong} />
            </div>
        )
    }
}

export default NewSongList;