import test from "tape";
import React from "react";
import sloppy from "prop-types-exact/sloppy";
import exact from "prop-types-exact";

test("sloppy", (t) => {
  t.equal(typeof sloppy, "function", "export is a function");

  class Component extends React.Component {
    render() {
      return null;
    }
  }
  Component.propTypes = exact({});

  t["throws"](() => <Component a />, EvalError, "works with exact");

  Component.propTypes = sloppy(Component.propTypes);
  t.doesNotThrow(() => <Component a />, "sloppy un-exacts it");

  t.end();
});
