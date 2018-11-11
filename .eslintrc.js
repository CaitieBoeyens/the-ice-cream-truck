// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/recommended',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        semi: ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'linebreak-style': ['error', 'unix'],
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'vue/max-attributes-per-line': [
            2,
            {
                singleline: 3,
                multiline: {
                    max: 3,
                    allowFirstLine: true
                }
            }
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                attribute: 0,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives'],
                    'extends',
                    'mixins',
                    ['props', 'propsData'],
                    'inheritAttrs',
                    'model',
                    'filters',
                    'watch',
                    'computed',
                    'LIFECYCLE_HOOKS',
                    'data',
                    'methods',
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ]
    }
};
