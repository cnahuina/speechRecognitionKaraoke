import { Injectable } from '@angular/core';

import { Song } from './song.interface'

@Injectable()
export class SongsService {

  constructor() { }

  private readonly songList: Song[] = [

    {
      artist: 'Juan Gabriel',
      title: 'Hasta que te conoci',
      audio: 'assets/songs/hasta-que-te-conoci/hasta-que-te-conoci.mp3',
      lyrics: 'assets/songs/hasta-que-te-conoci/hasta-que-te-conoci.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Matisse',
      title: 'Cuando te encontre',
      audio: 'assets/songs/cuando-te-encontre/cuando-te-encontre.mp3',
      lyrics: 'assets/songs/cuando-te-encontre/cuando-te-encontre.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Panda',
      title: 'Nuestra Aflicción',
      audio: 'assets/songs/nuestra-afliccion/nuestra-afliccion.mp3',
      lyrics: 'assets/songs/nuestra-afliccion/nuestra-afliccion.lrc',
      lyricDelay: 1,
    },
    {
      artist: 'Rick Astley',
      title: 'Never Gonna Give You Up',
      audio: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.mp3',
      lyrics: 'assets/songs/never-gonna-give-you-up/never-gonna-give-you-up.lrc',
      lyricDelay: 1,
    },
  ]

  getSongList() {
    return this.songList
  }

}
