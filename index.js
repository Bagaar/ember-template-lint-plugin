import path from 'path';

const dirname = import.meta.dirname;

export default {
  name: '@bagaar/ember-template-lint-plugin',
  configurations: {
    recommended: {
      extends: [
        'a11y',
        'bgr-rules:bgr-preferred',
        'ember-template-lint-plugin-prettier:recommended',
        'recommended',
      ],
      plugins: [
        'ember-template-lint-plugin-prettier',
        `${path.resolve(dirname, 'plugins/bgr.js')}`,
      ],
      rules: {
        'no-bare-strings': true,
        'require-each-key': true,
        'attribute-order': true,
      },
    },
  },
};
