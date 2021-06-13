# EcommerceSophiaNew

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



# Git Rules
### git-flow :
* ![GitFlow](.gitlab/img/gitFlow.PNG)

### Features

- create a new feature for each new task
- the name of fetaure should the concatenation of task number and name on readmine:


> for this task:  #131856 - [DEV] Dashboard implimentation:
    * name of feature should be feature/131856-dev-dashboard-implimentation
> for this task:  #131857 - [INTEGRATION] Dashboard screnn
    * name of feature should be feature/131857-integration-dashboard-screen.

### commit
for intellij or webstorm you can use Git commit template
for vsCode you can use git-comit-plugin
please use this format for all commit:
### 1- Specify the type of commit:

| Type | Description |
| ------ | ------ |
| feat | The new feature you're adding to a particular application |
| fix | A bug fix |
| docs |  Everything related to documentation |
| style | Changes the do not affects the meaninig of the code (white-space, formating, missing semi-colons, ect) |
| refactor |A code change that neither fixes a bug or adds a feature |
| perf | A code change that iproves performance |
| test | Adding missing tests or correcting existing test |
| build | Changes that affect the build system or external dependencis (xemple npm, wbpack, gulp, etc) |
| CI | Changes to our configuration files and scripts |
| chore | Other changes that don"t modify src or test files|
| revert |Reverts a previous commit  |

### 2- Scope of this change:
    make the number  of your task (131856)

### 3- Short description:
    make the task name ([DEV] Dashboard implimentation)   

### 4- log description description:
    The subject contains a brief description of the changes

### 5- BREAKING CHANGE (optional):
    Breaking changes are any changes that might require action, We divide these changes into two categories:
        - Breaking: Changes that will break existing queries to the GraphQL API. For example, removing a field 
            would be a breaking change.
        - Dangerous: Changes that won't break existing queries but could affect the runtime behavior of clients.
            Adding an enum value is an example of a dangerous change.

### 5- Close issue:
in case the type of change is a fix you should add Clossed issues contain the number of the issue 