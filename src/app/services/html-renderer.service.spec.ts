import { TestBed, inject } from '@angular/core/testing';

import { HtmlRendererService } from './html-renderer.service';

describe('HtmlRendererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtmlRendererService]
    });
  });

  it('should be created', inject([HtmlRendererService], (service: HtmlRendererService) => {
    expect(service).toBeTruthy();
  }));
});
