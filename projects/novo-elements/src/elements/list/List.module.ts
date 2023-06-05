// NG2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NovoCommonModule } from 'novo-elements/elements/common';
import { NovoIconModule } from 'novo-elements/elements/icon';
// APP
import {
  NovoItemAvatarElement,
  NovoItemContentElement,
  NovoItemDateElement,
  NovoItemEndElement,
  NovoItemHeaderElement,
  NovoItemTitleElement,
  NovoListElement,
  NovoListItemElement,
} from './List';

@NgModule({
  imports: [CommonModule, NovoCommonModule, NovoIconModule],
  declarations: [
    NovoListElement,
    NovoListItemElement,
    NovoItemAvatarElement,
    NovoItemTitleElement,
    NovoItemContentElement,
    NovoItemEndElement,
    NovoItemHeaderElement,
    NovoItemDateElement,
  ],
  exports: [
    NovoListElement,
    NovoListItemElement,
    NovoItemAvatarElement,
    NovoItemTitleElement,
    NovoItemHeaderElement,
    NovoItemContentElement,
    NovoItemEndElement,
    NovoItemDateElement,
  ],
})
export class NovoListModule {}
