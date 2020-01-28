import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { getData as mockGetData } from '../api/getData';
import StarWarsCharacters from './StarWarsCharacters';

test('Next button calls getData to set url to character.previous url', () => {
  const { getByText } = render(<StarWarsCharacters />)

  const nextCharacter = { count: 2,
                       next: "next url",
                       previous:"prev url", 
                       results: [ {name: "abc", height: 5},
                                  {name: "abcd", height: 6},
                                  {name: "abcde", height: 7},
                                  {name: "abcdef", height: 8} ]
                      }

  const NextButton = getByText(/Next/i)

  fireEvent.click(NextButton)


  expect(mockGetData).toHaveBeenCalledWith(nextCharacter)
})

test('Previous button calls getData to set url to character.previous url', () => {
  const { getByText } = render(<StarWarsCharacters />)

  const prevCharacter = { count: 1,
                       next: "next url",
                       previous:"prev url", 
                       results: [ {name: "abc", height: 1},
                                  {name: "abcd", height: 2},
                                  {name: "abcde", height: 3},
                                  {name: "abcdef", height: 4} ]
                      }

  const PrevButton = getByText(/Previous/i)

//here we don't necessarily have an event objec tbecause our goToNext function is resolving a promise
//instead of an input with an event object we have a button with and onClick
  fireEvent.click(PrevButton)

  expect(mockGetData).toHaveBeenCalledWith(prevCharacter)

  await wait( () => expect(getByText(/)))
})