import { TestBed } from '@angular/core/testing';

import { PokemonsPageService } from './pokemons-page.service';

describe('PokemonsPageService', () => {
  let service: PokemonsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
