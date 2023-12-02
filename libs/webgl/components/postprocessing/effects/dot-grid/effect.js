// @refresh reset

import { BlendFunction, Effect } from 'postprocessing'
import { Color } from 'three'
const glsl = String.raw

const fragmentShader = glsl`
    uniform float uRows;
    uniform float uScroll;
    uniform vec3 uColor;
    uniform float uMaxScroll;
    uniform float uDpr;
    uniform float uSize;

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        float aspect = resolution.x / resolution.y;
        
        // Calculate the position of the dots
        vec2 aspectUV = uv;
        aspectUV.y -= ((uScroll * uDpr) / resolution.y);
        aspectUV.y = 1. - aspectUV.y;
        aspectUV.y /= aspect;

        aspectUV += (0.5 / uRows);

        vec2 gridUV = fract(aspectUV * uRows);
        float step = resolution.x / uRows;

        bool isDot = length(gridUV - 0.5) * step < uSize;

        float alpha =  isDot ? 1. : 0.;

        float top = (resolution.y / (uRows * aspect)) * 0.5;
        float left = (resolution.x / uRows) * 0.5;
        float right = resolution.x - left;

        float x = gl_FragCoord.x;
        float y = (resolution.y - gl_FragCoord.y) + (uScroll * uDpr);

        if(y < top ){
          alpha = 0.;
        }

        if( y > uMaxScroll * uDpr + resolution.y - top ){
          alpha = 0.;
        }

        if(x < left ){
          alpha = 0.;
        }

        if(x > right){
          alpha = 0.;
        }

        // outputColor =  vec4(vec3(gridUV,0.), 1.0);
        outputColor = vec4(1.,0.,0.,1.);
        outputColor = vec4(uColor, alpha);
    }
`

export class DotGridEffect extends Effect {
  constructor({ size = 2, rows = 40 } = {}) {
    super('DotGridEffect', fragmentShader, {
      uniforms: new Map([
        ['uSize', { value: size }],
        ['uRows', { value: rows }],
        ['uScroll', { value: 0 }],
        ['uColor', { value: new Color('#ffffff').convertLinearToSRGB() }],
        ['uMaxScroll', { value: 0 }],
        ['uDpr', { value: 1 }],
      ]),
      blendFunction: BlendFunction.ALPHA,
    })
  }

  set scroll(value) {
    this.uniforms.get('uScroll').value = value
  }

  set maxScroll(value) {
    this.uniforms.get('uMaxScroll').value = value
  }

  set dpr(value) {
    this.uniforms.get('uDpr').value = value
  }

  set color(value) {
    this.uniforms.get('uColor').value.set(value).convertLinearToSRGB()
  }

  set size(value) {
    this.uniforms.get('uSize').value = value
  }
}
