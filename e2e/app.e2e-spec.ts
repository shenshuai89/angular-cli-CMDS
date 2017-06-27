import { ThirdPage } from './app.po';

describe('third App', () => {
  let page: ThirdPage;

  beforeEach(() => {
    page = new ThirdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
