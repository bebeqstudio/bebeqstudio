import { BebeqstudioPage } from './app.po';

describe('bebeqstudio App', () => {
  let page: BebeqstudioPage;

  beforeEach(() => {
    page = new BebeqstudioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
