import _delete from "./delete.js";
import emptyStatement from "./emptyStatement.js";
import initUndefined from "./initUndefined.js";
import invalidConstructor from "./invalidConstructor.js";
import isNaN from "./isNaN.js";
import useLiteral from "./useLiteral.js";

import camelcase from "./camelCase.js";
import curly from "./curly.js";
import es3 from "./parseInt.js";
import nonew from "./newSideEffects.js";
import snakecase from "./snake_case.js";
import multivar from "./multiVar.js";
import plusplus from "./updateExpression.js";
import eqeqeq from "./eqeqeq.js";

import debug from "./debugger.js";
import sub from "./dotNotation.js";

export default {
  builtin: [
    _delete,
    emptyStatement,
    initUndefined,
    invalidConstructor,
    isNaN,
    useLiteral,
  ],
  aretrue: {
    camelcase,
    curly,
    es3,
    nonew,
    snakecase,
    multivar,
    plusplus,
    eqeqeq,
  },
  arefalse: {
    debug,
    sub,
  }
}
