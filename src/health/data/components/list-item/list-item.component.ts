import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  toggled: boolean = false
  @Input() item: any
  @Output() remove = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }

  getRoute(item: any) {
    return [`../meals`,
      item.$key]
  }

  toggle() {
   this.toggled = !this.toggled
  }

  removeItem()  {
    this.remove.emit(this.item)
  }


}
