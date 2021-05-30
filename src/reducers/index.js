import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Stairway to Heaven', artist: 'Led Zeppelin' },
        { title: 'Love is Only a Feeling', artist: 'The Darkness' },
        { title: 'Smash', artist: 'The Offspring' },
        { title: 'Draco Spaziale', artist: 'Gianfranco Marziano "Faraone"' }
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})