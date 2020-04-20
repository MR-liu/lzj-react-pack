import { Command } from '@oclif/command';
declare class LzjReactPack extends Command {
    static description: string;
    static flags: {
        staged: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        prettier: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        eslint: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        fix: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        cwd: import("@oclif/command/lib/flags").IOptionFlag<string>;
        format: import("@oclif/command/lib/flags").IOptionFlag<string>;
    };
    static args: {
        name: string;
    }[];
    run(): Promise<void>;
}
export = LzjReactPack;
