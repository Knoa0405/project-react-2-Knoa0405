import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import TalentProficiency from '../TalentProficiency';

describe('TalentProficiency', () => {
  const handleSubmit = jest.fn();
  const handleClick = jest.fn();

  context('when click level button', () => {
    it('calls handleClick function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <TalentProficiency
            onClick={handleClick}
            onSubmit={handleSubmit}
          />
        </MemoryRouter>

      ));

      const levels = ['상', '중', '하'];

      levels.forEach((level) => {
        expect(getByText(level)).not.toBeNull();

        fireEvent.click(getByText(level));

        expect(handleClick).toBeCalled();
      });
    });
  });
});
