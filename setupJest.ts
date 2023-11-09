import "jest-preset-angular";
import "zone.js";
import "zone.js/testing";
import { TestBed } from "@angular/core/testing";
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from "@angular/platform-browser-dynamic/testing";


beforeAll(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
});
