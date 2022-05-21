import { MinutesToSecondsPipe } from './minutes-to-seconds.pipe';

describe('MinutesToSecondsPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesToSecondsPipe();
    expect(pipe).toBeTruthy();
  });
});
