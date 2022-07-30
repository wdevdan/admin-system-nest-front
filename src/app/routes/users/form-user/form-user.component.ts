import { Component, Injector, OnInit } from "@angular/core";

import { SmartUserService } from "../../../@core/service/routes/smart-user.service";
import { BaseFormComponent } from '../../../pages/base-form/base-form.component';
import { User, UserData } from "../../../shared/models";

@Component({
  selector: "ngx-form-user",
  templateUrl: './form-user.component.html',
  styleUrls: ['../../../@scss/forms/buttons/buttons.component.scss'],
})
export class FormUserComponent extends BaseFormComponent<User> implements OnInit {

  constructor(protected injector: Injector) {
    super(injector);

    this.service = injector.get(SmartUserService);
  }

  ngOnInit() {
    this.data = { userData: new UserData() } as User;
    this.getData();
  }

  toggleShowPassword = () => this.showPassword = !this.showPassword;
  toggleShowDocument = () => this.showDocument = !this.showDocument;

  showPassword = false;
  showDocument = false;

  log = () => console.log(this.data);
}
