import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import { FormsRoutingModule } from '../pages/forms/forms-routing.module';
import { ThemeModule } from '../@theme/theme.module';

export const formImport = [
  FormsModule,
  ThemeModule,
  NbCardModule,
  NbUserModule,
  NbIconModule,
  NbRadioModule,
  NbInputModule,
  NbSelectModule,
  NbButtonModule,
  NbActionsModule,
  NbCheckboxModule,
  NbDatepickerModule,
  FormsRoutingModule,
];
