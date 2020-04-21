import { Command } from '@oclif/command';
declare class LzjReactPack extends Command {
    static description: string;
    static flags: {
        dev: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        build: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        init: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
        help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
    };
    static args: {
        name: string;
    }[];
    static pwd: string;
    run(): Promise<void>;
    build(): Promise<void>;
    dev(): Promise<void>;
    initbase(): Promise<void>;
}
export = LzjReactPack;
