import * as React from 'react';
import renderer from 'react-test-renderer';
import MovieNavOverview from './movie-nav-overview';
import {films} from '../data-for-test';

const film = films[0];

describe(`MovieNavOverview`, () => {
  it(`Render MovieNavOverview`, () => {
    const tree = renderer.create(
        <MovieNavOverview
          description={film.description}
          director={film.director}
          rating={film.rating}
          starring={film.starring}
          votes={film.votes}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
