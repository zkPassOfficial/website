// @refresh reset

import { Effect } from 'postprocessing'
import { Color, NearestFilter } from 'three'
import { BLEND } from '../../../../utils/blend'
const glsl = String.raw

const fragmentShader = glsl`

  ${BLEND.NORMAL}

    uniform float uRows;
    uniform sampler2D uTexture;
    uniform float uScaleY;
    uniform float uScroll;
    uniform vec3 uBackgroundColor;
    uniform vec3 uOutlineColor;
    uniform float uDpr;

    // Use these parameters to fiddle with settings
    float step = 0.9;

    float intensity(vec4 color){
      return sqrt((color.r*color.r)+(color.g*color.g)+(color.b*color.b));
    }

    float sobel(sampler2D map,float stepx, float stepy, vec2 uv){
      // get samples around pixel
        float tleft = intensity(texture2D(map, uv + vec2(-stepx,stepy)));
        float left = intensity(texture2D(map, uv + vec2(-stepx,0)));
        float bleft = intensity(texture2D(map, uv + vec2(-stepx,-stepy)));
        float top = intensity(texture2D(map, uv + vec2(0,stepy)));
        float bottom = intensity(texture2D(map, uv + vec2(0,-stepy)));
        float tright = intensity(texture2D(map, uv + vec2(stepx,stepy)));
        float right = intensity(texture2D(map, uv + vec2(stepx,0)));
        float bright = intensity(texture2D(map, uv + vec2(stepx,-stepy)));
    
      // Sobel masks (see http://en.wikipedia.org/wiki/Sobel_operator)
      //        1 0 -1     -1 -2 -1
      //    X = 2 0 -2  Y = 0  0  0
      //        1 0 -1      1  2  1
      
      // You could also use Scharr operator:
      //        3 0 -3        3 10   3
      //    X = 10 0 -10  Y = 0  0   0
      //        3 0 -3        -3 -10 -3
    
        float x = tleft + 2.0*left + bleft - tright - 2.0 * right - bright;
        float y = -tleft - 2.0*top - tright + bleft + 2.0 * bottom + bright;
        float color = sqrt((x*x) + (y*y));
        return color;
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
      vec2 aspectUV = uv;
      aspectUV.y -= ((uScroll * uDpr) / resolution.y);
      aspectUV.y *= uScaleY;
      aspectUV.y += 1. - uScaleY;

      vec4 mask = texture2D(uTexture, aspectUV);

      float outline = sobel(uTexture, step / resolution.x, step / resolution.y, aspectUV);
      outline = clamp(outline, 0., 1.);

      vec3 color = blendNormal(uBackgroundColor, uOutlineColor, outline);

      outputColor = vec4(color, outline + mask.r);
    }
`

export class TilesEffect extends Effect {
  constructor({ rows = 40 } = {}) {
    super('TilesEffect', fragmentShader, {
      uniforms: new Map([
        ['uRows', { value: rows }],
        ['uTexture', { value: null }],
        ['uScaleY', { value: 1 }],
        ['uScroll', { value: 0 }],
        [
          'uBackgroundColor',
          { value: new Color('#000000').convertLinearToSRGB() },
        ],
        [
          'uOutlineColor',
          { value: new Color('#ffffff').convertLinearToSRGB() },
        ],
        ['uDpr', { value: 1 }],
      ]),
    })
  }

  set texture(texture) {
    this.uniforms.get('uTexture').value = texture
    texture.minFilter = texture.magFilter = NearestFilter
  }

  set scaleY(value) {
    this.uniforms.get('uScaleY').value = value
  }

  set scroll(value) {
    this.uniforms.get('uScroll').value = value
  }

  set outlineColor(value) {
    this.uniforms.get('uOutlineColor').value.set(value).convertLinearToSRGB()
  }

  set dpr(value) {
    this.uniforms.get('uDpr').value = value
  }
}
