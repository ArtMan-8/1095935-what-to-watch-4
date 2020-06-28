import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';
import {films} from '../data-for-test.js';

const film = films[0];

Enzyme.configure({
  adapter: new Adapter()
});

describe(`VideoPlayer`, () => {
  it(`Should VideoPlayer play`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          muted
          isPlaying={true}
          src={film.src}
          poster={film.poster}
        />
    );

    const isPlay = videoPlayer.instance().props.isPlaying;
    expect(isPlay).toBe(true);
  });

  it(`Should VideoPlayer stop`, () => {
    const videoPlayer = mount(
        <VideoPlayer
          muted
          isPlaying={false}
          src={film.src}
          poster={film.poster}
        />
    );

    const isStop = videoPlayer.instance().props.isPlaying;
    expect(isStop).toBe(false);
  });
});
