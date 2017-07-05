import { UploadimagesPage } from './app.po';

describe('uploadimages App', () => {
  let page: UploadimagesPage;

  beforeEach(() => {
    page = new UploadimagesPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
