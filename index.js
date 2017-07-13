module.exports = {

    rules: {

        // possible errors section
        "for-direction"               : 0,
        "getter-return"               : "error",
        "no-await-in-loop"            : "warn",
        "no-compare-neg-zero"         : "warn",
        "no-cond-assign"              : ["warn", "except-parens"],
        "no-console"                  : "warn",
        "no-constant-condition"       : "warn",
        "no-control-regex"            : "warn",
        "no-debugger"                 : "warn",
        "no-dupe-args"                : "error",
        "no-dupe-keys"                : "error",
        "no-duplicate-case"           : "error",
        "no-empty"                    : "warn",
        "no-empty-character-class"    : "error",
        "no-ex-assign"                : "error",
        "no-extra-boolean-cast"       : "warn",
        "no-extra-parens"             : 0,
        "no-extra-semi"               : "warn",
        "no-func-assign"              : "error",
        "no-inner-declarations"       : "error",
        "no-invalid-regexp"           : "error",
        "no-irregular-whitespace"     : ["error", { "skipStrings": true } ],
        "no-obj-calls"                : "error",
        "no-prototype-builtins"       : "error",
        "no-regex-spaces"             : "warn",
        "no-sparse-arrays"            : "error",
        "no-template-curly-in-string" : "warn",
        "no-unexpected-multiline"     : "error",
        "no-unreachable"              : "error",
        "no-unsafe-finally"           : "error",
        "no-unsafe-negation"          : "error",
        "use-isnan"                   : "error",
        "valid-jsdoc"                 : "warn",
        "valid-typeof"                : "error",

        // best practices section
        "accessor-pairs"              : [ "error", { "setWithoutGet": true, "getWithoutSet": false } ],
        "array-callback-return"       : 0,
        "block-scoped-var"            : "error",
        "class-methods-use-this"      : "warn",
        "complexity"                  : [ "warn", 20 ],
        "consistent-return"           : "error",
        "curly"                       : "warn",
        "default-case"                : "warn",
        "dot-location"                : 0,
        "dot-notation"                : [ "warn", { "allowKeywords": false } ],
        "eqeqeq"                      : [ "warn", "always" ],
        "guard-for-in"                : "error",
        "no-alert"                    : "warn",
        "no-caller"                   : "error",
        "no-case-declarations"        : "error",
        "no-div-regex"                : 0,

        // stylistic issues section
        "semi"                        : ["error", "always"]


    }

};