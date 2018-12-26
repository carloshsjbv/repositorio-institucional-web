import { SubmissoesModule } from './submissoes.module';

describe('SubmissoesModule', () => {
  let submissoesModule: SubmissoesModule;

  beforeEach(() => {
    submissoesModule = new SubmissoesModule();
  });

  it('should create an instance', () => {
    expect(submissoesModule).toBeTruthy();
  });
});
