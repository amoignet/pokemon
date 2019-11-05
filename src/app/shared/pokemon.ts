export class Pokemon {
  public nom: string;
  public image: string;
  public description: string;

  constructor(input?: Pokemon) {
      Object.assign(this, input);
    };
}
