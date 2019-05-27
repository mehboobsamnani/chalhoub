import moxios from 'moxios';
import {
  fetchHeadlines,
} from '.';

describe('News', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetch headlines', async () => {
    const expectedPosts = ['Post1', 'Post2'];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedPosts }); //mocked response
    });

    const result = await fetchHeadlines();
    expect(result).toEqual(expectedPosts);
  });

  it('fetch news by category', async () => {
    const expectedPosts = ['Post1', 'Post2'];
    const cat = 'business';
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedPosts }); //mocked response
    });

    const result = await fetchHeadlines(cat);
    expect(result).toEqual(expectedPosts);
  });
});
