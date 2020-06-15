import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

const MoviePoster = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drame`,
  YEAR: `2014`,
};

const films = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
];

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          movieTitle = {MoviePoster.TITLE}
          movieGenre = {MoviePoster.GENRE}
          movieYear = {MoviePoster.YEAR}
          films = {films}
          onSmallMovieCardTitleClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
