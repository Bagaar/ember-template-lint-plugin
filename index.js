import path from 'path';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));

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
