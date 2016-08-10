import { Component } from '@angular/core';
import { NOVO_TOOLTIP_ELEMENTS, NOVO_BUTTON_ELEMENTS } from './../../../src/novo-elements';

import { CodeSnippet } from '../../elements/codesnippet/CodeSnippet';

import TooltipOptionsDemoTpl from './templates/TooltipOptionsDemo.html';
import TooltipPlacementDemoTpl from './templates/TooltipPlacementDemo.html';
import TooltipAlignDemoTpl from './templates/TooltipAlignDemo.html';
import TooltipTypesDemoTpl from './templates/TooltipTypesDemo.html';
import TooltipToggleDemoTpl from './templates/TooltipToggleDemo.html';

const template = `
<div class="container">
    <h1>Tooltips <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/tooltip">(source)</a></small></h1>
    <p>We use the <a href="http://kushagragour.in/lab/hint/">hint.css</a> module for our tooltip implementation, wrapping it inside a directive.</p>

    <h2>Helper</h2>
    <p>Helper tooltips contain basic text that provides some additional information about an element.</p>

    <h5>Placement</h5>
    <div class="example tooltip-demo">${TooltipPlacementDemoTpl}</div>
    <code-snippet [code]="TooltipPlacementDemoTpl"></code-snippet>

    <h5>Alignment</h5>
    <div class="example tooltip-demo">${TooltipAlignDemoTpl}</div>
    <code-snippet [code]="TooltipAlignDemoTpl"></code-snippet>

    <h5>Types</h5>
    <div class="example tooltip-demo">${TooltipTypesDemoTpl}</div>
    <code-snippet [code]="TooltipTypesDemoTpl"></code-snippet>

    <h5>Options</h5>
    <div class="example tooltip-demo">${TooltipOptionsDemoTpl}</div>
    <code-snippet [code]="TooltipOptionsDemoTpl"></code-snippet>

    <h5>Toggle Trigger</h5>
    <div class="example tooltip-demo">${TooltipToggleDemoTpl}</div>
    <code-snippet [code]="TooltipToggleDemoTpl"></code-snippet>

    <h2>Analytic</h2>
    <p>Analytic tooltips appear in data visualizations to help provide additional insight into a specific datapoint.</p>
</div>
`;
@Component({
    selector: 'tooltip-demo',
    template: template,
    directives: [NOVO_TOOLTIP_ELEMENTS, NOVO_BUTTON_ELEMENTS, CodeSnippet]
})
export class TooltipDemo {
    tooltipActive = false;

    constructor() {
        this.TooltipOptionsDemoTpl = TooltipOptionsDemoTpl;
        this.TooltipTypesDemoTpl = TooltipTypesDemoTpl;
        this.TooltipPlacementDemoTpl = TooltipPlacementDemoTpl;
        this.TooltipAlignDemoTpl = TooltipAlignDemoTpl;
        this.TooltipToggleDemoTpl = TooltipToggleDemoTpl;
    }

    toggleTooltip() {
        this.tooltipActive = !this.tooltipActive;
    }
}
