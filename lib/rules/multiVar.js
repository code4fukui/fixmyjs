import fu from "https://code4fukui.github.io/fu/fu.js";

export default {
  VariableDeclaration: multiVarDecl
}

function multiVarDecl(node, parent) {
  if (node.kind !== 'var' || node.declarations.length <= 1 || (parent && parent.type === 'ForStatement')) {
    return node
  }

  return fu.map(function(decl) {
    return {
      type: 'VariableDeclaration',
      kind: 'var',
      declarations: [decl]
    };
  }, node.declarations)
}
