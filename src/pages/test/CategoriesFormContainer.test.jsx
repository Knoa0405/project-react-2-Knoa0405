import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import CategoriesFormContainer from '../CategoriesFormContainer';

jest.mock('react-redux');

describe('CategoriesFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      frontEndCategories: [
        { id: 1, category: 'ReactJs' },
        { id: 2, category: 'VueJs' },
      ],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders frontEnd categories', () => {
    const { getByText } = render((
      <MemoryRouter>
        <CategoriesFormContainer />
      </MemoryRouter>
    ));

    const frontEndCategories = [
      { id: 1, category: 'ReactJs' },
      { id: 2, category: 'VueJs' },
    ];

    frontEndCategories.forEach(({ category }) => {
      const regex = new RegExp(`${category}`);

      expect(getByText(regex)).not.toBeNull();
    });
  });

  context('when click category', () => {
    it('calls select category dispatch function', () => {
      const { getByText } = render((
        <MemoryRouter>
          <CategoriesFormContainer />
        </MemoryRouter>
      ));

      fireEvent.click(getByText(/ReactJs/));

      expect(dispatch).toBeCalled();
    });
  });
});