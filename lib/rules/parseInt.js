import fu from "https://code4fukui.github.io/fu/fu.js";

export default {
  CallExpression: fixRadix
}

function fixRadix(node) {
  if (node.callee.type != 'Identifier' ||
      node.callee.name != 'parseInt' ||
      node.arguments.length > 1) {
    return node
  }

  return {
    type: 'CallExpression',
    callee: node.callee,
    arguments: fu.concat(node.arguments, [{
      type: 'Literal',
      value: 10
    }])
  }
}
