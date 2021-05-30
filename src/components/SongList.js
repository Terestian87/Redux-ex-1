import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}


/*convention name to connect redux state from provider and 
make it available as props in the component so this.sprops === state
*/
const mapStateToProps = (state) => {
    return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)
                                    // es2015 for selectSong:selectSong
