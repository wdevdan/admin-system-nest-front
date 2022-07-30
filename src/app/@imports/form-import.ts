import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbTreeGridModule, NbUserModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { FormsModule } from '@angular/forms';

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
];
