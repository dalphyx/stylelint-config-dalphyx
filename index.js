module.exports = {
  'rules': {
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'indentation': 2,
    'max-empty-lines': 1,
    'number-leading-zero': 'never',
    'number-max-precision': 10,
    'number-no-trailing-zeros': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'shorthand-property-no-redundant-values': true,
    'property-case': 'lower',
    'property-no-vendor-prefix': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'never',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        'ignore': [
          'consecutive-duplicates'
        ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-class-pattern': [
      '^(?!(js\\-))[a-z\\-0-9]+$',
      {
        'message': 'Selector should be written in lowercase with hyphens (selector-class-pattern)'
      }
    ],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-space-before': 'never',
    'selector-max-compound-selectors': 3,
    'selector-max-empty-lines': 0,
    'selector-max-specificity': '0,4,0',
    'selector-no-id': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-no-missing-punctuation': true,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'media-query-parentheses-space-inside': 'never',
    'comment-empty-line-before': [
      'always',
      {
        'except': [
          'first-nested'
        ],
        'ignore': [
          'stylelint-commands'
        ]
      }
    ],
    'comment-whitespace-inside': 'always',
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'no-duplicate-selectors': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-eof-newline': true
  }
}
