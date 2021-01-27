# Fluent Buttons

[![Build Actions Status](https://github.com/amojicamu/ngx-fluent-buttons/workflows/CI/badge.svg)](https://github.com/amojicamu/ngx-fluent-buttons/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40angular%2Fcdk.svg)](https://www.npmjs.com/package/ngx-fluent-buttons)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Microsoft [Fluent Design System](https://www.microsoft.com/design/fluent/#/) buttons components for [Angular](https://angular.io/).

Implementation based and compatible with [Angular Material](https://material.angular.io/).

Motivated by this [closed issue](https://github.com/angular/components/issues/7765) in the [angular/components](https://github.com/angular/components) repo.


👉 **See it in action on  [Stackblitz](https://stackblitz.com/edit/fluent-buttons)**

## Installation

`npm install ngx-fluent-buttons --save`

## Features

Even though this look and feel is achieved using Angular Material buttons and menus, a component that can be used as an in place replacement is not trivial. These components support all features from Angular Material button, using the same properties and directives.

- All variants: normal, raised, flat, stroked
- States: enabled, disabled
- Theming: Integrates with exisiting Material theme. Set color to primary, accent, warn
- Details: High quality components with ripples, positioning strategy etc.

## Quick code example:

```html
<!-- the split directive makes it a split button as per Fluent Design specs -->
<ngx-fluent-button split mat-raised-button color="primary">
  <!-- split menu options -->
  <ng-container class="split-menu-content">
    <button mat-menu-item>
      <mat-icon>code</mat-icon> Contribute
    </button>
    <button mat-menu-item>
      <mat-icon>feedback</mat-icon> <span>Send Feedback</span>
    </button>
  </ng-container>
  <!-- main button icon (optional) and text -->
  <mat-icon>done</mat-icon> Accept Demo
</ngx-fluent-button>
```

Checkout the full [samples](https://github.com/amojicamu/ngx-fluent-buttons/blob/main/apps/sample/src/app/buttons/buttons.component.html) page with all options

