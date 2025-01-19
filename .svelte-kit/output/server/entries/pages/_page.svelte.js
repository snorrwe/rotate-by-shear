import { e as escape_html } from "../../chunks/escaping.js";
import { c as pop, d as stringify, p as push } from "../../chunks/index.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function shearXFactor(phi) {
  return Math.tan(phi / 2);
}
function shearYFactor(phi) {
  return Math.sin(phi);
}
function RotateCanvas($$payload, $$props) {
  push();
  const { imagePath, angle, width, height } = $$props;
  $$payload.out += `<canvas${attr("style", `width=${stringify(width)}; height=${stringify(height)}`)}${attr("width", width)}${attr("height", height)}></canvas>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let phi = 0;
  let phiRads = phi * Math.PI / 180;
  let width = void 0;
  let height = Math.floor(width / 4);
  let shearX = rounded(shearXFactor(phi));
  let shearY = rounded(shearYFactor(phi));
  function rounded(n, decimals = 2) {
    const denom = Math.pow(10, decimals);
    return (Math.round(n * denom) / denom).toFixed(decimals);
  }
  $$payload.out += `<div class="container svelte-ty97hw"><div class="labels svelte-ty97hw"><p>Original</p> <p>Shear X by ${escape_html(shearX)}</p> <p>Shear Y by ${escape_html(shearY)}</p> <p>Shear X by ${escape_html(shearX)}</p></div> `;
  RotateCanvas($$payload, {
    width,
    height,
    imagePath: "rocket.jpg",
    angle: phiRads
  });
  $$payload.out += `<!----> <div><label for="angle">Angle in degress</label> <input name="angle" type="number" min="-90" max="90" step="5"${attr("value", phi)}> <input name="angle" type="range" min="-90" max="90" step="5"${attr("value", phi)}></div></div>`;
  pop();
}
export {
  _page as default
};
