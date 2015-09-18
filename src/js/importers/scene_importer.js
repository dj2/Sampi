'use strict';

require(['/js/scene.js']);

class SceneImporter {
  constructor(data) {
    this.data_ = data.split(/\n/)
        // Cleanup whitespace on the start/end of lines.
        .map((line) => line.trim())
        // Strip comment lines and blink lines.
        .filter((line) => !line.startsWith('#') && line !== '')
        // Trim comments from the end of all lines.
        .map((line) => line.replace(/\s*#.*$/, ''))
        .join('\n');

    Object.seal(this);
  }

  import() {
    let scene = new Scene();


    return scene;
  }
}
