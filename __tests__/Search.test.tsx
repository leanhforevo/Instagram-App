import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Search from '../src/views/Search/index';
import baseAPI from '../src/services/baseAPI';

jest.mock('../src/services/baseAPI', () => ({
  getSearch: jest.fn(),
}));

jest.useFakeTimers();

describe('Search Component', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText } = render(<Search />);
    expect(getByPlaceholderText('Tìm kiếm')).toBeTruthy();
  });

  it('calls loadData after debounce', async () => {
    const mockData = {
      data: {
        items: [
          {
            profile_pic_url: 'https://example.com/profile.jpg',
            full_name: 'John Doe',
            username: 'johndoe',
          },
        ],
      },
    };

    baseAPI.getSearch.mockResolvedValueOnce(mockData);

    const { getByPlaceholderText, getByText } = render(<Search />);
    const searchInput = getByPlaceholderText('Tìm kiếm');

    fireEvent.changeText(searchInput, 'John');

    jest.advanceTimersByTime(300);

    await waitFor(() => expect(baseAPI.getSearch).toHaveBeenCalledWith({ user: 'John' }));

    expect(getByText('John Doe')).toBeTruthy();
  });

  
});
