import { render, screen, act} from '@testing-library/react';
import Search from '@/components/Search';
import { getSearchData } from '@/components/ServerData';

jest.mock('@/components/ServerData', () => ({
  getSearchData: jest.fn(),
}));

const mockData = [
  { title: 'Title 1', language: 'JavaScript', content: 'console.log("Hello, World!");' },
  { title: 'Title 2', language: 'Python', content: 'print("Hello, World!")' },
];

describe('Search component', () => {
  it('renders search results when searchClick is true', async () => {
    (getSearchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<Search searchKey="someKey" searchClick={true} />);

    mockData.forEach((searchItem) => {
      expect(screen.getByText(searchItem.title)).toBeInTheDocument();
      expect(screen.getByText(searchItem.language)).toBeInTheDocument();
      expect(screen.getByText(searchItem.content)).toBeInTheDocument();
    });
  });

  it('does not render search results when searchClick is false', async () => {
    (getSearchData as jest.Mock).mockResolvedValueOnce(mockData);

    render(<Search searchKey="someKey" searchClick={false} />);
    await act(async () => {});
    expect(screen.queryByText(mockData[0].title)).toBeNull();
    expect(screen.queryByText(mockData[1].title)).toBeNull();
  });
});
