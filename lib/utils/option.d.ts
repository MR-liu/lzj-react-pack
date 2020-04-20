import { flags } from '@oclif/command';
declare const flagConfig: {
    staged: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    prettier: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    eslint: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    fix: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    cwd: flags.IOptionFlag<string>;
    format: flags.IOptionFlag<string>;
};
export default flagConfig;
