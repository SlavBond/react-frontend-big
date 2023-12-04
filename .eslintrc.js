module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-misused-promises": 0,
        "@typescript-eslint/naming-convention": 0,
        "@typescript-eslint/semi": 0
    },
    globals: {
        '__IS_DEV__': true,
    }
}
