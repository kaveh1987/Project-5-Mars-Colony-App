import { Mars2Page } from './app.po';

describe('mars2 App', function() {
  let page: Mars2Page;

  beforeEach(() => {
    page = new Mars2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
