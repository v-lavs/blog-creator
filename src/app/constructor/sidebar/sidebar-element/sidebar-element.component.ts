import {Component, Input} from '@angular/core';
import {ElementSidebarRequest} from '../../../models/element-sidebar-request';
import {Element} from '../../../models/element';
import {ELEMENTS_TYPE} from '../../../models/elements-type';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-sidebar-element',
  templateUrl: './sidebar-element.component.html',
  styleUrls: ['./sidebar-element.component.scss']
})
export class SidebarElementComponent {
  elementKind = ELEMENTS_TYPE;
  onSubmit: Function;
  onChanged: (element: Element) => void;
  onCancel: Function;
  element: Element;

  @Input() set request({onSubmit, onChange, onCancel, payload}: ElementSidebarRequest) {
    this.onChanged = onChange;
    this.onSubmit = onSubmit;
    this.onCancel = onCancel;
    this.element = payload;
    console.log(onCancel)
  }
}


