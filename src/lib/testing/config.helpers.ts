import { TestBed, TestBedStatic } from '@angular/core/testing';

/**
 * @params
 * * stages?:
 *
 * @returns
 *
 * @throws
 * Testbed compiler configuration error.
 */

type CompilerOptions = Partial<{
  providers: any[];
  useJit: boolean;
  preserveWhitespaces: boolean;
}>;
export type ConfigureFn = (testBed: TestBedStatic) => void;

export const configureTests = (
  configure: ConfigureFn,
  compilerOptions: CompilerOptions = {}
) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  };

  TestBed.configureCompiler(compilerConfig); //const configuredTestBed = TestBed.configureCompiler(compilerConfig);
  configure(TestBed);
  return TestBed.compileComponents().then(() => TestBed); //configuredTestBed.compileComponents().then(() => configuredTestBed);
};
