import { mocked } from "ts-jest/utils";
import SoundPlayer from './SoundPlayer';

jest.mock('./SoundPlayer');

const soundPlayer = mocked(new SoundPlayer());

beforeEach(() => {
  soundPlayer.playSoundFile.mockClear();
});

it('is called with filename', () => {
  const filename = 'song.mp3';

  soundPlayer.playSoundFile(filename);

  expect(soundPlayer.playSoundFile).toBeCalledWith(filename);
});
