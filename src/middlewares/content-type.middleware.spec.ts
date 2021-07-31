import { ContentTypeMiddleware } from './content-type.middleware';

describe('ContentTypeMiddleware', () => {
  it('should be defined', () => {
    expect(new ContentTypeMiddleware()).toBeDefined();
  });
});
