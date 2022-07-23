Últimas alterações

Responsavel pela validação de código no commit, depende do @angular-eslint/eslint-plugin
"prepush": "npm run lint:ci",

Atualizado:
"@angular/animations": "14.0.0-rc.1",
"@angular/cdk": "14.0.0-rc.0",
"@angular/common": "14.0.0-rc.1",
"@angular/compiler": "14.0.0-rc.1",
"@angular/core": "14.0.0-rc.1",
"@angular/forms": "14.0.0-rc.1",
"@angular/google-maps": "14.0.0-rc.0",
"@angular/platform-browser": "14.0.0-rc.1",
"@angular/platform-browser-dynamic": "14.0.0-rc.1",
"@angular/router": "14.0.0-rc.1",
"@nebular/auth": "9.0.2",
"@nebular/eva-icons": "9.0.2",
"@nebular/security": "9.0.2",
"@nebular/theme": "9.0.2",
"@swimlane/ngx-charts": "20.1.0",

"ng2-smart-table": "1.7.2",
"node-sass": "7.0.1",

"@angular-devkit/build-angular": "14.0.0-rc.1",
"@angular/cli": "14.0.0-rc.1",
"@angular/compiler-cli": "14.0.0-rc.1",
"@angular/language-service": "14.0.0-rc.1",


Depois de funcionar:
"core-js": "3.22.5",

Adicionado - Não necessario, só é usado no commit, mas tem que ser global:
"@angular-eslint/schematics": "^13.2.1",

Obs:
- Utilizado comando a seguir devido utilização de umas lib desatualizadas
## npm i --force --legacy-peer-deps

- Precisa do Angular Global para fazer commit

To Fix first install on new version
- Install Python 3.9 on store

- npm install --global node-gyp
- npm install --global windows-build-tools

- Ao atualizar o 'echarts' para 5.3.2 ocorre erro

- Removed versions of core-js in polyfills.js
example: import 'core-js/es/es7/..' import 'core-js/es/..'


Old Versions:

Version: 0.1.0 - Alpha

Local
@angular/core: 12.1.0
@angular/common: 12.1.0

To Fix, and first start
- Instaled jasmine update to 3.5.0
- Instaled @types/ckeditor

Global
angular: 13.0.3
node: 14.17.6
npm: 6.14.15


Bug de componente:
confirmSave: true => to make the button work on ng2-smart-table
