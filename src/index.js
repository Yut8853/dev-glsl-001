  const webGl = new WebGLFrame();

  webGl.init('webgl-canvas');

  webGl.load().then(() => {
    webGl.setup();
    webGl.render();
  })

class WebGLFrame {
  constructor() {
    this.canvas = null;
    this.gl = null;
    this.running = false;
    this.beginTime = 0;
    this.nowTime = 0;
    this.render = this.render.bind(this);
  }

  init(canvas) {
    if(canvas instanceof HTMLCanvasElement === true) {
      this.canvas = canvas;
    } else if(Object.prototype.toString.call(canvas) === '[object String]') {
      const canvasElm = document.querySelector(`#${canvas}`);
      if(canvasElm instanceof HTMLCanvasElement === true) {
        this.canvas = canvasElm;
      }
    }

    if(this.canvas === null) {
      throw new Error('Canvas not found');
    }

    this.gl = this.canvas.getContext('webgl');
    if(this.gl === null) {
      throw new Error('WebGL not supported');
    }
  }
}