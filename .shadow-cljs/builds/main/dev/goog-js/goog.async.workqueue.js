["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/workqueue.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.async.WorkQueue\");\n  goog.module.declareLegacyNamespace();\n  const FreeList = goog.require(\"goog.async.FreeList\");\n  const {assert} = goog.require(\"goog.asserts\");\n  class WorkQueue {\n    constructor() {\n      this.workHead_ = null;\n      this.workTail_ = null;\n    }\n    add(fn, scope) {\n      const item = this.getUnusedItem_();\n      item.set(fn, scope);\n      if (this.workTail_) {\n        this.workTail_.next = item;\n        this.workTail_ = item;\n      } else {\n        assert(!this.workHead_);\n        this.workHead_ = item;\n        this.workTail_ = item;\n      }\n    }\n    remove() {\n      let item = null;\n      if (this.workHead_) {\n        item = this.workHead_;\n        this.workHead_ = this.workHead_.next;\n        if (!this.workHead_) {\n          this.workTail_ = null;\n        }\n        item.next = null;\n      }\n      return item;\n    }\n    returnUnused(item) {\n      WorkQueue.freelist_.put(item);\n    }\n    getUnusedItem_() {\n      return WorkQueue.freelist_.get();\n    }\n  }\n  WorkQueue.DEFAULT_MAX_UNUSED = goog.define(\"goog.async.WorkQueue.DEFAULT_MAX_UNUSED\", 100);\n  WorkQueue.freelist_ = new FreeList(() => new WorkItem(), item => item.reset(), WorkQueue.DEFAULT_MAX_UNUSED);\n  class WorkItem {\n    constructor() {\n      this.fn = null;\n      this.scope = null;\n      this.next = null;\n    }\n    set(fn, scope) {\n      this.fn = fn;\n      this.scope = scope;\n      this.next = null;\n    }\n    reset() {\n      this.fn = null;\n      this.scope = null;\n      this.next = null;\n    }\n  }\n  exports = WorkQueue;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.module('goog.async.WorkQueue');\ngoog.module.declareLegacyNamespace();\n\nconst FreeList = goog.require('goog.async.FreeList');\nconst {assert} = goog.require('goog.asserts');\n\n// TODO(johnlenz): generalize the WorkQueue if this is used by more\n// than goog.async.run.\n\n\n/**\n * A low GC workqueue. The key elements of this design:\n *   - avoids the need for goog.bind or equivalent by carrying scope\n *   - avoids the need for array reallocation by using a linked list\n *   - minimizes work entry objects allocation by recycling objects\n * @final\n * @struct\n */\nclass WorkQueue {\n  constructor() {\n    this.workHead_ = null;\n    this.workTail_ = null;\n  }\n\n  /**\n   * @param {function()} fn\n   * @param {Object|null|undefined} scope\n   */\n  add(fn, scope) {\n    const item = this.getUnusedItem_();\n    item.set(fn, scope);\n\n    if (this.workTail_) {\n      this.workTail_.next = item;\n      this.workTail_ = item;\n    } else {\n      assert(!this.workHead_);\n      this.workHead_ = item;\n      this.workTail_ = item;\n    }\n  }\n\n  /**\n   * @return {?WorkItem}\n   */\n  remove() {\n    let item = null;\n\n    if (this.workHead_) {\n      item = this.workHead_;\n      this.workHead_ = this.workHead_.next;\n      if (!this.workHead_) {\n        this.workTail_ = null;\n      }\n      item.next = null;\n    }\n    return item;\n  }\n\n  /**\n   * @param {!WorkItem} item\n   */\n  returnUnused(item) {\n    WorkQueue.freelist_.put(item);\n  }\n\n  /**\n   * @return {!WorkItem}\n   * @private\n   */\n  getUnusedItem_() {\n    return WorkQueue.freelist_.get();\n  }\n}\n\n/** @define {number} The maximum number of entries to keep for recycling. */\nWorkQueue.DEFAULT_MAX_UNUSED =\n    goog.define('goog.async.WorkQueue.DEFAULT_MAX_UNUSED', 100);\n\n/** @const @private {!FreeList<!WorkItem>} */\nWorkQueue.freelist_ = new FreeList(\n    () => new WorkItem(), item => item.reset(), WorkQueue.DEFAULT_MAX_UNUSED);\n\n/**\n * @final\n * @struct\n */\nclass WorkItem {\n  constructor() {\n    /** @type {?function()} */\n    this.fn = null;\n    /** @type {?Object|null|undefined} */\n    this.scope = null;\n    /** @type {?WorkItem} */\n    this.next = null;\n  }\n\n  /**\n   * @param {function()} fn\n   * @param {Object|null|undefined} scope\n   */\n  set(fn, scope) {\n    'use strict';\n    this.fn = fn;\n    this.scope = scope;\n    this.next = null;\n  }\n\n  /** Reset the work item so they don't prevent GC before reuse */\n  reset() {\n    this.fn = null;\n    this.scope = null;\n    this.next = null;\n  }\n}\n\nexports = WorkQueue;\n","~:compiled-at",1674589863427,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.workqueue.js\",\n\"lineCount\":65,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAMAA,MAAKC,CAAAA,MAAL,CAAY,sBAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,WAAWH,IAAKI,CAAAA,OAAL,CAAa,qBAAb,CAAjB;AACA,QAAM,CAACC,MAAD,CAAA,GAAWL,IAAKI,CAAAA,OAAL,CAAa,cAAb,CAAjB;AAcA,OAAME,UAAN;AACEC,eAAW,EAAG;AACZ,UAAKC,CAAAA,SAAL,GAAiB,IAAjB;AACA,UAAKC,CAAAA,SAAL,GAAiB,IAAjB;AAFY;AASdC,OAAG,CAACC,EAAD,EAAKC,KAAL,CAAY;AACb,YAAMC,OAAO,IAAKC,CAAAA,cAAL,EAAb;AACAD,UAAKE,CAAAA,GAAL,CAASJ,EAAT,EAAaC,KAAb,CAAA;AAEA,UAAI,IAAKH,CAAAA,SAAT,CAAoB;AAClB,YAAKA,CAAAA,SAAUO,CAAAA,IAAf,GAAsBH,IAAtB;AACA,YAAKJ,CAAAA,SAAL,GAAiBI,IAAjB;AAFkB,OAApB,KAGO;AACLR,cAAA,CAAO,CAAC,IAAKG,CAAAA,SAAb,CAAA;AACA,YAAKA,CAAAA,SAAL,GAAiBK,IAAjB;AACA,YAAKJ,CAAAA,SAAL,GAAiBI,IAAjB;AAHK;AAPM;AAiBfI,UAAM,EAAG;AACP,UAAIJ,OAAO,IAAX;AAEA,UAAI,IAAKL,CAAAA,SAAT,CAAoB;AAClBK,YAAA,GAAO,IAAKL,CAAAA,SAAZ;AACA,YAAKA,CAAAA,SAAL,GAAiB,IAAKA,CAAAA,SAAUQ,CAAAA,IAAhC;AACA,YAAI,CAAC,IAAKR,CAAAA,SAAV;AACE,cAAKC,CAAAA,SAAL,GAAiB,IAAjB;AADF;AAGAI,YAAKG,CAAAA,IAAL,GAAY,IAAZ;AANkB;AAQpB,aAAOH,IAAP;AAXO;AAiBTK,gBAAY,CAACL,IAAD,CAAO;AACjBP,eAAUa,CAAAA,SAAUC,CAAAA,GAApB,CAAwBP,IAAxB,CAAA;AADiB;AAQnBC,kBAAc,EAAG;AACf,aAAOR,SAAUa,CAAAA,SAAUE,CAAAA,GAApB,EAAP;AADe;AApDnB;AA0DAf,WAAUgB,CAAAA,kBAAV,GACItB,IAAKuB,CAAAA,MAAL,CAAY,yCAAZ,EAAuD,GAAvD,CADJ;AAIAjB,WAAUa,CAAAA,SAAV,GAAsB,IAAIhB,QAAJ,CAClB,EAAA,IAAM,IAAIqB,QAAJ,EADY,EACIX,IAAA,IAAQA,IAAKY,CAAAA,KAAL,EADZ,EAC0BnB,SAAUgB,CAAAA,kBADpC,CAAtB;AAOA,OAAME,SAAN;AACEjB,eAAW,EAAG;AAEZ,UAAKI,CAAAA,EAAL,GAAU,IAAV;AAEA,UAAKC,CAAAA,KAAL,GAAa,IAAb;AAEA,UAAKI,CAAAA,IAAL,GAAY,IAAZ;AANY;AAadD,OAAG,CAACJ,EAAD,EAAKC,KAAL,CAAY;AAEb,UAAKD,CAAAA,EAAL,GAAUA,EAAV;AACA,UAAKC,CAAAA,KAAL,GAAaA,KAAb;AACA,UAAKI,CAAAA,IAAL,GAAY,IAAZ;AAJa;AAQfS,SAAK,EAAG;AACN,UAAKd,CAAAA,EAAL,GAAU,IAAV;AACA,UAAKC,CAAAA,KAAL,GAAa,IAAb;AACA,UAAKI,CAAAA,IAAL,GAAY,IAAZ;AAHM;AAtBV;AA6BAU,SAAA,GAAUpB,SAAV;AA1HA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/async/workqueue.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.module('goog.async.WorkQueue');\\ngoog.module.declareLegacyNamespace();\\n\\nconst FreeList = goog.require('goog.async.FreeList');\\nconst {assert} = goog.require('goog.asserts');\\n\\n// TODO(johnlenz): generalize the WorkQueue if this is used by more\\n// than goog.async.run.\\n\\n\\n/**\\n * A low GC workqueue. The key elements of this design:\\n *   - avoids the need for goog.bind or equivalent by carrying scope\\n *   - avoids the need for array reallocation by using a linked list\\n *   - minimizes work entry objects allocation by recycling objects\\n * @final\\n * @struct\\n */\\nclass WorkQueue {\\n  constructor() {\\n    this.workHead_ = null;\\n    this.workTail_ = null;\\n  }\\n\\n  /**\\n   * @param {function()} fn\\n   * @param {Object|null|undefined} scope\\n   */\\n  add(fn, scope) {\\n    const item = this.getUnusedItem_();\\n    item.set(fn, scope);\\n\\n    if (this.workTail_) {\\n      this.workTail_.next = item;\\n      this.workTail_ = item;\\n    } else {\\n      assert(!this.workHead_);\\n      this.workHead_ = item;\\n      this.workTail_ = item;\\n    }\\n  }\\n\\n  /**\\n   * @return {?WorkItem}\\n   */\\n  remove() {\\n    let item = null;\\n\\n    if (this.workHead_) {\\n      item = this.workHead_;\\n      this.workHead_ = this.workHead_.next;\\n      if (!this.workHead_) {\\n        this.workTail_ = null;\\n      }\\n      item.next = null;\\n    }\\n    return item;\\n  }\\n\\n  /**\\n   * @param {!WorkItem} item\\n   */\\n  returnUnused(item) {\\n    WorkQueue.freelist_.put(item);\\n  }\\n\\n  /**\\n   * @return {!WorkItem}\\n   * @private\\n   */\\n  getUnusedItem_() {\\n    return WorkQueue.freelist_.get();\\n  }\\n}\\n\\n/** @define {number} The maximum number of entries to keep for recycling. */\\nWorkQueue.DEFAULT_MAX_UNUSED =\\n    goog.define('goog.async.WorkQueue.DEFAULT_MAX_UNUSED', 100);\\n\\n/** @const @private {!FreeList<!WorkItem>} */\\nWorkQueue.freelist_ = new FreeList(\\n    () => new WorkItem(), item => item.reset(), WorkQueue.DEFAULT_MAX_UNUSED);\\n\\n/**\\n * @final\\n * @struct\\n */\\nclass WorkItem {\\n  constructor() {\\n    /** @type {?function()} */\\n    this.fn = null;\\n    /** @type {?Object|null|undefined} */\\n    this.scope = null;\\n    /** @type {?WorkItem} */\\n    this.next = null;\\n  }\\n\\n  /**\\n   * @param {function()} fn\\n   * @param {Object|null|undefined} scope\\n   */\\n  set(fn, scope) {\\n    'use strict';\\n    this.fn = fn;\\n    this.scope = scope;\\n    this.next = null;\\n  }\\n\\n  /** Reset the work item so they don't prevent GC before reuse */\\n  reset() {\\n    this.fn = null;\\n    this.scope = null;\\n    this.next = null;\\n  }\\n}\\n\\nexports = WorkQueue;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"FreeList\",\"require\",\"assert\",\"WorkQueue\",\"constructor\",\"workHead_\",\"workTail_\",\"add\",\"fn\",\"scope\",\"item\",\"getUnusedItem_\",\"set\",\"next\",\"remove\",\"returnUnused\",\"freelist_\",\"put\",\"get\",\"DEFAULT_MAX_UNUSED\",\"define\",\"WorkItem\",\"reset\",\"exports\"]\n}\n"]