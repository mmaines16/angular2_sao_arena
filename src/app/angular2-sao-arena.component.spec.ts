import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2SaoArenaAppComponent } from '../app/angular2-sao-arena.component';

beforeEachProviders(() => [Angular2SaoArenaAppComponent]);

describe('App: Angular2SaoArena', () => {
  it('should create the app',
      inject([Angular2SaoArenaAppComponent], (app: Angular2SaoArenaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-sao-arena works!\'',
      inject([Angular2SaoArenaAppComponent], (app: Angular2SaoArenaAppComponent) => {
    expect(app.title).toEqual('angular2-sao-arena works!');
  }));
});
