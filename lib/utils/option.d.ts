declare const flagOption: {
    dev: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    build: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    init: import("@oclif/parser/lib/flags").IBooleanFlag<boolean>;
    help: import("@oclif/parser/lib/flags").IBooleanFlag<void>;
};
export default flagOption;
