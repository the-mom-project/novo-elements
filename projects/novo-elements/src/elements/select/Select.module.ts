// NG
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { A11yModule } from '@angular/cdk/a11y';
// App
import { NovoOverlayModule } from '../overlay/Overlay.module';
import { NovoTooltipModule } from '../tooltip/Tooltip.module';
import { NovoSelectElement } from './Select';

@NgModule({
  imports: [CommonModule, FormsModule, A11yModule, NovoOverlayModule, NovoTooltipModule],
  declarations: [NovoSelectElement],
  exports: [NovoSelectElement],
})
export class NovoSelectModule {}
