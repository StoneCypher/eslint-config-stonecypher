module.exports = {

    settings : {
        flowtype : {
            onlyFilesWithFlowAnnotation    : true
        }
    },

    plugins : [ 'fp', 'new-with-error', 'unicorn', 'flowtype', 'promise', 'ava', 'jsdoc', 'react' ],

    rules : {

        // possible errors section
        "for-direction"                                 : 0,
        "getter-return"                                 : "error",
        "no-await-in-loop"                              : "warn",
        "no-compare-neg-zero"                           : "warn",
        "no-cond-assign"                                : ["warn", "except-parens"],
        "no-console"                                    : "warn",
        "no-constant-condition"                         : "warn",
        "no-control-regex"                              : "warn",
        "no-debugger"                                   : "warn",
        "no-dupe-args"                                  : "error",
        "no-dupe-keys"                                  : "error",
        "no-duplicate-case"                             : "error",
        "no-empty"                                      : "warn",
        "no-empty-character-class"                      : "error",
        "no-ex-assign"                                  : "error",
        "no-extra-boolean-cast"                         : "warn",
        "no-extra-parens"                               : 0,
        "no-extra-semi"                                 : "warn",
        "no-func-assign"                                : "error",
        "no-inner-declarations"                         : "error",
        "no-invalid-regexp"                             : "error",
        "no-irregular-whitespace"                       : [ "error", { skipStrings : true } ],
        "no-obj-calls"                                  : "error",
        "no-prototype-builtins"                         : "error",
        "no-regex-spaces"                               : "warn",
        "no-sparse-arrays"                              : "error",
        "no-template-curly-in-string"                   : "warn",
        "no-unexpected-multiline"                       : "error",
        "no-unreachable"                                : "error",
        "no-unsafe-finally"                             : "error",
        "no-unsafe-negation"                            : "error",
        "use-isnan"                                     : "error",
        "valid-jsdoc"                                   : "warn",
        "valid-typeof"                                  : "error",

        // best practices section
        "accessor-pairs"                                : [ "error", { setWithoutGet : true, getWithoutSet : false } ],
        "array-callback-return"                         : 0,
        "block-scoped-var"                              : "error",
        "class-methods-use-this"                        : "warn",
        "complexity"                                    : [ "warn", 20 ],
        "consistent-return"                             : "error",
        "curly"                                         : "warn",
        "default-case"                                  : "warn",
        "dot-location"                                  : 0,
        "dot-notation"                                  : 0,
        "eqeqeq"                                        : [ "warn", "always" ],
        "guard-for-in"                                  : "error",
        "no-alert"                                      : "warn",
        "no-caller"                                     : "error",
        "no-case-declarations"                          : "error",
        "no-div-regex"                                  : 0,
        "no-else-return"                                : 0,
        "no-empty-function"                             : "warn",
        "no-empty-pattern"                              : "error",
        "no-eq-null"                                    : "error",
        "no-eval"                                       : "warn",
        "no-extend-native"                              : "warn",
        "no-extra-bind"                                 : "error",
        "no-extra-label"                                : "warn",
        "no-fallthrough"                                : "warn",
        "no-floating-decimal"                           : "warn",
        "no-global-assign"                              : "warn",
        "no-implicit-coercion"                          : "warn",
        "no-implicit-globals"                           : 0,
        "no-implied-eval"                               : "error",
        "no-invalid-this"                               : "error",
        "no-iterator"                                   : "error",
        "no-labels"                                     : "error",
        "no-lone-blocks"                                : "error",
        "no-loop-func"                                  : "error",
        "no-magic-numbers"                              : 0,
        "no-multi-spaces"                               : 0,
        "no-multi-str"                                  : 0,
        "no-new"                                        : 0,
        "no-new-func"                                   : "error",
        "no-new-wrappers"                               : "warn",
        "no-octal"                                      : "warn",
        "no-octal-escape"                               : "warn",
        "no-param-reassign"                             : "warn",
        "no-proto"                                      : "error",
        "no-redeclare"                                  : "error",
        "no-restricted-properties"                      : "error",
        "no-return-assign"                              : 0,
        "no-return-await"                               : "warn",
        "no-script-url"                                 : "error",
        "no-self-assign"                                : "error",
        "no-self-compare"                               : "error",
        "no-sequences"                                  : "warn",
        "no-throw-literal"                              : "warn",
        "no-unmodified-loop-condition"                  : "warn",
        "no-unused-expressions"                         : "warn",
        "no-unused-labels"                              : "warn",
        "no-useless-call"                               : "warn",
        "no-useless-concat"                             : "warn",
        "no-useless-escape"                             : "warn",
        "no-useless-return"                             : "warn",
        "no-void"                                       : "warn",
        "no-warning-comments"                           : 0, // todo
        "no-with"                                       : "error",
        "prefer-promise-reject-errors"                  : "warn",
        "radix"                                         : "warn",
        "require-await"                                 : 0,
        "vars-on-top"                                   : 0,
        "wrap-iife"                                     : 0,
        "yoda"                                          : [ "warn", "never" ],

        // strict section
        "strict"                                        : 0,

        // variable section
        "init-declarations"                             : "warn",
        "no-catch-shadow"                               : "error",
        "no-delete-var"                                 : "error",
        "no-label-var"                                  : "error",
        "no-restricted-globals"                         : 0,
        "no-shadow"                                     : "error",
        "no-shadow-restricted-names"                    : "error",
        "no-undef"                                      : "error",
        "no-undef-init"                                 : "warn",
        "no-undefined"                                  : 0,
        "no-unused-vars"                                : [ "warn", { argsIgnorePattern : "^_", varsIgnorePattern : "^_", caughtErrors : "all", caughtErrorsIgnorePattern : "^_" } ],
        "no-use-before-define"                          : "error",

        // stylistic issues section
        "array-bracket-newline"                         : 0,
        "array-bracket-spacing"                         : 0,
        "array-element-newline"                         : 0,
        "block-spacing"                                 : ["warn",  "always"],
        "brace-style"                                   : 0,
        "camelcase"                                     : 0,
        "capitalized-comments"                          : 0,
        "comma-dangle"                                  : ["warn",  "never"],
        "comma-spacing"                                 : 0,
        "comma-style"                                   : ["warn",  "last"],
        "computed-property-spacing"                     : 0,
        "consistent-this"                               : "warn",
        "eol-last"                                      : ["warn", "always"],
        "func-call-spacing"                             : 0,
        "func-name-matching"                            : 0,
        "func-names"                                    : "warn",
        "func-style"                                    : 0,
        "id-blacklist"                                  : 0,
        "id-length"                                     : 0,
        "id-match"                                      : 0,
        "indent"                                        : 0,
        "jsx-quotes"                                    : ["warn", "prefer-double"],
        "key-spacing"                                   : 0,
        "keyword-spacing"                               : 0,
        "line-comment-position"                         : 0,
        "linebreak-style"                               : 0,
        "lines-around-comment"                          : 0,
        "max-depth"                                     : ["warn", 5],
        "max-len"                                       : ["warn", 120, 4, {"ignoreComments": true}],
        "max-lines"                                     : ["warn", 10000],
        "max-nested-callbacks"                          : ["warn", 5],
        "max-params"                                    : ["warn", 8],
        "max-statements"                                : ["warn", 200],
        "max-statements-per-line"                       : 0,
        "multiline-ternary"                             : 0,
        "new-cap"                                       : 0,
        "new-parens"                                    : "warn",
        "newline-per-chained-call"                      : [ "warn", { ignoreChainWithDepth : 2 } ],
        "no-array-constructor"                          : "warn",
        "no-bitwise"                                    : "warn",
        "no-continue"                                   : "warn",
        "no-inline-comments"                            : 0,
        "no-lonely-if"                                  : 0,
        "no-mixed-operators"                            : "warn",
        "no-mixed-spaces-and-tabs"                      : "warn",
        "no-multi-assign"                               : 0,
        "no-multiple-empty-lines"                       : 0,
        "no-negated-condition"                          : "warn",
        "no-nested-ternary"                             : 0,
        "no-new-object"                                 : "warn",
        "no-plusplus"                                   : 0,
        "no-restricted-syntax"                          : ["error", "eval"],
        "no-tabs"                                       : "warn",
        "no-ternary"                                    : 0,
        "no-trailing-spaces"                            : "warn",
        "no-underscore-dangle"                          : 0,
        "no-unneeded-ternary"                           : "warn",
        "no-whitespace-before-property"                 : 0,
        "nonblock-statement-body-position"              : 0,
        "object-curly-newline"                          : 0,
        "object-curly-spacing"                          : 0,
        "object-property-newline"                       : 0,
        "one-var"                                       : 0,
        "one-var-declaration-per-line"                  : 0,
        "operator-assignment"                           : "warn",
        "operator-linebreak"                            : ["warn", "before"],
        "padded-blocks"                                 : 0,
        "padding-line-between-statements"               : 0,
        "quote-props"                                   : 0,
        "quotes"                                        : 0,
        "require-jsdoc"                                 : 0,
        "semi"                                          : ["warn", "always"],
        "semi-spacing"                                  : 0,
        "semi-style"                                    : ["warn", "last"],
        "sort-keys"                                     : 0,
        "sort-vars"                                     : 0,
        "space-before-blocks"                           : "warn",
        "space-before-function-paren"                   : ["warn", "never"],
        "space-in-parens"                               : 0,
        "space-infix-ops"                               : 0,
        "space-unary-ops"                               : 0,
        "spaced-comment"                                : 0,
        "switch-colon-spacing"                          : 0,
        "template-tag-spacing"                          : ["warn", "never"],
        "unicode-bom"                                   : 0,
        "wrap-regex"                                    : 0,

        // es6 specific
        "arrow-body-style"                              : ["warn", "as-needed"],
        "arrow-parens"                                  : ["warn", "as-needed"],
        "arrow-spacing"                                 : [ "warn", { "before" : true, "after" : true } ],
        "constructor-super"                             : "error",
        "generator-star-spacing"                        : [ "warn", {"before" : false, "after" : true} ],
        "no-class-assign"                               : "error",
        "no-confusing-arrow"                            : 0,
        "no-const-assign"                               : "error",
        "no-dupe-class-members"                         : "error",
        "no-duplicate-imports"                          : "warn",
        "no-new-symbol"                                 : "error",
        "no-restricted-imports"                         : 0,
        "no-this-before-super"                          : "error",
        "no-useless-computed-key"                       : "warn",
        "no-useless-constructor"                        : 0,
        "no-useless-rename"                             : "warn",
        "no-var"                                        : "warn",
        "object-shorthand"                              : "warn",
        "prefer-arrow-callback"                         : "warn",
        "prefer-const"                                  : "warn",
        "prefer-destructuring"                          : 0,
        "prefer-numeric-literals"                       : "warn",
        "prefer-rest-params"                            : "warn",
        "prefer-spread"                                 : "warn",
        "prefer-template"                               : "warn",
        "require-yield"                                 : "warn",
        "rest-spread-spacing"                           : 0,
        "sort-imports"                                  : 0,
        "symbol-description"                            : "warn",
        "template-curly-spacing"                        : 0,
        "yield-star-spacing"                            : ["warn", "after"],

        // eslint-plugin-promise
        "promise/always-return"                         : "error",
        "promise/no-return-wrap"                        : "error",
        "promise/param-names"                           : "error",
        "promise/catch-or-return"                       : "error",
        "promise/no-native"                             : "off",
        "promise/no-nesting"                            : "warn",
        "promise/no-promise-in-callback"                : "warn",
        "promise/no-callback-in-promise"                : "warn",
        "promise/avoid-new"                             : "warn",
        "promise/prefer-await-to-then"                  : "warn",
        "promise/prefer-await-to-callbacks"             : 0,

        // eslint-plugin-new-with-error
        "new-with-error/new-with-error"                 : "warn",

        // eslint-plugin-fp
        "fp/no-arguments"                               : "warn",
        "fp/no-class"                                   : 0,
        "fp/no-delete"                                  : 0,
        "fp/no-events"                                  : 0,
        "fp/no-get-set"                                 : "warn",
        "fp/no-let"                                     : 0,
        "fp/no-loops"                                   : "warn",
        "fp/no-mutating-assign"                         : 0,
        "fp/no-mutating-methods"                        : 0,
        "fp/no-mutation"                                : 0,
        "fp/no-nil"                                     : 0,
        "fp/no-proxy"                                   : "warn",
        "fp/no-rest-parameters"                         : 0,
        "fp/no-this"                                    : 0,
        "fp/no-throw"                                   : 0,
        "fp/no-unused-expression"                       : 0,
        "fp/no-valueof-field"                           : "warn",

        // eslint-plugin-unicorn
        "unicorn/catch-error-name"                      : [ "warn", { "name" : "err" } ],
        "unicorn/explicit-length-check"                 : 0,
        "unicorn/filename-case"                         : 0,
        "unicorn/no-abusive-eslint-disable"             : "error",
        "unicorn/no-process-exit"                       : 0,
        "unicorn/throw-new-error"                       : "warn",
        "unicorn/number-literal-case"                   : "warn",
        "unicorn/escape-case"                           : "warn",
        "unicorn/no-array-instanceof"                   : "warn",
        "unicorn/no-new-buffer"                         : "error",
        "unicorn/no-hex-escape"                         : "warn",
        "unicorn/custom-error-definition"               : "error",
        "unicorn/prefer-starts-ends-with"               : "warn",
        "unicorn/prefer-type-error"                     : "warn",
//      "unicorn/no-fn-reference-in-iterator"           : "warn",
//      "unicorn/new-regexp"                            : "warn",
        "unicorn/import-index"                          : 0,

        // eslint-plugin-flowtype
        "flowtype/boolean-style"                        : [ "error", "boolean" ],
        "flowtype/define-flow-type"                     : "warn",
        "flowtype/delimiter-dangle"                     : [ "error", "never" ],
        "flowtype/generic-spacing"                      : 0,
        "flowtype/no-dupe-keys"                         : "error",
        "flowtype/no-primitive-constructor-types"       : "warn",
        "flowtype/no-types-missing-file-annotation"     : "error",
        "flowtype/no-weak-types"                        : [ "warn", {"Function": false } ],
        "flowtype/object-type-delimiter"                : [ "warn", "comma" ],
        "flowtype/require-parameter-type"               : [ "warn", { "excludeArrowFunctions" : "expressionsOnly" } ],
        "flowtype/require-return-type"                  : "warn", // [ "error", "always", { "annotateUndefined" : "never" } ],
        "flowtype/require-valid-file-annotation"        : "error",
        "flowtype/require-variable-type"                : "warn",
        "flowtype/semi"                                 : [ "warn",  "always" ],
        "flowtype/sort-keys"                            : 0,
        "flowtype/space-after-type-colon"               : 0,
        "flowtype/space-before-generic-bracket"         : [ "warn",  "never" ],
        "flowtype/space-before-type-colon"              : 0,
        "flowtype/type-id-match"                        : 0,
        "flowtype/union-intersection-spacing"           : 0,
        "flowtype/use-flow-type"                        : "warn",

        // eslint-plugin-ava
        "ava/assertion-arguments"                       : "error",
        "ava/max-asserts"                               : ["off", 5],
        "ava/no-async-fn-without-await"                 : "error",
        "ava/no-cb-test"                                : "off",
        "ava/no-duplicate-modifiers"                    : "error",
        "ava/no-identical-title"                        : "error",
        "ava/no-ignored-test-files"                     : "error",
        "ava/no-invalid-end"                            : "error",
        "ava/no-nested-tests"                           : "error",
        "ava/no-only-test"                              : "error",
        "ava/no-skip-assert"                            : "error",
        "ava/no-skip-test"                              : "error",
        "ava/no-statement-after-end"                    : "error",
        "ava/no-todo-implementation"                    : "error",
        "ava/no-todo-test"                              : "warn",
        "ava/no-unknown-modifiers"                      : "error",
        "ava/prefer-async-await"                        : "error",
        "ava/prefer-power-assert"                       : "off",
        "ava/test-ended"                                : "error",
        "ava/test-title"                                : ["error", "if-multiple"],
        "ava/use-t-well"                                : "error",
        "ava/use-t"                                     : "error",
        "ava/use-test"                                  : "error",
        "ava/use-true-false"                            : "error",

        // eslint-plugin-jsdoc
        "jsdoc/check-param-names"                       : "warn",
        "jsdoc/check-tag-names"                         : "warn",
        "jsdoc/check-types"                             : "warn",
        "jsdoc/newline-after-description"               : "warn",
        "jsdoc/require-description-complete-sentence"   : "warn",
        "jsdoc/require-example"                         : "warn",
        "jsdoc/require-hyphen-before-param-description" : "warn",
        "jsdoc/require-param"                           : "warn",
        "jsdoc/require-param-description"               : "warn",
        "jsdoc/require-param-type"                      : "warn",
        "jsdoc/require-returns-description"             : "warn",
        "jsdoc/require-returns-type"                    : "warn",

        // eslint-plugin-react
        "react/boolean-prop-naming"                     : ["warn", { "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+" }],
        "react/default-props-match-prop-types"          : ["warn", { "allowRequiredDefaults": true }],
        "react/display-name"                            : ["warn", { "ignoreTranspilerName": true }],
        "react/forbid-component-props"                  : 0,
        "react/forbid-elements"                         : 0,
        "react/forbid-prop-types"                       : 0,
        "react/forbid-foreign-prop-types"               : 0,
        "react/no-array-index-key"                      : "warn",
        "react/no-children-prop"                        : "warn",
        "react/no-danger"                               : "warn",
        "react/no-danger-with-children"                 : "error",
        "react/no-deprecated"                           : "warn",
        "react/no-did-mount-set-state"                  : "error",
        "react/no-did-update-set-state"                 : "error",
        "react/no-direct-mutation-state"                : "error",
        "react/no-find-dom-node"                        : "error",
        "react/no-is-mounted"                           : "error",
        "react/no-multi-comp"                           : 0,
        "react/no-redundant-should-component-update"    : "error",
        "react/no-render-return-value"                  : "error",
        "react/no-set-state"                            : "warn",
        "react/no-typos"                                : "warn",
        "react/no-string-refs"                          : "error",
        "react/no-unescaped-entities"                   : 0,
        "react/no-unknown-property"                     : "warn",
        "react/no-unused-prop-types"                    : "warn",
        "react/no-will-update-set-state"                : "error",
        "react/prefer-es6-class"                        : 0,
        "react/prefer-stateless-function"               : ["warn", { "ignorePureComponents": true }],

        "react/jsx-uses-react"                          : "warn",
        "react/jsx-uses-vars"                           : "warn"

        // eslint-plugin-jsx/a11y

    }

};
