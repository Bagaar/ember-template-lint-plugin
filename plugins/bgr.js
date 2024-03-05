import avoidLinkTo from '../plugins/lib/avoid-link-to.js';

export default {
  // Name of plugin
  name: 'bgr-rules',

  // Define rules for this plugin. Each path should map to a plugin rule
  rules: {
    'avoid-link-to': avoidLinkTo,
  },

  // Define configurations for this plugin that can be extended by the base configuration
  configurations: {
    'bgr-preferred': {
      rules: {
        'avoid-link-to': true,
      },
    },
  },
};
