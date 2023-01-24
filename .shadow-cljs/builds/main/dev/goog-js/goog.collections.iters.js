["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/collections/iters.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.collections.iters\");\n  goog.module.declareLegacyNamespace();\n  function getIterator(iterable) {\n    return iterable[goog.global.Symbol.iterator]();\n  }\n  exports.getIterator = getIterator;\n  exports.forEach = function(iterable, f) {\n    for (const elem of iterable) {\n      f(elem);\n    }\n  };\n  class MapIterator {\n    constructor(childIter, mapFn) {\n      this.childIterator_ = getIterator(childIter);\n      this.mapFn_ = mapFn;\n      this.nextIndex_ = 0;\n    }\n    [Symbol.iterator]() {\n      return this;\n    }\n    next() {\n      const childResult = this.childIterator_.next();\n      return {value:childResult.done ? undefined : this.mapFn_.call(undefined, childResult.value, this.nextIndex_++), done:childResult.done,};\n    }\n  }\n  exports.map = function(iterable, f) {\n    return new MapIterator(iterable, f);\n  };\n  class FilterIterator {\n    constructor(childIter, filterFn) {\n      this.childIter_ = getIterator(childIter);\n      this.filterFn_ = filterFn;\n      this.nextIndex_ = 0;\n    }\n    [Symbol.iterator]() {\n      return this;\n    }\n    next() {\n      while (true) {\n        const childResult = this.childIter_.next();\n        if (childResult.done) {\n          return {done:true, value:undefined};\n        }\n        const passesFilter = this.filterFn_.call(undefined, childResult.value, this.nextIndex_++);\n        if (passesFilter) {\n          return childResult;\n        }\n      }\n    }\n  }\n  exports.filter = function(iterable, f) {\n    return new FilterIterator(iterable, f);\n  };\n  class ConcatIterator {\n    constructor(iterators) {\n      this.iterators_ = iterators;\n      this.iterIndex_ = 0;\n    }\n    [Symbol.iterator]() {\n      return this;\n    }\n    next() {\n      while (this.iterIndex_ < this.iterators_.length) {\n        const result = this.iterators_[this.iterIndex_].next();\n        if (!result.done) {\n          return result;\n        }\n        this.iterIndex_++;\n      }\n      return {done:true};\n    }\n  }\n  exports.concat = function(...iterables) {\n    return new ConcatIterator(iterables.map(getIterator));\n  };\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities for working with ES6 iterables.\n *\n * The goal is that this should be a replacement for goog.iter which uses\n * a now non-standard approach to iterables.\n *\n * @see https://goo.gl/Rok5YQ\n */\n\ngoog.module('goog.collections.iters');\ngoog.module.declareLegacyNamespace();\n\n/**\n * Get the iterator for an iterable.\n * @param {!Iterable<VALUE>} iterable\n * @return {!Iterator<VALUE>}\n * @template VALUE\n */\nfunction getIterator(iterable) {\n  return iterable[goog.global.Symbol.iterator]();\n}\nexports.getIterator = getIterator;\n\n\n/**\n * Call a function with every value of an iterable.\n *\n * Warning: this function will never halt if given an iterable that\n * is never exhausted.\n *\n * @param {!Iterable<VALUE>} iterable\n * @param {function(VALUE) : *} f\n * @template VALUE\n */\nexports.forEach = function(iterable, f) {\n  for (const elem of iterable) {\n    f(elem);\n  }\n};\n\n\n/**\n * An Iterable that wraps a child iterable, and maps every element of the child\n * iterator to a new value, using a mapping function. Similar to Array.map, but\n * for Iterable.\n * @template TO,FROM\n * @implements {IteratorIterable<TO>}\n */\nclass MapIterator {\n  /**\n   * @param {!Iterable<FROM>} childIter\n   * @param {function(FROM, number): TO} mapFn\n   */\n  constructor(childIter, mapFn) {\n    /** @private @const {!Iterator<FROM>} */\n    this.childIterator_ = getIterator(childIter);\n\n    /** @private @const {function(FROM, number): TO} */\n    this.mapFn_ = mapFn;\n\n    /** @private {number} */\n    this.nextIndex_ = 0;\n  }\n\n  [Symbol.iterator]() {\n    return this;\n  }\n\n  /** @override */\n  next() {\n    const childResult = this.childIterator_.next();\n    // Always return a new object, even when childResult.done == true. This is\n    // so that we don't accidentally preserve generator return values, which\n    // are unlikely to be meaningful in the context of this MapIterator.\n    return {\n      value: childResult.done ?\n          undefined :\n          this.mapFn_.call(undefined, childResult.value, this.nextIndex_++),\n      done: childResult.done,\n    };\n  }\n}\n\n\n/**\n * Maps the values of one iterable to create another iterable.\n *\n * When next() is called on the returned iterable, it will call the given\n * function `f` with the next value of the given iterable\n * `iterable` until the given iterable is exhausted.\n *\n * @param {!Iterable<VALUE>} iterable\n * @param {function(VALUE, number): RESULT} f\n * @return {!IteratorIterable<RESULT>} The created iterable that gives the\n *     mapped values.\n * @template VALUE, RESULT\n */\nexports.map = function(iterable, f) {\n  return new MapIterator(iterable, f);\n};\n\n\n/**\n * An Iterable that wraps a child Iterable and returns a subset of the child's\n * items, based on a filter function. Similar to Array.filter, but for\n * Iterable.\n * @template T\n * @implements {IteratorIterable<T>}\n */\nclass FilterIterator {\n  /**\n   * @param {!Iterable<T>} childIter\n   * @param {function(T, number): boolean} filterFn\n   */\n  constructor(childIter, filterFn) {\n    /** @private @const {!Iterator<T>} */\n    this.childIter_ = getIterator(childIter);\n\n    /** @private @const {function(T, number): boolean} */\n    this.filterFn_ = filterFn;\n\n    /** @private {number} */\n    this.nextIndex_ = 0;\n  }\n\n  [Symbol.iterator]() {\n    return this;\n  }\n\n  /** @override */\n  next() {\n    while (true) {\n      const childResult = this.childIter_.next();\n      if (childResult.done) {\n        // Don't return childResult directly, because that would preserve\n        // generator return values, and we want to ignore them.\n        return {done: true, value: undefined};\n      }\n      const passesFilter =\n          this.filterFn_.call(undefined, childResult.value, this.nextIndex_++);\n      if (passesFilter) {\n        return childResult;\n      }\n    }\n  }\n}\n\n\n/**\n * Filter elements from one iterator to create another iterable.\n *\n * When next() is called on the returned iterator, it will call next() on the\n * given iterator and call the given function `f` with that value until `true`\n * is returned or the given iterator is exhausted.\n *\n * @param {!Iterable<VALUE>} iterable\n * @param {function(VALUE, number): boolean} f\n * @return {!IteratorIterable<VALUE>} The created iterable that gives the mapped\n *     values.\n * @template VALUE\n */\nexports.filter = function(iterable, f) {\n  return new FilterIterator(iterable, f);\n};\n\n\n/**\n * @template T\n * @implements {IteratorIterable<T>}\n */\nclass ConcatIterator {\n  /** @param {!Array<!Iterator<T>>} iterators */\n  constructor(iterators) {\n    /** @private @const {!Array<!Iterator<T>>} */\n    this.iterators_ = iterators;\n\n    /** @private {number} */\n    this.iterIndex_ = 0;\n  }\n\n  [Symbol.iterator]() {\n    return this;\n  }\n\n  /** @override */\n  next() {\n    while (this.iterIndex_ < this.iterators_.length) {\n      const result = this.iterators_[this.iterIndex_].next();\n      if (!result.done) {\n        return result;\n      }\n      this.iterIndex_++;\n    }\n    return /** @type {!IIterableResult<T>} */ ({done: true});\n  }\n}\n\n\n/**\n * Concatenates multiple iterators to create a new iterable.\n *\n * When next() is called on the return iterator, it will call next() on the\n * current passed iterator. When the current passed iterator is exhausted, it\n * will move on to the next iterator until there are no more left.\n *\n * All generator return values will be ignored (i.e. when childIter.next()\n * returns {done: true, value: notUndefined} it will be treated as just\n * {done: true}).\n *\n * @param {...!Iterable<VALUE>} iterables\n * @return {!IteratorIterable<VALUE>}\n * @template VALUE\n */\nexports.concat = function(...iterables) {\n  return new ConcatIterator(iterables.map(getIterator));\n};\n","~:compiled-at",1674589863443,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.collections.iters.js\",\n\"lineCount\":80,\n\"mappings\":\"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\",\n\"sources\":[\"goog/collections/iters.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilities for working with ES6 iterables.\\n *\\n * The goal is that this should be a replacement for goog.iter which uses\\n * a now non-standard approach to iterables.\\n *\\n * @see https://goo.gl/Rok5YQ\\n */\\n\\ngoog.module('goog.collections.iters');\\ngoog.module.declareLegacyNamespace();\\n\\n/**\\n * Get the iterator for an iterable.\\n * @param {!Iterable<VALUE>} iterable\\n * @return {!Iterator<VALUE>}\\n * @template VALUE\\n */\\nfunction getIterator(iterable) {\\n  return iterable[goog.global.Symbol.iterator]();\\n}\\nexports.getIterator = getIterator;\\n\\n\\n/**\\n * Call a function with every value of an iterable.\\n *\\n * Warning: this function will never halt if given an iterable that\\n * is never exhausted.\\n *\\n * @param {!Iterable<VALUE>} iterable\\n * @param {function(VALUE) : *} f\\n * @template VALUE\\n */\\nexports.forEach = function(iterable, f) {\\n  for (const elem of iterable) {\\n    f(elem);\\n  }\\n};\\n\\n\\n/**\\n * An Iterable that wraps a child iterable, and maps every element of the child\\n * iterator to a new value, using a mapping function. Similar to Array.map, but\\n * for Iterable.\\n * @template TO,FROM\\n * @implements {IteratorIterable<TO>}\\n */\\nclass MapIterator {\\n  /**\\n   * @param {!Iterable<FROM>} childIter\\n   * @param {function(FROM, number): TO} mapFn\\n   */\\n  constructor(childIter, mapFn) {\\n    /** @private @const {!Iterator<FROM>} */\\n    this.childIterator_ = getIterator(childIter);\\n\\n    /** @private @const {function(FROM, number): TO} */\\n    this.mapFn_ = mapFn;\\n\\n    /** @private {number} */\\n    this.nextIndex_ = 0;\\n  }\\n\\n  [Symbol.iterator]() {\\n    return this;\\n  }\\n\\n  /** @override */\\n  next() {\\n    const childResult = this.childIterator_.next();\\n    // Always return a new object, even when childResult.done == true. This is\\n    // so that we don't accidentally preserve generator return values, which\\n    // are unlikely to be meaningful in the context of this MapIterator.\\n    return {\\n      value: childResult.done ?\\n          undefined :\\n          this.mapFn_.call(undefined, childResult.value, this.nextIndex_++),\\n      done: childResult.done,\\n    };\\n  }\\n}\\n\\n\\n/**\\n * Maps the values of one iterable to create another iterable.\\n *\\n * When next() is called on the returned iterable, it will call the given\\n * function `f` with the next value of the given iterable\\n * `iterable` until the given iterable is exhausted.\\n *\\n * @param {!Iterable<VALUE>} iterable\\n * @param {function(VALUE, number): RESULT} f\\n * @return {!IteratorIterable<RESULT>} The created iterable that gives the\\n *     mapped values.\\n * @template VALUE, RESULT\\n */\\nexports.map = function(iterable, f) {\\n  return new MapIterator(iterable, f);\\n};\\n\\n\\n/**\\n * An Iterable that wraps a child Iterable and returns a subset of the child's\\n * items, based on a filter function. Similar to Array.filter, but for\\n * Iterable.\\n * @template T\\n * @implements {IteratorIterable<T>}\\n */\\nclass FilterIterator {\\n  /**\\n   * @param {!Iterable<T>} childIter\\n   * @param {function(T, number): boolean} filterFn\\n   */\\n  constructor(childIter, filterFn) {\\n    /** @private @const {!Iterator<T>} */\\n    this.childIter_ = getIterator(childIter);\\n\\n    /** @private @const {function(T, number): boolean} */\\n    this.filterFn_ = filterFn;\\n\\n    /** @private {number} */\\n    this.nextIndex_ = 0;\\n  }\\n\\n  [Symbol.iterator]() {\\n    return this;\\n  }\\n\\n  /** @override */\\n  next() {\\n    while (true) {\\n      const childResult = this.childIter_.next();\\n      if (childResult.done) {\\n        // Don't return childResult directly, because that would preserve\\n        // generator return values, and we want to ignore them.\\n        return {done: true, value: undefined};\\n      }\\n      const passesFilter =\\n          this.filterFn_.call(undefined, childResult.value, this.nextIndex_++);\\n      if (passesFilter) {\\n        return childResult;\\n      }\\n    }\\n  }\\n}\\n\\n\\n/**\\n * Filter elements from one iterator to create another iterable.\\n *\\n * When next() is called on the returned iterator, it will call next() on the\\n * given iterator and call the given function `f` with that value until `true`\\n * is returned or the given iterator is exhausted.\\n *\\n * @param {!Iterable<VALUE>} iterable\\n * @param {function(VALUE, number): boolean} f\\n * @return {!IteratorIterable<VALUE>} The created iterable that gives the mapped\\n *     values.\\n * @template VALUE\\n */\\nexports.filter = function(iterable, f) {\\n  return new FilterIterator(iterable, f);\\n};\\n\\n\\n/**\\n * @template T\\n * @implements {IteratorIterable<T>}\\n */\\nclass ConcatIterator {\\n  /** @param {!Array<!Iterator<T>>} iterators */\\n  constructor(iterators) {\\n    /** @private @const {!Array<!Iterator<T>>} */\\n    this.iterators_ = iterators;\\n\\n    /** @private {number} */\\n    this.iterIndex_ = 0;\\n  }\\n\\n  [Symbol.iterator]() {\\n    return this;\\n  }\\n\\n  /** @override */\\n  next() {\\n    while (this.iterIndex_ < this.iterators_.length) {\\n      const result = this.iterators_[this.iterIndex_].next();\\n      if (!result.done) {\\n        return result;\\n      }\\n      this.iterIndex_++;\\n    }\\n    return /** @type {!IIterableResult<T>} */ ({done: true});\\n  }\\n}\\n\\n\\n/**\\n * Concatenates multiple iterators to create a new iterable.\\n *\\n * When next() is called on the return iterator, it will call next() on the\\n * current passed iterator. When the current passed iterator is exhausted, it\\n * will move on to the next iterator until there are no more left.\\n *\\n * All generator return values will be ignored (i.e. when childIter.next()\\n * returns {done: true, value: notUndefined} it will be treated as just\\n * {done: true}).\\n *\\n * @param {...!Iterable<VALUE>} iterables\\n * @return {!IteratorIterable<VALUE>}\\n * @template VALUE\\n */\\nexports.concat = function(...iterables) {\\n  return new ConcatIterator(iterables.map(getIterator));\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"getIterator\",\"iterable\",\"global\",\"Symbol\",\"iterator\",\"exports\",\"forEach\",\"exports.forEach\",\"f\",\"elem\",\"MapIterator\",\"constructor\",\"childIter\",\"mapFn\",\"childIterator_\",\"mapFn_\",\"nextIndex_\",\"next\",\"childResult\",\"value\",\"done\",\"undefined\",\"call\",\"map\",\"exports.map\",\"FilterIterator\",\"filterFn\",\"childIter_\",\"filterFn_\",\"passesFilter\",\"filter\",\"exports.filter\",\"ConcatIterator\",\"iterators\",\"iterators_\",\"iterIndex_\",\"length\",\"result\",\"concat\",\"exports.concat\",\"iterables\"]\n}\n"]