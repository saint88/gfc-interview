declare namespace Cypress {
  interface Chainable {
    open(path: string, checkFn: () => void, options?: () => void);
    pageUrlMatchSameAs(pattern: RegExp): Chainable;
    getFixtureData(path: string, callbackFn: (data?: any) => void): Chainable;
    pageHeaderShouldBeSameAs(header: string): Chainable;
  }
}