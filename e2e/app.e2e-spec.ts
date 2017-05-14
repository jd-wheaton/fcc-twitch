import { FccTwitchPage } from './app.po';

describe('fcc-twitch App', () => {
  let page: FccTwitchPage;

  beforeEach(() => {
    page = new FccTwitchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
