import { MyNgNetlifyProjectPage } from './app.po';

describe('my-ng-netlify-project App', function() {
  let page: MyNgNetlifyProjectPage;

  beforeEach(() => {
    page = new MyNgNetlifyProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
