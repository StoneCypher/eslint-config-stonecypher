module.exports = {

    rules: {

        // possible errors section
        "for-direction"                    : 0,
        "getter-return"                    : "error",
        "no-await-in-loop"                 : "warn",
        "no-compare-neg-zero"              : "warn",
        "no-cond-assign"                   : ["warn", "except-parens"],
        "no-console"                       : "warn",
        "no-constant-condition"            : "warn",
        "no-control-regex"                 : "warn",
        "no-debugger"                      : "warn",
        "no-dupe-args"                     : "error",
        "no-dupe-keys"                     : "error",
        "no-duplicate-case"                : "error",
        "no-empty"                         : "warn",
        "no-empty-character-class"         : "error",
        "no-ex-assign"                     : "error",
        "no-extra-boolean-cast"            : "warn",
        "no-extra-parens"                  : 0,
        "no-extra-semi"                    : "warn",
        "no-func-assign"                   : "error",
        "no-inner-declarations"            : "error",
        "no-invalid-regexp"                : "error",
        "no-irregular-whitespace"          : ["error", { skipStrings: true } ],
        "no-obj-calls"                     : "error",
        "no-prototype-builtins"            : "error",
        "no-regex-spaces"                  : "warn",
        "no-sparse-arrays"                 : "error",
        "no-template-curly-in-string"      : "warn",
        "no-unexpected-multiline"          : "error",
        "no-unreachable"                   : "error",
        "no-unsafe-finally"                : "error",
        "no-unsafe-negation"               : "error",
        "use-isnan"                        : "error",
        "valid-jsdoc"                      : "warn",
        "valid-typeof"                     : "error",

        // best practices section
        "accessor-pairs"                   : [ "error", { setWithoutGet: true, getWithoutSet: false } ],
        "array-callback-return"            : 0,
        "block-scoped-var"                 : "error",
        "class-methods-use-this"           : "warn",
        "complexity"                       : [ "warn", 20 ],
        "consistent-return"                : "error",
        "curly"                            : "warn",
        "default-case"                     : "warn",
        "dot-location"                     : 0,
        "dot-notation"                     : [ "warn", { allowKeywords: false } ],
        "eqeqeq"                           : [ "warn", "always" ],
        "guard-for-in"                     : "error",
        "no-alert"                         : "warn",
        "no-caller"                        : "error",
        "no-case-declarations"             : "error",
        "no-div-regex"                     : 0,
        "no-else-return"                   : 0,
        "no-empty-function"                : "warn",
        "no-empty-pattern"                 : "error",
        "no-eq-null"                       : "error",
        "no-eval"                          : "warn",
        "no-extend-native"                 : "warn",
        "no-extra-bind"                    : "error",
        "no-extra-label"                   : "warn",
        "no-fallthrough"                   : "warn",
        "no-floating-decimal"              : "warn",
        "no-global-assign"                 : "warn",
        "no-implicit-coercion"             : "warn",
        "no-implicit-globals"              : 0,
        "no-implied-eval"                  : "error",
        "no-invalid-this"                  : "error",
        "no-iterator"                      : "error",
        "no-labels"                        : "error",
        "no-lone-blocks"                   : "error",
        "no-loop-func"                     : "error",
        "no-magic-numbers"                 : 0,
        "no-multi-spaces"                  : 0,
        "no-multi-str"                     : 0,
        "no-new"                           : "warn",
        "no-new-func"                      : "error",
        "no-new-wrappers"                  : "warn",
        "no-octal"                         : "warn",
        "no-octal-escape"                  : "warn",
        "no-param-reassign"                : "warn",
        "no-proto"                         : "error",
        "no-redeclare"                     : "error",
        "no-restricted-properties"         : "error",
        "no-return-assign"                 : "error",
        "no-return-await"                  : "warn",
        "no-script-url"                    : "error",
        "no-self-assign"                   : "error",
        "no-self-compare"                  : "error",
        "no-sequences"                     : "warn",
        "no-throw-literal"                 : "warn",
        "no-unmodified-loop-condition"     : "warn",
        "no-unused-expressions"            : "warn",
        "no-unused-labels"                 : "warn",
        "no-useless-call"                  : "warn",
        "no-useless-concat"                : "warn",
        "no-useless-escape"                : "warn",
        "no-useless-return"                : "warn",
        "no-void"                          : "warn",
        "no-warning-comments"              : 0, // todo
        "no-with"                          : "error",
        "prefer-promise-reject-errors"     : "warn",
        "radix"                            : "warn",
        "require-await"                    : "warn",
        "vars-on-top"                      : 0,
        "wrap-iife"                        : 0,
        "yoda"                             : [ "warn", "never" ],

        // strict section
        "strict"                           : 0,

        // variable section
        "init-declarations"                : "warn",
        "no-catch-shadow"                  : "error",
        "no-delete-var"                    : "error",
        "no-label-var"                     : "error",
        "no-restricted-globals"            : 0,
        "no-shadow"                        : "error",
        "no-shadow-restricted-names"       : "error",
        "no-undef"                         : "error",
        "no-undef-init"                    : "warn",
        "no-undefined"                     : 0,
        "no-unused-vars"                   : ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrors: "all", caughtErrorsIgnorePattern: "^_" }],
         "no-use-before-define"            : "error",

        // stylistic issues section
        "array-bracket-newline"            : 0,
        "array-bracket-spacing"            : 0,
        "array-element-newline"            : 0,
        "block-spacing"                    : ["warn",  "always"],
        "brace-style"                      : 0,
        "camelcase"                        : 0,
        "capitalized-comments"             : 0,
        "comma-dangle"                     : ["warn",  "never"],
        "comma-spacing"                    : ["warn",  { before: false, after: true }],
        "comma-style"                      : ["warn",  "last"],
        "computed-property-spacing"        : 0,
        "consistent-this"                  : "warn",
        "eol-last"                         : ["warn", "always"],
        "func-call-spacing"                : 0,
        "func-name-matching"               : 0,
        "func-names"                       : "warn",
        "func-style"                       : 0,
        "id-blacklist"                     : 0,
        "id-length"                        : 0,
        "id-match"                         : 0,
        "indent"                           : 0,
        "jsx-quotes"                       : ["warn", "prefer-double"],
        "key-spacing"                      : 0,
        "keyword-spacing"                  : 0,
        "line-comment-position"            : 0,
        "linebreak-style"                  : ["warn", "unix"],
        "lines-around-comment"             : 0,
        "max-depth"                        : ["warn", 5],
        "max-len"                          : ["warn", 120, 4],
        "max-lines"                        : ["warn", 10000],
        "max-nested-callbacks"             : ["warn", 5],
        "max-params"                       : ["warn", 8],
        "max-statements"                   : ["warn", 200],
        "max-statements-per-line"          : 0,
        "multiline-ternary"                : 0,
        "new-cap"                          : ["warn", { capIsNew: true, newIsCap: true }],
        "new-parens"                       : "warn",
        "newline-per-chained-call"         : ["warn", { ignoreChainWithDepth: 2 }],
        "no-array-constructor"             : "warn",
        "no-bitwise"                       : "warn",
        "no-continue"                      : "warn",
        "no-inline-comments"               : 0,
        "no-lonely-if"                     : "warn",
        "no-mixed-operators"               : "warn",
        "no-mixed-spaces-and-tabs"         : "warn",
        "no-multi-assign"                  : 0,
        "no-multiple-empty-lines"          : 0,
        "no-negated-condition"             : "warn",
        "no-nested-ternary"                : 0,
        "no-new-object"                    : "warn",
        "no-plusplus"                      : 0,
        "no-restricted-syntax"             : ["error", "eval"],
        "no-tabs"                          : "warn",
        "no-ternary"                       : 0,
        "no-trailing-spaces"               : "warn",
        "no-underscore-dangle"             : 0,
        "no-unneeded-ternary"              : "warn",
        "no-whitespace-before-property"    : 0,
        "nonblock-statement-body-position" : 0,
        "object-curly-newline"             : 0,
        "object-curly-spacing"             : 0,
        "object-property-newline"          : 0,
        "one-var"                          : "warn",
        "one-var-declaration-per-line"     : 0,
        "operator-assignment"              : "warn",
        "operator-linebreak"               : ["warn", "before"],
        "padded-blocks"                    : 0,
        "padding-line-between-statements"  : 0,
        "quote-props"                      : ["warn", "always"],
        "quotes"                           : 0,
        "require-jsdoc"                    : 0,
        "semi"                             : ["warn", "always"],
        "semi-spacing"                     : 0,
        "semi-style"                       : ["warn", "last"],
        "sort-keys"                        : "warn",
        "sort-vars"                        : 0,
        "space-before-blocks"              : "warn",
        "space-before-function-paren"      : ["warn", "never"],
        "space-in-parens"                  : 0,
        "space-infix-ops"                  : 0,
        "space-unary-ops"                  : 0,
        "spaced-comment"                   : 0,
        "switch-colon-spacing"             : 0,
        "template-tag-spacing"             : ["warn", "never"],
        "unicode-bom"                      : 0,
        "wrap-regex"                       : 0

    }

};