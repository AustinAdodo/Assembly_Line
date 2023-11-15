import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'assemblyline',
  templateUrl: './assemblyline.component.html',
  styleUrls: ['./assemblyline.component.css'],
})

/**
 * @params
 * * stages?: string[]. The amount of columns to be traversed.
 * * items?: string[]. The total number of items.
 *
 * @returns
 * An array of objects, where each object contains a property for each stage and the value of each property is an empty string.
 *
 * @throws
 * An Error if the `stages` input property is not provided.
 */
export class AssemblyLineComponent implements OnInit {
  @Input()
  stages: string[] = []; //definition here is the amount of columns to be traversed.
  items!: { [key: string]: string }[];
  newItem: string = '';

  ngOnInit() {
    if (!this.stages) {
      throw new Error('Input "stages" is required.');
    }

    this.items = [];
    for (let i = 0; i < this.stages.length; i++) {
      const item = {};
      item[this.stages[0]] = '';
      this.items.push(item);
    }
  }

  addItem() {
    if (this.newItem) {
      this.items[0][this.stages[0]] = this.newItem;
      this.newItem = '';
    }
  }

  moveItem(
    item: { [key: string]: string },
    currentIndex: number,
    targetIndex: number,
    forward: boolean
  ) {
    if (!this.stages) {
      throw new Error('Input "stages" is required.');
    }

    const currentStage = this.stages[currentIndex];
    const targetStage = this.stages[targetIndex];

    if (forward) {
      if (targetIndex < this.stages.length - 1) {
        item[targetStage] = item[currentStage] || '';
        delete item[currentStage];
      } else {
        this.items = this.items.filter((_, index) => index !== currentIndex);
      }
    } else {
      if (targetIndex > 0) {
        item[targetStage] = item[currentStage] || '';
        delete item[currentStage];
      }
    }
  }
}

