import { SocspherePage } from './app.po';

describe('socsphere App', () => {
  let page: SocspherePage;

  beforeEach(() => {
    page = new SocspherePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
