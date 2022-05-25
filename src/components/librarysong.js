import React from  "react";

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying,setSongs}) => {
    const songSelectHandler = () =>{
        setCurrentSong(song); 
        //Add active state
        const newSongs = songs.map((song) => {
            if(song.id === id){
                return{
                    ...song,
                    active: true,
                }
            }else{
                return{
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs)
       //check if song is playing
       if(isPlaying){
           const playPromise = audioRef.current.play();
           if(playPromise !== undefined){
               playPromise.then((audio) =>{
                   audioRef.current.play();
               })
           }
       }
    
    }
    return(
       <div onClick={songSelectHandler} className={`library-song ${song.active ? "selected" : "" }`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
            <h2>{song.name}</h2>
            <h4>{song.artist}</h4>
            </div>
       </div>
    )
}


export default LibrarySong;