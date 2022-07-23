import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbInputModule, NbPopoverModule, NbSelectModule, NbTabsetModule, NbTooltipModule, NbWindowModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// modules
import { ThemeModule } from '../../@theme/theme.module';

// components
import { NotifyComponent } from './notify/notify.component';

const COMPONENTS = [NotifyComponent];
const MODULES = [
  FormsModule,
  ThemeModule,

  NbDialogModule.forChild(),
  NbWindowModule.forChild(),

  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
];

@NgModule({
  providers: [],
  imports: [...MODULES],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class ComponentsModule {}
