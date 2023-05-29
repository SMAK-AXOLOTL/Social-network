import React from "react";
import s from './Music.module.css'
import MusicItem from "./MusicItem/MusicItem";

class Music extends React.Component{
    constructor(props) {
        super(props)
        if (this.props.musicData.length === 0) {
            this.props.setMusic([
                {
                    id: 1,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName1',
                    performer: 'performerName1',
                    album: '1st album',
                    duration: '2:10'
                },
                {
                    id: 2,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName2',
                    performer: 'performerName2',
                    album: '1st album',
                    duration: '3:15'
                },
                {
                    id: 3,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName3',
                    performer: 'performerName3',
                    album: '1st album',
                    duration: '1:49'
                },
                {
                    id: 4,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName4',
                    performer: 'performerName4',
                    album: '1st album',
                    duration: '6:55'
                },
                {
                    id: 5,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName4',
                    performer: 'performerName4',
                    album: '1st album',
                    duration: '6:55'
                },
                {
                    id: 6,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName4',
                    performer: 'performerName4',
                    album: '1st album',
                    duration: '6:55'
                },
                {
                    id: 7,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName4',
                    performer: 'performerName4',
                    album: '1st album',
                    duration: '6:55'
                },
                {
                    id: 8,
                    albumCover: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d3/b1/f9/d3b1f91c-f2c0-7cc8-97fb-035db64b0ab2/12UMGIM26179.rgb.jpg/1200x1200bf-60.jpg',
                    name: 'defaultName4',
                    performer: 'performerName4',
                    album: '1st album',
                    duration: '6:55'
                },
            ])
        }
    }
    render() {
        return (
            <div className={s.container}>
                {this.props.musicData.map(m => <MusicItem key={m.id} trek={m}/>)}
            </div>
        );
    }
}

export default Music