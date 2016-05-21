import { Angular2SaoArenaPage } from './app.po';

describe('angular2-sao-arena App', function() {
  let page: Angular2SaoArenaPage;

  beforeEach(() => {
    page = new Angular2SaoArenaPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-sao-arena works!');
  });
});
