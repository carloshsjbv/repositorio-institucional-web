import { TurmasModule } from './turmas.module';

describe('TurmasModule', () => {
  let turmasModule: TurmasModule;

  beforeEach(() => {
    turmasModule = new TurmasModule();
  });

  it('should create an instance', () => {
    expect(turmasModule).toBeTruthy();
  });
});
