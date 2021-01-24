import {
  Component,
  Input,
  HostBinding,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';

import {
  CanDisableRippleCtor,
  mixinColor,
  mixinDisabled,
  mixinDisableRipple,
  CanDisableCtor,
  CanColorCtor,
  ThemePalette,
  CanColor,
  CanDisable,
  CanDisableRipple,
  MatRipple,
} from '@angular/material/core';

import { MatMenuTrigger, MatMenu, MenuPositionY } from '@angular/material/menu';
import {
  OverlayRef,
  FlexibleConnectedPositionStrategy,
} from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';

const BUTTON_DEFAULT_ATTRIBUTE = 'mat-button';
const BUTTON_FLAT_ATTRIBUTE = 'mat-flat-button';
const BUTTON_RAISED_ATTRIBUTE = 'mat-raised-button';

const BUTTON_HOST_ATTRIBUTES = [
  BUTTON_DEFAULT_ATTRIBUTE,
  BUTTON_FLAT_ATTRIBUTE,
  'mat-icon-button',
  BUTTON_RAISED_ATTRIBUTE,
  'mat-stroked-button',
];

class SplitButtonBase {
  // tslint:disable-next-line: variable-name
  constructor(public _elementRef: ElementRef) {}
}

// tslint:disable-next-line: variable-name
const _SplitButtonMixinBase: CanDisableRippleCtor &
  CanDisableCtor &
  CanColorCtor &
  typeof SplitButtonBase = mixinColor(
  mixinDisabled(mixinDisableRipple(SplitButtonBase))
);

@Component({
  selector: `ngx-fluent-button, ngx-fluent-button[mat-button], ngx-fluent-button[mat-raised-button],
             ngx-fluent-button[mat-stroked-button], ngx-fluent-button[mat-flat-button]`,
  templateUrl: './splitbutton.html',
  styleUrls: ['./splitbutton.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SplitButton
  extends _SplitButtonMixinBase
  implements AfterViewInit, CanDisable, CanColor, CanDisableRipple {
  mode: 'default' | 'split' = 'default';

  private posY: MenuPositionY;
  private positionSubscription = Subscription.EMPTY;

  @Input('color')
  set themeColor(value: ThemePalette) {
    this.color = value;
  }

  @Input('disabled')
  set isDisabled(value: boolean) {
    this.disabled = value;
  }

  @Input('disableRipple')
  set isRippleDisabled(value: boolean) {
    this.disableRipple = value;
  }

  @HostBinding('attr.class') class = 'ngx-fluent-button-host';

  @ViewChild('wrapper', { read: ElementRef }) wrapper: ElementRef;

  @ViewChild('action', { read: ElementRef }) actionButton: ElementRef;

  @ViewChild('trigger', { read: ElementRef }) triggerButton: ElementRef;

  @ViewChild(MatRipple) ripple: MatRipple;

  @ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

  @ViewChild(MatMenu) menu: MatMenu;

  get isMenuOpen(): boolean {
    return this.menuTrigger && this.menuTrigger.menuOpen;
  }

  get menuPosition(): MenuPositionY {
    return this.posY || 'below';
  }

  get wrapperElement(): HTMLElement {
    if (this.mode === 'split') {
      return this.wrapper.nativeElement;
    }

    return this.actionElement;
  }

  get actionElement(): HTMLElement {
    return this.actionButton.nativeElement;
  }

  get triggerElement(): HTMLElement {
    if (this.mode === 'split') {
      return this.triggerButton.nativeElement;
    }

    return this.actionElement;
  }

  constructor(elementRef: ElementRef, private cd: ChangeDetectorRef) {
    super(elementRef);

    if (this._hasHostAttributes('split')) {
      this.mode = 'split';
    }
  }

  ngAfterViewInit(): void {
    if (this.mode === 'split') {
      this.wrapperElement.classList.add('split');
      this.ripple.trigger = this.actionElement;
    }

    // For each of the variant selectors that is present in the button's host
    // attributes, add the correct corresponding class.
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        if (attr === BUTTON_RAISED_ATTRIBUTE && this.mode === 'split') {
          this.wrapperElement.classList.add('split-raised-button');
          this.wrapperElement.classList.add('mat-autocomplete-panel');
          continue;
        }

        if (attr === BUTTON_FLAT_ATTRIBUTE && this.mode === 'split') {
          this.actionElement.classList.remove(BUTTON_DEFAULT_ATTRIBUTE);
          this.triggerElement.classList.remove(BUTTON_DEFAULT_ATTRIBUTE);
        }

        this.actionElement.classList.add(attr);

        if (this.mode === 'split') {
          this.triggerElement.classList.add(attr);
        }
      }
    }

    this.menuTrigger.menuOpened.subscribe(() => {
      // Need to access private overlay to subscribe to position events
      // and react when the menu appears above or below relative to the button

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const overlayRef = (this.menuTrigger as any)._overlayRef as OverlayRef;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const position = (overlayRef as any)
        ._positionStrategy as FlexibleConnectedPositionStrategy;

      this.positionSubscription = position.positionChanges.subscribe(
        (change) => {
          this.posY =
            change.connectionPair.overlayY === 'top' ? 'below' : 'above';
          this.menu.panelClass =
            this.posY === 'above'
              ? 'split-button-menu-above'
              : 'split-button-menu-below';
        }
      );
    });

    this.menuTrigger.menuClosed.subscribe(() => {
      this.cd.markForCheck();
      this.positionSubscription.unsubscribe();
    });
  }

  onActionClick(event): void {
    if (this.mode === 'default') {
      this.menuTrigger.toggleMenu();
    }
  }

  onWrapperClick(event) {
    // if (this.mode === 'default') {
    //   this.menuTrigger.toggleMenu();
    //   // event.stopPropagation();
    //   // return false;
    // }
  }

  onTriggerClick(event): void {
    // window.alert(this.menuTrigger && this.menuTrigger.menuOpen);
    // if (this.mode === 'default') {
    //   this.ripple.launch({});
    // }
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  /** Gets whether the host has one of the given attributes. */
  _hasHostAttributes(...attributes: string[]) {
    return attributes.some((attribute) =>
      this._getHostElement().hasAttribute(attribute)
    );
  }
}
