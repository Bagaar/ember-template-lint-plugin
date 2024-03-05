import { Rule } from 'ember-template-lint';

export default class AvoidLinkTo extends Rule {
  visitor() {
    return {
      ElementNode(node) {
        if (node.tag === 'LinkTo') {
          this.log({
            message: 'Avoid using LinkTo, use ember-link helpers instead',
            node,
          });
        }
      },
    };
  }
}
