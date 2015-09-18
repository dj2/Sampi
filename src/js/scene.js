'use strict';

class Scene {
  constructor() {
    this.width_ = 500;
    this.height_ = 500;

    Object.seal(this);
  }

  set width(width) {
    this.width_ = width;
  }

  set height(height) {
    this.height_ = height;
  }

  get width() {
    return this.width_;
  }

  get height() {
    return this.height_;
  }
}
