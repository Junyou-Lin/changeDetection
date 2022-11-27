import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{ title }}</h2>
    <input #word type="text" />
    <button (click)="addWord(word.value)">Add</button>
    <app2 [data]="words"></app2>
    <app3 [data]="words"></app3>
  `,
})
export class HeroParentComponent {
  title = 'Parent Component';
  words = ['sugar', 'lattes', 'tea'];

  addWord(word: string) {
    this.words.push(word);

    // as array is object which is reference type,
    //.push() will only change the value of the array, not the reference
    // so we need to reassign the array to trigger change detection

    // this.words = [...this.words, word];
  }
}
