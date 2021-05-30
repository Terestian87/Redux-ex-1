export const selectSong = song => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}




/*
we use it as action creator but when imported is
only a simple function unless we use dispatch
this is why we use the mapStateToProps that use dispatch under the hood
*/
