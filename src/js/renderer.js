'use strict';

class Renderer {
  static createRenderer(scene) {
    return {
      render: function(output, cb) {
        return new Promise((resolve, reject) => {
          resolve('whee');
        });
      }
    };
  }
}
