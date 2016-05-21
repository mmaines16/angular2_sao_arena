export class Angular2SaoArenaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-sao-arena-app h1')).getText();
  }
}
