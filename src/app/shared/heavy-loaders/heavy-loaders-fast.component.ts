import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <h1>Loader Fast</h1>
  `
})
export class HeavyLoadersFastComponent { }
