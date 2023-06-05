// NG2
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    NovoAceEditorModule,
    NovoAgendaModule,
    NovoAsideModule,
    NovoAutoCompleteModule,
    NovoAvatarModule,
    NovoBreadcrumbModule,
    NovoButtonModule,
    NovoCalendarModule,
    NovoCardModule,
    NovoCategoryDropdownModule,
    NovoCheckboxModule,
    NovoChipsModule,
    NovoNovoCKEditorModule,
    NovoColorPickerModule,
    NovoCommonModule, NovoOptionModule, NovoOverlayModule,
    NovoDataTableModule,
    NovoDatePickerModule,
    NovoDateTimePickerModule,
    NovoDividerModule,
    NovoDragulaModule, NovoDragulaService,
    NovoDropdownModule,
    NovoExpansionModule,
    NovoFieldModule,
    NovoFlexModule,
    FormUtils, NovoFormExtrasModule, NovoFormModule,
    NovoHeaderModule,
    NovoIconModule,
    NovoLayoutModule,
    NovoListModule,
    NovoLoadingModule,
    NovoMenuModule,
    NovoModalModule,
    NovoMultiPickerModule,
    NovoNonIdealStateModule,
    NovoPickerModule,
    GooglePlacesModule, GooglePlacesService,
    NovoPopOverModule,
    NovoProgressModule,
    NovoQueryBuilderModule,
    NovoQuickNoteModule,
    NovoRadioModule,
    NovoSearchBoxModule,
    NovoSelectSearchModule,
    NovoSelectModule,
    NovoSimpleTableModule,
    NovoSliderModule,
    NovoStepperModule,
    NovoSwitchModule,
    NovoTabbedGroupPickerModule,
    NovoTableExtrasModule, NovoTableModule,
    NovoTabModule,
    NovoTilesModule,
    NovoTimePickerModule,
    NovoTipWellModule,
    NovoToastModule,
    NovoToolbarModule,
    NovoTooltipModule,
    UnlessModule, NovoValueModule,
} from 'novo-elements/elements';
import { NovoPipesModule } from 'novo-elements/pipes';
import {
  BrowserGlobalRef,
  ComponentUtils,
  DateFormatService,
  GlobalRef,
  LocalStorageService,
  NovoLabelService,
  OptionsService,
} from 'novo-elements/services';

@NgModule({
  imports: [ReactiveFormsModule],
  exports: [
    NovoAsideModule,
    NovoAutoCompleteModule,
    NovoAvatarModule,
    NovoPipesModule,
    NovoButtonModule,
    NovoLoadingModule,
    NovoCardModule,
    NovoAgendaModule,
    NovoCalendarModule,
    NovoCheckboxModule,
    NovoFlexModule,
    NovoLayoutModule,
    NovoDividerModule,
    NovoToastModule,
    NovoTooltipModule,
    NovoHeaderModule,
    NovoTabModule,
    NovoTilesModule,
    NovoModalModule,
    NovoQuickNoteModule,
    NovoRadioModule,
    NovoDropdownModule,
    NovoSelectModule,
    NovoListModule,
    NovoSwitchModule,
    NovoDragulaModule,
    NovoSliderModule,
    NovoPickerModule,
    NovoChipsModule,
    NovoDatePickerModule,
    NovoTimePickerModule,
    NovoDateTimePickerModule,
    NovoNovoCKEditorModule,
    NovoTipWellModule,
    NovoSimpleTableModule,
    NovoTableModule,
    NovoTableExtrasModule,
    NovoFormModule,
    NovoFormExtrasModule,
    NovoCategoryDropdownModule,
    NovoMultiPickerModule,
    NovoPopOverModule,
    NovoDataTableModule,
    NovoSearchBoxModule,
    NovoProgressModule,
    NovoOverlayModule,
    GooglePlacesModule,
    NovoValueModule,
    NovoAceEditorModule,
    NovoIconModule,
    NovoExpansionModule,
    UnlessModule,
    NovoCommonModule,
    NovoOptionModule,
    NovoStepperModule,
    NovoToolbarModule,
    ScrollingModule,
    NovoTabbedGroupPickerModule,
    NovoNonIdealStateModule,
    NovoBreadcrumbModule,
    NovoFieldModule,
    NovoColorPickerModule,
    NovoMenuModule,
    NovoSelectSearchModule,
    NovoQueryBuilderModule,
  ],
  providers: [
    { provide: ComponentUtils, useClass: ComponentUtils },
    { provide: DateFormatService, useClass: DateFormatService },
    { provide: NovoLabelService, useClass: NovoLabelService },
    { provide: NovoDragulaService, useClass: NovoDragulaService },
    { provide: GooglePlacesService, useClass: GooglePlacesService },
    { provide: GlobalRef, useClass: BrowserGlobalRef },
    { provide: LocalStorageService, useClass: LocalStorageService },
    { provide: OptionsService, useClass: OptionsService },
    { provide: FormUtils, useClass: FormUtils },
  ],
})
export class NovoElementsModule {}
