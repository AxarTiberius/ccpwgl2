webpackHotUpdateccpwgl_int(1,{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EveChild", function() { return /* reexport */ EveChild_EveChild; });
__webpack_require__.d(__webpack_exports__, "EveChildBillboard", function() { return /* reexport */ EveChildBillboard_EveChildBillboard; });
__webpack_require__.d(__webpack_exports__, "EveChildCloud", function() { return /* reexport */ EveChildCloud; });
__webpack_require__.d(__webpack_exports__, "EveChildContainer", function() { return /* reexport */ EveChildContainer; });
__webpack_require__.d(__webpack_exports__, "EveChildExplosion", function() { return /* reexport */ EveChildExplosion; });
__webpack_require__.d(__webpack_exports__, "EveChildMesh", function() { return /* reexport */ EveChildMesh_EveChildMesh; });
__webpack_require__.d(__webpack_exports__, "EveChildParticleSystem", function() { return /* reexport */ EveChildParticleSystem_EveChildParticleSystem; });
__webpack_require__.d(__webpack_exports__, "EveLensflare", function() { return /* reexport */ EveLensflare_EveLensflare; });
__webpack_require__.d(__webpack_exports__, "EveMeshOverlayEffect", function() { return /* reexport */ EveMeshOverlayEffect_EveMeshOverlayEffect; });
__webpack_require__.d(__webpack_exports__, "EveOccluder", function() { return /* reexport */ EveOccluder_EveOccluder; });
__webpack_require__.d(__webpack_exports__, "EveStretch", function() { return /* reexport */ EveStretch_EveStretch; });
__webpack_require__.d(__webpack_exports__, "EvePerMuzzleData", function() { return /* reexport */ EveTurretFiringFX_EvePerMuzzleData; });
__webpack_require__.d(__webpack_exports__, "EveTurretFiringFX", function() { return /* reexport */ EveTurretFiringFX_EveTurretFiringFX; });
__webpack_require__.d(__webpack_exports__, "EveStarfield", function() { return /* reexport */ EveStarfield_EveStarfield; });
__webpack_require__.d(__webpack_exports__, "EveObject", function() { return /* reexport */ EveObject_EveObject; });
__webpack_require__.d(__webpack_exports__, "EveEffectRoot", function() { return /* reexport */ EveEffectRoot_EveEffectRoot; });
__webpack_require__.d(__webpack_exports__, "EveMissileWarhead", function() { return /* reexport */ EveMissile_EveMissileWarhead; });
__webpack_require__.d(__webpack_exports__, "EveMissile", function() { return /* reexport */ EveMissile_EveMissile; });
__webpack_require__.d(__webpack_exports__, "EvePlanet", function() { return /* reexport */ EvePlanet_EvePlanet; });
__webpack_require__.d(__webpack_exports__, "EveShip", function() { return /* reexport */ EveShip; });
__webpack_require__.d(__webpack_exports__, "EveSpaceObject", function() { return /* reexport */ EveSpaceObject_EveSpaceObject; });
__webpack_require__.d(__webpack_exports__, "EveStation", function() { return /* reexport */ EveSpaceObject_EveSpaceObject; });
__webpack_require__.d(__webpack_exports__, "EveTransform", function() { return /* reexport */ EveTransform_EveTransform; });
__webpack_require__.d(__webpack_exports__, "EveObjectSetItem", function() { return /* reexport */ EveObjectSet_EveObjectSetItem; });
__webpack_require__.d(__webpack_exports__, "EveObjectSet", function() { return /* reexport */ EveObjectSet_EveObjectSet; });
__webpack_require__.d(__webpack_exports__, "EveBoosterBatch", function() { return /* reexport */ EveBoosterBatch; });
__webpack_require__.d(__webpack_exports__, "EveBoosterSetItem", function() { return /* reexport */ EveBoosterSet_EveBoosterSetItem; });
__webpack_require__.d(__webpack_exports__, "EveBoosterSet", function() { return /* reexport */ EveBoosterSet_EveBoosterSet; });
__webpack_require__.d(__webpack_exports__, "EveCurveLineSetItem", function() { return /* reexport */ EveCurveLineSet_EveCurveLineSetItem; });
__webpack_require__.d(__webpack_exports__, "EveCurveLineSet", function() { return /* reexport */ EveCurveLineSet_EveCurveLineSet; });
__webpack_require__.d(__webpack_exports__, "EveLocator", function() { return /* reexport */ EveLocator_EveLocator; });
__webpack_require__.d(__webpack_exports__, "EvePlaneSetBatch", function() { return /* reexport */ EvePlaneSetBatch; });
__webpack_require__.d(__webpack_exports__, "EvePlaneSetItem", function() { return /* reexport */ EvePlaneSet_EvePlaneSetItem; });
__webpack_require__.d(__webpack_exports__, "EvePlaneSet", function() { return /* reexport */ EvePlaneSet_EvePlaneSet; });
__webpack_require__.d(__webpack_exports__, "EveSpaceObjectDecal", function() { return /* reexport */ EveSpaceObjectDecal_EveSpaceObjectDecal; });
__webpack_require__.d(__webpack_exports__, "EveSpotlightSetBatch", function() { return /* reexport */ EveSpotlightSetBatch; });
__webpack_require__.d(__webpack_exports__, "EveSpotlightSetItem", function() { return /* reexport */ EveSpotlightSet_EveSpotlightSetItem; });
__webpack_require__.d(__webpack_exports__, "EveSpotlightSet", function() { return /* reexport */ EveSpotlightSet_EveSpotlightSet; });
__webpack_require__.d(__webpack_exports__, "EveSpriteSetBatch", function() { return /* reexport */ EveSpriteSetBatch; });
__webpack_require__.d(__webpack_exports__, "EveSpriteSetItem", function() { return /* reexport */ EveSpriteSet_EveSpriteSetItem; });
__webpack_require__.d(__webpack_exports__, "EveSpriteSet", function() { return /* reexport */ EveSpriteSet_EveSpriteSet; });
__webpack_require__.d(__webpack_exports__, "EveTurretSetItem", function() { return /* reexport */ EveTurretSet_EveTurretSetItem; });
__webpack_require__.d(__webpack_exports__, "EveTurretSet", function() { return /* reexport */ EveTurretSet_EveTurretSet; });
__webpack_require__.d(__webpack_exports__, "EveSpaceScene", function() { return /* reexport */ EveSpaceScene_EveSpaceScene; });
__webpack_require__.d(__webpack_exports__, "EveSOF", function() { return /* reexport */ EveSOF; });

// EXTERNAL MODULE: ./global/index.js + 7 modules
var global = __webpack_require__(0);

// CONCATENATED MODULE: ./eve/child/EveChild.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-unused-vars:0 */

/**
 * EveChild base class
 *
 * @property {number|string} _id
 * @property {string} name
 * @property {boolean} display
 * @property {boolean} useSRT
 * @property {number} lowestLodVisible
 * @property {boolean} staticTransform
 * @property {quat} rotation
 * @property {vec3} translation
 * @property {vec3} scaling
 * @property {mat4} localTransform
 * @property {mat4} worldTransform
 * @property {mat4} worldTransformLast
 * @property {?|Tw2BasicPerObjectData|Tw2PerObjectData} _perObjectData
 * @class
 */

var EveChild_EveChild = /*#__PURE__*/function () {
  function EveChild() {
    _classCallCheck(this, EveChild);

    _defineProperty(this, "_id", global["F" /* util */].generateID());

    _defineProperty(this, "name", '');

    _defineProperty(this, "display", true);

    _defineProperty(this, "useSRT", true);

    _defineProperty(this, "lowestLodVisible", 2);

    _defineProperty(this, "staticTransform", false);

    _defineProperty(this, "rotation", global["C" /* quat */].create());

    _defineProperty(this, "translation", global["H" /* vec3 */].create());

    _defineProperty(this, "scaling", global["H" /* vec3 */].fromValues(1, 1, 1));

    _defineProperty(this, "localTransform", global["z" /* mat4 */].create());

    _defineProperty(this, "worldTransform", global["z" /* mat4 */].create());

    _defineProperty(this, "worldTransformLast", global["z" /* mat4 */].create());

    _defineProperty(this, "_perObjectData", null);

    _defineProperty(this, "isEffectChild", true);
  }

  _createClass(EveChild, [{
    key: "GetResources",

    /**
     * Gets the child's resources
     * @param {Array} [out=[]]
     * @returns {Array<Tw2Resource>} out
     */
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return out;
    }
    /**
     * Per frame update
     * @param {number} dt
     * @param {mat4} parentTransform
     */

  }, {
    key: "Update",
    value: function Update(dt, parentTransform) {
      if (this.useSRT) {
        global["C" /* quat */].normalize(this.rotation, this.rotation);
        global["z" /* mat4 */].fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);
      }

      global["z" /* mat4 */].copy(this.worldTransformLast, this.worldTransform);
      global["z" /* mat4 */].multiply(this.worldTransform, parentTransform, this.localTransform);
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {}
    /**
     * Class globals and scratch variables
     * @type {Object}
     */

  }]);

  return EveChild;
}();

_defineProperty(EveChild_EveChild, "global", {
  mat4_0: global["z" /* mat4 */].create(),
  vec3_0: global["H" /* vec3 */].create()
});

_defineProperty(EveChild_EveChild, "perObjectData", {
  FFEData: [['world', 16], ['worldInverseTranspose', 16]]
});
// EXTERNAL MODULE: ./core/index.js + 60 modules
var core = __webpack_require__(1);

// CONCATENATED MODULE: ./eve/child/EveChildBillboard.js
function EveChildBillboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveChildBillboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveChildBillboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveChildBillboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveChildBillboard_defineProperties(Constructor, staticProps); return Constructor; }

function EveChildBillboard_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { EveChildBillboard_get = Reflect.get; } else { EveChildBillboard_get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return EveChildBillboard_get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function EveChildBillboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Mesh attachment to space object and oriented towards the camera
 *
 * @property {Tw2Mesh|Tw2InstancedMesh} mesh
 * @property {Tw2BasicPerObjectData} _perObjectData
 * @class
 */

var EveChildBillboard_EveChildBillboard = /*#__PURE__*/function (_EveChild) {
  _inherits(EveChildBillboard, _EveChild);

  var _super = _createSuper(EveChildBillboard);

  function EveChildBillboard() {
    var _this;

    EveChildBillboard_classCallCheck(this, EveChildBillboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveChildBillboard_defineProperty(_assertThisInitialized(_this), "mesh", null);

    EveChildBillboard_defineProperty(_assertThisInitialized(_this), "_perObjectData", new core["Tw2BasicPerObjectData"](EveChild_EveChild.perObjectData));

    return _this;
  }

  EveChildBillboard_createClass(EveChildBillboard, [{
    key: "GetResources",

    /**
     * Gets the child's resources
     * @param {Array} [out=[]]
     * @returns {Array.<Tw2Resource>} out
     */
    value: function GetResources(out) {
      if (this.mesh) this.mesh.GetResources(out);
      return out;
    }
    /**
     * Per frame update
     * @param {number} dt
     * @param {mat4} parentTransform
     */

  }, {
    key: "Update",
    value: function Update(dt, parentTransform) {
      EveChildBillboard_get(_getPrototypeOf(EveChildBillboard.prototype), "Update", this).call(this, dt, parentTransform);

      var viewInverse = EveChild_EveChild.global.mat4_0,
          finalScale = EveChild_EveChild.global.vec3_0;
      global["z" /* mat4 */].lookAt(viewInverse, global["w" /* device */].eyePosition, this.worldTransform.subarray(12), [0, 1, 0]);
      global["z" /* mat4 */].transpose(viewInverse, viewInverse);
      global["z" /* mat4 */].getScaling(finalScale, parentTransform);
      global["H" /* vec3 */].multiply(finalScale, finalScale, this.scaling);
      this.worldTransform[0] = viewInverse[0] * finalScale[0];
      this.worldTransform[1] = viewInverse[1] * finalScale[0];
      this.worldTransform[2] = viewInverse[2] * finalScale[0];
      this.worldTransform[4] = viewInverse[4] * finalScale[1];
      this.worldTransform[5] = viewInverse[5] * finalScale[1];
      this.worldTransform[6] = viewInverse[6] * finalScale[1];
      this.worldTransform[8] = viewInverse[8] * finalScale[2];
      this.worldTransform[9] = viewInverse[9] * finalScale[2];
      this.worldTransform[10] = viewInverse[10] * finalScale[2];
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (this.display && this.mesh) {
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectFFEData.Get('world'), this.worldTransform);
        global["z" /* mat4 */].invert(this._perObjectData.perObjectFFEData.Get('worldInverseTranspose'), this.worldTransform);
        this.mesh.GetBatches(mode, accumulator, this._perObjectData);
      }
    }
  }]);

  return EveChildBillboard;
}(EveChild_EveChild);
// CONCATENATED MODULE: ./eve/child/EveChildCloud.js
function EveChildCloud_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveChildCloud_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveChildCloud_setPrototypeOf(subClass, superClass); }

function EveChildCloud_setPrototypeOf(o, p) { EveChildCloud_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveChildCloud_setPrototypeOf(o, p); }

function EveChildCloud_createSuper(Derived) { var hasNativeReflectConstruct = EveChildCloud_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveChildCloud_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveChildCloud_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveChildCloud_possibleConstructorReturn(this, result); }; }

function EveChildCloud_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveChildCloud_assertThisInitialized(self); }

function EveChildCloud_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveChildCloud_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveChildCloud_getPrototypeOf(o) { EveChildCloud_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveChildCloud_getPrototypeOf(o); }

function EveChildCloud_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * EveChildCloud - not implemented
 *
 * @class
 */

var EveChildCloud = /*#__PURE__*/function (_EveChild) {
  EveChildCloud_inherits(EveChildCloud, _EveChild);

  var _super = EveChildCloud_createSuper(EveChildCloud);

  function EveChildCloud() {
    EveChildCloud_classCallCheck(this, EveChildCloud);

    return _super.apply(this, arguments);
  }

  return EveChildCloud;
}(EveChild_EveChild);

EveChildCloud_defineProperty(EveChildCloud, "partialImplementation", true);
// CONCATENATED MODULE: ./eve/child/EveChildContainer.js
function EveChildContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveChildContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveChildContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveChildContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveChildContainer_defineProperties(Constructor, staticProps); return Constructor; }

function EveChildContainer_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { EveChildContainer_get = Reflect.get; } else { EveChildContainer_get = function _get(target, property, receiver) { var base = EveChildContainer_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return EveChildContainer_get(target, property, receiver || target); }

function EveChildContainer_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = EveChildContainer_getPrototypeOf(object); if (object === null) break; } return object; }

function EveChildContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveChildContainer_setPrototypeOf(subClass, superClass); }

function EveChildContainer_setPrototypeOf(o, p) { EveChildContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveChildContainer_setPrototypeOf(o, p); }

function EveChildContainer_createSuper(Derived) { var hasNativeReflectConstruct = EveChildContainer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveChildContainer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveChildContainer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveChildContainer_possibleConstructorReturn(this, result); }; }

function EveChildContainer_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveChildContainer_assertThisInitialized(self); }

function EveChildContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveChildContainer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveChildContainer_getPrototypeOf(o) { EveChildContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveChildContainer_getPrototypeOf(o); }

function EveChildContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Container for other child effects
 *
 * @parameter {Array.<{}>} objects
 * @parameter {Array.<Tw2CurveSet>} curveSets
 * @class
 */

var EveChildContainer = /*#__PURE__*/function (_EveChild) {
  EveChildContainer_inherits(EveChildContainer, _EveChild);

  var _super = EveChildContainer_createSuper(EveChildContainer);

  function EveChildContainer() {
    var _this;

    EveChildContainer_classCallCheck(this, EveChildContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveChildContainer_defineProperty(EveChildContainer_assertThisInitialized(_this), "objects", []);

    EveChildContainer_defineProperty(EveChildContainer_assertThisInitialized(_this), "curveSets", []);

    return _this;
  }

  EveChildContainer_createClass(EveChildContainer, [{
    key: "GetResources",

    /**
     * Gets the child's resources
     * @param {Array} [out=[]]
     * @returns {Array<Tw2Resource>} out
     */
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      for (var i = 0; i < this.objects.length; i++) {
        if ('GetResources' in this.objects[i]) {
          this.objects[i].GetResources(out);
        }
      }

      return out;
    }
    /**
     * Per frame update
     * @param {number} dt
     * @param {mat4} parentTransform
     */

  }, {
    key: "Update",
    value: function Update(dt, parentTransform) {
      EveChildContainer_get(EveChildContainer_getPrototypeOf(EveChildContainer.prototype), "Update", this).call(this, dt, parentTransform);

      for (var i = 0; i < this.curveSets.length; i++) {
        this.curveSets[i].Update(dt);
      }

      for (var _i = 0; _i < this.objects.length; _i++) {
        this.objects[_i].Update(dt, this.worldTransform);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (this.display) {
        for (var i = 0; i < this.objects.length; i++) {
          this.objects[i].GetBatches(mode, accumulator, perObjectData);
        }
      }
    }
  }]);

  return EveChildContainer;
}(EveChild_EveChild);
// CONCATENATED MODULE: ./eve/child/EveChildExplosion.js
function EveChildExplosion_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveChildExplosion_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveChildExplosion_setPrototypeOf(subClass, superClass); }

function EveChildExplosion_setPrototypeOf(o, p) { EveChildExplosion_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveChildExplosion_setPrototypeOf(o, p); }

function EveChildExplosion_createSuper(Derived) { var hasNativeReflectConstruct = EveChildExplosion_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveChildExplosion_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveChildExplosion_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveChildExplosion_possibleConstructorReturn(this, result); }; }

function EveChildExplosion_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveChildExplosion_assertThisInitialized(self); }

function EveChildExplosion_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveChildExplosion_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveChildExplosion_getPrototypeOf(o) { EveChildExplosion_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveChildExplosion_getPrototypeOf(o); }

function EveChildExplosion_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * 'Complex' explosion object. Not implemented.
 *
 * @class
 */

var EveChildExplosion = /*#__PURE__*/function (_EveChild) {
  EveChildExplosion_inherits(EveChildExplosion, _EveChild);

  var _super = EveChildExplosion_createSuper(EveChildExplosion);

  function EveChildExplosion() {
    EveChildExplosion_classCallCheck(this, EveChildExplosion);

    return _super.apply(this, arguments);
  }

  return EveChildExplosion;
}(EveChild_EveChild);

EveChildExplosion_defineProperty(EveChildExplosion, "partialImplementation", true);
// CONCATENATED MODULE: ./eve/child/EveChildMesh.js
function EveChildMesh_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveChildMesh_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveChildMesh_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveChildMesh_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveChildMesh_defineProperties(Constructor, staticProps); return Constructor; }

function EveChildMesh_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveChildMesh_setPrototypeOf(subClass, superClass); }

function EveChildMesh_setPrototypeOf(o, p) { EveChildMesh_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveChildMesh_setPrototypeOf(o, p); }

function EveChildMesh_createSuper(Derived) { var hasNativeReflectConstruct = EveChildMesh_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveChildMesh_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveChildMesh_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveChildMesh_possibleConstructorReturn(this, result); }; }

function EveChildMesh_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveChildMesh_assertThisInitialized(self); }

function EveChildMesh_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveChildMesh_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveChildMesh_getPrototypeOf(o) { EveChildMesh_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveChildMesh_getPrototypeOf(o); }

function EveChildMesh_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Mesh attachment to space object
 *
 * @property {Tw2Mesh|Tw2InstancedMesh} mesh
 * @property {boolean} useSpaceObjectData
 * @class
 */

var EveChildMesh_EveChildMesh = /*#__PURE__*/function (_EveChild) {
  EveChildMesh_inherits(EveChildMesh, _EveChild);

  var _super = EveChildMesh_createSuper(EveChildMesh);

  function EveChildMesh() {
    var _this;

    EveChildMesh_classCallCheck(this, EveChildMesh);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveChildMesh_defineProperty(EveChildMesh_assertThisInitialized(_this), "mesh", null);

    EveChildMesh_defineProperty(EveChildMesh_assertThisInitialized(_this), "useSpaceObjectData", true);

    return _this;
  }

  EveChildMesh_createClass(EveChildMesh, [{
    key: "GetResources",

    /**
     * Gets the child's resources
     * @param {Array} [out=[]]
     * @returns {Array.<Tw2Resource>} out
     */
    value: function GetResources(out) {
      if (this.mesh) this.mesh.GetResources(out);
      return out;
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (!this.display || !this.mesh) return;

      if (this.useSpaceObjectData) {
        if (!this._perObjectData) {
          this._perObjectData = new core["Tw2PerObjectData"]();
          this._perObjectData.perObjectVSData = new core["Tw2RawData"]();
          this._perObjectData.perObjectVSData.data = new Float32Array(perObjectData.perObjectVSData.data.length);
          this._perObjectData.perObjectVSData.data[33] = 1;
          this._perObjectData.perObjectVSData.data[35] = 1;
          this._perObjectData.perObjectPSData = new core["Tw2RawData"]();
          this._perObjectData.perObjectPSData.data = new Float32Array(perObjectData.perObjectPSData.data.length);
          this._perObjectData.perObjectPSData.data[1] = 1;
          this._perObjectData.perObjectPSData.data[3] = 1;
        }

        this._perObjectData.perObjectVSData.data.set(perObjectData.perObjectVSData.data);

        this._perObjectData.perObjectPSData.data.set(perObjectData.perObjectPSData.data);

        global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.data, this.worldTransform);
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.data.subarray(16), this.worldTransformLast);
      } else {
        if (!this._perObjectData) {
          this._perObjectData = new core["Tw2BasicPerObjectData"](EveChild_EveChild.perObjectData);
        }

        global["z" /* mat4 */].transpose(this._perObjectData.perObjectFFEData.Get('world'), this.worldTransform);
        global["z" /* mat4 */].invert(this._perObjectData.perObjectFFEData.Get('worldInverseTranspose'), this.worldTransform);
      }

      this.mesh.GetBatches(mode, accumulator, this._perObjectData);
    }
  }]);

  return EveChildMesh;
}(EveChild_EveChild);
// CONCATENATED MODULE: ./eve/child/EveChildParticleSystem.js
function EveChildParticleSystem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveChildParticleSystem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveChildParticleSystem_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveChildParticleSystem_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveChildParticleSystem_defineProperties(Constructor, staticProps); return Constructor; }

function EveChildParticleSystem_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { EveChildParticleSystem_get = Reflect.get; } else { EveChildParticleSystem_get = function _get(target, property, receiver) { var base = EveChildParticleSystem_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return EveChildParticleSystem_get(target, property, receiver || target); }

function EveChildParticleSystem_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = EveChildParticleSystem_getPrototypeOf(object); if (object === null) break; } return object; }

function EveChildParticleSystem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveChildParticleSystem_setPrototypeOf(subClass, superClass); }

function EveChildParticleSystem_setPrototypeOf(o, p) { EveChildParticleSystem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveChildParticleSystem_setPrototypeOf(o, p); }

function EveChildParticleSystem_createSuper(Derived) { var hasNativeReflectConstruct = EveChildParticleSystem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveChildParticleSystem_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveChildParticleSystem_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveChildParticleSystem_possibleConstructorReturn(this, result); }; }

function EveChildParticleSystem_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveChildParticleSystem_assertThisInitialized(self); }

function EveChildParticleSystem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveChildParticleSystem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveChildParticleSystem_getPrototypeOf(o) { EveChildParticleSystem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveChildParticleSystem_getPrototypeOf(o); }

function EveChildParticleSystem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Particle system attachment to space object
 *
 * @property {Tw2Mesh} mesh
 * @property {Array<Tw2ParticleEmitter>} particleEmitters
 * @property {Array<Tw2ParticleSystem>} particleSystems
 * @property {Tw2BasicPerObjectData} _perObjectData
 * @class
 */

var EveChildParticleSystem_EveChildParticleSystem = /*#__PURE__*/function (_EveChild) {
  EveChildParticleSystem_inherits(EveChildParticleSystem, _EveChild);

  var _super = EveChildParticleSystem_createSuper(EveChildParticleSystem);

  function EveChildParticleSystem() {
    var _this;

    EveChildParticleSystem_classCallCheck(this, EveChildParticleSystem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveChildParticleSystem_defineProperty(EveChildParticleSystem_assertThisInitialized(_this), "mesh", null);

    EveChildParticleSystem_defineProperty(EveChildParticleSystem_assertThisInitialized(_this), "particleEmitters", []);

    EveChildParticleSystem_defineProperty(EveChildParticleSystem_assertThisInitialized(_this), "particleSystems", []);

    EveChildParticleSystem_defineProperty(EveChildParticleSystem_assertThisInitialized(_this), "_perObjectData", new core["Tw2BasicPerObjectData"](EveChild_EveChild.perObjectData));

    return _this;
  }

  EveChildParticleSystem_createClass(EveChildParticleSystem, [{
    key: "GetResources",

    /**
     * Gets the child's resources
     * @param {Array} [out=[]]
     * @returns {Array.<Tw2Resource>} out
     */
    value: function GetResources(out) {
      if (this.mesh) this.mesh.GetResources(out);
      return out;
    }
    /**
     * Per frame update
     * @param {number} dt
     * @param {mat4} parentTransform
     */

  }, {
    key: "Update",
    value: function Update(dt, parentTransform) {
      EveChildParticleSystem_get(EveChildParticleSystem_getPrototypeOf(EveChildParticleSystem.prototype), "Update", this).call(this, dt, parentTransform);

      for (var i = 0; i < this.particleEmitters.length; ++i) {
        this.particleEmitters[i].Update(dt);
      }

      for (var _i = 0; _i < this.particleSystems.length; ++_i) {
        this.particleSystems[_i].Update(dt);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (this.display && this.mesh) {
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectFFEData.Get('world'), this.worldTransform);
        global["z" /* mat4 */].invert(this._perObjectData.perObjectFFEData.Get('worldInverseTranspose'), this.worldTransform);
        this.mesh.GetBatches(mode, accumulator, this._perObjectData);
      }
    }
  }]);

  return EveChildParticleSystem;
}(EveChild_EveChild);
// CONCATENATED MODULE: ./eve/child/index.js







// CONCATENATED MODULE: ./eve/effect/EveOccluder.js
function EveOccluder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveOccluder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveOccluder_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveOccluder_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveOccluder_defineProperties(Constructor, staticProps); return Constructor; }

function EveOccluder_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * EveOccluder
 *
 * @property {number|string} _id
 * @property {String} name
 * @property {number} value
 * @property {Array.<EveSpriteSet>} sprites
 * @class
 */

var EveOccluder_EveOccluder = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function EveOccluder() {
    EveOccluder_classCallCheck(this, EveOccluder);

    EveOccluder_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveOccluder_defineProperty(this, "name", '');

    EveOccluder_defineProperty(this, "value", 1);

    EveOccluder_defineProperty(this, "sprites", []);

    EveOccluder.init();
  }
  /**
   * UpdateValues
   * @param {mat4} parentTransform
   * @param {number} index
   */


  EveOccluder_createClass(EveOccluder, [{
    key: "UpdateValue",
    value: function UpdateValue(parentTransform, index) {
      if (!global["w" /* device */].alphaBlendBackBuffer) return;
      var d = global["w" /* device */],
          g = EveOccluder.global,
          worldViewProj = g.mat4_0,
          center = g.vec4_0;
      g.accumulator.Clear();

      for (var i = 0; i < this.sprites.length; ++i) {
        this.sprites[i].UpdateViewDependentData(parentTransform);
        this.sprites[i].GetBatches(d.RM_DECAL, g.accumulator);
      }

      global["E" /* store */].SetVariableValue('OccluderValue', [(1 << index * 2) / 255.0, (2 << index * 2) / 255.0, 0, 0]);
      g.accumulator.Render();
      global["z" /* mat4 */].multiply(worldViewProj, d.viewProjection, this.sprites[0].worldTransform);
      global["I" /* vec4 */].transformMat4(center, [0, 0, 0, 1], worldViewProj);
      var x0 = (center[0] / center[3] + 1) * 0.5,
          y0 = (center[1] / center[3] + 1) * 0.5;
      global["I" /* vec4 */].set(center, 0.5, 0.5, 0, 1);
      global["I" /* vec4 */].transformMat4(center, center, worldViewProj);
      var x1 = (center[0] / center[3] + 1) * 0.5,
          y1 = (center[1] / center[3] + 1) * 0.5;
      center[0] = x0;
      center[1] = y0;
      center[2] = x1 - x0;
      center[3] = y1 - y0;
      g.effect.parameters.OccluderPosition.SetValue(center);
    }
    /**
     * CollectSamples
     * @param {Tw2TextureRes} tex
     * @param {number} index
     * @param {number} total
     * @param {number} samples
     * @returns boolean
     */

  }], [{
    key: "CollectSamples",
    value: function CollectSamples(tex, index, total, samples) {
      var d = global["w" /* device */],
          g = this.global,
          effect = g.effect,
          vertexBuffer = g.vertexBuffer,
          decl = g.decl;
      if (!effect.effectRes || !effect.effectRes.IsGood()) return false;
      effect.parameters.BackBuffer.textureRes = tex;
      effect.parameters.OccluderIndex.SetValue([index, total, samples]);
      d.SetStandardStates(d.RM_ADDITIVE);
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, vertexBuffer);

      for (var pass = 0; pass < effect.GetPassCount('Main'); ++pass) {
        effect.ApplyPass('Main', pass);
        if (decl.SetDeclaration(effect.GetPassInput('Main', pass), 16)) return false;
        d.ApplyShadowState();
        d.gl.drawArrays(d.gl.TRIANGLES, 0, 255 * 6);
      }

      return true;
    }
    /**
     * Initializes class globals and scratch variables
     */

  }, {
    key: "init",
    value: function init() {
      if (EveOccluder.global) return;
      var d = global["w" /* device */],
          g = EveOccluder.global = {};
      g.mat4_0 = global["z" /* mat4 */].create();
      g.vec4_0 = global["I" /* vec4 */].create();
      g.accumulator = new core["Tw2BatchAccumulator"]();
      g.effect = core["Tw2Effect"].create({
        name: 'Occluder sampler',
        effectFilePath: 'res:/graphics/effect/managed/space/specialfx/lensflares/collectsamples.fx',
        parameters: {
          'OccluderPosition': [1, 1, 1, 1],
          'OccluderIndex': [1, 1, 1],
          'BackBuffer': ''
        }
      });
      g.vertexBuffer = null;
      g.decl = new core["Tw2VertexDeclaration"]();
      g.decl.elements.push(new core["Tw2VertexElement"](core["Tw2VertexDeclaration"].Type.POSITION, 0, d.gl.FLOAT, 2, 0));
      g.decl.elements.push(new core["Tw2VertexElement"](core["Tw2VertexDeclaration"].Type.TEXCOORD, 0, d.gl.FLOAT, 2, 8));
      g.decl.RebuildHash();
      var vb = new Float32Array(255 * 6 * 4);
      var index = 0;

      for (var i = 0; i < 16; ++i) {
        for (var j = 0; j < 16; ++j) {
          var x = (i + Math.random()) / 16 * 2 - 1,
              y = (j + Math.random()) / 16 * 2 - 1;
          vb[index++] = 1;
          vb[index++] = 1;
          vb[index++] = x;
          vb[index++] = y;
          vb[index++] = -1;
          vb[index++] = 1;
          vb[index++] = x;
          vb[index++] = y;
          vb[index++] = 1;
          vb[index++] = -1;
          vb[index++] = x;
          vb[index++] = y;
          vb[index++] = -1;
          vb[index++] = 1;
          vb[index++] = x;
          vb[index++] = y;
          vb[index++] = 1;
          vb[index++] = -1;
          vb[index++] = x;
          vb[index++] = y;
          vb[index++] = -1;
          vb[index++] = -1;
          vb[index++] = x;
          vb[index++] = y;
        }
      }

      g.vertexBuffer = d.gl.createBuffer();
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, g.vertexBuffer);
      d.gl.bufferData(d.gl.ARRAY_BUFFER, vb, d.gl.STATIC_DRAW);
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, null);
    }
    /**
     * Global and scratch variables
     * @type {*}
     */

  }]);

  return EveOccluder;
}();

EveOccluder_defineProperty(EveOccluder_EveOccluder, "global", null);
// CONCATENATED MODULE: ./eve/effect/EveLensflare.js
function EveLensflare_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveLensflare_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveLensflare_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveLensflare_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveLensflare_defineProperties(Constructor, staticProps); return Constructor; }

function EveLensflare_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveLensFlare
 *
 * @property {number|string} _id
 * @property {String} name=
 * @property {boolean} display
 * @property {boolean} update
 * @property {boolean} doOcclusionQueries
 * @property {number} cameraFactor
 * @property {vec3} position
 * @property {Array} flares
 * @property {Array.<EveOccluder>} occluders
 * @property {Array.<EveOccluder>} backgroundOccluders
 * @property {number} occlusionIntensity
 * @property {number} backgroundOcclusionIntensity
 * @property {Array} distanceToEdgeCurves
 * @property {Array} distanceToCenterCurves
 * @property {Array} radialAngleCurves
 * @property {Array} xDistanceToCenter
 * @property {Array} yDistanceToCenter
 * @property {Array} bindings
 * @property {Array.<Tw2CurveSet>} curveSets
 * @property {?Tw2Mesh} mesh
 * @property {vec3} _direction
 * @property {mat4} _transform
 * @property {*} _backBuffer
 * @class
 */

var EveLensflare_EveLensflare = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function EveLensflare() {
    EveLensflare_classCallCheck(this, EveLensflare);

    EveLensflare_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveLensflare_defineProperty(this, "name", '');

    EveLensflare_defineProperty(this, "display", true);

    EveLensflare_defineProperty(this, "update", true);

    EveLensflare_defineProperty(this, "doOcclusionQueries", true);

    EveLensflare_defineProperty(this, "cameraFactor", 20);

    EveLensflare_defineProperty(this, "position", global["H" /* vec3 */].create());

    EveLensflare_defineProperty(this, "flares", []);

    EveLensflare_defineProperty(this, "occluders", []);

    EveLensflare_defineProperty(this, "backgroundOccluders", []);

    EveLensflare_defineProperty(this, "occlusionIntensity", 1);

    EveLensflare_defineProperty(this, "backgroundOcclusionIntensity", 1);

    EveLensflare_defineProperty(this, "distanceToEdgeCurves", []);

    EveLensflare_defineProperty(this, "distanceToCenterCurves", []);

    EveLensflare_defineProperty(this, "radialAngleCurves", []);

    EveLensflare_defineProperty(this, "xDistanceToCenter", []);

    EveLensflare_defineProperty(this, "yDistanceToCenter", []);

    EveLensflare_defineProperty(this, "bindings", []);

    EveLensflare_defineProperty(this, "curveSets", []);

    EveLensflare_defineProperty(this, "mesh", null);

    EveLensflare_defineProperty(this, "_direction", global["H" /* vec3 */].create());

    EveLensflare_defineProperty(this, "_transform", global["z" /* mat4 */].create());

    EveLensflare_defineProperty(this, "_backBuffer", null);

    EveLensflare.init();
  }
  /**
   * Gets lensflares's res objects
   * @param {Array} [out=[]] - Optional receiving array
   * @returns {Array.<Tw2Resource>} [out]
   */


  EveLensflare_createClass(EveLensflare, [{
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (this.mesh) this.mesh.GetResources(out);

      for (var i = 0; i < this.flares.length; i++) {
        this.flares[i].GetResources(out);
      }

      if (EveOccluder_EveOccluder.global && EveOccluder_EveOccluder.global.effect && !out.includes(EveOccluder_EveOccluder.global.effect)) {
        out.push(EveOccluder_EveOccluder.global.effect);
      }

      return out;
    }
    /**
     * Updates Occluders
     */

  }, {
    key: "UpdateOccluders",
    value: function UpdateOccluders() {
      if (!this.doOcclusionQueries) return;
      var d = global["w" /* device */],
          g = EveLensflare.global;

      if (!g.occluderLevels[0].texture || g.occluderLevels[0].width < this.occluders.length * 2) {
        for (var i = 0; i < g.occluderLevels.length; ++i) {
          g.occluderLevels[i].Create(this.occluders.length * 2, 1, false);
        }
      } // TODO: Is this deprecated?


      for (var j = 0; j < this.flares.length; ++j) {
        if ('_backBuffer' in this.flares[j]) {
          this.flares[j]._backBuffer.textureRes = g.occluderLevels.texture;
        }
      }

      this.occlusionIntensity = 1;
      this.backgroundOcclusionIntensity = 1;
      g.occluderLevels[g.occludedLevelIndex].Set();
      d.SetStandardStates(d.RM_OPAQUE);
      d.gl.clearColor(0.0, 0.0, 0.0, 1.0);
      d.gl.clear(d.gl.COLOR_BUFFER_BIT);
      g.occluderLevels[g.occludedLevelIndex].Unset();
      var samples = 1;

      if (d.antialiasing) {
        samples = d.msaaSamples;
        d.gl.sampleCoverage(1.0 / samples, false);
      }

      for (var _i = 0; _i < this.occluders.length; ++_i) {
        d.SetRenderState(d.RS_COLORWRITEENABLE, 8);
        d.gl.colorMask(false, false, false, true);
        d.gl.clearColor(0.0, 0.0, 0.0, 0.0);
        d.gl.clear(d.gl.COLOR_BUFFER_BIT); // Turn off antialiasing

        if (d.antialiasing) {
          d.gl.enable(d.gl.SAMPLE_COVERAGE);
          d.gl.sampleCoverage(0.25, false);
        }

        this.occluders[_i].UpdateValue(this._transform, _i);

        if (d.antialiasing) d.gl.disable(d.gl.SAMPLE_COVERAGE); // Copy back buffer into a texture

        if (!g.backBuffer.texture) g.backBuffer.Attach(d.gl.createTexture());
        d.gl.bindTexture(d.gl.TEXTURE_2D, g.backBuffer.texture);

        if (g.backBuffer.width !== d.viewportWidth || g.backBuffer.height !== d.viewportHeight) {
          d.gl.texImage2D(d.gl.TEXTURE_2D, 0, d.gl.RGBA, d.viewportWidth, d.viewportHeight, 0, d.gl.RGBA, d.gl.UNSIGNED_BYTE, null);
          d.gl.texParameteri(d.gl.TEXTURE_2D, d.gl.TEXTURE_MAG_FILTER, d.gl.LINEAR);
          d.gl.texParameteri(d.gl.TEXTURE_2D, d.gl.TEXTURE_MIN_FILTER, d.gl.LINEAR);
          g.backBuffer.width = d.viewportWidth;
          g.backBuffer.height = d.viewportHeight;
        }

        d.gl.copyTexImage2D(d.gl.TEXTURE_2D, 0, d.alphaBlendBackBuffer ? d.gl.RGBA : d.gl.RGB, 0, 0, g.backBuffer.width, g.backBuffer.height, 0);
        d.gl.bindTexture(d.gl.TEXTURE_2D, null); // Collect samples

        g.occluderLevels[g.occludedLevelIndex].Set();
        EveOccluder_EveOccluder.CollectSamples(g.backBuffer, _i, g.occluderLevels[0].width / 2, samples);
        g.occluderLevels[g.occludedLevelIndex].Unset();
      }

      if (d.antialiasing) d.gl.sampleCoverage(1, false);
      g.occluderLevels[(g.occludedLevelIndex + 1) % g.occluderLevels.length].Set();
      var pixels = new Uint8Array(g.occluderLevels[0].width * 4);
      d.gl.readPixels(0, 0, 2, 1, d.gl.RGBA, d.gl.UNSIGNED_BYTE, pixels);
      g.occluderLevels[(g.occludedLevelIndex + 1) % g.occluderLevels.length].Unset();
      this.occlusionIntensity = 1;

      for (var _i2 = 0; _i2 < g.occluderLevels[0].width * 2; _i2 += 4) {
        this.occlusionIntensity *= pixels[_i2 + 1] ? pixels[_i2] / pixels[_i2 + 1] : 1;
      }

      this.backgroundOcclusionIntensity = this.occlusionIntensity;
      global["E" /* store */].SetVariableValue('LensflareFxOccScale', [this.occlusionIntensity, this.occlusionIntensity, 0, 0]);
      g.occludedLevelIndex = (g.occludedLevelIndex + 1) % g.occluderLevels.length;
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (this.display) {
        var viewDir = global["I" /* vec4 */].set(EveLensflare.global.vec4_0, 0, 0, 1, 0);
        global["I" /* vec4 */].transformMat4(viewDir, viewDir, global["w" /* device */].viewInverse);
        if (global["H" /* vec3 */].dot(viewDir, this._direction) < 0) return;

        for (var i = 0; i < this.flares.length; ++i) {
          this.flares[i].GetBatches(mode, accumulator, perObjectData);
        }

        if (this.mesh) {
          this.mesh.GetBatches(mode, accumulator, perObjectData);
        }
      }
    }
    /**
     * Prepares the lensflare for rendering
     */

  }, {
    key: "PrepareRender",
    value: function PrepareRender() {
      if (!this.display) return;
      var g = EveLensflare.global,
          viewDir = g.vec4_0,
          cameraPos = g.vec3_0,
          scaleMat = global["z" /* mat4 */].identity(g.mat4_0),
          cameraSpacePos = g.vec3_2,
          negDirVec = g.vec3_3,
          negPos = g.vec3_1,
          dist = g.vec4_1;
      global["H" /* vec3 */].transformMat4(cameraPos, [0, 0, 0], global["w" /* device */].viewInverse);

      if (global["H" /* vec3 */].length(this.position) === 0) {
        global["H" /* vec3 */].negate(negPos, cameraPos); //let distScale = vec3.length(negPos);
        //distScale = distScale > 1.5 ? 1 / Math.log(distScale) : 2.5;
      } else {
        global["H" /* vec3 */].negate(negPos, this.position);
        global["H" /* vec3 */].normalize(this._direction, negPos);
      }

      global["I" /* vec4 */].transformMat4(viewDir, [0, 0, 1, 0], global["w" /* device */].viewInverse);
      global["H" /* vec3 */].scaleAndAdd(cameraSpacePos, cameraPos, viewDir, -this.cameraFactor);
      global["H" /* vec3 */].negate(negDirVec, this._direction);
      global["z" /* mat4 */].arcFromForward(this._transform, negDirVec);
      global["z" /* mat4 */].setTranslation(this._transform, cameraSpacePos);
      global["z" /* mat4 */].scale(scaleMat, scaleMat, [this.occlusionIntensity, this.occlusionIntensity, 1]); //mat4.multiply(scaleMat, scaleMat, this._transform);

      var dir = this._direction;
      global["E" /* store */].SetVariableValue('LensflareFxDirectionScale', [dir[0], dir[1], dir[2], 1]);
      global["I" /* vec4 */].set(dist, dir[0], dir[1], dir[2], 0);
      global["I" /* vec4 */].transformMat4(dist, dist, global["w" /* device */].view);
      global["I" /* vec4 */].transformMat4(dist, dist, global["w" /* device */].projection);
      dist[0] /= dist[3];
      dist[1] /= dist[3];
      var distToEdge = 1 - Math.min(1 - Math.abs(dist[0]), 1 - Math.abs(dist[1])),
          distToCenter = Math.sqrt(dist[0] * dist[0] + dist[1] * dist[1]),
          radialAngle = Math.atan2(dist[1], dist[0]) + Math.PI;

      for (var i = 0; i < this.distanceToEdgeCurves.length; ++i) {
        this.distanceToEdgeCurves[i].UpdateValue(distToEdge);
      }

      for (var _i3 = 0; _i3 < this.distanceToCenterCurves.length; ++_i3) {
        this.distanceToCenterCurves[_i3].UpdateValue(distToCenter);
      }

      for (var _i4 = 0; _i4 < this.radialAngleCurves.length; ++_i4) {
        this.radialAngleCurves[_i4].UpdateValue(radialAngle);
      }

      for (var _i5 = 0; _i5 < this.xDistanceToCenter.length; ++_i5) {
        this.xDistanceToCenter[_i5].UpdateValue(dist[0] + 10);
      }

      for (var _i6 = 0; _i6 < this.yDistanceToCenter.length; ++_i6) {
        this.yDistanceToCenter[_i6].UpdateValue(dist[1] + 10);
      }

      for (var _i7 = 0; _i7 < this.bindings.length; ++_i7) {
        this.bindings[_i7].CopyValue();
      }

      for (var _i8 = 0; _i8 < this.flares.length; ++_i8) {
        this.flares[_i8].UpdateViewDependentData(this._transform);
      }
    }
    /**
     * Initializes class global and scratch variables
     */

  }], [{
    key: "init",
    value: function init() {
      if (!EveLensflare.global) {
        var g = EveLensflare.global = {};
        g.vec3_0 = global["H" /* vec3 */].create();
        g.vec3_1 = global["H" /* vec3 */].create();
        g.vec3_2 = global["H" /* vec3 */].create();
        g.vec3_3 = global["H" /* vec3 */].create();
        g.vec4_0 = global["I" /* vec4 */].create();
        g.vec4_1 = global["I" /* vec4 */].create();
        g.mat4_0 = global["z" /* mat4 */].create();
        g.backBuffer = new core["Tw2TextureRes"]();
        g.backBuffer.width = 0;
        g.backBuffer.height = 0;
        g.backBuffer.hasMipMaps = false;
        g.occludedLevelIndex = 0;
        g.occluderLevels = [new core["Tw2RenderTarget"](), new core["Tw2RenderTarget"](), new core["Tw2RenderTarget"](), new core["Tw2RenderTarget"]()];
      }
    }
    /**
     * Global and scratch variables
     * @type {*}
     */

  }]);

  return EveLensflare;
}();

EveLensflare_defineProperty(EveLensflare_EveLensflare, "global", null);
// CONCATENATED MODULE: ./eve/effect/EveMeshOverlayEffect.js
function EveMeshOverlayEffect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveMeshOverlayEffect_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveMeshOverlayEffect_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveMeshOverlayEffect_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveMeshOverlayEffect_defineProperties(Constructor, staticProps); return Constructor; }

function EveMeshOverlayEffect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Constructor for Overlay Effects
 *
 * @property {number|string} _id
 * @property {string} name
 * @property {boolean} display                     - Enables/ disables all batch accumulations
 * @property {{}} visible                          - Batch accumulation options for the overlay effect
 * @property {boolean} visible.opaqueEffects       - Enables/ disables opaque effect batch accumulation
 * @property {boolean} visible.decalEffects        - Enables/ disables decal effect batch accumulation
 * @property {boolean} visible.transparentEffects  - Enables/ disables transparent effect batch accumulation
 * @property {boolean} visible.additiveEffects     - Enables/ disables additive effect batch accumulation
 * @property {boolean} visible.distortionEffects   - Currently not supported
 * @property {boolean} update
 * @property {Tw2CurveSet} curveSet
 * @property {Array.<Tw2Effect>} opaqueEffects
 * @property {Array.<Tw2Effect>} decalEffects
 * @property {Array.<Tw2Effect>} transparentEffects
 * @property {Array.<Tw2Effect>} additiveEffects
 * @property {Array.<Tw2Effect>} distortionEffects - Currently not supported
 * @class
 */

var EveMeshOverlayEffect_EveMeshOverlayEffect = /*#__PURE__*/function () {
  function EveMeshOverlayEffect() {
    EveMeshOverlayEffect_classCallCheck(this, EveMeshOverlayEffect);

    EveMeshOverlayEffect_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveMeshOverlayEffect_defineProperty(this, "name", '');

    EveMeshOverlayEffect_defineProperty(this, "display", true);

    EveMeshOverlayEffect_defineProperty(this, "visible", {
      opaqueEffects: true,
      decalEffects: true,
      transparentEffects: true,
      additiveEffects: true,
      distortionEffects: true
    });

    EveMeshOverlayEffect_defineProperty(this, "update", true);

    EveMeshOverlayEffect_defineProperty(this, "curveSet", null);

    EveMeshOverlayEffect_defineProperty(this, "opaqueEffects", []);

    EveMeshOverlayEffect_defineProperty(this, "decalEffects", []);

    EveMeshOverlayEffect_defineProperty(this, "transparentEffects", []);

    EveMeshOverlayEffect_defineProperty(this, "additiveEffects", []);

    EveMeshOverlayEffect_defineProperty(this, "distortionEffects", []);
  }

  EveMeshOverlayEffect_createClass(EveMeshOverlayEffect, [{
    key: "GetResources",

    /**
     * Gets the mesh overlay's resources
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      global["F" /* util */].perArrayChild(this.opaqueEffects, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.decalEffects, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.transparentEffects, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.additiveEffects, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.distortionEffects, 'GetResources', out);
      return out;
    }
    /**
     * Per frame update
     * @param {number} dt - delta Time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      if (this.update && this.curveSet) this.curveSet.Update(dt);
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     * @param {Tw2Mesh} mesh
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData, mesh) {
      if (!this.display || !mesh || !mesh.IsGood()) return;
      var effects = this.GetEffects(mode);

      for (var i = 0; i < effects.length; i++) {
        var batch = new core["Tw2GeometryBatch"]();
        batch.renderMode = mode;
        batch.perObjectData = perObjectData;
        batch.geometryRes = mesh.geometryResource;
        batch.meshIx = mesh.meshIndex;
        batch.start = 0;
        batch.count = mesh.geometryResource.meshes[mesh.meshIndex].areas.length;
        batch.effect = effects[i];
        accumulator.Commit(batch);
      }
    }
    /**
     * Gets effects
     * @param {number} mode
     * @returns {Array.<Tw2Effect>}
     */

  }, {
    key: "GetEffects",
    value: function GetEffects(mode) {
      if (this.display) {
        switch (mode) {
          case global["w" /* device */].RM_OPAQUE:
            if (this.visible.opaqueEffects) return this.opaqueEffects;
            break;

          case global["w" /* device */].RM_TRANSPARENT:
            if (this.visible.transparentEffects) return this.transparentEffects;
            break;

          case global["w" /* device */].RM_ADDITIVE:
            if (this.visible.additiveEffects) return this.additiveEffects;
            break;

          case global["w" /* device */].RM_DECAL:
            if (this.visible.decalEffects) return this.decalEffects;
            break;

          case global["w" /* device */].RM_DISTORTION:
            if (this.visible.distortionEffects) return this.distortionEffects;
        }
      }

      return [];
    }
  }]);

  return EveMeshOverlayEffect;
}();
// CONCATENATED MODULE: ./eve/effect/EveStretch.js
function EveStretch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveStretch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveStretch_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveStretch_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveStretch_defineProperties(Constructor, staticProps); return Constructor; }

function EveStretch_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * EveStretch
 *
 * @property {string|number} _id
 * @property {String} name
 * @property {boolean} display
 * @property {boolean} update
 * @property {Array.<Tw2CurveSet>} curveSets
 * @property {*} source
 * @property {*} dest
 * @property {*} sourceObject
 * @property {*} destObject
 * @property {*} stretchObject
 * @property {Tw2Float} length
 * @property {number} _time
 * @property {boolean} _useTransformsForStretch
 * @property {vec3} _sourcePosition
 * @property {vec3} _destinationPosition
 * @property {boolean} _displaySourceObject
 * @property {mat4} _sourceTransform
 * @property {boolean} _displayDestObject
 * @property {boolean} _useTransformsForStretch
 * @property {boolean} _isNegZForward
 * @class
 */

var EveStretch_EveStretch = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function EveStretch() {
    EveStretch_classCallCheck(this, EveStretch);

    EveStretch_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveStretch_defineProperty(this, "name", '');

    EveStretch_defineProperty(this, "display", true);

    EveStretch_defineProperty(this, "update", true);

    EveStretch_defineProperty(this, "curveSets", []);

    EveStretch_defineProperty(this, "source", null);

    EveStretch_defineProperty(this, "dest", null);

    EveStretch_defineProperty(this, "sourceObject", null);

    EveStretch_defineProperty(this, "destObject", null);

    EveStretch_defineProperty(this, "stretchObject", null);

    EveStretch_defineProperty(this, "length", new core["Tw2Float"]());

    EveStretch_defineProperty(this, "_time", 0);

    EveStretch_defineProperty(this, "_useTransformsForStretch", false);

    EveStretch_defineProperty(this, "_sourcePosition", global["H" /* vec3 */].create());

    EveStretch_defineProperty(this, "_destinationPosition", global["H" /* vec3 */].create());

    EveStretch_defineProperty(this, "_displaySourceObject", true);

    EveStretch_defineProperty(this, "_sourceTransform", null);

    EveStretch_defineProperty(this, "_displayDestObject", true);

    EveStretch_defineProperty(this, "_isNegZForward", false);

    EveStretch.init();
  }
  /**
   * Gets source position
   * @param {vec3} position
   */


  EveStretch_createClass(EveStretch, [{
    key: "SetSourcePosition",
    value: function SetSourcePosition(position) {
      this._useTransformsForStretch = false;
      this._sourcePosition = position;
    }
    /**
     * Sets the destination position
     * @param {vec3} position
     */

  }, {
    key: "SetDestinationPosition",
    value: function SetDestinationPosition(position) {
      this._destinationPosition = position;
    }
    /**
     * Sets the source transform
     * @param {mat4} transform
     */

  }, {
    key: "SetSourceTransform",
    value: function SetSourceTransform(transform) {
      this._useTransformsForStretch = true;
      this._sourceTransform = transform;
    }
    /**
     * SetIsNegZForward
     * @param {boolean} isNegZForward
     */

  }, {
    key: "SetIsNegZForward",
    value: function SetIsNegZForward(isNegZForward) {
      this._isNegZForward = isNegZForward;
    }
    /**
     * Gets the stretches resources
     * @param {Array} [out=[]]
     * @return {Array<Tw2Resource>} out
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (this.source && this.source.GetResources) this.source.GetResources(out);
      if (this.dest && this.dest.GetResources) this.dest.GetResources(out);
      if (this.sourceObject && this.sourceObject.GetResources) this.sourceObject.GetResources(out);
      if (this.destObject && this.destObject.GetResources) this.destObject.GetResources(out);
      if (this.stretchObject && this.stretchObject.GetResources) this.stretchObject.GetResources(out);
      return out;
    }
    /**
     * Updates view dependent data
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      if (!this.display) return;
      var g = EveStretch.global,
          directionVec = global["H" /* vec3 */].subtract(g.vec3_0, this._destinationPosition, this._sourcePosition),
          m = global["z" /* mat4 */].identity(g.mat4_0),
          x = global["H" /* vec3 */].set(g.vec3_1, 0, 0, 0),
          up = global["H" /* vec3 */].set(g.vec3_2, 0, 0, 0),
          s = global["z" /* mat4 */].identity(g.mat4_1);
      var scalingLength = global["H" /* vec3 */].length(directionVec);
      global["H" /* vec3 */].normalize(directionVec, directionVec);

      if (this._useTransformsForStretch) {
        global["z" /* mat4 */].rotateX(m, m, -Math.PI / 2);
        global["z" /* mat4 */].multiply(m, this._sourceTransform, m);
      } else {
        if (Math.abs(directionVec[1]) > 0.9) {
          up[2] = 1;
        } else {
          up[1] = 1;
        }

        global["H" /* vec3 */].cross(x, up, directionVec);
        global["H" /* vec3 */].normalize(x, x);
        global["H" /* vec3 */].cross(up, directionVec, x);
        m[0] = x[0];
        m[1] = x[1];
        m[2] = x[2];
        m[4] = -directionVec[0];
        m[5] = -directionVec[1];
        m[6] = -directionVec[2];
        m[8] = up[0];
        m[9] = up[1];
        m[10] = up[2];
      }

      if (this.destObject && this._displayDestObject) {
        global["z" /* mat4 */].setTranslation(m, this._destinationPosition);
        this.destObject.UpdateViewDependentData(m);
      }

      if (this.sourceObject && this._displaySourceObject) {
        if (this._useTransformsForStretch) {
          global["z" /* mat4 */].identity(m);
          global["z" /* mat4 */].rotateX(m, m, -Math.PI / 2);
          global["z" /* mat4 */].multiply(m, this._sourceTransform, m);
        } else {
          global["z" /* mat4 */].setTranslation(m, this._sourcePosition);
        }

        this.sourceObject.UpdateViewDependentData(m);
      }

      if (this.stretchObject) {
        if (this._useTransformsForStretch) {
          global["z" /* mat4 */].identity(m);
          global["z" /* mat4 */].scale(m, m, [1, 1, scalingLength]);
          global["z" /* mat4 */].multiply(m, this._sourceTransform, m);
        } else {
          m[0] = x[0];
          m[1] = x[1];
          m[2] = x[2];
          m[4] = up[0];
          m[5] = up[1];
          m[6] = up[2];
          m[8] = -directionVec[0];
          m[9] = -directionVec[1];
          m[10] = -directionVec[2];
          if (this._isNegZForward) scalingLength = -scalingLength;
          global["z" /* mat4 */].scale(s, s, [1, 1, scalingLength]);
          global["z" /* mat4 */].multiply(m, m, s);
        }

        this.stretchObject.UpdateViewDependentData(m);
      }
    }
    /**
     * Per frame update
     * @param {number} dt - delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      for (var i = 0; i < this.curveSets.length; ++i) {
        this.curveSets[i].Update(dt);
      }

      this._time += dt;

      if (this.source) {
        this.source.GetValueAt(this._time, this._sourcePosition);
      } else if (this._useTransformsForStretch) {
        this._sourcePosition[0] = this._sourceTransform[12];
        this._sourcePosition[1] = this._sourceTransform[13];
        this._sourcePosition[2] = this._sourceTransform[14];
      }

      if (this.dest) {
        this.source.GetValueAt(this._time, this._destinationPosition);
      }

      var directionVec = global["H" /* vec3 */].subtract(EveStretch.global.vec3_0, this._destinationPosition, this._sourcePosition);
      this.length.value = global["H" /* vec3 */].length(directionVec);
      global["H" /* vec3 */].normalize(directionVec, directionVec);

      if (this.sourceObject && this._displaySourceObject) {
        this.sourceObject.Update(dt);
      }

      if (this.stretchObject) {
        this.stretchObject.Update(dt);
      }

      if (this.destObject && this._displayDestObject) {
        this.destObject.Update(dt);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (!this.display) return;

      if (this.sourceObject && this._displaySourceObject) {
        this.sourceObject.GetBatches(mode, accumulator, perObjectData);
      }

      if (this.destObject && this._displayDestObject) {
        this.destObject.GetBatches(mode, accumulator, perObjectData);
      }

      if (this.stretchObject) {
        this.stretchObject.GetBatches(mode, accumulator, perObjectData);
      }
    }
    /**
     * Initializes class global and scratch variables
     */

  }], [{
    key: "init",
    value: function init() {
      if (!EveStretch.global) {
        EveStretch.global = {
          vec3_0: global["H" /* vec3 */].create(),
          vec3_1: global["H" /* vec3 */].create(),
          vec3_2: global["H" /* vec3 */].create(),
          mat4_0: global["z" /* mat4 */].create(),
          mat4_1: global["z" /* mat4 */].create()
        };
      }
    }
    /**
     * Global and scratch variables
     * @type {*}
     */

  }]);

  return EveStretch;
}();

EveStretch_defineProperty(EveStretch_EveStretch, "global", null);
// CONCATENATED MODULE: ./eve/effect/EveTurretFiringFX.js
function EveTurretFiringFX_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveTurretFiringFX_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveTurretFiringFX_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveTurretFiringFX_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveTurretFiringFX_defineProperties(Constructor, staticProps); return Constructor; }

function EveTurretFiringFX_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * EvePerMuzzleData
 *
 * @property {boolean} started
 * @property {boolean} readyToStart
 * @property muzzlePositionBone
 * @property {mat4} muzzleTransform
 * @property {vec3} muzzlePosition
 * @property {number} currentStartDelay
 * @property {number} constantDelay
 * @property {number} elapsedTime
 * @class
 */

var EveTurretFiringFX_EvePerMuzzleData = /*#__PURE__*/function () {
  function EvePerMuzzleData() {
    EveTurretFiringFX_classCallCheck(this, EvePerMuzzleData);

    EveTurretFiringFX_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveTurretFiringFX_defineProperty(this, "started", false);

    EveTurretFiringFX_defineProperty(this, "readyToStart", false);

    EveTurretFiringFX_defineProperty(this, "muzzlePositionBone", null);

    EveTurretFiringFX_defineProperty(this, "muzzleTransform", global["z" /* mat4 */].create());

    EveTurretFiringFX_defineProperty(this, "currentStartDelay", 0);

    EveTurretFiringFX_defineProperty(this, "constantDelay", 0);

    EveTurretFiringFX_defineProperty(this, "elapsedTime", 0);
  }

  EveTurretFiringFX_createClass(EvePerMuzzleData, [{
    key: "muzzlePosition",

    /**
     * Muzzle position
     * @returns {TypedArray}
     */
    get: function get() {
      return this.muzzleTransform.subarray(12, 15);
    }
  }]);

  return EvePerMuzzleData;
}();
/**
 * EveTurretFiringFX
 *
 * @property {string|number} _id
 * @property {string} name
 * @property {boolean} display
 * @property {Array.<EveStretch>} stretch
 * @property {boolean} useMuzzleTransform
 * @property {boolean} isFiring
 * @property {boolean} isLoopFiring
 * @property {number} firingDelay1
 * @property {number} firingDelay2
 * @property {number} firingDelay3
 * @property {number} firingDelay4
 * @property {number} firingDelay5
 * @property {number} firingDelay6
 * @property {number} firingDelay7
 * @property {number} firingDelay8
 * @property {vec3} endPosition
 * @property {number} _firingDuration
 * @property {Array.<EvePerMuzzleData>} _perMuzzleData
 * @class
 */

var EveTurretFiringFX_EveTurretFiringFX = /*#__PURE__*/function () {
  function EveTurretFiringFX() {
    EveTurretFiringFX_classCallCheck(this, EveTurretFiringFX);

    EveTurretFiringFX_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveTurretFiringFX_defineProperty(this, "name", '');

    EveTurretFiringFX_defineProperty(this, "display", true);

    EveTurretFiringFX_defineProperty(this, "stretch", []);

    EveTurretFiringFX_defineProperty(this, "useMuzzleTransform", false);

    EveTurretFiringFX_defineProperty(this, "isFiring", false);

    EveTurretFiringFX_defineProperty(this, "isLoopFiring", false);

    EveTurretFiringFX_defineProperty(this, "firingDelay1", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay2", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay3", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay4", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay5", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay6", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay7", 0);

    EveTurretFiringFX_defineProperty(this, "firingDelay8", 0);

    EveTurretFiringFX_defineProperty(this, "endPosition", global["H" /* vec3 */].create());

    EveTurretFiringFX_defineProperty(this, "_firingDuration", 0);

    EveTurretFiringFX_defineProperty(this, "_perMuzzleData", []);
  }

  EveTurretFiringFX_createClass(EveTurretFiringFX, [{
    key: "Initialize",

    /**
     * Initializes the turret firing fx
     */
    value: function Initialize() {
      this._firingDuration = this.GetCurveDuration();

      for (var i = 0; i < this.stretch.length; ++i) {
        this._perMuzzleData[i] = new EveTurretFiringFX_EvePerMuzzleData();
      }

      var data = this._perMuzzleData;
      if (data.length > 0) data[0].constantDelay = this.firingDelay1;
      if (data.length > 1) data[1].constantDelay = this.firingDelay2;
      if (data.length > 2) data[2].constantDelay = this.firingDelay3;
      if (data.length > 3) data[3].constantDelay = this.firingDelay4;
      if (data.length > 4) data[4].constantDelay = this.firingDelay5;
      if (data.length > 5) data[5].constantDelay = this.firingDelay6;
      if (data.length > 6) data[6].constantDelay = this.firingDelay7;
      if (data.length > 7) data[7].constantDelay = this.firingDelay8;
    }
    /**
     * Gets the total curve duration
     * @returns {number}
     */

  }, {
    key: "GetCurveDuration",
    value: function GetCurveDuration() {
      var maxDuration = 0;

      for (var i = 0; i < this.stretch.length; ++i) {
        var stretch = this.stretch[i];

        for (var j = 0; j < stretch.curveSets.length; ++j) {
          maxDuration = Math.max(maxDuration, stretch.curveSets[j].GetMaxCurveDuration());
        }
      }

      return maxDuration;
    }
    /**
     * Gets a count of stretch effects
     * @returns {Number}
     */

  }, {
    key: "GetPerMuzzleEffectCount",
    value: function GetPerMuzzleEffectCount() {
      return this.stretch.length;
    }
    /**
     * Sets muzzle bone id
     * @param {number} index
     * @param bone
     */

  }, {
    key: "SetMuzzleBoneID",
    value: function SetMuzzleBoneID(index, bone) {
      this._perMuzzleData[index].muzzlePositionBone = bone;
    }
    /**
     * Gets a muzzle's transform
     * @param {number} index
     * @returns {mat4}
     */

  }, {
    key: "GetMuzzleTransform",
    value: function GetMuzzleTransform(index) {
      return this._perMuzzleData[index].muzzleTransform;
    }
    /**
     * Prepares the firing effect
     * @param {number} delay
     * @param {number} [muzzleID=-1]
     */

  }, {
    key: "PrepareFiring",
    value: function PrepareFiring(delay) {
      var muzzleID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      for (var i = 0; i < this.stretch.length; ++i) {
        if (muzzleID < 0 || muzzleID === i) {
          this._perMuzzleData[i].currentStartDelay = delay + this._perMuzzleData[i].constantDelay;
          this._perMuzzleData[i].started = false;
          this._perMuzzleData[i].readyToStart = false;
          this._perMuzzleData[i].elapsedTime = 0;
        } else {
          this._perMuzzleData[i].currentStartDelay = Number.MAX_VALUE;
          this._perMuzzleData[i].started = false;
          this._perMuzzleData[i].readyToStart = false;
          this._perMuzzleData[i].elapsedTime = 0;
        }
      }

      this.isFiring = true;
    }
    /**
     * Starts a muzzle effect
     * @param {number} muzzleID
     */

  }, {
    key: "StartMuzzleEffect",
    value: function StartMuzzleEffect(muzzleID) {
      var stretch = this.stretch[muzzleID];

      for (var i = 0; i < stretch.curveSets.length; ++i) {
        var curveSet = stretch.curveSets[i];

        switch (curveSet.name) {
          case 'play_start':
          case 'play_loop':
            curveSet.PlayFrom(-this._perMuzzleData[muzzleID].currentStartDelay);
            break;

          case 'play_stop':
            curveSet.Stop();
            break;
        }
      }

      this._perMuzzleData[muzzleID].started = true;
      this._perMuzzleData[muzzleID].readyToStart = false;
    }
    /**
     * Stops the firing effect
     */

  }, {
    key: "StopFiring",
    value: function StopFiring() {
      for (var j = 0; j < this.stretch.length; ++j) {
        var stretch = this.stretch[j];

        for (var i = 0; i < stretch.curveSets.length; ++i) {
          var curveSet = stretch.curveSets[i];

          switch (curveSet.name) {
            case 'play_start':
            case 'play_loop':
              curveSet.Stop();
              break;

            case 'play_stop':
              curveSet.Play();
              break;
          }
        }

        this._perMuzzleData[j].started = false;
        this._perMuzzleData[j].readyToStart = false;
        this._perMuzzleData[j].currentStartDelay = 0;
        this._perMuzzleData[j].elapsedTime = 0;
      }

      this.isFiring = false;
    }
    /**
     * Gets resources
     * @param {Array} [out=[]}
     * @returns {Array<Tw2Resource>} out
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      for (var i = 0; i < this.stretch.length; i++) {
        this.stretch[i].GetResources(out);
      }

      return out;
    }
    /**
     * Updates view dependant data
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      for (var i = 0; i < this.stretch.length; ++i) {
        this.stretch[i].UpdateViewDependentData();
      }
    }
    /**
     * Per frame update
     * @param {number} dt - Delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      for (var i = 0; i < this.stretch.length; ++i) {
        if (this._perMuzzleData[i].started) {
          this._perMuzzleData[i].elapsedTime += dt;
        }

        if (this._perMuzzleData[i].elapsedTime < this._firingDuration || this.isLoopFiring) {
          if (this.isFiring) {
            if (!this._perMuzzleData[i].started) {
              if (this._perMuzzleData[i].readyToStart) {
                this.StartMuzzleEffect(i);
                this._perMuzzleData[i].currentStartDelay = 0;
                this._perMuzzleData[i].elapsedTime = 0;
              } else {
                this._perMuzzleData[i].currentStartDelay -= dt;
              }

              if (this._perMuzzleData[i].currentStartDelay <= 0) {
                this._perMuzzleData[i].readyToStart = true;
              }
            } else {
              if (this.useMuzzleTransform) {
                this.stretch[i].SetSourceTransform(this._perMuzzleData[i].muzzleTransform);
              } else {
                this.stretch[i].SetSourcePosition(this._perMuzzleData[i].muzzlePosition);
              }

              this.stretch[i].SetDestinationPosition(this.endPosition);
              this.stretch[i].SetIsNegZForward(true);
            }
          }
        }

        this.stretch[i].Update(dt);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (!this.display || !this.isFiring) return;

      for (var i = 0; i < this.stretch.length; ++i) {
        if (this._perMuzzleData[i].started && (this._firingDuration >= this._perMuzzleData[i].elapsedTime || this.isLoopFiring)) {
          this.stretch[i].GetBatches(mode, accumulator, perObjectData);
        }
      }
    }
  }]);

  return EveTurretFiringFX;
}();
// CONCATENATED MODULE: ./eve/effect/EveStarfield.js
function EveStarfield_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveStarfield_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * EveStarField - not implemented yet
 *
 * @property {string|number} _id
 * @property {string} name
 * @property {boolean} display
 * @property {Tw2Effect} effect
 * @property {number} maxDist
 * @property {number} maxFlashRate
 * @property {number} minFlashIntensity
 * @property {number} minFlashRate
 * @property {number} seed
 */

var EveStarfield_EveStarfield = function EveStarfield() {
  EveStarfield_classCallCheck(this, EveStarfield);

  EveStarfield_defineProperty(this, "_id", global["F" /* util */].generateID());

  EveStarfield_defineProperty(this, "name", '');

  EveStarfield_defineProperty(this, "display", true);

  EveStarfield_defineProperty(this, "effect", null);

  EveStarfield_defineProperty(this, "maxDist", 0);

  EveStarfield_defineProperty(this, "maxFlashRate", 0);

  EveStarfield_defineProperty(this, "minFlashIntensity", 0);

  EveStarfield_defineProperty(this, "minFlashRate", 0);

  EveStarfield_defineProperty(this, "seed", 20);
};

EveStarfield_defineProperty(EveStarfield_EveStarfield, "partialImplementation", true);
// CONCATENATED MODULE: ./eve/effect/index.js






// CONCATENATED MODULE: ./eve/object/EveObject.js
function EveObject_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveObject_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveObject_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveObject_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveObject_defineProperties(Constructor, staticProps); return Constructor; }

function EveObject_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-unused-vars:0 */

/**
 * EveObject base class
 *
 * @property {number} _id
 * @property {string} name
 * @property {boolean} display
 * @class
 */

var EveObject_EveObject = /*#__PURE__*/function () {
  function EveObject() {
    EveObject_classCallCheck(this, EveObject);

    EveObject_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveObject_defineProperty(this, "name", '');

    EveObject_defineProperty(this, "display", true);
  }

  EveObject_createClass(EveObject, [{
    key: "Initialize",

    /**
     * Initializes the object
     */
    value: function Initialize() {}
    /**
     * Gets object resources
     * @param {Array} [out=[]]
     * @returns {Array<Tw2Resource>} out
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return out;
    }
    /**
     * Per frame update
     * @param {number} dt - delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {}
    /**
     * Accumulates batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {}
    /**
     * Global and scratch variables
     * @type {*}
     */

  }]);

  return EveObject;
}();

EveObject_defineProperty(EveObject_EveObject, "global", {
  vec3_0: global["H" /* vec3 */].create(),
  vec3_1: global["H" /* vec3 */].create(),
  vec3_2: global["H" /* vec3 */].create(),
  vec3_3: global["H" /* vec3 */].create(),
  vec3_4: global["H" /* vec3 */].create(),
  vec3_5: global["H" /* vec3 */].create(),
  vec3_6: global["H" /* vec3 */].create(),
  vec3_7: global["H" /* vec3 */].create(),
  mat4_0: global["z" /* mat4 */].create(),
  mat4_1: global["z" /* mat4 */].create(),
  mat4_2: global["z" /* mat4 */].create()
});
// CONCATENATED MODULE: ./eve/object/EveSpaceObject.js
function EveSpaceObject_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveSpaceObject_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveSpaceObject_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveSpaceObject_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveSpaceObject_defineProperties(Constructor, staticProps); return Constructor; }

function EveSpaceObject_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveSpaceObject_setPrototypeOf(subClass, superClass); }

function EveSpaceObject_setPrototypeOf(o, p) { EveSpaceObject_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveSpaceObject_setPrototypeOf(o, p); }

function EveSpaceObject_createSuper(Derived) { var hasNativeReflectConstruct = EveSpaceObject_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveSpaceObject_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveSpaceObject_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveSpaceObject_possibleConstructorReturn(this, result); }; }

function EveSpaceObject_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveSpaceObject_assertThisInitialized(self); }

function EveSpaceObject_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveSpaceObject_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveSpaceObject_getPrototypeOf(o) { EveSpaceObject_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveSpaceObject_getPrototypeOf(o); }

function EveSpaceObject_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveSpaceObject
 *
 * @property {String} name
 * @property {boolean} display                             - Enables/ disables visibility
 * @property {{}} visible                                  - Visibility options for the space object's elements
 * @property {boolean} visible.mesh                        - Enables/ disables mesh visibility
 * @property {boolean} visible.children                    - Enables/ disables child visibility
 * @property {boolean} visible.effectChildren              - Enables/ disables effect child visibility
 * @property {boolean} visible.spriteSets                  - Enables/ disables sprite visibility
 * @property {boolean} visible.decals                      - Enables/ disables decal visibility
 * @property {boolean} visible.spotlightSets               - Enables/ disables spotlight visibility
 * @property {boolean} visible.planeSets                   - Enables/ disables plane visibility
 * @property {boolean} visible.lineSets                    - Enables/ disables lines visibility
 * @property {boolean} visible.overlayEffects              - Enables/ disables overlay effect visibility
 * @property {boolean} visible.killmarks                   - Enables/ disables killmark visibility
 * @property {boolean} visible.customMasks                 - Enables/ disables custom mask visibility
 * @property {boolean} visible.turretSets      - Enables/ disables turret set batch accumulation
 * @property {boolean} visible.boosters        - Enables/ disables booster batch accumulation
 * @property {Number} lod
 * @property {Tw2Mesh} mesh
 * @property {Array.<EveLocator>} locators
 * @property {Array.<EveSpriteSet>} spriteSets
 * @property {Array.<EveTurretSet>} turretSets
 * @property {Array.<EveSpaceObjectDecal>} decals
 * @property {Array.<EveSpotlightSet>} spotlightSets
 * @property {Array.<EvePlaneSet>} planeSets
 * @property {Array.<Tw2CurveSet>} curveSets
 * @property {Array.<EveCurveLineSet>} lineSets
 * @property {Array.<EveMeshOverlayEffect>} overlayEffects
 * @property {Array.<{}>} children
 * @property {vec3} boundingSphereCenter
 * @property {Number} boundingSphereRadius
 * @property {vec3} shapeEllipsoidRadius
 * @property {vec3} shapeEllipsoidCenter
 * @property {mat4} transform
 * @property {Tw2AnimationController} animation
 * @property {number} killCount                            - number of kills to show on kill counter decals
 * @property {Tw2PerObjectData} _perObjectData
 * @class
 */

var EveSpaceObject_EveSpaceObject = /*#__PURE__*/function (_EveObject) {
  EveSpaceObject_inherits(EveSpaceObject, _EveObject);

  var _super = EveSpaceObject_createSuper(EveSpaceObject);

  function EveSpaceObject() {
    var _this;

    EveSpaceObject_classCallCheck(this, EveSpaceObject);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "visible", {
      mesh: true,
      children: true,
      effectChildren: true,
      planeSets: true,
      spotlightSets: true,
      decals: true,
      spriteSets: true,
      overlayEffects: true,
      lineSets: true,
      killmarks: true,
      customMasks: true,
      turretSets: true,
      boosters: true
    });

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "mesh", null);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "animation", new core["Tw2AnimationController"]());

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "locators", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "spriteSets", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "turretSets", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "decals", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "spotlightSets", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "planeSets", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "curveSets", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "lineSets", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "overlayEffects", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "children", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "effectChildren", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "customMasks", []);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "lod", 3);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "killCount", 0);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "transform", global["z" /* mat4 */].create());

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "boundingSphereCenter", global["H" /* vec3 */].create());

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "boundingSphereRadius", 0);

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "shapeEllipsoidRadius", global["H" /* vec3 */].create());

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "shapeEllipsoidCenter", global["H" /* vec3 */].create());

    EveSpaceObject_defineProperty(EveSpaceObject_assertThisInitialized(_this), "_perObjectData", new core["Tw2PerObjectData"](EveSpaceObject.perObjectData));

    return _this;
  }

  EveSpaceObject_createClass(EveSpaceObject, [{
    key: "Initialize",

    /**
     * Initializes the EveSpaceObject
     */
    value: function Initialize() {
      if (this.mesh) {
        this.animation.SetGeometryResource(this.mesh.geometryResource);

        for (var i = 0; i < this.decals.length; ++i) {
          this.decals[i].SetParentGeometry(this.mesh.geometryResource);
        }
      }
    }
    /**
     * Resets the lod
     */

  }, {
    key: "ResetLod",
    value: function ResetLod() {
      this.lod = 3;
    }
    /**
     * Updates the lod
     * @param {Tw2Frustum} frustum
     */

  }, {
    key: "UpdateLod",
    value: function UpdateLod(frustum) {
      var center = global["H" /* vec3 */].transformMat4(EveSpaceObject.global.vec3_0, this.boundingSphereCenter, this.transform);

      if (frustum.IsSphereVisible(center, this.boundingSphereRadius)) {
        if (frustum.GetPixelSizeAcross(center, this.boundingSphereRadius) < 100) {
          this.lod = 1;
        } else {
          this.lod = 2;
        }
      } else {
        this.lod = 0;
      }
    }
    /**
     * Adds a custom mask
     * @param {vec3} position
     * @param {vec3} scaling
     * @param {quat} rotation
     * @param {vec4} isMirrored
     * @param {vec4} sourceMaterial
     * @param {vec4} targetMaterials
     */

  }, {
    key: "AddCustomMask",
    value: function AddCustomMask(position, scaling, rotation, isMirrored, sourceMaterial, targetMaterials) {
      var transform = global["z" /* mat4 */].fromRotationTranslationScale(global["z" /* mat4 */].create(), rotation, position, scaling);
      global["z" /* mat4 */].invert(transform, transform);
      global["z" /* mat4 */].transpose(transform, transform);
      this.customMasks.push({
        transform: transform,
        maskData: global["I" /* vec4 */].fromValues(1, isMirrored ? 1 : 0, 0, 0),
        materialID: global["I" /* vec4 */].fromValues(sourceMaterial, 0, 0, 0),
        targets: targetMaterials
      });
    }
    /**
     * Gets locator count for a specific locator group
     * @param {String} prefix
     * @returns {number}
     */

  }, {
    key: "GetLocatorCount",
    value: function GetLocatorCount(prefix) {
      var locators = this.FindLocatorsByPrefix(prefix);
      return locators.length;
    }
    /**
     * Finds a locator's joint by name
     * @param {string} name
     * @returns {?mat4}
     */

  }, {
    key: "FindLocatorJointByName",
    value: function FindLocatorJointByName(name) {
      var locator = this.FindLocatorBoneByName(name);
      return locator ? locator.worldTransform : null;
    }
    /**
     *
     * @param name
     * @returns {null}
     */

  }, {
    key: "FindLocatorTransformByName",
    value: function FindLocatorTransformByName(name) {
      var locator = this.FindLocatorByName(name);
      return locator ? locator.transform : null;
    }
    /**
     * Checks if a locator prefix exists
     * @param {string} prefix
     * @returns {boolean}
     */

  }, {
    key: "HasLocatorPrefix",
    value: function HasLocatorPrefix(prefix) {
      for (var i = 0; i < this.locators.length; i++) {
        if (this.locators[i].name.substring(0, prefix.length) === prefix) {
          return true;
        }
      }

      return false;
    }
    /**
     * Finds a locator's bone by it's name
     * @param {String} name
     * @returns {?Tw2Bone} null if not found
     */

  }, {
    key: "FindLocatorBoneByName",
    value: function FindLocatorBoneByName(name) {
      var model = this.animation.FindModelForMesh(0);

      if (model) {
        for (var i = 0; i < model.bones.length; ++i) {
          if (model.bones[i].boneRes.name === name) {
            return model.bones[i];
          }
        }
      }

      return null;
    }
    /**
     * Finds a locator by name
     * @param {string} name
     * @returns {?EveLocator}
     */

  }, {
    key: "FindLocatorByName",
    value: function FindLocatorByName(name) {
      for (var i = 0; i < this.locators.length; i++) {
        if (this.locators[i].name === name) {
          return this.locators[i];
        }
      }

      return null;
    }
    /**
     * Finds locators with a given prefix
     * @param {string} prefix
     * @returns {Array<EveLocator>}
     */

  }, {
    key: "FindLocatorsByPrefix",
    value: function FindLocatorsByPrefix(prefix) {
      var locators = [];

      for (var i = 0; i < this.locators.length; i++) {
        if (this.locators[i].name.indexOf(prefix) === 0) {
          locators.push(this.locators[i]);
        }
      }

      return locators;
    }
    /**
     * Gets object's res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @param {Boolean} excludeChildren - True to exclude children's res objects
     * @returns {Array.<Tw2EffectRes|Tw2TextureRes|Tw2GeometryRes>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var excludeChildren = arguments.length > 1 ? arguments[1] : undefined;
      if (this.mesh) this.mesh.GetResources(out);
      if (this.animation) this.animation.GetResources(out);
      global["F" /* util */].perArrayChild(this.spriteSets, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.turretSets, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.decals, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.spotlightSets, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.planeSets, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.lineSets, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.overlayEffects, 'GetResources', out);
      global["F" /* util */].perArrayChild(this.effectChildren, 'GetResources', out);

      if (!excludeChildren) {
        global["F" /* util */].perArrayChild(this.children, 'GetResources', out);
      }

      return out;
    }
    /**
     * A Per frame function that updates view dependent data
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      for (var i = 0; i < this.children.length; ++i) {
        this.children[i].UpdateViewDependentData(this.transform);
      }

      global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('WorldMat'), this.transform);
      global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('WorldMatLast'), this.transform);

      var center = this._perObjectData.perObjectVSData.Get('EllipsoidCenter'),
          radii = this._perObjectData.perObjectVSData.Get('EllipsoidRadii');

      if (this.shapeEllipsoidRadius[0] > 0) {
        center[0] = this.shapeEllipsoidCenter[0];
        center[1] = this.shapeEllipsoidCenter[1];
        center[2] = this.shapeEllipsoidCenter[2];
        radii[0] = this.shapeEllipsoidRadius[0];
        radii[1] = this.shapeEllipsoidRadius[1];
        radii[2] = this.shapeEllipsoidRadius[2];
      } else if (this.mesh && this.mesh.IsGood()) {
        global["H" /* vec3 */].subtract(center, this.mesh.geometryResource.maxBounds, this.mesh.geometryResource.minBounds);
        global["H" /* vec3 */].scale(center, center, 0.5 * 1.732050807);
        global["H" /* vec3 */].add(radii, this.mesh.geometryResource.maxBounds, this.mesh.geometryResource.minBounds);
        global["H" /* vec3 */].scale(radii, radii, 0.5);
      }

      for (var _i = 0; _i < this.customMasks.length; ++_i) {
        var targets = this.visible.customMasks ? this.customMasks[_i].targets : [0, 0, 0, 0];

        this._perObjectData.perObjectVSData.Set(_i ? 'CustomMaskMatrix1' : 'CustomMaskMatrix0', this.customMasks[_i].transform);

        this._perObjectData.perObjectVSData.Set(_i ? 'CustomMaskData1' : 'CustomMaskData0', this.customMasks[_i].maskData);

        this._perObjectData.perObjectPSData.Set(_i ? 'CustomMaskMaterialID1' : 'CustomMaskMaterialID0', this.customMasks[_i].materialID);

        this._perObjectData.perObjectPSData.Set(_i ? 'CustomMaskTarget1' : 'CustomMaskTarget0', targets);
      }

      if (this.animation.animations.length) {
        this._perObjectData.perObjectVSData.Set('JointMat', this.animation.GetBoneMatrices(0));
      }

      for (var _i2 = 0; _i2 < this.lineSets.length; ++_i2) {
        this.lineSets[_i2].UpdateViewDependentData(this.transform);
      }
    }
    /**
     * Per frame update
     * @param {Number} dt - delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      if (this.lod > 0) {
        for (var i = 0; i < this.spriteSets.length; ++i) {
          this.spriteSets[i].Update(dt);
        }

        for (var _i3 = 0; _i3 < this.planeSets.length; _i3++) {
          this.planeSets[_i3].Update(dt);
        }

        for (var _i4 = 0; _i4 < this.spotlightSets.length; _i4++) {
          this.spotlightSets[_i4].Update(dt);
        }

        for (var _i5 = 0; _i5 < this.children.length; ++_i5) {
          this.children[_i5].Update(dt);
        }

        for (var _i6 = 0; _i6 < this.effectChildren.length; ++_i6) {
          this.effectChildren[_i6].Update(dt, this.transform);
        }

        for (var _i7 = 0; _i7 < this.curveSets.length; ++_i7) {
          this.curveSets[_i7].Update(dt);
        }

        for (var _i8 = 0; _i8 < this.overlayEffects.length; ++_i8) {
          this.overlayEffects[_i8].Update(dt);
        }

        for (var _i9 = 0; _i9 < this.lineSets.length; _i9++) {
          this.lineSets[_i9].Update(dt);
        }

        this.animation.Update(dt);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (this.display) {
        var show = this.visible;

        if (show.mesh && this.mesh && this.lod > 0) {
          this.mesh.GetBatches(mode, accumulator, this._perObjectData);
        }

        if (this.lod > 1) {
          if (show.spriteSets) {
            for (var i = 0; i < this.spriteSets.length; i++) {
              this.spriteSets[i].GetBatches(mode, accumulator, this._perObjectData, this.transform);
            }
          }

          if (show.spotlightSets) {
            for (var _i10 = 0; _i10 < this.spotlightSets.length; _i10++) {
              this.spotlightSets[_i10].GetBatches(mode, accumulator, this._perObjectData);
            }
          }

          if (show.planeSets) {
            for (var _i11 = 0; _i11 < this.planeSets.length; _i11++) {
              this.planeSets[_i11].GetBatches(mode, accumulator, this._perObjectData);
            }
          }

          if (show.decals) {
            for (var _i12 = 0; _i12 < this.decals.length; _i12++) {
              this.decals[_i12].GetBatches(mode, accumulator, this._perObjectData, show.killmarks ? this.killCount : 0);
            }
          }

          if (show.lineSets) {
            for (var _i13 = 0; _i13 < this.lineSets.length; _i13++) {
              this.lineSets[_i13].GetBatches(mode, accumulator);
            }
          }
        }

        if (show.children) {
          for (var _i14 = 0; _i14 < this.children.length; _i14++) {
            this.children[_i14].GetBatches(mode, accumulator, this._perObjectData);
          }
        }

        if (show.effectChildren) {
          for (var _i15 = 0; _i15 < this.effectChildren.length; _i15++) {
            this.effectChildren[_i15].GetBatches(mode, accumulator, this._perObjectData);
          }
        }

        if (show.overlayEffects && this.mesh && this.mesh.IsGood()) {
          for (var _i16 = 0; _i16 < this.overlayEffects.length; _i16++) {
            this.overlayEffects[_i16].GetBatches(mode, accumulator, this._perObjectData, this.mesh);
          }
        }
      }
    }
    /**
     * RenderDebugInfo
     * @param debugHelper
     */

  }, {
    key: "RenderDebugInfo",
    value: function RenderDebugInfo(debugHelper) {
      this.animation.RenderDebugInfo(debugHelper);
    }
    /**
     * Per object data
     * @type {{VSData: *[], PSData: *[]}}
     */

  }]);

  return EveSpaceObject;
}(EveObject_EveObject);

EveSpaceObject_defineProperty(EveSpaceObject_EveSpaceObject, "perObjectData", {
  VSData: [['WorldMat', 16], ['WorldMatLast', 16], ['Shipdata', 4, [0, 1, 0, -10]], ['Clipdata1', 4], ['EllipsoidRadii', 4], ['EllipsoidCenter', 4], ['CustomMaskMatrix0', 16, global["z" /* mat4 */].identity([])], ['CustomMaskMatrix1', 16, global["z" /* mat4 */].identity([])], ['CustomMaskData0', 4], ['CustomMaskData1', 4], ['JointMat', 696]],
  PSData: [['Shipdata', 4, [0, 1, 0, 1]], ['Clipdata1', 4], ['Clipdata2', 4], ['ShLighting', 4 * 7], ['CustomMaskMaterialID0', 4], ['CustomMaskMaterialID1', 4], ['CustomMaskTarget0', 4], ['CustomMaskTarget1', 4]]
});


// CONCATENATED MODULE: ./eve/object/EveEffectRoot.js
function EveEffectRoot_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveEffectRoot_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveEffectRoot_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveEffectRoot_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveEffectRoot_defineProperties(Constructor, staticProps); return Constructor; }

function EveEffectRoot_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveEffectRoot_setPrototypeOf(subClass, superClass); }

function EveEffectRoot_setPrototypeOf(o, p) { EveEffectRoot_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveEffectRoot_setPrototypeOf(o, p); }

function EveEffectRoot_createSuper(Derived) { var hasNativeReflectConstruct = EveEffectRoot_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveEffectRoot_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveEffectRoot_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveEffectRoot_possibleConstructorReturn(this, result); }; }

function EveEffectRoot_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveEffectRoot_assertThisInitialized(self); }

function EveEffectRoot_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveEffectRoot_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveEffectRoot_getPrototypeOf(o) { EveEffectRoot_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveEffectRoot_getPrototypeOf(o); }

function EveEffectRoot_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * EveEffectRoot root objects for FX, can be put into scene's objects array
 *
 * @property {string} name
 * @property {boolean} display
 * @property {[{}]} curveSets
 * @property {[{}]} effectChildren
 * @property {vec3} scaling
 * @property {quat} rotation
 * @property {vec3} translation
 * @property {mat4} localTransform
 * @property {mat4} rotationTransform
 * @property {vec3} boundingSphereCenter
 * @property {number} boundingSphereRadius
 * @property {number} duration
 * @property {Tw2PerObjectData} _perObjectData
 * @class
 */

var EveEffectRoot_EveEffectRoot = /*#__PURE__*/function (_EveObject) {
  EveEffectRoot_inherits(EveEffectRoot, _EveObject);

  var _super = EveEffectRoot_createSuper(EveEffectRoot);

  function EveEffectRoot() {
    var _this;

    EveEffectRoot_classCallCheck(this, EveEffectRoot);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "curveSets", []);

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "effectChildren", []);

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "duration", 0);

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "scaling", global["H" /* vec3 */].fromValues(1, 1, 1));

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "rotation", global["C" /* quat */].create());

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "translation", global["H" /* vec3 */].create());

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "localTransform", global["z" /* mat4 */].create());

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "rotationTransform", global["z" /* mat4 */].create());

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "boundingSphereCenter", global["H" /* vec3 */].create());

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "boundingSphereRadius", 0);

    EveEffectRoot_defineProperty(EveEffectRoot_assertThisInitialized(_this), "_perObjectData", new core["Tw2PerObjectData"](EveSpaceObject_EveSpaceObject.perObjectData));

    return _this;
  }

  EveEffectRoot_createClass(EveEffectRoot, [{
    key: "Start",

    /**
     * Starts playing the effectRoot's curveSets if they exist
     */
    value: function Start() {
      for (var i = 0; i < this.curveSets.length; ++i) {
        this.curveSets[i].Play();
      }
    }
    /**
     * Stops the effectRoot's curveSets from playing
     */

  }, {
    key: "Stop",
    value: function Stop() {
      for (var i = 0; i < this.curveSets.length; ++i) {
        this.curveSets[i].Stop();
      }
    }
    /**
     * Gets effect root res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2EffectRes|Tw2TextureRes>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      for (var i = 0; i < this.effectChildren.length; ++i) {
        this.effectChildren[i].GetResources(out);
      }

      return out;
    }
    /**
     * Internal per frame update
     * @param {number} dt - Delta Time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      global["C" /* quat */].normalize(this.rotation, this.rotation); // Don't really need to normalize...

      global["z" /* mat4 */].fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);

      for (var i = 0; i < this.curveSets.length; ++i) {
        this.curveSets[i].Update(dt);
      }

      for (var _i = 0; _i < this.effectChildren.length; ++_i) {
        this.effectChildren[_i].Update(dt, this.localTransform);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (!this.display) return;

      for (var i = 0; i < this.effectChildren.length; ++i) {
        this.effectChildren[i].GetBatches(mode, accumulator, this._perObjectData);
      }
    }
  }]);

  return EveEffectRoot;
}(EveObject_EveObject);
// CONCATENATED MODULE: ./eve/object/EveMissile.js
function EveMissile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveMissile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveMissile_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveMissile_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveMissile_defineProperties(Constructor, staticProps); return Constructor; }

function EveMissile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveMissile_setPrototypeOf(subClass, superClass); }

function EveMissile_setPrototypeOf(o, p) { EveMissile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveMissile_setPrototypeOf(o, p); }

function EveMissile_createSuper(Derived) { var hasNativeReflectConstruct = EveMissile_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveMissile_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveMissile_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveMissile_possibleConstructorReturn(this, result); }; }

function EveMissile_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveMissile_assertThisInitialized(self); }

function EveMissile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveMissile_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveMissile_getPrototypeOf(o) { EveMissile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveMissile_getPrototypeOf(o); }

function EveMissile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveMissileWarhead
 *
 * @property {String} name
 * @property {Boolean} display
 * @property {Tw2Mesh} mesh
 * @property {EveSpriteSet} spriteSet
 * @property {Number} state
 * @property {Number} time
 * @property {Number} durationEjectPhase
 * @property {Number} startEjectVelocity
 * @property {Number} acceleration
 * @property {Number} maxExplosionDistance
 * @property {Number} impactSize
 * @property {Number} impactDuration
 * @property {vec3} pathOffset
 * @property {mat4} transform
 * @property {vec3} velocity
 * @property {Tw2PerObjectData} _perObjectData
 * @class
 */

var EveMissile_EveMissileWarhead = /*#__PURE__*/function (_EveObject) {
  EveMissile_inherits(EveMissileWarhead, _EveObject);

  var _super = EveMissile_createSuper(EveMissileWarhead);

  function EveMissileWarhead() {
    var _this;

    EveMissile_classCallCheck(this, EveMissileWarhead);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "mesh", null);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "spriteSet", null);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "state", EveMissileWarhead.State.READY);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "time", 0);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "durationEjectPhase", 0);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "startEjectVelocity", 0);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "acceleration", 1);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "maxExplosionDistance", 40);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "impactSize", 0);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "impactDuration", 0.6);

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "pathOffset", global["H" /* vec3 */].create());

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "transform", global["z" /* mat4 */].create());

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "velocity", global["H" /* vec3 */].create());

    EveMissile_defineProperty(EveMissile_assertThisInitialized(_this), "_perObjectData", new core["Tw2PerObjectData"](EveMissileWarhead.perObjectData));

    return _this;
  }

  EveMissile_createClass(EveMissileWarhead, [{
    key: "Initialize",

    /**
     * Initializes the warhead
     */
    value: function Initialize() {
      if (this.spriteSet) this.spriteSet.UseQuads(true);
    }
    /**
     * Sets up the warhead for rendering
     * @param {mat4} transform - Initial local to world transform
     */

  }, {
    key: "Launch",
    value: function Launch(transform) {
      global["z" /* mat4 */].copy(this.transform, transform);
      this.velocity[0] = transform[8] * this.startEjectVelocity;
      this.velocity[1] = transform[9] * this.startEjectVelocity;
      this.velocity[2] = transform[10] * this.startEjectVelocity;
      this.time = 0;
      this.state = EveMissileWarhead.State.IN_FLIGHT;
    }
    /**
     * Creates a clone of the warhead
     * @returns {EveMissileWarhead}
     */

  }, {
    key: "Clone",
    value: function Clone() {
      var warhead = new EveMissileWarhead();
      warhead.mesh = this.mesh;
      warhead.spriteSet = this.spriteSet;
      return warhead;
    }
    /**
     * Gets warhead resources
     * @param {Array} [out=[]] - Receiving array
     * @returns {Array<Tw2Resource>} out
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (this.mesh) this.mesh.GetResources(out);
      if (this.spriteSet) this.spriteSet.GetResources(out);
    }
    /**
     * Per frame view dependent data update
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      if (!this.display || this.state === EveMissileWarhead.State.DEAD) return;
      global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('WorldMat'), this.transform);
      global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('WorldMatLast'), this.transform);
    }
    /**
     * Per frame update
     * @param {Number} dt - Time since previous frame
     * @param {vec3} missilePosition - Missile position
     * @param {vec3} missileTarget - Missile target position
     */

  }, {
    key: "Update",
    value: function Update(dt, missilePosition, missileTarget) {
      if (this.state === EveMissileWarhead.State.IN_FLIGHT) {
        var g = EveMissileWarhead.global,
            position = global["z" /* mat4 */].getTranslation(g.vec3_0, this.transform),
            tmp = g.vec3_1,
            x = g.vec3_2,
            y = g.vec3_3;
        this.time += dt;

        if (this.time > this.durationEjectPhase) {
          global["H" /* vec3 */].subtract(position, this.velocity, missilePosition);
          global["H" /* vec3 */].lerp(position, position, missilePosition, 1 - Math.exp(-dt * 0.9999));
          global["z" /* mat4 */].setTranslation(this.transform, position);
          global["H" /* vec3 */].subtract(tmp, missileTarget, position);

          if (global["H" /* vec3 */].length(tmp) < this.maxExplosionDistance) {
            console.log(position, tmp);
            this.state = EveMissileWarhead.State.DEAD;
          }
        } else {
          global["H" /* vec3 */].scale(tmp, this.velocity, dt);
          this.transform[12] += tmp[0];
          this.transform[13] += tmp[1];
          this.transform[14] += tmp[2];
        }

        var z = global["H" /* vec3 */].normalize(tmp, this.velocity);

        if (Math.abs(z[0]) < 0.99) {
          global["H" /* vec3 */].cross(x, z, [1, 0, 0]);
        } else {
          global["H" /* vec3 */].cross(x, z, [0, 1, 0]);
        }

        global["H" /* vec3 */].normalize(x, x);
        global["H" /* vec3 */].cross(y, x, z);
        this.transform[0] = x[0];
        this.transform[1] = x[1];
        this.transform[2] = x[2];
        this.transform[4] = y[0];
        this.transform[5] = y[1];
        this.transform[6] = y[2];
        this.transform[8] = z[0];
        this.transform[9] = z[1];
        this.transform[10] = z[2];
      }

      if (this.spriteSet) {
        this.spriteSet.Update(dt);
      }
    }
    /**
     * Accumulates render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (this.display && this.mesh && this.state !== EveMissileWarhead.State.DEAD) {
        if (this.mesh) {
          this.mesh.GetBatches(mode, accumulator, this._perObjectData);
        }

        if (this.spriteSet) {
          this.spriteSet.GetBatches(mode, accumulator, this._perObjectData, this.transform);
        }
      }
    }
    /**
     * Per object data
     * @type {*}
     */

  }]);

  return EveMissileWarhead;
}(EveObject_EveObject);
/**
 * EveMissile
 *
 * @property {number|string} _id
 * @property {String} name
 * @property {Boolean} display
 * @property {Array} warheads
 * @property {Array} curveSets
 * @property {vec3} boundingSphereCenter
 * @property {Number} boundingSphereRadius
 * @property {vec3} position
 * @property {vec3} target
 * @property {Number} speed
 * @property {?function(EveMissileWarhead): void} warheadExplosionCallback
 * @property {?function(EveMissile): void} missileFinishedCallback
 * @class
 */

EveMissile_defineProperty(EveMissile_EveMissileWarhead, "perObjectData", {
  VSData: [['WorldMat', 16], ['WorldMatLast', 16], ['Shipdata', 4, [0, 1, 0, -10]], ['Clipdata1', 4], ['JointMat', 696]],
  PSData: [['Shipdata', 4, [0, 1, 0, 1]], ['Clipdata1', 4], ['Clipdata2', 4]]
});

EveMissile_defineProperty(EveMissile_EveMissileWarhead, "State", {
  READY: 0,
  IN_FLIGHT: 1,
  DEAD: 2
});

var EveMissile_EveMissile = /*#__PURE__*/function () {
  function EveMissile() {
    EveMissile_classCallCheck(this, EveMissile);

    EveMissile_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveMissile_defineProperty(this, "name", '');

    EveMissile_defineProperty(this, "display", true);

    EveMissile_defineProperty(this, "warheads", []);

    EveMissile_defineProperty(this, "curveSets", []);

    EveMissile_defineProperty(this, "speed", 1);

    EveMissile_defineProperty(this, "position", global["H" /* vec3 */].create());

    EveMissile_defineProperty(this, "target", global["H" /* vec3 */].create());

    EveMissile_defineProperty(this, "boundingSphereCenter", global["H" /* vec3 */].create());

    EveMissile_defineProperty(this, "boundingSphereRadius", 0);

    EveMissile_defineProperty(this, "warheadExplosionCallback", null);

    EveMissile_defineProperty(this, "missileFinishedCallback", null);
  }

  EveMissile_createClass(EveMissile, [{
    key: "Launch",

    /**
     * Prepares missile for rendering
     * @param {vec3} position - Missile starting position
     * @param {Array} turretTransforms - Turret muzzle local to world transforms
     * @param {vec3} target - Target position
     */
    value: function Launch(position, turretTransforms, target) {
      global["H" /* vec3 */].copy(this.position, position);
      global["H" /* vec3 */].copy(this.target, target);

      if (this.warheads.length > turretTransforms.length) {
        this.warheads.splice(turretTransforms.length);
      } else {
        while (this.warheads.length < turretTransforms.length) {
          this.warheads.push(this.warheads[0].Clone());
        }
      }

      for (var i = 0; i < this.warheads.length; ++i) {
        this.warheads[0].Launch(turretTransforms[i]);
      }
    }
    /**
     * Gets missile res objects
     * @param {Array} [out=[]] - Receiving array
     * @returns {Array<Tw2Resource>} out
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      for (var i = 0; i < this.warheads.length; ++i) {
        this.warheads[i].GetResources(out);
      }
    }
    /**
     * Per frame view dependent data update
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      for (var i = 0; i < this.warheads.length; ++i) {
        this.warheads[i].UpdateViewDependentData();
      }
    }
    /**
     * Per frame update
     * @param {Number} dt - Time since previous frame
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      var tmp = global["H" /* vec3 */].subtract(EveMissile_EveMissileWarhead.global.vec3_0, this.target, this.position),
          distance = global["H" /* vec3 */].length(tmp);

      if (distance > 0.1) {
        global["H" /* vec3 */].normalize(tmp, tmp);
        global["H" /* vec3 */].scale(tmp, tmp, Math.min(dt * this.speed, distance));
        global["H" /* vec3 */].add(this.position, this.position, tmp);
      }

      for (var i = 0; i < this.curveSets.length; ++i) {
        this.curveSets[i].Update(dt);
      }

      var checkDead = false;

      for (var _i = 0; _i < this.warheads.length; ++_i) {
        var state = this.warheads[_i].state;

        this.warheads[_i].Update(dt, this.position, this.target);

        if (state !== EveMissile_EveMissileWarhead.State.DEAD && this.warheads[_i].state === EveMissile_EveMissileWarhead.State.DEAD) {
          if (this.warheadExplosionCallback) {
            this.warheadExplosionCallback(this.warheads[_i]);
          }

          checkDead = true;
        }
      }

      if (checkDead && this.missileFinishedCallback) {
        for (var _i2 = 0; _i2 < this.warheads.length; ++_i2) {
          if (this.warheads[_i2].state !== EveMissile_EveMissileWarhead.State.DEAD) {
            return;
          }
        }

        this.missileFinishedCallback(this);
      }
    }
    /**
     * Accumulates render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (!this.display) return;

      for (var i = 0; i < this.warheads.length; ++i) {
        this.warheads[i].GetBatches(mode, accumulator);
      }
    }
  }]);

  return EveMissile;
}();
// CONCATENATED MODULE: ./eve/object/EveTransform.js
function EveTransform_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveTransform_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveTransform_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveTransform_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveTransform_defineProperties(Constructor, staticProps); return Constructor; }

function EveTransform_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveTransform_setPrototypeOf(subClass, superClass); }

function EveTransform_setPrototypeOf(o, p) { EveTransform_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveTransform_setPrototypeOf(o, p); }

function EveTransform_createSuper(Derived) { var hasNativeReflectConstruct = EveTransform_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveTransform_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveTransform_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveTransform_possibleConstructorReturn(this, result); }; }

function EveTransform_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveTransform_assertThisInitialized(self); }

function EveTransform_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveTransform_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveTransform_getPrototypeOf(o) { EveTransform_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveTransform_getPrototypeOf(o); }

function EveTransform_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveTransform
 *
 * @property {{}} visible                                           - Batch accumulation options for the transforms's elements
 * @property {Boolean} visible.mesh                                 - Enables/ disables mesh batch accumulation
 * @property {Boolean} visible.children                             - Enables/ disables child batch accumulation
 * @property {Tw2Mesh} mesh
 * @property {Array.<Tw2CurveSet>} curveSets
 * @property {Array} children
 * @property {Array.<Tw2ParticleSystem>} particleSystems
 * @property {Array.<Tw2StaticEmitter|Tw2DynamicEmitter>} particleEmitters
 * @property {Number} Modifier
 * @property {Number} sortValueMultiplier
 * @property {Number} distanceBasedScaleArg1
 * @property {Number} distanceBasedScaleArg2
 * @property {Boolean} useDistanceBasedScale
 * @property {vec3} scaling
 * @property {vec3} translation
 * @property {quat} rotation
 * @property {mat4} localTransform
 * @property {mat4} worldTransform
 * @property {Array.<mat4>} _mat4Cache
 * @property {Array.<vec3>} _vec3Cache
 * @property {Tw2BasicPerObjectData} _perObjectData
 * @class
 */

var EveTransform_EveTransform = /*#__PURE__*/function (_EveObject) {
  EveTransform_inherits(EveTransform, _EveObject);

  var _super = EveTransform_createSuper(EveTransform);

  function EveTransform() {
    var _this;

    EveTransform_classCallCheck(this, EveTransform);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "visible", {
      mesh: true,
      children: true
    });

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "mesh", null);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "curveSets", []);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "children", []);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "particleSystems", []);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "particleEmitters", []);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "modifier", EveTransform.Modifier.NONE);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "sortValueMultiplier", 1.0);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "distanceBasedScaleArg1", 0.2);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "distanceBasedScaleArg2", 0.63);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "useDistanceBasedScale", false);

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "scaling", global["H" /* vec3 */].fromValues(1, 1, 1));

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "translation", global["H" /* vec3 */].create());

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "rotation", global["C" /* quat */].create());

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "localTransform", global["z" /* mat4 */].create());

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "worldTransform", global["z" /* mat4 */].create());

    EveTransform_defineProperty(EveTransform_assertThisInitialized(_this), "_perObjectData", new core["Tw2BasicPerObjectData"](EveTransform.perObjectData));

    return _this;
  }

  EveTransform_createClass(EveTransform, [{
    key: "Initialize",

    /**
     * Initializes the EveTransform
     */
    value: function Initialize() {
      global["z" /* mat4 */].fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);
    }
    /**
     * Gets transform res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @param {Boolean} [excludeChildren] - True to exclude children's res objects
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var excludeChildren = arguments.length > 1 ? arguments[1] : undefined;
      if (this.mesh) this.mesh.GetResources(out);

      if (!excludeChildren) {
        for (var i = 0; i < this.children; i++) {
          this.children[i].GetResources(out);
        }
      }

      return out;
    }
    /**
     * Per frame update
     * @param {mat4} parentTransform
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData(parentTransform) {
      var d = global["w" /* device */],
          g = EveTransform.global,
          finalScale = g.vec3_0,
          parentScale = g.vec3_1,
          dir = g.vec3_2,
          viewInv = d.viewInverse;
      global["C" /* quat */].normalize(this.rotation, this.rotation);
      global["z" /* mat4 */].fromRotationTranslationScale(this.localTransform, this.rotation, this.translation, this.scaling);
      global["z" /* mat4 */].getScaling(parentScale, parentTransform);

      switch (this.modifier) {
        case EveTransform.Modifier.BILLBOARD:
        case EveTransform.Modifier.SIMPLE_HALO:
          var dirNorm = g.vec3_3;
          global["z" /* mat4 */].multiply(this.worldTransform, parentTransform, this.localTransform);
          global["H" /* vec3 */].multiply(finalScale, this.scaling, parentScale);

          if (this.modifier === EveTransform.Modifier.SIMPLE_HALO) {
            global["H" /* vec3 */].subtract(dir, d.GetEyePosition(dir), this.worldTransform.subarray(12));
            global["H" /* vec3 */].normalize(dirNorm, this.worldTransform.subarray(8));
            global["H" /* vec3 */].normalize(dir, dir);
            var scale = global["H" /* vec3 */].dot(dir, dirNorm);
            if (scale < 0) scale = 0;
            global["H" /* vec3 */].scale(finalScale, finalScale, scale * scale);
          }

          this.worldTransform[0] = viewInv[0] * finalScale[0];
          this.worldTransform[1] = viewInv[1] * finalScale[0];
          this.worldTransform[2] = viewInv[2] * finalScale[0];
          this.worldTransform[4] = viewInv[4] * finalScale[1];
          this.worldTransform[5] = viewInv[5] * finalScale[1];
          this.worldTransform[6] = viewInv[6] * finalScale[1];
          this.worldTransform[8] = viewInv[8] * finalScale[2];
          this.worldTransform[9] = viewInv[9] * finalScale[2];
          this.worldTransform[10] = viewInv[10] * finalScale[2];
          break;

        case EveTransform.Modifier.EVE_CAMERA_ROTATION:
          var translation = g.vec3_3;
          global["H" /* vec3 */].transformMat4(translation, this.translation, parentTransform);
          global["z" /* mat4 */].fromRotationTranslationScale(this.localTransform, this.rotation, translation, this.scaling);
          global["z" /* mat4 */].multiply(this.worldTransform, viewInv, this.localTransform);
          this.worldTransform[12] = this.localTransform[12];
          this.worldTransform[13] = this.localTransform[13];
          this.worldTransform[14] = this.localTransform[14];
          break;

        case EveTransform.Modifier.EVE_CAMERA_ROTATION_ALIGNED:
        case EveTransform.Modifier.EVE_SIMPLE_HALO:
          var camFwd = g.vec3_3,
              right = g.vec3_4,
              up = g.vec3_5,
              forward = g.vec3_6,
              dirToCamNorm = g.vec3_7,
              parentT = g.mat4_0,
              alignMat = g.mat4_1,
              rotationT = g.mat4_2; // 3 4 3 3 3 4 3 3

          global["z" /* mat4 */].translate(this.worldTransform, parentTransform, this.translation);
          global["z" /* mat4 */].transpose(parentT, parentTransform);
          d.GetEyePosition(dir);
          dir[0] -= this.worldTransform[12];
          dir[1] -= this.worldTransform[13];
          dir[2] -= this.worldTransform[14];
          global["H" /* vec3 */].copy(camFwd, dir);
          global["H" /* vec3 */].transformMat4(camFwd, camFwd, parentT);
          global["H" /* vec3 */].divide(camFwd, camFwd, parentScale);
          global["H" /* vec3 */].normalize(camFwd, camFwd);
          global["H" /* vec3 */].set(right, d.view[0], d.view[4], d.view[8]);
          global["H" /* vec3 */].transformMat4(right, right, parentT);
          global["H" /* vec3 */].normalize(right, right);
          global["H" /* vec3 */].cross(up, camFwd, right);
          global["H" /* vec3 */].normalize(up, up);
          global["H" /* vec3 */].cross(right, up, camFwd);
          alignMat[0] = right[0];
          alignMat[1] = right[1];
          alignMat[2] = right[2];
          alignMat[4] = up[0];
          alignMat[5] = up[1];
          alignMat[6] = up[2];
          alignMat[8] = camFwd[0];
          alignMat[9] = camFwd[1];
          alignMat[10] = camFwd[2];
          alignMat[15] = 1;
          global["z" /* mat4 */].fromQuat(rotationT, this.rotation);
          global["z" /* mat4 */].multiply(alignMat, alignMat, rotationT);

          if (this.modifier === EveTransform.Modifier.EVE_SIMPLE_HALO) {
            global["H" /* vec3 */].normalize(forward, this.worldTransform.subarray(8));
            global["H" /* vec3 */].normalize(dirToCamNorm, dir);

            var _scale = -global["H" /* vec3 */].dot(dirToCamNorm, forward);

            if (_scale < 0) _scale = 0;
            global["z" /* mat4 */].multiply(this.worldTransform, this.worldTransform, alignMat);
            global["z" /* mat4 */].scale(this.worldTransform, this.worldTransform, [this.scaling[0] * _scale, this.scaling[1] * _scale, this.scaling[2] * _scale]);
          } else {
            global["z" /* mat4 */].scale(this.worldTransform, this.worldTransform, this.scaling);
            global["z" /* mat4 */].multiply(this.worldTransform, this.worldTransform, alignMat);
          }

          break;

        case EveTransform.Modifier.LOOK_AT_CAMERA:
          var lookAt = g.mat4_0;
          global["z" /* mat4 */].multiply(this.worldTransform, parentTransform, this.localTransform);
          global["z" /* mat4 */].lookAt(lookAt, viewInv.subarray(12), this.worldTransform.subarray(12), [0, 1, 0]);
          global["z" /* mat4 */].transpose(lookAt, lookAt);
          global["H" /* vec3 */].multiply(finalScale, this.scaling, parentScale);
          this.worldTransform[0] = lookAt[0] * finalScale[0];
          this.worldTransform[1] = lookAt[1] * finalScale[0];
          this.worldTransform[2] = lookAt[2] * finalScale[0];
          this.worldTransform[4] = lookAt[4] * finalScale[1];
          this.worldTransform[5] = lookAt[5] * finalScale[1];
          this.worldTransform[6] = lookAt[6] * finalScale[1];
          this.worldTransform[8] = lookAt[8] * finalScale[2];
          this.worldTransform[9] = lookAt[9] * finalScale[2];
          this.worldTransform[10] = lookAt[10] * finalScale[2];
          break;

        default:
          global["z" /* mat4 */].multiply(this.worldTransform, parentTransform, this.localTransform);
      }

      for (var i = 0; i < this.children.length; ++i) {
        this.children[i].UpdateViewDependentData(this.worldTransform);
      }
    }
    /**
     * Per frame update
     * @param {Number} dt - delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      for (var i = 0; i < this.children.length; ++i) {
        this.children[i].Update(dt);
      }

      for (var _i = 0; _i < this.particleEmitters.length; ++_i) {
        this.particleEmitters[_i].Update(dt);
      }

      for (var _i2 = 0; _i2 < this.particleSystems.length; ++_i2) {
        this.particleSystems[_i2].Update(dt);
      }

      for (var _i3 = 0; _i3 < this.curveSets.length; ++_i3) {
        this.curveSets[_i3].Update(dt);
      }
    }
    /**
     * Gets render batches for accumulation
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData|Tw2BasicPerObjectData} [perObjectData]
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (!this.display) return;

      if (this.visible.mesh && this.mesh) {
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectFFEData.Get('World'), this.worldTransform);
        global["z" /* mat4 */].invert(this._perObjectData.perObjectFFEData.Get('WorldInverseTranspose'), this.worldTransform);

        if (perObjectData) {
          this._perObjectData.perObjectVSData = perObjectData.perObjectVSData;
          this._perObjectData.perObjectPSData = perObjectData.perObjectPSData;
        }

        this.mesh.GetBatches(mode, accumulator, this._perObjectData);
      }

      if (this.visible.children) {
        for (var i = 0; i < this.children.length; ++i) {
          this.children[i].GetBatches(mode, accumulator, perObjectData);
        }
      }
    }
    /**
     * multiply3x3
     */

  }], [{
    key: "Multiply3x3",
    value: function Multiply3x3(a, b, c) {
      c || (c = b);
      var d = b[0],
          e = b[1];
      b = b[2];
      c[0] = a[0] * d + a[4] * e + a[8] * b;
      c[1] = a[1] * d + a[5] * e + a[9] * b;
      c[2] = a[2] * d + a[6] * e + a[10] * b;
      return c;
    }
    /**
     * Per object data
     * @type {*}
     */

  }]);

  return EveTransform;
}(EveObject_EveObject);

EveTransform_defineProperty(EveTransform_EveTransform, "perObjectData", {
  FFEData: [['World', 16], ['WorldInverseTranspose', 16]]
});

EveTransform_defineProperty(EveTransform_EveTransform, "Modifier", {
  NONE: 0,
  BILLBOARD: 1,
  TRANSLATE_WITH_CAMERA: 2,
  LOOK_AT_CAMERA: 3,
  SIMPLE_HALO: 4,
  EVE_CAMERA_ROTATION_ALIGNED: 100,
  EVE_BOOSTER: 101,
  EVE_SIMPLE_HALO: 102,
  EVE_CAMERA_ROTATION: 103
});
// CONCATENATED MODULE: ./eve/object/EvePlanet.js
function EvePlanet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EvePlanet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EvePlanet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EvePlanet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EvePlanet_defineProperties(Constructor, staticProps); return Constructor; }

function EvePlanet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EvePlanet_setPrototypeOf(subClass, superClass); }

function EvePlanet_setPrototypeOf(o, p) { EvePlanet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EvePlanet_setPrototypeOf(o, p); }

function EvePlanet_createSuper(Derived) { var hasNativeReflectConstruct = EvePlanet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EvePlanet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EvePlanet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EvePlanet_possibleConstructorReturn(this, result); }; }

function EvePlanet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EvePlanet_assertThisInitialized(self); }

function EvePlanet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EvePlanet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EvePlanet_getPrototypeOf(o) { EvePlanet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EvePlanet_getPrototypeOf(o); }

function EvePlanet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * EvePlanet
 *
 * @property {string} name
 * @property {boolean} display
 * @property {EveTransform} highDetail
 * @property {Tw2Effect} effectHeight
 * @property {Tw2RenderTarget} heightMap
 * @property {*} zOnlyModel
 * @property {number} itemID
 * @property {string} heightMapResPath1
 * @property {string} heightMapResPath2
 * @property {boolean} heightDirty
 * @property {Array} lockedResources
 * @property {Array.<Tw2Resource>} watchedResources
 * @class
 */

var EvePlanet_EvePlanet = /*#__PURE__*/function (_EveObject) {
  EvePlanet_inherits(EvePlanet, _EveObject);

  var _super = EvePlanet_createSuper(EvePlanet);

  function EvePlanet() {
    var _this;

    EvePlanet_classCallCheck(this, EvePlanet);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "highDetail", new EveTransform_EveTransform());

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "effectHeight", new core["Tw2Effect"]());

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "heightMap", new core["Tw2RenderTarget"]());

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "zOnlyModel", null);

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "itemID", 0);

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "heightMapResPath1", '');

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "heightMapResPath2", '');

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "heightDirty", false);

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "lockedResources", []);

    EvePlanet_defineProperty(EvePlanet_assertThisInitialized(_this), "watchedResources", []);

    return _this;
  }

  EvePlanet_createClass(EvePlanet, [{
    key: "Create",

    /**
     * Creates the planet from an options object
     * @param {{}} options={}                   - an object containing the planet's options
     * @param {number} options.itemID           - the item id is used for randomization
     * @param {string} options.planetPath       - .red file for a planet, or planet template
     * @param {string} [options.atmospherePath] - optional .red file for a planet's atmosphere
     * @param {string} options.heightMap1       - the planet's first height map
     * @param {string} options.heightMap2       - the planet's second height map
     * @param {function} [onLoaded]             - an optional callback which is fired when the planet has loaded
     */
    value: function Create() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var onLoaded = arguments.length > 1 ? arguments[1] : undefined;
      var _options$itemID = options.itemID,
          itemID = _options$itemID === void 0 ? 0 : _options$itemID,
          planetPath = options.planetPath,
          atmospherePath = options.atmospherePath,
          heightMap1 = options.heightMap1,
          heightMap2 = options.heightMap2;
      this.itemID = itemID;
      this.heightMapResPath1 = heightMap1;
      this.heightMapResPath2 = heightMap2;
      this.highDetail.children = [];
      this.heightDirty = true;
      var loadingParts = 1;
      if (planetPath) loadingParts++;
      if (atmospherePath) loadingParts++;
      /**
       * Handles the optional onLoaded callback which is fired when all parts have loaded
       */

      function onPartLoaded() {
        loadingParts--;

        if (loadingParts < 1 && onLoaded) {
          onLoaded();
        }
      }

      if (planetPath) {
        global["D" /* resMan */].GetObject(planetPath, obj => {
          EvePlanet.MeshLoaded(this, obj);
          onPartLoaded();
        });
      }

      if (atmospherePath) {
        global["D" /* resMan */].GetObject(atmospherePath, obj => {
          this.highDetail.children.push(obj);
          onPartLoaded();
        });
      }

      global["D" /* resMan */].GetObject('res:/dx9/model/worldobject/planet/planetzonly.red', obj => {
        this.zOnlyModel = obj;
        onPartLoaded();
      });
    }
    /**
     * GetPlanetResources
     * Todo: Replace this, using this.GetResources();
     * @param obj
     * @param visited
     * @param result
     */

  }, {
    key: "GetPlanetResources",
    value: function GetPlanetResources(obj, visited, result) {
      if (visited.includes(obj)) return;
      visited.push(obj);

      if (obj && !global["F" /* util */].isUndefined(obj['doNotPurge'])) {
        result.push(obj);
        return;
      }

      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (global["F" /* util */].isObjectLike(obj[prop])) {
            this.GetPlanetResources(obj[prop], visited, result);
          }
        }
      }
    }
    /**
     * Gets planet res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (this.highDetail) this.highDetail.GetResources(out);
      if (this.effectHeight) this.effectHeight.GetResources(out);
      return out;
    }
    /**
     * Updates view dependent data
     * @param {mat4} parentTransform
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData(parentTransform) {
      this.highDetail.UpdateViewDependentData(parentTransform);

      if (this.zOnlyModel) {
        this.zOnlyModel.translation = this.highDetail.translation;
        this.zOnlyModel.scaling = this.highDetail.scaling;
        this.zOnlyModel.UpdateViewDependentData(parentTransform);
      }
    }
    /**
     * Per frame update
     * @param {number} dt - delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      this.highDetail.Update(dt);
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (this.display && this.heightDirty && this.watchedResources.length && this.heightMapResPath1 !== '') {
        for (var i = 0; i < this.watchedResources.length; ++i) {
          if (this.watchedResources[i] && !this.watchedResources[i].IsGood()) return;
        }

        this.watchedResources = [];
        this.heightMap.Set();
        global["w" /* device */].SetStandardStates(global["w" /* device */].RM_FULLSCREEN);
        global["w" /* device */].gl.clearColor(0.0, 0.0, 0.0, 0.0);
        global["w" /* device */].gl.clear(global["w" /* device */].gl.COLOR_BUFFER_BIT);
        global["w" /* device */].RenderFullScreenQuad(this.effectHeight);
        this.heightMap.Unset();
        this.heightDirty = false;

        for (var _i = 0; _i < this.lockedResources.length; ++_i) {
          this.lockedResources[_i].doNotPurge--;
        }

        var mainMesh = this.highDetail.children[0].mesh;
        var originalEffect = null;

        if (mainMesh.transparentAreas.length) {
          originalEffect = mainMesh.transparentAreas[0].effect;
        } else if (mainMesh.opaqueAreas.length) {
          originalEffect = mainMesh.opaqueAreas[0].effect;
        }

        if (originalEffect) {
          originalEffect.parameters['HeightMap'].textureRes = this.heightMap.texture;
        }
      }

      if (this.display) {
        this.highDetail.GetBatches(mode, accumulator);
      }
    }
    /**
     * Gets z buffer only batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetZOnlyBatches",
    value: function GetZOnlyBatches(mode, accumulator) {
      if (this.display && this.zOnlyModel) {
        this.zOnlyModel.GetBatches(mode, accumulator);
      }
    }
    /**
     * Internal helper function that fires when a planet's mesh has loaded
     * @property {EvePlanet} planet
     * @property {*} obj
     */

  }], [{
    key: "MeshLoaded",
    value: function MeshLoaded(planet, obj) {
      planet.highDetail.children.unshift(obj);
      planet.lockedResources = [];
      planet.GetPlanetResources(planet.highDetail, [], planet.lockedResources);
      var mainMesh = planet.highDetail.children[0].mesh,
          originalEffect = null,
          resPath;

      if (mainMesh.transparentAreas.length) {
        originalEffect = mainMesh.transparentAreas[0].effect;
        resPath = originalEffect.effectFilePath;
      } else if (mainMesh.opaqueAreas.length) {
        originalEffect = mainMesh.opaqueAreas[0].effect;
        resPath = originalEffect.effectFilePath;
      } else {
        resPath = 'res:/Graphics/Effect/Managed/Space/Planet/EarthlikePlanet.fx';
      }

      resPath = resPath.replace('.fx', 'BlitHeight.fx');
      planet.watchedResources = [];

      for (var param in originalEffect.parameters) {
        if (originalEffect.parameters.hasOwnProperty(param)) {
          planet.effectHeight.parameters[param] = originalEffect.parameters[param];

          if ('textureRes' in originalEffect.parameters[param]) {
            planet.watchedResources.push(originalEffect.parameters[param].textureRes);
          }
        }
      }

      for (var i = 0; i < planet.highDetail.children[0].children.length; ++i) {
        mainMesh = planet.highDetail.children[0].children[i].mesh;
        if (!mainMesh) continue;
        originalEffect = null;

        if (mainMesh.transparentAreas.length) {
          originalEffect = mainMesh.transparentAreas[0].effect;
        } else if (mainMesh.opaqueAreas.length) {
          originalEffect = mainMesh.opaqueAreas[0].effect;
        } else {
          continue;
        }

        for (var _param in originalEffect.parameters) {
          if (originalEffect.parameters.hasOwnProperty(_param)) {
            planet.effectHeight.parameters[_param] = originalEffect.parameters[_param];

            if ('textureRes' in originalEffect.parameters[_param]) {
              planet.watchedResources.push(originalEffect.parameters[_param].textureRes);
            }
          }
        }
      }

      var NormalHeight1 = new core["Tw2TextureParameter"]('NormalHeight1', planet.heightMapResPath1);
      NormalHeight1.Initialize();
      planet.watchedResources.push(NormalHeight1.textureRes);
      planet.lockedResources.push(NormalHeight1.textureRes);
      planet.effectHeight.parameters.NormalHeight1 = NormalHeight1;
      var NormalHeight2 = new core["Tw2TextureParameter"]('NormalHeight2', planet.heightMapResPath2);
      NormalHeight2.Initialize();
      planet.watchedResources.push(NormalHeight2.textureRes);
      planet.lockedResources.push(NormalHeight2.textureRes);
      planet.effectHeight.parameters.NormalHeight2 = NormalHeight2;
      planet.effectHeight.parameters.Random = new core["Tw2FloatParameter"]('Random', planet.itemID % 100);
      planet.effectHeight.parameters.TargetTextureHeight = new core["Tw2FloatParameter"]('TargetTextureHeight', 1024);
      planet.effectHeight.effectFilePath = resPath;
      planet.effectHeight.Initialize();
      planet.heightDirty = true;
      planet.heightMap.Create(2048, 1024, false);
      planet.watchedResources.push(planet.effectHeight.effectRes);

      for (var _i2 = 0; _i2 < planet.lockedResources.length; ++_i2) {
        planet.lockedResources[_i2].doNotPurge++;

        if (planet.lockedResources[_i2].IsPurged()) {
          planet.lockedResources[_i2].Reload();
        }
      }
    }
  }]);

  return EvePlanet;
}(EveObject_EveObject);
// CONCATENATED MODULE: ./eve/object/EveShip.js
function EveShip_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveShip_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveShip_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveShip_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveShip_defineProperties(Constructor, staticProps); return Constructor; }

function EveShip_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { EveShip_get = Reflect.get; } else { EveShip_get = function _get(target, property, receiver) { var base = EveShip_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return EveShip_get(target, property, receiver || target); }

function EveShip_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = EveShip_getPrototypeOf(object); if (object === null) break; } return object; }

function EveShip_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveShip_setPrototypeOf(subClass, superClass); }

function EveShip_setPrototypeOf(o, p) { EveShip_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveShip_setPrototypeOf(o, p); }

function EveShip_createSuper(Derived) { var hasNativeReflectConstruct = EveShip_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveShip_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveShip_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveShip_possibleConstructorReturn(this, result); }; }

function EveShip_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveShip_assertThisInitialized(self); }

function EveShip_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveShip_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveShip_getPrototypeOf(o) { EveShip_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveShip_getPrototypeOf(o); }

function EveShip_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * EveShip
 *
 * @property {Array.<EveBoosterSet>} boosters
 * @property {Array.<EveTurretSet>} turretSets
 * @property {number} boosterGain
 * @class
 */

var EveShip = /*#__PURE__*/function (_EveSpaceObject) {
  EveShip_inherits(EveShip, _EveSpaceObject);

  var _super = EveShip_createSuper(EveShip);

  function EveShip() {
    var _this;

    EveShip_classCallCheck(this, EveShip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveShip_defineProperty(EveShip_assertThisInitialized(_this), "boosters", null);

    EveShip_defineProperty(EveShip_assertThisInitialized(_this), "turretSets", []);

    EveShip_defineProperty(EveShip_assertThisInitialized(_this), "boosterGain", 1);

    return _this;
  }

  EveShip_createClass(EveShip, [{
    key: "Initialize",

    /**
     * Initializes the Eve Ship
     */
    value: function Initialize() {
      EveShip_get(EveShip_getPrototypeOf(EveShip.prototype), "Initialize", this).call(this);

      if (this.boosters) {
        this.RebuildBoosterSet();
      }
    }
    /**
     * Rebuilds the ship's booster set
     */

  }, {
    key: "RebuildBoosterSet",
    value: function RebuildBoosterSet() {
      if (this.boosters) {
        this.boosters.UpdateItemsFromLocators(this.FindLocatorsByPrefix('locator_booster'));
      }
    }
    /**
     * Rebuilds turret sets
     */

  }, {
    key: "RebuildTurretPositions",
    value: function RebuildTurretPositions() {
      for (var i = 0; i < this.turretSets.length; i++) {
        this.RebuildTurretSet(i);
      }
    }
    /**
     * Rebuilds a turret set
     * @param {number} index
     */

  }, {
    key: "RebuildTurretSet",
    value: function RebuildTurretSet(index) {
      if (this.turretSets[index] === undefined) return;
      var turretSet = this.turretSets[index],
          prefix = turretSet.locatorName,
          count = this.GetLocatorCount(prefix),
          locators = [];

      for (var j = 0; j < count; ++j) {
        var name = prefix + String.fromCharCode('a'.charCodeAt(0) + j),
            locator = this.FindLocatorByName(name);

        if (locator) {
          locator.FindBone(this.animation);
          locators.push(locator);
        }
      }

      turretSet.UpdateItemsFromLocators(locators);
    }
    /**
     * Gets ship's res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @param {Boolean} excludeChildren - True to exclude children's res objects
     * @returns {Array.<Tw2EffectRes|Tw2TextureRes|Tw2GeometryRes>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var excludeChildren = arguments.length > 1 ? arguments[1] : undefined;

      EveShip_get(EveShip_getPrototypeOf(EveShip.prototype), "GetResources", this).call(this, out, excludeChildren);

      for (var i = 0; i < this.turretSets.length; i++) {
        this.turretSets[i].GetResources(out);
      }

      if (this.boosters) {
        this.boosters.GetResources(out);
      }

      return out;
    }
    /**
     * Updates view dependant data
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      EveShip_get(EveShip_getPrototypeOf(EveShip.prototype), "UpdateViewDependentData", this).call(this);

      for (var i = 0; i < this.turretSets.length; ++i) {
        this.turretSets[i].UpdateViewDependentData();
      }
    }
    /**
     * Per frame update
     * @param {number} dt - deltaTime
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      EveShip_get(EveShip_getPrototypeOf(EveShip.prototype), "Update", this).call(this, dt);

      if (this.boosters) {
        if (this.boosters._locatorRebuildPending) {
          this.RebuildBoosterSet();
        }

        this.boosters.Update(dt, this.transform);
      }

      for (var i = 0; i < this.turretSets.length; ++i) {
        if (this.turretSets[i]._locatorRebuildPending) {
          this.RebuildTurretSet(i);
        }

        this.turretSets[i].Update(dt, this.transform);
      }
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (this.display) {
        EveShip_get(EveShip_getPrototypeOf(EveShip.prototype), "GetBatches", this).call(this, mode, accumulator);

        this._perObjectData.perObjectVSData.Get('Shipdata')[0] = this.boosterGain;
        this._perObjectData.perObjectPSData.Get('Shipdata')[0] = this.boosterGain;

        if (this.boosters && this.visible.boosters) {
          this.boosters.GetBatches(mode, accumulator, this._perObjectData);
        }

        if (this.visible.turretSets) {
          if (this.lod > 1) {
            for (var i = 0; i < this.turretSets.length; ++i) {
              this.turretSets[i].GetBatches(mode, accumulator, this._perObjectData, this.visible.firingEffects);
            }
          } else if (this.visible.firingEffects) {
            for (var _i = 0; _i < this.turretSets.length; ++_i) {
              if (this.turretSets[_i].firingEffect) {
                this.turretSets[_i].firingEffect.GetBatches(mode, accumulator, this._perObjectData);
              }
            }
          }
        }
      }
    }
  }]);

  return EveShip;
}(EveSpaceObject_EveSpaceObject);
// CONCATENATED MODULE: ./eve/object/index.js







// CONCATENATED MODULE: ./eve/item/EveObjectSet.js
function EveObjectSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveObjectSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveObjectSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveObjectSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveObjectSet_defineProperties(Constructor, staticProps); return Constructor; }

function EveObjectSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint no-unused-vars:0 */

/**
 * EveObjectSetItem base class
 *
 * @property {string|number} _id     - The set item's id
 * @property {string} name           - The set item's name
 * @property {boolean} display       - Toggles the set item's visibility
 * @property {?Function} _onModified - A callback which is fired on value changes
 */

var EveObjectSet_EveObjectSetItem = /*#__PURE__*/function () {
  function EveObjectSetItem() {
    EveObjectSet_classCallCheck(this, EveObjectSetItem);

    EveObjectSet_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveObjectSet_defineProperty(this, "name", '');

    EveObjectSet_defineProperty(this, "display", true);

    EveObjectSet_defineProperty(this, "_rebuildPending", true);

    EveObjectSet_defineProperty(this, "_onModified", null);
  }

  EveObjectSet_createClass(EveObjectSetItem, [{
    key: "OnValueChanged",

    /**
     * Fire on value changes
     */
    value: function OnValueChanged() {
      this._rebuildPending = true;
      if (this._onModified) this._onModified(this);
    }
  }]);

  return EveObjectSetItem;
}();
/**
 * EveObjectSet base class
 *
 * @property {number|String} _id                     - The set's id
 * @property {string} name                           - The set's name
 * @property {boolean} display                       - Toggles set visibility
 * @property {Array<EveObjectSetItem>} items         - The set's items
 * @property {Array<EveObjectSetItem>} _visibleItems - The set's items that will be rendered when the set is visible
 * @property {boolean} _rebuildPending               - Identifies if the set requires rebuilding
 * @class
 */

var EveObjectSet_EveObjectSet = /*#__PURE__*/function () {
  function EveObjectSet() {
    EveObjectSet_classCallCheck(this, EveObjectSet);

    EveObjectSet_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveObjectSet_defineProperty(this, "name", '');

    EveObjectSet_defineProperty(this, "display", true);

    EveObjectSet_defineProperty(this, "items", []);

    EveObjectSet_defineProperty(this, "_visibleItems", []);

    EveObjectSet_defineProperty(this, "_rebuildPending", false);

    EveObjectSet_defineProperty(this, "_onChildModified", item => this.OnValueChanged(item));
  }

  EveObjectSet_createClass(EveObjectSet, [{
    key: "Initialize",

    /**
     * Initializes the set
     */
    value: function Initialize() {
      this.Rebuild();
    }
    /**
     * Fires on value changes
     */

  }, {
    key: "OnValueChanged",
    value: function OnValueChanged() {
      this._rebuildPending = true;
    }
    /**
     * Creates an item from an options object and then adds it to the set
     * @param {*} [opt={}]
     * @returns {?EveObjectSetItem|*}
     */

  }, {
    key: "CreateItem",
    value: function CreateItem() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var Item = this.constructor.Item;

      if (Item && 'create' in Item) {
        var item = Item.create(opt);
        this.AddItem(item);
        return item;
      }

      return null;
    }
    /**
     * Adds a set item
     * @param {EveObjectSetItem|*} item
     */

  }, {
    key: "AddItem",
    value: function AddItem(item) {
      if (!this.items.includes(item)) {
        item._onModified = this._onChildModified;
        this.items.push(item);
        this.OnValueChanged();
      }
    }
    /**
     * Removes a set item
     * @param {EveObjectSetItem|*} item
     */

  }, {
    key: "RemoveItem",
    value: function RemoveItem(item) {
      var index = this.items.indexOf(item);

      if (index !== -1) {
        item._onModified = null;
        this.items.splice(index, 1);
        this.OnValueChanged();
      }
    }
    /**
     * Clears all set items
     */

  }, {
    key: "ClearItems",
    value: function ClearItems() {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i]._onModified = null;
      }

      this.items = [];
      this.OnValueChanged();
    }
    /**
     * Finds an item by it's id
     * @param {?number} [id=null]
     * @returns {?EveObjectSetItem|*}
     */

  }, {
    key: "FindItemByID",
    value: function FindItemByID() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (id !== null) {
        for (var i = 0; i < this.items.length; i++) {
          if (this.items[i]._id === id) {
            return this.items[i];
          }
        }
      }

      return null;
    }
    /**
     * Gets the set's resources
     * @param {Array} [out=[]]
     * @returns {Array<Tw2Resource>}
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return out;
    }
    /**
     * Per frame update
     * @param {number} dt
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      if (this._rebuildPending) {
        this.Rebuild();
      }
    }
    /**
     * Unloads the set's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {}
    /**
     * Rebuilds the set
     */

  }, {
    key: "Rebuild",
    value: function Rebuild() {
      this.constructor.RebuildItems(this);
      this._rebuildPending = false;
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData|Tw2BasicPerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {}
    /**
     * Renders the set
     */

  }, {
    key: "Render",
    value: function Render() {}
    /**
     * Rebuilds the set's items
     *
     * @param {EveObjectSet|*} eveSet
     */

  }], [{
    key: "RebuildItems",
    value: function RebuildItems(eveSet) {
      eveSet._visibleItems = [];

      for (var i = 0; i < eveSet.items.length; i++) {
        var item = eveSet.items[i];
        item._onModified = eveSet._onChildModified;
        item._rebuildPending = false;

        if (item.display) {
          eveSet._visibleItems.push(item);
        }
      }
    }
    /**
     * The object set's item
     * @type {?Function}
     */

  }]);

  return EveObjectSet;
}();

EveObjectSet_defineProperty(EveObjectSet_EveObjectSet, "Item", null);

EveObjectSet_defineProperty(EveObjectSet_EveObjectSet, "global", {
  vec3_0: global["H" /* vec3 */].create(),
  vec3_1: global["H" /* vec3 */].create(),
  vec3_2: global["H" /* vec3 */].create(),
  vec4_0: global["I" /* vec4 */].create(),
  vec4_1: global["I" /* vec4 */].create(),
  mat4_0: global["z" /* mat4 */].create()
});
// CONCATENATED MODULE: ./eve/item/EveBoosterSet.js
function EveBoosterSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveBoosterSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveBoosterSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveBoosterSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveBoosterSet_defineProperties(Constructor, staticProps); return Constructor; }

function EveBoosterSet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveBoosterSet_setPrototypeOf(subClass, superClass); }

function EveBoosterSet_setPrototypeOf(o, p) { EveBoosterSet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveBoosterSet_setPrototypeOf(o, p); }

function EveBoosterSet_createSuper(Derived) { var hasNativeReflectConstruct = EveBoosterSet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveBoosterSet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveBoosterSet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveBoosterSet_possibleConstructorReturn(this, result); }; }

function EveBoosterSet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveBoosterSet_assertThisInitialized(self); }

function EveBoosterSet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveBoosterSet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveBoosterSet_getPrototypeOf(o) { EveBoosterSet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveBoosterSet_getPrototypeOf(o); }

function EveBoosterSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Booster render batch
 *
 * @property {EveBoosterSet} boosters
 * @class
 */

var EveBoosterBatch = /*#__PURE__*/function (_Tw2RenderBatch) {
  EveBoosterSet_inherits(EveBoosterBatch, _Tw2RenderBatch);

  var _super = EveBoosterSet_createSuper(EveBoosterBatch);

  function EveBoosterBatch() {
    var _this;

    EveBoosterSet_classCallCheck(this, EveBoosterBatch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this), "boosters", null);

    return _this;
  }

  EveBoosterSet_createClass(EveBoosterBatch, [{
    key: "Commit",

    /**
     * Commits the batch
     * @param {string} technique - technique name
     */
    value: function Commit(technique) {
      this.boosters.Render(technique);
    }
  }]);

  return EveBoosterBatch;
}(core["Tw2RenderBatch"]);
/**
 * EveBoosterSetItem
 *
 * @param {boolean} enableCustomValues   - Enables custom values
 * @property {{}} visible                - Visibility options
 * @property {boolean} visible.halo      - Toggles halo visibility
 * @property {boolean} visible.symHalo   - Toggles symmetrical halo visibility
 * @property {boolean} visible.glow      - Toggles glow visibility
 * @property {boolean} visible.trail     - Toggles trail visibility (not implemented)
 * @property {?string} locatorName       - The item's locator name, if it was built from one
 * @property {boolean} updateFromLocator - Sets whether the item should be updated when it's locator is
 * @property {mat4} transform            - The item's local transform
 * @property {number} atlas0             - The item's atlas index 0
 * @property {number} atlas1             - The item's atlas index 1
 * @property {number} seed               - A random seed which affects any glows built from this item
 * @property {number} wavePhase          - A random seed which affects the booster wave pattern
 * @property {*} customValues            - An optional object containing custom values
 * @class
 */

var EveBoosterSet_EveBoosterSetItem = /*#__PURE__*/function (_EveObjectSetItem) {
  EveBoosterSet_inherits(EveBoosterSetItem, _EveObjectSetItem);

  var _super2 = EveBoosterSet_createSuper(EveBoosterSetItem);

  function EveBoosterSetItem() {
    var _this2;

    EveBoosterSet_classCallCheck(this, EveBoosterSetItem);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call(this, ...args);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "visible", {
      glow: true,
      symHalo: true,
      halo: true,
      trail: true,
      customValues: true
    });

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "locatorName", null);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "updateFromLocator", false);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "seed", Math.random() * 7);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "wavePhase", Math.random());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "atlas0", 0);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "atlas1", 0);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "transform", global["z" /* mat4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this2), "customValues", null);

    return _this2;
  }

  EveBoosterSet_createClass(EveBoosterSetItem, [{
    key: "GetPosition",

    /**
     * Gets the item's position
     * @param {vec3} out
     * @returns {vec3} out
     */
    value: function GetPosition(out) {
      return global["z" /* mat4 */].getTranslation(out, this.transform);
    }
    /**
     * Gets the item's direction
     * @param {vec3} out
     * @returns {vec3} out
     */

  }, {
    key: "GetDirection",
    value: function GetDirection(out) {
      global["H" /* vec3 */].set(out, this.transform[8], this.transform[9], this.transform[10]);
      global["H" /* vec3 */].normalize(out, out);
      var scale = this.GetScale();
      if (scale < 3) global["H" /* vec3 */].scale(out, out, scale / 3);
      return out;
    }
    /**
     * Gets the item's scale
     * @returns {number}
     */

  }, {
    key: "GetScale",
    value: function GetScale() {
      var tr = this.transform;
      return Math.max(global["H" /* vec3 */].length([tr[0], tr[1], tr[2]]), global["H" /* vec3 */].length([tr[4], tr[5], tr[6]]));
    }
    /**
     * Creates an item from an object
     * @param {*} [opt={}]
     * @returns {EveBoosterSetItem}
     */

  }], [{
    key: "create",
    value: function create() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var item = new this();
      global["F" /* util */].assignIfExists(item.visible, opt.visible, ['glow', 'symHalo', 'halo', 'trail']);
      global["F" /* util */].assignIfExists(item, opt, ['name', 'display', 'seed', 'wavePhase', 'transform', 'locatorName', 'updateFromLocator', 'atlas0', 'atlas1']);
      return item;
    }
  }]);

  return EveBoosterSetItem;
}(EveObjectSet_EveObjectSetItem);
/**
 * EveBoosterSet
 *
 * @property {{}} visible                      - Visibility controls
 * @property {boolean} visible.glows           - Toggles glow visibility
 * @property {boolean} visible.symHalos        - Toggles symmetrical halo visibility
 * @property {boolean} visible.halos           - Toggles halo visibility
 * @property {boolean} visible.trails          - Toggles trails visibility (Not implemented)
 * @property {Tw2Effect} effect                - The booster's booster effect
 * @property {?Tw2Effect} glows                - The booster's glows (sprites)
 * @property {number} maxVel                   - (Not implemented)
 * @property {boolean} alwaysOn                - (Not implemented)
 * @property {number} glowDistance             - The distance between the booster's locators and glow sprites
 * @property {number} glowScale                - The base scale of the booster's glow sprites
 * @property {vec4} glowColor                  - The color of the booster set's glow sprites
 * @property {vec4} warpGlowColor              - The color of the booster set's glow sprites when warping (Not implemented)
 * @property {number} haloDistance             - The distance between the booster set's locators and halo sprites
 * @property {number} haloScaleX               - The base vertical scale of the booster set's halos
 * @property {number} haloScaleY               - The base horizontal scale of the booster set's halos
 * @property {vec4} haloColor                  - The color of the booster set's halo sprites
 * @property {vec4} warpHaloColor              - The color of the booster set's halo sprites when warping (Not implemented)
 * @property {vec4} trailSize                  - The booster set's trail size (Not implemented)
 * @property {vec4} trailColor                 - The booster set's trail color (Not implemented)
 * @property {number} symHaloDistance          - The distance between the booster set's locators and symmetrical halo sprites
 * @property {number} symHaloScale             - The base scale of the booster set's symmetrical halos
 * @property {mat4} _parentTransform           - The booster set's parent's transform
 * @property {WebGLBuffer} _positions          - The booster set's webgl buffer
 * @property {Tw2VertexDeclaration} _decl      - The booster set's vertex declarations
 * @property {Tw2PerObjectData} _perObjectData - The booster set's shader data
 * @property {boolean} _locatorRebuildPending  - Identifies that the booster set needs to be rebuilt from locators
 * @class
 */

var EveBoosterSet_EveBoosterSet = /*#__PURE__*/function (_EveObjectSet) {
  EveBoosterSet_inherits(EveBoosterSet, _EveObjectSet);

  var _super3 = EveBoosterSet_createSuper(EveBoosterSet);

  function EveBoosterSet() {
    var _this3;

    EveBoosterSet_classCallCheck(this, EveBoosterSet);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call(this, ...args);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "visible", {
      glows: true,
      symHalos: true,
      halos: true,
      trails: true
    });

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "effect", null);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "glows", null);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "alwaysOn", true);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "maxVel", 250);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "glowDistance", 2.5);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "glowScale", 1.0);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "glowColor", global["I" /* vec4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "warpGlowColor", global["I" /* vec4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "haloDistance", 3.01);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "haloScaleX", 1.0);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "haloScaleY", 1.0);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "haloColor", global["I" /* vec4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "warpHaloColor", global["I" /* vec4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "symHaloDistance", 3);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "symHaloScale", 1.0);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "trailColor", global["I" /* vec4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "trailSize", global["I" /* vec4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "_parentTransform", global["z" /* mat4 */].create());

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "_positions", null);

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "_decl", new core["Tw2VertexDeclaration"](EveBoosterSet.vertexDeclarations));

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "_perObjectData", new core["Tw2PerObjectData"](EveBoosterSet.perObjectData));

    EveBoosterSet_defineProperty(EveBoosterSet_assertThisInitialized(_this3), "_locatorRebuildPending", true);

    return _this3;
  }

  EveBoosterSet_createClass(EveBoosterSet, [{
    key: "FindItemByLocatorName",

    /**
     * Finds a booster item that belongs to a locator by it's name
     * @param {string} locatorName
     * @returns {?EveBoosterSetItem}
     */
    value: function FindItemByLocatorName(locatorName) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].locatorName && this.items[i].locatorName === locatorName) {
          return this.items[i];
        }
      }

      return null;
    }
    /**
     * Updates booster items that were built from locators
     * @param {Array.<EveLocator>} locators
     */

  }, {
    key: "UpdateItemsFromLocators",
    value: function UpdateItemsFromLocators(locators) {
      var items = Array.from(this.items);

      for (var i = 0; i < locators.length; i++) {
        var _locators$i = locators[i],
            name = _locators$i.name,
            transform = _locators$i.transform,
            atlasIndex0 = _locators$i.atlasIndex0,
            atlasIndex1 = _locators$i.atlasIndex1;
        var item = this.FindItemByLocatorName(name);

        if (!item) {
          this.CreateItem({
            name: name,
            locatorName: name,
            updateFromLocator: true,
            atlas0: atlasIndex0,
            atlas1: atlasIndex1,
            transform: transform
          });
        } else {
          items.splice(items.indexOf(item), 1);

          if (item.updateFromLocator) {
            global["z" /* mat4 */].copy(item.transform, transform);
            item.atlas0 = atlasIndex0;
            item.atlas1 = atlasIndex1;
            item.OnValueChanged();
          }
        }
      }

      for (var _i = 0; _i < items.length; _i++) {
        if (items[_i].locatorName !== null) {
          this.RemoveItem(items[_i]);
          _i--;
        }
      }

      this._locatorRebuildPending = false;

      if (this._rebuildPending) {
        this.Rebuild();
      }
    }
    /**
     * Rebuilds the booster set from it's parent's locators
     */

  }, {
    key: "RebuildItemsFromLocators",
    value: function RebuildItemsFromLocators() {
      this._locatorRebuildPending = true;
    }
    /**
     * Gets booster set resources
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.effect) {
        this.effect.GetResources(out);
      }

      if (this.glows) {
        this.glows.effect.GetResources(out);
      }

      return out;
    }
    /**
     * Per frame update
     * @param {number} dt - DeltaTime
     * @param {mat4} parentMatrix
     */

  }, {
    key: "Update",
    value: function Update(dt, parentMatrix) {
      global["z" /* mat4 */].copy(this._parentTransform, parentMatrix);
      if (this._rebuildPending) this.Rebuild();
      if (this.glows) this.glows.Update(dt);
    }
    /**
     * Unloads the booster's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {
      if (this._positions) {
        global["w" /* device */].gl.deleteBuffer(this._positions);
        this._positions = null;
      }

      if (this.glows) {
        this.glows.Unload();
      }
    }
    /**
     * Rebuilds the boosters
     */

  }, {
    key: "Rebuild",
    value: function Rebuild() {
      this.constructor.RebuildItems(this);
      var itemCount = this._visibleItems.length;
      this._rebuildPending = false;
      if (!itemCount) return;
      var d = global["w" /* device */],
          box = EveBoosterSet._box,
          data = new Float32Array(itemCount * box.length * 6 * 28),
          order = [0, 3, 1, 3, 2, 1];
      var index = 0;

      for (var i = 0; i < itemCount; ++i) {
        var item = this._visibleItems[i];

        for (var b = 0; b < box.length; ++b) {
          for (var j = 0; j < order.length; ++j) {
            data[index++] = box[b][order[j]][0];
            data[index++] = box[b][order[j]][1];
            data[index++] = box[b][order[j]][2];
            data[index++] = 0;
            data[index++] = 0;
            data.set(item.transform, index);
            index += 16;
            data[index++] = 0;
            data[index++] = 1;
            data[index++] = 1;
            data[index++] = 1;
            data[index++] = item.wavePhase;
            data[index++] = item.atlas0;
            data[index++] = item.atlas1;
          }
        }
      }

      this._positions = d.gl.createBuffer();
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, this._positions);
      d.gl.bufferData(d.gl.ARRAY_BUFFER, data, d.gl.STATIC_DRAW);
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, null);
      this._positions.count = itemCount * 12 * 3;
      if (this.glows) this.glows.Rebuild();
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (!this.display || mode !== global["w" /* device */].RM_ADDITIVE || !this._positions || !this._visibleItems.length) return;

      if (this.effect) {
        var batch = new EveBoosterBatch();
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('WorldMat'), this._parentTransform);

        this._perObjectData.perObjectVSData.Set('Shipdata', perObjectData.perObjectVSData.Get('Shipdata'));

        this._perObjectData.perObjectPSData = perObjectData.perObjectPSData;
        batch.perObjectData = this._perObjectData;
        batch.boosters = this;
        batch.renderMode = global["w" /* device */].RM_ADDITIVE;
        accumulator.Commit(batch);
      }

      if (this.glows) {
        this.glows.GetBoosterGlowBatches(mode, accumulator, perObjectData, this._parentTransform, perObjectData.perObjectVSData.Get('Shipdata')[0], 0);
      }
    }
    /**
     * Renders the accumulated batches
     * @param {string} technique - technique name
     * @returns {boolean}
     */

  }, {
    key: "Render",
    value: function Render(technique) {
      if (!this.effect || !this.effect.IsGood()) return false;
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, this._positions);

      for (var pass = 0; pass < this.effect.GetPassCount(technique); ++pass) {
        this.effect.ApplyPass(technique, pass);
        if (!this._decl.SetDeclaration(this.effect.GetPassInput(technique, pass), 112)) return false;
        global["w" /* device */].ApplyShadowState();
        global["w" /* device */].gl.drawArrays(global["w" /* device */].gl.TRIANGLES, 0, this._positions.count);
      }

      return true;
    }
    /**
     * Rebuilds a booster set's items
     * @param {EveBoosterSet} boosters
     */

  }], [{
    key: "RebuildItems",
    value: function RebuildItems(boosters) {
      var glows = boosters.glows,
          g = EveBoosterSet.global,
          spritePos = g.vec3_0;
      if (glows) glows.ClearItems();
      boosters._visibleItems = [];

      for (var i = 0; i < boosters.items.length; i++) {
        var item = boosters.items[i];
        item._onModified = boosters._onChildModified;

        if (item.display) {
          boosters._visibleItems.push(item);

          if (glows) {
            var src = item.customValues && item.customValues.display ? item.customValues : boosters,
                pos = item.GetPosition(g.vec3_1),
                dir = item.GetDirection(g.vec3_2),
                scale = item.GetScale();

            if (boosters.visible.glows && item.visible.glow) {
              glows.CreateItem({
                name: item.name + '_glow',
                position: global["H" /* vec3 */].subtract(spritePos, pos, global["H" /* vec3 */].scale(spritePos, dir, src.glowDistance)),
                blinkRate: item.seed,
                blinkPhase: item.seed,
                minScale: src.glowScale * scale,
                maxScale: src.glowScale * scale,
                color: src.glowColor,
                warpColor: src.warpGlowColor
              });
            }

            if (boosters.visible.symHalos && item.visible.symHalo) {
              glows.CreateItem({
                name: item.name + '_symHalo',
                position: global["H" /* vec3 */].subtract(spritePos, pos, global["H" /* vec3 */].scale(spritePos, dir, src.symHaloDistance)),
                blinkRate: item.seed,
                blinkPhase: item.seed + 1,
                minScale: src.symHaloScale * scale,
                maxScale: src.symHaloScale * scale,
                color: src.haloColor,
                warpColor: src.warpHaloColor
              });
            }

            if (boosters.visible.halos && item.visible.halo) {
              glows.CreateItem({
                name: item.name + '_halo',
                position: global["H" /* vec3 */].subtract(spritePos, pos, global["H" /* vec3 */].scale(spritePos, dir, src.haloDistance)),
                blinkRate: item.seed,
                blinkPhase: item.seed + 1,
                minScale: src.haloScaleX * scale,
                maxScale: src.haloScaleY * scale,
                color: src.haloColor,
                warpColor: src.warpHaloColor
              });
            }
          }

          item._rebuildPending = false;
        }
      }
    }
    /**
     * The booster set's item constructor
     * @type {EveBoosterSetItem}
     */

  }]);

  return EveBoosterSet;
}(EveObjectSet_EveObjectSet);

EveBoosterSet_defineProperty(EveBoosterSet_EveBoosterSet, "Item", EveBoosterSet_EveBoosterSetItem);

EveBoosterSet_defineProperty(EveBoosterSet_EveBoosterSet, "perObjectData", {
  VSData: [['WorldMat', 16], ['Shipdata', 4]]
});

EveBoosterSet_defineProperty(EveBoosterSet_EveBoosterSet, "vertexDeclarations", [['POSITION', 0, 3], ['TEXCOORD', 0, 2], ['TEXCOORD', 1, 4], ['TEXCOORD', 2, 4], ['TEXCOORD', 3, 4], ['TEXCOORD', 4, 4], ['TEXCOORD', 5, 4], ['TEXCOORD', 6, 1], ['TEXCOORD', 7, 2]]);

EveBoosterSet_defineProperty(EveBoosterSet_EveBoosterSet, "_box", [[[-1.0, -1.0, 0.0], [1.0, -1.0, 0.0], [1.0, 1.0, 0.0], [-1.0, 1.0, 0.0]], [[-1.0, -1.0, -1.0], [-1.0, 1.0, -1.0], [1.0, 1.0, -1.0], [1.0, -1.0, -1.0]], [[-1.0, -1.0, 0.0], [-1.0, 1.0, 0.0], [-1.0, 1.0, -1.0], [-1.0, -1.0, -1.0]], [[1.0, -1.0, 0.0], [1.0, -1.0, -1.0], [1.0, 1.0, -1.0], [1.0, 1.0, 0.0]], [[-1.0, -1.0, 0.0], [-1.0, -1.0, -1.0], [1.0, -1.0, -1.0], [1.0, -1.0, 0.0]], [[-1.0, 1.0, 0.0], [1.0, 1.0, 0.0], [1.0, 1.0, -1.0], [-1.0, 1.0, -1.0]]]);
// CONCATENATED MODULE: ./eve/item/EveCurveLineSet.js
function EveCurveLineSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveCurveLineSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveCurveLineSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveCurveLineSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveCurveLineSet_defineProperties(Constructor, staticProps); return Constructor; }

function EveCurveLineSet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveCurveLineSet_setPrototypeOf(subClass, superClass); }

function EveCurveLineSet_setPrototypeOf(o, p) { EveCurveLineSet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveCurveLineSet_setPrototypeOf(o, p); }

function EveCurveLineSet_createSuper(Derived) { var hasNativeReflectConstruct = EveCurveLineSet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveCurveLineSet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveCurveLineSet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveCurveLineSet_possibleConstructorReturn(this, result); }; }

function EveCurveLineSet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveCurveLineSet_assertThisInitialized(self); }

function EveCurveLineSet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveCurveLineSet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveCurveLineSet_getPrototypeOf(o) { EveCurveLineSet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveCurveLineSet_getPrototypeOf(o); }

function EveCurveLineSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveCurveLineSetItem
 *
 * @property {number} type
 * @property {vec3} position1
 * @property {vec4} color1
 * @property {vec3} position2
 * @property {vec4} color2
 * @property {vec3} intermediatePosition
 * @property {number} width
 * @property {vec4} multiColor
 * @property {number} multiColorBorder
 * @property {vec4} overlayColor
 * @property {number} animationSpeed
 * @property {number} animationScale
 * @property {number} numOfSegments
 * @class
 */

var EveCurveLineSet_EveCurveLineSetItem = /*#__PURE__*/function (_EveObjectSetItem) {
  EveCurveLineSet_inherits(EveCurveLineSetItem, _EveObjectSetItem);

  var _super = EveCurveLineSet_createSuper(EveCurveLineSetItem);

  function EveCurveLineSetItem() {
    var _this;

    EveCurveLineSet_classCallCheck(this, EveCurveLineSetItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "type", EveCurveLineSetItem.Type.INVALID);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "position1", global["H" /* vec3 */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "color1", global["I" /* vec4 */].fromValues(1, 1, 1, 1));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "position2", global["H" /* vec3 */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "color2", global["I" /* vec4 */].fromValues(1, 1, 1, 1));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "intermediatePosition", global["H" /* vec3 */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "width", 1);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "multiColor", global["I" /* vec4 */].fromValues(0, 0, 0, 1));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "multiColorBorder", -1);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "overlayColor", global["I" /* vec4 */].fromValues(0, 0, 0, 1));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "animationSpeed", 0);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "animationScale", 1);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this), "numOfSegments", 1);

    return _this;
  }

  EveCurveLineSet_createClass(EveCurveLineSetItem, [{
    key: "ChangeColor",

    /**
     * Changes the line's colors
     * @param {vec3} startColor
     * @param {vec3} endColor
     */
    value: function ChangeColor(startColor, endColor) {
      global["H" /* vec3 */].copy(this.color1, startColor);
      global["H" /* vec3 */].copy(this.color2, endColor);
      this.OnValueChanged();
    }
    /**
     * Changes the line's width
     * @param {number} width
     */

  }, {
    key: "ChangeWidth",
    value: function ChangeWidth(width) {
      this.width = width;
      this.OnValueChanged();
    }
    /**
     * Changes positions from cartesian coordinates
     * @param {vec3} startPosition
     * @param {vec3} endPosition
     * @param {vec3} middle
     */

  }, {
    key: "ChangeCartesian",
    value: function ChangeCartesian(startPosition, endPosition, middle) {
      global["H" /* vec3 */].copy(this.position1, startPosition);
      global["H" /* vec3 */].copy(this.position2, endPosition);
      global["H" /* vec3 */].copy(this.intermediatePosition, middle);
      this.OnValueChanged();
    }
    /**
     * Changes cartesian position
     * @param {vec3} startPosition
     * @param {vec3} endPosition
     */

  }, {
    key: "ChangePositionCartesian",
    value: function ChangePositionCartesian(startPosition, endPosition) {
      global["H" /* vec3 */].copy(this.position1, startPosition);
      global["H" /* vec3 */].copy(this.position2, endPosition);
      this.OnValueChanged();
    }
    /**
     * Changes cartesian intermediate position
     * @param {vec3} intermediatePosition
     */

  }, {
    key: "ChangeIntermediateCartesian",
    value: function ChangeIntermediateCartesian(intermediatePosition) {
      global["H" /* vec3 */].copy(this.intermediatePosition, intermediatePosition);
      this.OnValueChanged();
    }
    /**
     * Changes positions from spherical
     * @param {vec3} startPosition
     * @param {vec3} endPosition
     * @param {vec3} middle
     * @param {vec3} center
     */

  }, {
    key: "ChangeSpherical",
    value: function ChangeSpherical(startPosition, endPosition, middle, center) {
      global["H" /* vec3 */].fromSpherical(this.position1, startPosition, center);
      global["H" /* vec3 */].fromSpherical(this.position2, endPosition, center);
      global["H" /* vec3 */].fromSpherical(this.intermediatePosition, middle, center);
      this.OnValueChanged();
    }
    /**
     * Changes position from spherical coordinates
     * @param {vec3} startPosition
     * @param {vec3} endPosition
     * @param {vec3} center
     */

  }, {
    key: "ChangePositionSpherical",
    value: function ChangePositionSpherical(startPosition, endPosition, center) {
      global["H" /* vec3 */].fromSpherical(this.position1, startPosition, center);
      global["H" /* vec3 */].fromSpherical(this.position2, endPosition, center);
      this.OnValueChanged();
    }
    /**
     * Changes spherical intermediate position
     * @param {vec3} intermediatePosition
     * @param {vec3} center
     */

  }, {
    key: "ChangeIntermediateSpherical",
    value: function ChangeIntermediateSpherical(intermediatePosition, center) {
      global["H" /* vec3 */].fromSpherical(this.intermediatePosition, intermediatePosition, center);
      this.OnValueChanged();
    }
    /**
     * Changes multi line color
     * @param {vec4} color
     * @param {number} border
     */

  }, {
    key: "ChangeMultiColor",
    value: function ChangeMultiColor(color, border) {
      global["I" /* vec4 */].copy(this.multiColor, color);
      this.multiColorBorder = border;
      this.OnValueChanged();
    }
    /**
     * Changes animated color settings
     * @param {vec4} color
     * @param {number} speed
     * @param {number} scale
     */

  }, {
    key: "ChangeAnimation",
    value: function ChangeAnimation(color, speed, scale) {
      global["I" /* vec4 */].copy(this.overlayColor, color);
      this.animationSpeed = speed;
      this.animationScale = scale;
      this.OnValueChanged();
    }
    /**
     * Changes line segmentation
     * @param {number} numOfSegments
     */

  }, {
    key: "ChangeSegmentation",
    value: function ChangeSegmentation(numOfSegments) {
      if (this.type !== EveCurveLineSetItem.Type.STRAIGHT) {
        this.numOfSegments = numOfSegments;
        this.OnValueChanged();
      }
    }
    /**
     * Creates a line from an object
     * @param {*} [opt={}]
     * @returns {EveCurveLineSetItem}
     */

  }], [{
    key: "create",
    value: function create() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var item = new this();
      global["F" /* util */].assignIfExists(item, opt, ['name', 'display', 'type', 'position1', 'color1', 'position2', 'color2', 'intermediatePosition', 'width', 'multiColor', 'multiColorBorder', 'overlayColor', 'animationSpeed', 'animationScale', 'numOfSegments']);
      return item;
    }
    /**
     * Curve line types
     * @type {{INVALID: number, STRAIGHT: number, SPHERED: number, CURVED: number}}
     */

  }]);

  return EveCurveLineSetItem;
}(EveObjectSet_EveObjectSetItem);
/**
 * EveCurveLineSet
 *
 * @property {Tw2Effect} lineEffect
 * @property {?Tw2Effect} pickEffect
 * @property {number} lineWidthFactor
 * @property {boolean} additive
 * @property {number} depthOffset
 * @property {vec3} translation
 * @property {quat} rotation
 * @property {vec3} scaling
 * @property {mat4} transform
 * @property {mat4} parentTransform
 * @property {number} _vertexSize
 * @property {number} _vbSize
 * @property {?WebGLBuffer} _vb
 * @property {Tw2PerObjectData} _perObjectData
 * @property {Tw2VertexDeclaration} _decl
 * @class
 */

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSetItem, "Type", {
  INVALID: 0,
  STRAIGHT: 1,
  SPHERED: 2,
  CURVED: 3
});

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSetItem, "DEFAULT_CURVED_SEGMENTS", 20);

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSetItem, "DEFAULT_SPHERED_SEGMENTS", 20);

var EveCurveLineSet_EveCurveLineSet = /*#__PURE__*/function (_EveObjectSet) {
  EveCurveLineSet_inherits(EveCurveLineSet, _EveObjectSet);

  var _super2 = EveCurveLineSet_createSuper(EveCurveLineSet);

  /**
   * Constructor
   */
  function EveCurveLineSet() {
    var _this2;

    EveCurveLineSet_classCallCheck(this, EveCurveLineSet);

    _this2 = _super2.call(this);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "lineEffect", core["Tw2Effect"].create({
      effectFilePath: 'res:/Graphics/Effect/Managed/Space/SpecialFX/Lines3D.fx',
      textures: {
        'TexMap': 'res:/texture/global/white.dds.0.png',
        'OverlayTexMap': 'res:/texture/global/white.dds.0.png'
      }
    }));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "pickEffect", null);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "lineWidthFactor", 1);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "additive", false);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "pickable", true);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "depthOffset", 0);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "translation", global["H" /* vec3 */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "rotation", global["C" /* quat */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "scaling", global["H" /* vec3 */].fromValues(1, 1, 1));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "transform", global["z" /* mat4 */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "parentTransform", global["z" /* mat4 */].create());

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "_vertexSize", 26);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "_vbSize", 0);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "_vb", null);

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "_perObjectData", new core["Tw2PerObjectData"](EveCurveLineSet.perObjectData));

    EveCurveLineSet_defineProperty(EveCurveLineSet_assertThisInitialized(_this2), "_decl", new core["Tw2VertexDeclaration"](EveCurveLineSet.vertexDeclarations, 4 * _this2._vertexSize));

    EveCurveLineSet.init();
    return _this2;
  }
  /**
   * Alias for this.items
   * @returns {Array}
   */


  EveCurveLineSet_createClass(EveCurveLineSet, [{
    key: "Initialize",

    /**
     * Initializes the curve line set
     */
    value: function Initialize() {
      this.OnValueChanged();
      this.Rebuild();
    }
    /**
     * Creates a straight line
     * @param {vec3} start
     * @param {vec3} end
     * @param {number} [width]
     * @param {vec4} [startColor]
     * @param {vec4} [endColor]
     * @returns {EveCurveLineSetItem}
     */

  }, {
    key: "AddStraightLine",
    value: function AddStraightLine(start, end, width, startColor, endColor) {
      return this.CreateItem({
        type: EveCurveLineSet_EveCurveLineSetItem.Type.STRAIGHT,
        position1: start,
        position2: end,
        color1: startColor,
        color2: endColor,
        width: width
      });
    }
    /**
     * Creates and adds a curved line from cartesian coordinates
     * @param {vec3} start
     * @param {vec3} end
     * @param {vec3} center
     * @param {number} [width]
     * @param {vec4} [startColor]
     * @param {vec4} [endColor]
     * @returns {EveCurveLineSetItem}
     */

  }, {
    key: "AddCurvedLineCrt",
    value: function AddCurvedLineCrt(start, end, center, width, startColor, endColor) {
      return this.CreateItem({
        type: EveCurveLineSet_EveCurveLineSetItem.Type.CURVED,
        position1: start,
        position2: end,
        intermediatePosition: center,
        color1: startColor,
        color2: endColor,
        width: width,
        numOfSegments: EveCurveLineSet_EveCurveLineSetItem.DEFAULT_CURVED_SEGMENTS
      });
    }
    /**
     * Creates and adds a curved line from spherical coordinates
     * @param {vec3} start
     * @param {vec3} end
     * @param {vec3} center
     * @param {vec3} middle
     * @param {number} [width]
     * @param {vec4} [startColor]
     * @param {vec4} [endColor]
     * @returns {EveCurveLineSetItem}
     */

  }, {
    key: "AddCurvedLineSph",
    value: function AddCurvedLineSph(start, end, center, middle, width, startColor, endColor) {
      var g = EveCurveLineSet.global;
      return this.CreateItem({
        type: EveCurveLineSet_EveCurveLineSetItem.Type.CURVED,
        position1: global["H" /* vec3 */].fromSpherical(g.vec3_0, start, center),
        position2: global["H" /* vec3 */].fromSpherical(g.vec3_1, end, center),
        intermediatePosition: global["H" /* vec3 */].fromSpherical(g.vec3_2, middle, center),
        color1: startColor,
        color2: endColor,
        width: width,
        numOfSegments: EveCurveLineSet_EveCurveLineSetItem.DEFAULT_CURVED_SEGMENTS
      });
    }
    /**
     * Creates and adds a sphered line from cartesian coordinates
     * @param {vec3} start
     * @param {vec3} end
     * @param {vec3} center
     * @param {number} [width]
     * @param {vec4} [startColor]
     * @param {vec4} [endColor]
     * @returns {EveCurveLineSetItem}
     */

  }, {
    key: "AddSpheredLineCrt",
    value: function AddSpheredLineCrt(start, end, center, width, startColor, endColor) {
      return this.CreateItem({
        type: EveCurveLineSet_EveCurveLineSetItem.Type.SPHERED,
        position1: start,
        position2: end,
        intermediatePosition: center,
        color1: startColor,
        color2: endColor,
        width: width,
        numOfSegments: EveCurveLineSet_EveCurveLineSetItem.DEFAULT_SPHERED_SEGMENTS
      });
    }
    /**
     * Creates and adds a sphered line from spherical coordinates
     * @param {vec3} start
     * @param {vec3} end
     * @param {vec3} center
     * @param {vec3} middle
     * @param {number} [width]
     * @param {vec4} [startColor]
     * @param {vec4} [endColor]
     * @returns {EveCurveLineSetItem}
     */

  }, {
    key: "AddSpheredLineSph",
    value: function AddSpheredLineSph(start, end, center, middle, width, startColor, endColor) {
      var g = EveCurveLineSet.global;
      return this.CreateItem({
        type: EveCurveLineSet_EveCurveLineSetItem.Type.SPHERED,
        position1: global["H" /* vec3 */].fromSpherical(g.vec3_0, start, center),
        position2: global["H" /* vec3 */].fromSpherical(g.vec3_1, end, center),
        intermediatePosition: global["H" /* vec3 */].fromSpherical(g.vec3_2, middle, center),
        color1: startColor,
        color2: endColor,
        width: width,
        numOfSegments: EveCurveLineSet_EveCurveLineSetItem.DEFAULT_SPHERED_SEGMENTS
      });
    }
    /**
     * Fire on value changes
     */

  }, {
    key: "OnValueChanged",
    value: function OnValueChanged() {
      global["z" /* mat4 */].fromRotationTranslationScale(this.transform, this.rotation, this.translation, this.scaling);
      this._rebuildPending = true;
    }
    /**
     * Per frame update
     * @param {mat4} parentTransform
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData(parentTransform) {
      global["z" /* mat4 */].copy(this.parentTransform, parentTransform);
    }
    /**
     * Per frame update
     */

  }, {
    key: "Update",
    value: function Update() {
      if (this._rebuildPending) {
        this.Rebuild();
      }
    }
    /**
     * Unloads the line set's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {
      if (this._vb) {
        global["w" /* device */].gl.deleteBuffer(this._vb);
        this._vb = null;
      }
    }
    /**
     * Rebuilds the line set
     */

  }, {
    key: "Rebuild",
    value: function Rebuild() {
      EveCurveLineSet.RebuildItems(this);
      this._vb = null;
      this._vbSize = this.lineCount;
      this._rebuildPending = false;
      var visibleItems = this._visibleItems.length;
      if (!visibleItems) return;
      var g = EveCurveLineSet.global,
          data = new Float32Array(this._vbSize * 6 * this._vertexSize),
          startDir = g.vec3_0,
          endDir = g.vec3_1,
          startDirNrm = g.vec3_2,
          endDirNrm = g.vec3_3,
          rotationAxis = g.vec3_4,
          tangent1 = g.vec3_5,
          tangent2 = g.vec3_6,
          rotationMatrix = g.mat4_0;
      var dir1 = g.vec3_7,
          dir2 = g.vec3_8,
          pos1 = g.vec3_9,
          pos2 = g.vec3_10,
          col1 = g.vec4_0,
          col2 = g.vec4_1,
          offset = 0,
          tmp;

      for (var i = 0; i < visibleItems; ++i) {
        var item = this._visibleItems[i];

        switch (item.type) {
          case EveCurveLineSet_EveCurveLineSetItem.Type.INVALID:
            break;

          case EveCurveLineSet_EveCurveLineSetItem.Type.STRAIGHT:
            EveCurveLineSet.WriteLineVerticesToBuffer(this, item.position1, item.color1, 0, item.position2, item.color2, 1, i, data, offset);
            offset += 6 * this._vertexSize;
            break;

          case EveCurveLineSet_EveCurveLineSetItem.Type.SPHERED:
            global["H" /* vec3 */].subtract(startDir, item.position1, item.intermediatePosition);
            global["H" /* vec3 */].subtract(endDir, item.position2, item.intermediatePosition);
            global["H" /* vec3 */].normalize(startDirNrm, startDir);
            global["H" /* vec3 */].normalize(endDirNrm, endDir);
            global["H" /* vec3 */].cross(rotationAxis, startDir, endDir);
            var fullAngle = Math.acos(global["H" /* vec3 */].dot(startDirNrm, endDirNrm)),
                segmentAngle = fullAngle / item.numOfSegments;
            global["z" /* mat4 */].identity(rotationMatrix);
            global["z" /* mat4 */].rotate(rotationMatrix, rotationMatrix, segmentAngle, rotationAxis);
            global["H" /* vec3 */].copy(dir1, startDir);
            global["I" /* vec4 */].copy(col1, item.color1);

            for (var j = 0; j < this.lines[i].numOfSegments; ++j) {
              var segmentFactor = (j + 1) / item.numOfSegments;
              global["H" /* vec3 */].transformMat4(dir2, dir1, rotationMatrix);
              col2[0] = item.color1[0] * (1 - segmentFactor) + item.color2[0] * segmentFactor;
              col2[1] = item.color1[1] * (1 - segmentFactor) + item.color2[1] * segmentFactor;
              col2[2] = item.color1[2] * (1 - segmentFactor) + item.color2[2] * segmentFactor;
              col2[3] = item.color1[3] * (1 - segmentFactor) + item.color2[3] * segmentFactor;
              global["H" /* vec3 */].add(pos1, dir1, item.intermediatePosition);
              global["H" /* vec3 */].add(pos2, dir2, item.intermediatePosition);
              EveCurveLineSet.WriteLineVerticesToBuffer(this, pos1, col1, j / item.numOfSegments, pos2, col2, segmentFactor, i, data, offset);
              offset += 6 * this._vertexSize;
              tmp = dir1;
              dir1 = dir2;
              dir2 = tmp;
              tmp = col1;
              col1 = col2;
              col2 = tmp;
            }

            break;

          case EveCurveLineSet_EveCurveLineSetItem.Type.CURVED:
            global["H" /* vec3 */].subtract(tangent1, item.intermediatePosition, item.position1);
            global["H" /* vec3 */].subtract(tangent2, item.position2, item.intermediatePosition);
            global["H" /* vec3 */].copy(pos1, item.position1);
            global["H" /* vec3 */].copy(col1, item.color1);

            for (var _j = 0; _j < item.numOfSegments; ++_j) {
              var _segmentFactor = (_j + 1) / item.numOfSegments;

              global["H" /* vec3 */].hermite(pos2, item.position1, tangent1, item.position2, tangent2, _segmentFactor);
              col2[0] = item.color1[0] * (1 - _segmentFactor) + item.color2[0] * _segmentFactor;
              col2[1] = item.color1[1] * (1 - _segmentFactor) + item.color2[1] * _segmentFactor;
              col2[2] = item.color1[2] * (1 - _segmentFactor) + item.color2[2] * _segmentFactor;
              col2[3] = item.color1[3] * (1 - _segmentFactor) + item.color2[3] * _segmentFactor;
              EveCurveLineSet.WriteLineVerticesToBuffer(this, pos1, col1, _j / item.numOfSegments, pos2, col2, _segmentFactor, i, data, offset);
              offset += 6 * this._vertexSize;
              tmp = pos1;
              pos1 = pos2;
              pos2 = tmp;
              tmp = col1;
              col1 = col2;
              col2 = tmp;
            }

        }
      } //if (this._vb) device.gl.deleteBuffer(this._vb);


      this._vb = global["w" /* device */].gl.createBuffer();
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, this._vb);
      global["w" /* device */].gl.bufferData(global["w" /* device */].gl.ARRAY_BUFFER, data, global["w" /* device */].gl.STATIC_DRAW);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, null);
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator) {
      if (!this.display || !this._vb) return;
      var effect;

      switch (mode) {
        case global["w" /* device */].RM_TRANSPARENT:
          if (this.additive || !this.lineEffect) return;
          effect = this.lineEffect;
          break;

        case global["w" /* device */].RM_ADDITIVE:
          if (!this.additive || !this.lineEffect) return;
          effect = this.lineEffect;
          break;

        case global["w" /* device */].RM_PICKABLE:
          if (!this.pickable || !this.pickEffect) return;
          effect = this.pickEffect;
      }

      var batch = new core["Tw2ForwardingRenderBatch"](),
          worldTransform = EveCurveLineSet.global.mat4_0;
      global["z" /* mat4 */].multiply(worldTransform, this.transform, this.parentTransform);
      global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('WorldMat'), worldTransform);
      global["z" /* mat4 */].transpose(this._perObjectData.perObjectPSData.Get('WorldMat'), worldTransform);
      batch.perObjectData = this._perObjectData;
      batch.geometryProvider = this;
      batch.renderMode = mode;
      batch.effect = effect;
      accumulator.Commit(batch);
    }
    /**
     * Per frame update
     * @param {Tw2ForwardingRenderBatch} batch
     * @param {string} technique - technique name
     * @returns {boolean}
     */

  }, {
    key: "Render",
    value: function Render(batch, technique) {
      if (!batch.effect || !batch.effect.IsGood()) return false;
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, this._vb);
      var passCount = batch.effect.GetPassCount(technique);

      for (var pass = 0; pass < passCount; ++pass) {
        batch.effect.ApplyPass(technique, pass);
        var passInput = batch.effect.GetPassInput(technique, pass);
        if (!this._decl.SetDeclaration(passInput, this._decl.stride)) return false;
        global["w" /* device */].ApplyShadowState();
        global["w" /* device */].gl.drawArrays(global["w" /* device */].gl.TRIANGLES, 0, this._vbSize * 6);
      }

      return true;
    }
    /**
     * Fills color vertices
     * @param {EveCurveLineSetItem} item
     * @param buffer
     * @param {number} offset
     * @returns {number}
     */

  }, {
    key: "lines",
    get: function get() {
      return this.items;
    }
    /**
     * Alias for this.items
     * @param {Array} arr
     */
    ,
    set: function set(arr) {
      this.items = arr;
    }
    /**
     * Gets the current line count
     * @returns {number}
     */

  }, {
    key: "lineCount",
    get: function get() {
      var count = 0;

      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].type !== EveCurveLineSet_EveCurveLineSetItem.Type.INVALID) {
          count += this.items[i].numOfSegments;
        }
      }

      return count;
    }
  }], [{
    key: "FillColorVertices",
    value: function FillColorVertices(item, buffer, offset) {
      buffer[offset++] = item.multiColor[0];
      buffer[offset++] = item.multiColor[1];
      buffer[offset++] = item.multiColor[2];
      buffer[offset++] = item.multiColor[3];
      buffer[offset++] = item.overlayColor[0];
      buffer[offset++] = item.overlayColor[1];
      buffer[offset++] = item.overlayColor[2];
      buffer[offset++] = item.overlayColor[3];
      return offset;
    }
    /**
     * Writes line vertices to the vertex buffer
     * @param {EveCurveLineSet} lineSet
     * @param {vec3} start
     * @param {quat} startColor
     * @param length1
     * @param {vec3} end
     * @param {quat} endColor
     * @param length2
     * @param {Number} lineID
     * @param buffer
     * @param {Number} offset
     */

  }, {
    key: "WriteLineVerticesToBuffer",
    value: function WriteLineVerticesToBuffer(lineSet, start, startColor, length1, end, endColor, length2, lineID, buffer, offset) {
      var item = lineSet.items[lineID];
      buffer[offset++] = start[0];
      buffer[offset++] = start[1];
      buffer[offset++] = start[2];
      buffer[offset++] = end[0] - start[0];
      buffer[offset++] = end[1] - start[1];
      buffer[offset++] = end[2] - start[2];
      buffer[offset++] = -lineSet.lineWidthFactor * item.width;
      buffer[offset++] = 0;
      buffer[offset++] = length1;
      buffer[offset++] = item.multiColorBorder;
      buffer[offset++] = length2 - length1;
      buffer[offset++] = item.animationSpeed;
      buffer[offset++] = item.animationScale;
      buffer[offset++] = lineID;
      buffer[offset++] = startColor[0];
      buffer[offset++] = startColor[1];
      buffer[offset++] = startColor[2];
      buffer[offset++] = startColor[3];
      offset = EveCurveLineSet.FillColorVertices(item, buffer, offset);
      buffer[offset++] = start[0];
      buffer[offset++] = start[1];
      buffer[offset++] = start[2];
      buffer[offset++] = end[0] - start[0];
      buffer[offset++] = end[1] - start[1];
      buffer[offset++] = end[2] - start[2];
      buffer[offset++] = lineSet.lineWidthFactor * item.width;
      buffer[offset++] = 0;
      buffer[offset++] = length1;
      buffer[offset++] = item.multiColorBorder;
      buffer[offset++] = length2 - length1;
      buffer[offset++] = item.animationSpeed;
      buffer[offset++] = item.animationScale;
      buffer[offset++] = lineID;
      buffer[offset++] = startColor[0];
      buffer[offset++] = startColor[1];
      buffer[offset++] = startColor[2];
      buffer[offset++] = startColor[3];
      offset = EveCurveLineSet.FillColorVertices(item, buffer, offset);
      buffer[offset++] = end[0];
      buffer[offset++] = end[1];
      buffer[offset++] = end[2];
      buffer[offset++] = start[0] - end[0];
      buffer[offset++] = start[1] - end[1];
      buffer[offset++] = start[2] - end[2];
      buffer[offset++] = -lineSet.lineWidthFactor * item.width;
      buffer[offset++] = 1;
      buffer[offset++] = length2;
      buffer[offset++] = item.multiColorBorder;
      buffer[offset++] = length2 - length1;
      buffer[offset++] = item.animationSpeed;
      buffer[offset++] = item.animationScale;
      buffer[offset++] = lineID;
      buffer[offset++] = endColor[0];
      buffer[offset++] = endColor[1];
      buffer[offset++] = endColor[2];
      buffer[offset++] = endColor[3];
      offset = EveCurveLineSet.FillColorVertices(item, buffer, offset);
      buffer[offset++] = start[0];
      buffer[offset++] = start[1];
      buffer[offset++] = start[2];
      buffer[offset++] = end[0] - start[0];
      buffer[offset++] = end[1] - start[1];
      buffer[offset++] = end[2] - start[2];
      buffer[offset++] = lineSet.lineWidthFactor * item.width;
      buffer[offset++] = 0;
      buffer[offset++] = length1;
      buffer[offset++] = item.multiColorBorder;
      buffer[offset++] = length2 - length1;
      buffer[offset++] = item.animationSpeed;
      buffer[offset++] = item.animationScale;
      buffer[offset++] = lineID;
      buffer[offset++] = startColor[0];
      buffer[offset++] = startColor[1];
      buffer[offset++] = startColor[2];
      buffer[offset++] = startColor[3];
      offset = EveCurveLineSet.FillColorVertices(item, buffer, offset);
      buffer[offset++] = end[0];
      buffer[offset++] = end[1];
      buffer[offset++] = end[2];
      buffer[offset++] = start[0] - end[0];
      buffer[offset++] = start[1] - end[1];
      buffer[offset++] = start[2] - end[2];
      buffer[offset++] = lineSet.lineWidthFactor * item.width;
      buffer[offset++] = 1;
      buffer[offset++] = length2;
      buffer[offset++] = item.multiColorBorder;
      buffer[offset++] = length2 - length1;
      buffer[offset++] = item.animationSpeed;
      buffer[offset++] = item.animationScale;
      buffer[offset++] = lineID;
      buffer[offset++] = endColor[0];
      buffer[offset++] = endColor[1];
      buffer[offset++] = endColor[2];
      buffer[offset++] = endColor[3];
      offset = EveCurveLineSet.FillColorVertices(item, buffer, offset);
      buffer[offset++] = end[0];
      buffer[offset++] = end[1];
      buffer[offset++] = end[2];
      buffer[offset++] = start[0] - end[0];
      buffer[offset++] = start[1] - end[1];
      buffer[offset++] = start[2] - end[2];
      buffer[offset++] = -lineSet.lineWidthFactor * item.width;
      buffer[offset++] = 1;
      buffer[offset++] = length2;
      buffer[offset++] = item.multiColorBorder;
      buffer[offset++] = length2 - length1;
      buffer[offset++] = item.animationSpeed;
      buffer[offset++] = item.animationScale;
      buffer[offset++] = lineID;
      buffer[offset++] = endColor[0];
      buffer[offset++] = endColor[1];
      buffer[offset++] = endColor[2];
      buffer[offset++] = endColor[3];
      EveCurveLineSet.FillColorVertices(item, buffer, offset);
    }
    /**
     * Initializes class global variables and scratch
     */

  }, {
    key: "init",
    value: function init() {
      if (!EveCurveLineSet.global) {
        EveCurveLineSet.global = {
          vec3_0: global["H" /* vec3 */].create(),
          // start direction
          vec3_1: global["H" /* vec3 */].create(),
          // end direction
          vec3_2: global["H" /* vec3 */].create(),
          // start direction normalized
          vec3_3: global["H" /* vec3 */].create(),
          // end direction normalized
          vec3_4: global["H" /* vec3 */].create(),
          // rotationAxis
          vec3_5: global["H" /* vec3 */].create(),
          // direction1
          vec3_6: global["H" /* vec3 */].create(),
          // direction2
          vec3_7: global["H" /* vec3 */].create(),
          // position 1
          vec3_8: global["H" /* vec3 */].create(),
          // position 2
          vec3_9: global["H" /* vec3 */].create(),
          // tangent1
          vec3_10: global["H" /* vec3 */].create(),
          // tangent2
          vec4_0: global["I" /* vec4 */].create(),
          // color 1
          vec4_1: global["I" /* vec4 */].create(),
          // color 2
          mat4_0: global["z" /* mat4 */].create() // rotationMatrix

        };
      }
    }
    /**
     * Line set item constructor
     * @type {EveCurveLineSetItem}
     */

  }]);

  return EveCurveLineSet;
}(EveObjectSet_EveObjectSet);

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSet, "Item", EveCurveLineSet_EveCurveLineSetItem);

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSet, "global", null);

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSet, "perObjectData", {
  VSData: [['WorldMat', 16]],
  PSData: [['WorldMat', 16]]
});

EveCurveLineSet_defineProperty(EveCurveLineSet_EveCurveLineSet, "vertexDeclarations", [['POSITION', 0, 3], ['TEXCOORD', 0, 4], ['TEXCOORD', 1, 4], ['TEXCOORD', 2, 3], ['COLOR', 0, 4], ['COLOR', 1, 4], ['COLOR', 2, 4]]);
// CONCATENATED MODULE: ./eve/item/EveLocator.js
function EveLocator_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveLocator_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveLocator_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveLocator_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveLocator_defineProperties(Constructor, staticProps); return Constructor; }

function EveLocator_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Contains transform information for T3 Attachments, Boosters, Turrets and XLTurrets
 *
 * @property {string} name                  - The locator's name
 * @property {mat4} transform               - The locator's transform
 * @property {?number} atlasIndex0          - A booster locator's atlasIndex0
 * @property {?number} atlasIndex1          - A booster locator's atlasIndex1
 * @property {?Tw2Bone} bone                - A turret locator's bone
 */

var EveLocator_EveLocator = /*#__PURE__*/function () {
  function EveLocator() {
    EveLocator_classCallCheck(this, EveLocator);

    EveLocator_defineProperty(this, "name", '');

    EveLocator_defineProperty(this, "transform", global["z" /* mat4 */].create());

    EveLocator_defineProperty(this, "atlasIndex0", null);

    EveLocator_defineProperty(this, "atlasIndex1", null);

    EveLocator_defineProperty(this, "bone", null);
  }

  EveLocator_createClass(EveLocator, [{
    key: "FindBone",

    /**
     * Gets the locator's bone from an animation controller
     * @param {Tw2AnimationController} animationController
     * @returns {?Tw2Bone}
     */
    value: function FindBone(animationController) {
      this.bone = null;
      var model = animationController.FindModelForMesh(0);

      if (model) {
        for (var i = 0; i < model.bones.length; ++i) {
          if (model.bones[i].boneRes.name === this.name) {
            this.bone = model.bones[i];
            break;
          }
        }
      }

      return this.bone;
    }
    /**
     * Locator name prefixes
     * @type {{AUDIO: string, ATTACH: string, BOOSTER: string, TURRET: string, XL_TURRET: string}}
     */

  }]);

  return EveLocator;
}();

EveLocator_defineProperty(EveLocator_EveLocator, "Prefix", {
  AUDIO: 'locator_audio',
  ATTACH: 'locator_attach',
  BOOSTER: 'locator_booster',
  TURRET: 'locator_turret',
  XL_TURRET: 'locator_xl'
});
// CONCATENATED MODULE: ./eve/item/EvePlaneSet.js
function EvePlaneSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EvePlaneSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EvePlaneSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EvePlaneSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EvePlaneSet_defineProperties(Constructor, staticProps); return Constructor; }

function EvePlaneSet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EvePlaneSet_setPrototypeOf(subClass, superClass); }

function EvePlaneSet_setPrototypeOf(o, p) { EvePlaneSet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EvePlaneSet_setPrototypeOf(o, p); }

function EvePlaneSet_createSuper(Derived) { var hasNativeReflectConstruct = EvePlaneSet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EvePlaneSet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EvePlaneSet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EvePlaneSet_possibleConstructorReturn(this, result); }; }

function EvePlaneSet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EvePlaneSet_assertThisInitialized(self); }

function EvePlaneSet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EvePlaneSet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EvePlaneSet_getPrototypeOf(o) { EvePlaneSet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EvePlaneSet_getPrototypeOf(o); }

function EvePlaneSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Plane set render batch
 *
 * @property {EvePlaneSet} planeSet
 * @class
 */

var EvePlaneSetBatch = /*#__PURE__*/function (_Tw2RenderBatch) {
  EvePlaneSet_inherits(EvePlaneSetBatch, _Tw2RenderBatch);

  var _super = EvePlaneSet_createSuper(EvePlaneSetBatch);

  function EvePlaneSetBatch() {
    var _this;

    EvePlaneSet_classCallCheck(this, EvePlaneSetBatch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this), "planeSet", null);

    return _this;
  }

  EvePlaneSet_createClass(EvePlaneSetBatch, [{
    key: "Commit",

    /**
     * Commits the plan set
     * @param {string} technique - technique name
     */
    value: function Commit(technique) {
      this.planeSet.Render(technique);
    }
  }]);

  return EvePlaneSetBatch;
}(core["Tw2RenderBatch"]);
/**
 * EvePlaneSetItem
 *
 * @property {number} boneIndex
 * @property {number} groupIndex
 * @property {number} maskAtlasID
 * @property {vec3} position
 * @property {vec3} scaling
 * @property {quat} rotation
 * @property {vec4} color
 * @property {vec4} layer1Transform
 * @property {vec4} layer2Transform
 * @property {vec4} layer1Scroll
 * @property {vec4} layer2Scroll
 * @class
 */

var EvePlaneSet_EvePlaneSetItem = /*#__PURE__*/function (_EveObjectSetItem) {
  EvePlaneSet_inherits(EvePlaneSetItem, _EveObjectSetItem);

  var _super2 = EvePlaneSet_createSuper(EvePlaneSetItem);

  function EvePlaneSetItem() {
    var _this2;

    EvePlaneSet_classCallCheck(this, EvePlaneSetItem);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call(this, ...args);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "boneIndex", 0);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "groupIndex", -1);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "maskAtlasID", 0);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "position", global["H" /* vec3 */].create());

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "scaling", global["H" /* vec3 */].fromValues(1, 1, 1));

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "rotation", global["C" /* quat */].create());

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "transform", global["z" /* mat4 */].create());

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "color", global["I" /* vec4 */].fromValues(1, 1, 1, 1));

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "layer1Transform", global["I" /* vec4 */].fromValues(1, 1, 0, 0));

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "layer2Transform", global["I" /* vec4 */].fromValues(1, 1, 0, 0));

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "layer1Scroll", global["I" /* vec4 */].create());

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this2), "layer2Scroll", global["I" /* vec4 */].create());

    return _this2;
  }

  EvePlaneSet_createClass(EvePlaneSetItem, null, [{
    key: "create",

    /**
     * Creates a plane set item from an object
     * @param {*} opt
     * @returns {EvePlaneSetItem}
     */
    value: function create() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var item = new this();
      global["F" /* util */].assignIfExists(item, opt, ['name', 'display', 'boneIndex', 'groupIndex', 'maskAtlasID', 'position', 'scaling', 'rotation', 'transform', 'color', 'layer1Transform', 'layer2Transform', 'layer1Scroll', 'layer2Scroll']);
      return item;
    }
  }]);

  return EvePlaneSetItem;
}(EveObjectSet_EveObjectSetItem);
/**
 * EvePlaneSet
 *
 * @property {String} name
 * @property {Array.<EvePlaneSetItem>} planes
 * @property {Tw2Effect} effect
 * @property {boolean} display
 * @property {boolean} hideOnLowQuality
 * @property {number} _time
 * @property {WebGLBuffer} _vertexBuffer
 * @property {WebGLBuffer} _indexBuffer
 * @property {Tw2VertexDeclaration} _decl
 * @class
 */

var EvePlaneSet_EvePlaneSet = /*#__PURE__*/function (_EveObjectSet) {
  EvePlaneSet_inherits(EvePlaneSet, _EveObjectSet);

  var _super3 = EvePlaneSet_createSuper(EvePlaneSet);

  function EvePlaneSet() {
    var _this3;

    EvePlaneSet_classCallCheck(this, EvePlaneSet);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call(this, ...args);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this3), "effect", null);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this3), "hideOnLowQuality", false);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this3), "_time", 0);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this3), "_vertexBuffer", null);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this3), "_indexBuffer", null);

    EvePlaneSet_defineProperty(EvePlaneSet_assertThisInitialized(_this3), "_decl", new core["Tw2VertexDeclaration"](EvePlaneSet.vertexDeclarations));

    return _this3;
  }

  EvePlaneSet_createClass(EvePlaneSet, [{
    key: "GetResources",

    /**
     * Gets plane set res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array} {Array.<Tw2Resource>} [out]
     */
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.effect) {
        this.effect.GetResources(out);
      }

      return out;
    }
    /**
     * Per frame update
     * @param {number} dt - Delta Time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      this._time += dt;

      if (this._rebuildPending) {
        this.Rebuild();
      }
    }
    /**
     * Unloads the set's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {
      if (this._vertexBuffer) {
        global["w" /* device */].gl.deleteBuffer(this._vertexBuffer);
        this._vertexBuffer = null;
      }

      if (this._indexBuffer) {
        global["w" /* device */].gl.deleteBuffer(this._indexBuffer);
        this._indexBuffer = null;
      }
    }
    /**
     * Rebuilds the plane set's buffers
     */

  }, {
    key: "Rebuild",
    value: function Rebuild() {
      this.Unload();
      EvePlaneSet.RebuildItems(this);
      this._rebuildPending = false;
      var itemCount = this._visibleItems.length;
      if (!itemCount) return;
      var vertexSize = 35,
          mat4_0 = EvePlaneSet.global.mat4_0;
      var array = new Float32Array(itemCount * 4 * vertexSize);

      for (var i = 0; i < itemCount; ++i) {
        var item = this._visibleItems[i],
            offset = i * 4 * vertexSize;
        array[offset + vertexSize - 3] = 0;
        array[offset + vertexSize + vertexSize - 3] = 1;
        array[offset + 2 * vertexSize + vertexSize - 3] = 2;
        array[offset + 3 * vertexSize + vertexSize - 3] = 3;
        var itemTransform = global["z" /* mat4 */].fromRotationTranslationScale(mat4_0, item.rotation, item.position, item.scaling);

        for (var j = 0; j < 4; ++j) {
          var vtxOffset = offset + j * vertexSize;
          array[vtxOffset] = itemTransform[0];
          array[vtxOffset + 1] = itemTransform[4];
          array[vtxOffset + 2] = itemTransform[8];
          array[vtxOffset + 3] = itemTransform[12];
          array[vtxOffset + 4] = itemTransform[1];
          array[vtxOffset + 5] = itemTransform[5];
          array[vtxOffset + 6] = itemTransform[9];
          array[vtxOffset + 7] = itemTransform[13];
          array[vtxOffset + 8] = itemTransform[2];
          array[vtxOffset + 9] = itemTransform[6];
          array[vtxOffset + 10] = itemTransform[10];
          array[vtxOffset + 11] = itemTransform[14];
          array[vtxOffset + 12] = item.color[0];
          array[vtxOffset + 13] = item.color[1];
          array[vtxOffset + 14] = item.color[2];
          array[vtxOffset + 15] = item.color[3];
          array[vtxOffset + 16] = item.layer1Transform[0];
          array[vtxOffset + 17] = item.layer1Transform[1];
          array[vtxOffset + 18] = item.layer1Transform[2];
          array[vtxOffset + 19] = item.layer1Transform[3];
          array[vtxOffset + 20] = item.layer2Transform[0];
          array[vtxOffset + 21] = item.layer2Transform[1];
          array[vtxOffset + 22] = item.layer2Transform[2];
          array[vtxOffset + 23] = item.layer2Transform[3];
          array[vtxOffset + 24] = item.layer1Scroll[0];
          array[vtxOffset + 25] = item.layer1Scroll[1];
          array[vtxOffset + 26] = item.layer1Scroll[2];
          array[vtxOffset + 27] = item.layer1Scroll[3];
          array[vtxOffset + 28] = item.layer2Scroll[0];
          array[vtxOffset + 29] = item.layer2Scroll[1];
          array[vtxOffset + 30] = item.layer2Scroll[2];
          array[vtxOffset + 31] = item.layer2Scroll[3];
          array[vtxOffset + 33] = item.boneIndex;
          array[vtxOffset + 34] = item.maskAtlasID;
        }
      }

      this._vertexBuffer = global["w" /* device */].gl.createBuffer();
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, this._vertexBuffer);
      global["w" /* device */].gl.bufferData(global["w" /* device */].gl.ARRAY_BUFFER, array, global["w" /* device */].gl.STATIC_DRAW);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, null);
      var indexes = new Uint16Array(itemCount * 6);

      for (var _i = 0; _i < itemCount; ++_i) {
        var _offset = _i * 6,
            _vtxOffset = _i * 4;

        indexes[_offset] = _vtxOffset;
        indexes[_offset + 1] = _vtxOffset + 2;
        indexes[_offset + 2] = _vtxOffset + 1;
        indexes[_offset + 3] = _vtxOffset;
        indexes[_offset + 4] = _vtxOffset + 3;
        indexes[_offset + 5] = _vtxOffset + 2;
      }

      this._indexBuffer = global["w" /* device */].gl.createBuffer();
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
      global["w" /* device */].gl.bufferData(global["w" /* device */].gl.ELEMENT_ARRAY_BUFFER, indexes, global["w" /* device */].gl.STATIC_DRAW);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ELEMENT_ARRAY_BUFFER, null);
      this._indexBuffer.count = itemCount * 6;
    }
    /**
     * Gets the plane set's render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (this.display && mode === global["w" /* device */].RM_ADDITIVE && this._indexBuffer && this._visibleItems.length) {
        var batch = new EvePlaneSetBatch();
        batch.renderMode = global["w" /* device */].RM_ADDITIVE;
        batch.planeSet = this;
        batch.perObjectData = perObjectData;
        accumulator.Commit(batch);
      }
    }
    /**
     * Renders the plane set
     * @param {string} technique - technique name
     */

  }, {
    key: "Render",
    value: function Render(technique) {
      if (!this.effect || !this.effect.IsGood()) return false;
      global["w" /* device */].SetStandardStates(global["w" /* device */].RM_ADDITIVE);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, this._vertexBuffer);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);

      for (var pass = 0; pass < this.effect.GetPassCount(technique); ++pass) {
        this.effect.ApplyPass(technique, pass);
        if (!this._decl.SetDeclaration(this.effect.GetPassInput(technique, pass), 140)) return false;
        global["w" /* device */].ApplyShadowState();
        global["w" /* device */].gl.drawElements(global["w" /* device */].gl.TRIANGLES, this._indexBuffer.count, global["w" /* device */].gl.UNSIGNED_SHORT, 0);
      }

      return true;
    }
    /**
     * The plane set's item constructor
     * @type {EvePlaneSetItem}
     */

  }, {
    key: "planes",

    /**
     * Alias for this.items
     * @returns {Array}
     */
    get: function get() {
      return this.items;
    }
    /**
     * Alias for this.items
     * @param {Array} arr
     */
    ,
    set: function set(arr) {
      this.items = arr;
    }
  }]);

  return EvePlaneSet;
}(EveObjectSet_EveObjectSet);

EvePlaneSet_defineProperty(EvePlaneSet_EvePlaneSet, "Item", EvePlaneSet_EvePlaneSetItem);

EvePlaneSet_defineProperty(EvePlaneSet_EvePlaneSet, "vertexDeclarations", [['TEXCOORD', 0, 4], ['TEXCOORD', 1, 4], ['TEXCOORD', 2, 4], ['COLOR', 0, 4], ['TEXCOORD', 3, 4], ['TEXCOORD', 4, 4], ['TEXCOORD', 5, 4], ['TEXCOORD', 6, 4], ['TEXCOORD', 7, 3]]);
// CONCATENATED MODULE: ./eve/item/EveSpaceObjectDecal.js
function EveSpaceObjectDecal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveSpaceObjectDecal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveSpaceObjectDecal_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveSpaceObjectDecal_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveSpaceObjectDecal_defineProperties(Constructor, staticProps); return Constructor; }

function EveSpaceObjectDecal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * EveSpaceObjectDecal
 *
 * @property {String|number} _id
 * @property {String} name
 * @property {boolean} display
 * @property {Tw2Effect} decalEffect
 * @property {Tw2Effect} pickEffect
 * @property {Tw2GeometryRes} parentGeometry
 * @property {number} parentBoneIndex
 * @property {number} groupIndex
 * @property {boolean} pickable
 * @property {vec3} position
 * @property {quat} rotation
 * @property {vec3} scaling
 * @property {mat4} decalMatrix
 * @property {mat4} invDecalMatrix
 * @property {Array} indexBuffer
 * @property {*} _indexBuffer
 * @property {Tw2PerObjectData} _perObjectData
 * @class
 */

var EveSpaceObjectDecal_EveSpaceObjectDecal = /*#__PURE__*/function () {
  function EveSpaceObjectDecal() {
    EveSpaceObjectDecal_classCallCheck(this, EveSpaceObjectDecal);

    EveSpaceObjectDecal_defineProperty(this, "_id", global["F" /* util */].generateID());

    EveSpaceObjectDecal_defineProperty(this, "name", '');

    EveSpaceObjectDecal_defineProperty(this, "display", true);

    EveSpaceObjectDecal_defineProperty(this, "decalEffect", null);

    EveSpaceObjectDecal_defineProperty(this, "pickEffect", null);

    EveSpaceObjectDecal_defineProperty(this, "parentGeometry", null);

    EveSpaceObjectDecal_defineProperty(this, "parentBoneIndex", -1);

    EveSpaceObjectDecal_defineProperty(this, "groupIndex", -1);

    EveSpaceObjectDecal_defineProperty(this, "pickable", true);

    EveSpaceObjectDecal_defineProperty(this, "position", global["H" /* vec3 */].create());

    EveSpaceObjectDecal_defineProperty(this, "rotation", global["C" /* quat */].create());

    EveSpaceObjectDecal_defineProperty(this, "scaling", global["H" /* vec3 */].create());

    EveSpaceObjectDecal_defineProperty(this, "decalMatrix", global["z" /* mat4 */].create());

    EveSpaceObjectDecal_defineProperty(this, "invDecalMatrix", global["z" /* mat4 */].create());

    EveSpaceObjectDecal_defineProperty(this, "indexBuffer", []);

    EveSpaceObjectDecal_defineProperty(this, "_indexBuffer", null);

    EveSpaceObjectDecal_defineProperty(this, "_perObjectData", new core["Tw2PerObjectData"](EveSpaceObjectDecal.perObjectData));
  }

  EveSpaceObjectDecal_createClass(EveSpaceObjectDecal, [{
    key: "Initialize",

    /**
     * Initializes the decal
     */
    value: function Initialize() {
      this.SetIndexBuffer(this.indexBuffer);
    }
    /**
     * Fire on value changes
     */

  }, {
    key: "OnValueChanged",
    value: function OnValueChanged() {
      if (!this._indexBuffer && this.indexBuffer) {
        var gl = global["w" /* device */].gl,
            indexes = new Uint16Array(this.indexBuffer);
        this._indexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexes, gl.STATIC_DRAW);
      }

      global["z" /* mat4 */].fromRotationTranslationScale(this.decalMatrix, this.rotation, this.position, this.scaling);
      global["z" /* mat4 */].invert(this.invDecalMatrix, this.decalMatrix);
    }
    /**
     * Sets the parent geometry
     * @param {Tw2GeometryRes} geometryRes
     */

  }, {
    key: "SetParentGeometry",
    value: function SetParentGeometry(geometryRes) {
      this.parentGeometry = geometryRes;
    }
    /**
     * Sets the decal's index buffer
     * @param {number[]} indices
     */

  }, {
    key: "SetIndexBuffer",
    value: function SetIndexBuffer(indices) {
      this.indexBuffer = indices;
      this.Unload();
      this.OnValueChanged();
    }
    /**
     * Gets decal resources
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.parentGeometry && !out.includes(this.parentGeometry)) {
        out.push(this.parentGeometry);
      }

      if (this.decalEffect) this.decalEffect.GetResources(out);
      if (this.pickEffect) this.pickEffect.GetResources(out);
      return out;
    }
    /**
     * Unloads the decal's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {
      if (this._indexBuffer) {
        global["w" /* device */].gl.deleteBuffer(this._indexBuffer);
        this._indexBuffer = null;
      }
    }
    /**
     * Gets batches for rendering
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     * @param {number} [counter=0]
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData, counter) {
      var effect;

      switch (mode) {
        case global["w" /* device */].RM_DECAL:
          effect = this.decalEffect;
          break;

        case global["w" /* device */].RM_PICKABLE:
          effect = this.pickable ? this.pickEffect : null;
          break;
      }

      if (this.display && effect && effect.IsGood() && this.indexBuffer.length && this.parentGeometry && this.parentGeometry.IsGood()) {
        var batch = new core["Tw2ForwardingRenderBatch"]();

        this._perObjectData.perObjectVSData.Set('worldMatrix', perObjectData.perObjectVSData.Get('WorldMat'));

        if (this.parentBoneIndex >= 0) {
          var bones = perObjectData.perObjectVSData.Get('JointMat'),
              offset = this.parentBoneIndex * 12;

          if (bones[offset] || bones[offset + 4] || bones[offset + 8]) {
            var bone = this._perObjectData.perObjectVSData.Get('parentBoneMatrix');

            bone[0] = bones[offset];
            bone[1] = bones[offset + 4];
            bone[2] = bones[offset + 8];
            bone[3] = 0;
            bone[4] = bones[offset + 1];
            bone[5] = bones[offset + 5];
            bone[6] = bones[offset + 9];
            bone[7] = 0;
            bone[8] = bones[offset + 2];
            bone[9] = bones[offset + 6];
            bone[10] = bones[offset + 10];
            bone[11] = 0;
            bone[12] = bones[offset + 3];
            bone[13] = bones[offset + 7];
            bone[14] = bones[offset + 11];
            bone[15] = 1;
            global["z" /* mat4 */].transpose(bone, bone);
          }
        }

        global["z" /* mat4 */].invert(this._perObjectData.perObjectVSData.Get('invWorldMatrix'), this._perObjectData.perObjectVSData.Get('worldMatrix'));
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('decalMatrix'), this.decalMatrix);
        global["z" /* mat4 */].transpose(this._perObjectData.perObjectVSData.Get('invDecalMatrix'), this.invDecalMatrix);
        this._perObjectData.perObjectPSData.Get('displayData')[0] = counter || 0;

        this._perObjectData.perObjectPSData.Set('shipData', perObjectData.perObjectPSData.data);

        batch.perObjectData = this._perObjectData;
        batch.geometryProvider = this;
        batch.renderMode = mode;
        batch.effect = effect;
        accumulator.Commit(batch);
      }
    }
    /**
     * Renders the decal
     * @param {Tw2ForwardingRenderBatch} batch
     * @param {string} technique - technique name
     */

  }, {
    key: "Render",
    value: function Render(batch, technique) {
      var bkIB = this.parentGeometry.meshes[0].indexes,
          bkStart = this.parentGeometry.meshes[0].areas[0].start,
          bkCount = this.parentGeometry.meshes[0].areas[0].count,
          bkIndexType = this.parentGeometry.meshes[0].indexType;
      global["E" /* store */].SetVariableValue('u_DecalMatrix', this.decalMatrix);
      global["E" /* store */].SetVariableValue('u_InvDecalMatrix', this.invDecalMatrix);
      this.parentGeometry.meshes[0].indexes = this._indexBuffer;
      this.parentGeometry.meshes[0].areas[0].start = 0;
      this.parentGeometry.meshes[0].areas[0].count = this.indexBuffer.length;
      this.parentGeometry.meshes[0].indexType = global["w" /* device */].gl.UNSIGNED_SHORT;
      this.parentGeometry.RenderAreas(0, 0, 1, batch.effect, technique);
      this.parentGeometry.meshes[0].indexes = bkIB;
      this.parentGeometry.meshes[0].areas[0].start = bkStart;
      this.parentGeometry.meshes[0].areas[0].count = bkCount;
      this.parentGeometry.meshes[0].indexType = bkIndexType;
    }
    /**
     * Per object data
     * @type {{VSData: *[], PSData: *[]}}
     */

  }]);

  return EveSpaceObjectDecal;
}();

EveSpaceObjectDecal_defineProperty(EveSpaceObjectDecal_EveSpaceObjectDecal, "perObjectData", {
  VSData: [['worldMatrix', 16], ['invWorldMatrix', 16], ['decalMatrix', 16], ['invDecalMatrix', 16], ['parentBoneMatrix', 16, global["z" /* mat4 */].identity([])]],
  PSData: [['displayData', 4], ['shipData', 4 * 3]]
});
// CONCATENATED MODULE: ./eve/item/EveSpotlightSet.js
function EveSpotlightSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveSpotlightSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveSpotlightSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveSpotlightSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveSpotlightSet_defineProperties(Constructor, staticProps); return Constructor; }

function EveSpotlightSet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveSpotlightSet_setPrototypeOf(subClass, superClass); }

function EveSpotlightSet_setPrototypeOf(o, p) { EveSpotlightSet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveSpotlightSet_setPrototypeOf(o, p); }

function EveSpotlightSet_createSuper(Derived) { var hasNativeReflectConstruct = EveSpotlightSet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveSpotlightSet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveSpotlightSet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveSpotlightSet_possibleConstructorReturn(this, result); }; }

function EveSpotlightSet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveSpotlightSet_assertThisInitialized(self); }

function EveSpotlightSet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveSpotlightSet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveSpotlightSet_getPrototypeOf(o) { EveSpotlightSet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveSpotlightSet_getPrototypeOf(o); }

function EveSpotlightSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveSpotlightSetBatch
 *
 * @property {EveSpotlightSet} spotlightSet
 * @class
 */

var EveSpotlightSetBatch = /*#__PURE__*/function (_Tw2RenderBatch) {
  EveSpotlightSet_inherits(EveSpotlightSetBatch, _Tw2RenderBatch);

  var _super = EveSpotlightSet_createSuper(EveSpotlightSetBatch);

  function EveSpotlightSetBatch() {
    var _this;

    EveSpotlightSet_classCallCheck(this, EveSpotlightSetBatch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this), "spotlightSet", null);

    return _this;
  }

  EveSpotlightSet_createClass(EveSpotlightSetBatch, [{
    key: "Commit",

    /**
     * Commits the spotlight set for rendering
     * @param {string} technique - technique name
     */
    value: function Commit(technique) {
      this.spotlightSet.RenderCones(technique);
      this.spotlightSet.RenderGlow(technique);
    }
  }]);

  return EveSpotlightSetBatch;
}(core["Tw2RenderBatch"]);
/**
 * Spotlight Item
 *
 * @property {mat4} transform               - The spotlight's transform
 * @property {vec4} coneColor               - Colour of the spotlight's cone
 * @property {vec4} spriteColor             - Colour of the spotlight's sprite texture
 * @property {vec4} flareColor              - Colour of the spotlight's flare
 * @property {vec4} spriteScale             - The size of the spotlight
 * @property {number} boosterGainInfluence  - If true, the spotlight can change size on booster gain
 * @property {number} boneIndex             - The spotlight's bone index
 * @property {number} groupIndex            - The sof faction group that the spotlight belongs to
 * @property {number} coneIntensity         - Scales the spotlight's cone colour, set by an object's sof Faction
 * @property {number} spriteIntensity       - Scales the spotlight's sprite colour, set by an object's sof Faction
 * @property {number} flareIntensity        - Scales the spotlight's flare colour, set by an object's sof Faction
 * @class
 */

var EveSpotlightSet_EveSpotlightSetItem = /*#__PURE__*/function (_EveObjectSetItem) {
  EveSpotlightSet_inherits(EveSpotlightSetItem, _EveObjectSetItem);

  var _super2 = EveSpotlightSet_createSuper(EveSpotlightSetItem);

  function EveSpotlightSetItem() {
    var _this2;

    EveSpotlightSet_classCallCheck(this, EveSpotlightSetItem);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call(this, ...args);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "transform", global["z" /* mat4 */].create());

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "coneColor", global["I" /* vec4 */].create());

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "spriteColor", global["I" /* vec4 */].create());

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "flareColor", global["I" /* vec4 */].create());

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "spriteScale", global["H" /* vec3 */].fromValues(1, 1, 1));

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "boosterGainInfluence", 0);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "boneIndex", 0);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "groupIndex", -1);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "coneIntensity", 0);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "spriteIntensity", 0);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this2), "flareIntensity", 0);

    return _this2;
  }

  EveSpotlightSet_createClass(EveSpotlightSetItem, null, [{
    key: "create",

    /**
     * Creates a spotlight set item from an object
     * @param {*} [opt={}
     * @returns {EveSpotlightSetItem}
     */
    value: function create() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var item = new this();
      global["F" /* util */].assignIfExists(item, opt, ['name', 'display', 'boosterGainInfluence', 'boneIndex', 'groupIndex', 'coneIntensity', 'spriteIntensity', 'flareIntensity', 'transform', 'coneColor', 'spriteColor', 'flareColor', 'spriteScale']);
      return item;
    }
  }]);

  return EveSpotlightSetItem;
}(EveObjectSet_EveObjectSetItem);
/**
 * EveSpotlightSet
 *
 * @property {string} name                               - The spotlight set's name
 * @property {boolean} display                           - controls the visibility of the spotlight set, and all it's children
 * @property {Tw2Effect} coneEffect                      - The spotlight set's cone effect
 * @property {Tw2Effect} glowEffect                      - The spotlight set's glow effect
 * @property {Array.<EveSpotlightSetItem) spotlightItems - The spotlight set's children
 * @property {WebGLBuffer} _coneVertexBuffer             - Webgl buffer for the spotlight set's cone vertices
 * @property {WebGLBuffer} _spriteVertexBuffer           - Webgl buffer for the spotlight set's sprite/glow vertices
 * @property {WebGLBuffer} _indexBuffer                  - Webgl buffer for the spotlight set
 * @property {Tw2VertexDeclaration} _decl                - The spotlight set's vertex declarations
 * @class
 */

var EveSpotlightSet_EveSpotlightSet = /*#__PURE__*/function (_EveObjectSet) {
  EveSpotlightSet_inherits(EveSpotlightSet, _EveObjectSet);

  var _super3 = EveSpotlightSet_createSuper(EveSpotlightSet);

  function EveSpotlightSet() {
    var _this3;

    EveSpotlightSet_classCallCheck(this, EveSpotlightSet);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _super3.call(this, ...args);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this3), "coneEffect", null);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this3), "glowEffect", null);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this3), "_coneVertexBuffer", null);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this3), "_spriteVertexBuffer", null);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this3), "_indexBuffer", null);

    EveSpotlightSet_defineProperty(EveSpotlightSet_assertThisInitialized(_this3), "_decl", new core["Tw2VertexDeclaration"](EveSpotlightSet.vertexDeclarations));

    return _this3;
  }

  EveSpotlightSet_createClass(EveSpotlightSet, [{
    key: "GetResources",

    /**
     * Gets the spotlight set's resources
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.coneEffect) {
        this.coneEffect.GetResources(out);
      }

      if (this.glowEffect) {
        this.glowEffect.GetResources(out);
      }

      return out;
    }
    /**
     * Unloads the spotlight set's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {
      if (this._coneVertexBuffer) {
        global["w" /* device */].gl.deleteBuffer(this._coneVertexBuffer);
        this._coneVertexBuffer = null;
      }

      if (this._spriteVertexBuffer) {
        global["w" /* device */].gl.deleteBuffer(this._spriteVertexBuffer);
        this._spriteVertexBuffer = null;
      }

      if (this._indexBuffer) {
        global["w" /* device */].gl.deleteBuffer(this._indexBuffer);
        this._indexBuffer = null;
      }
    }
    /**
     * Rebuilds the spotlight set's buffers
     */

  }, {
    key: "Rebuild",
    value: function Rebuild() {
      this.Unload();
      EveSpotlightSet.RebuildItems(this);
      this._rebuildPending = false;
      var itemCount = this._visibleItems.length;
      if (!itemCount) return;
      var d = global["w" /* device */],
          vertCount = 4,
          coneQuadCount = 4,
          coneVertexCount = itemCount * coneQuadCount * vertCount,
          vertexSize = 22,
          coneIndices = [1, 0, 2, 3],
          coneArray = new Float32Array(coneVertexCount * vertexSize);

      for (var i = 0; i < itemCount; ++i) {
        var item = this._visibleItems[i];

        for (var q = 0; q < coneQuadCount; ++q) {
          for (var v = 0; v < vertCount; ++v) {
            var offset = (i * coneQuadCount * vertCount + vertCount * q + v) * vertexSize;
            coneArray[offset] = item.coneColor[0] * item.coneIntensity;
            coneArray[offset + 1] = item.coneColor[1] * item.coneIntensity;
            coneArray[offset + 2] = item.coneColor[2] * item.coneIntensity;
            coneArray[offset + 3] = item.coneColor[3];
            coneArray[offset + 4] = item.transform[0];
            coneArray[offset + 5] = item.transform[4];
            coneArray[offset + 6] = item.transform[8];
            coneArray[offset + 7] = item.transform[12];
            coneArray[offset + 8] = item.transform[1];
            coneArray[offset + 9] = item.transform[5];
            coneArray[offset + 10] = item.transform[9];
            coneArray[offset + 11] = item.transform[13];
            coneArray[offset + 12] = item.transform[2];
            coneArray[offset + 13] = item.transform[6];
            coneArray[offset + 14] = item.transform[10];
            coneArray[offset + 15] = item.transform[14];
            coneArray[offset + 16] = 1;
            coneArray[offset + 17] = 1;
            coneArray[offset + 18] = 1;
            coneArray[offset + 19] = q * vertCount + coneIndices[v];
            coneArray[offset + 20] = item.boneIndex;
            coneArray[offset + 21] = item.boosterGainInfluence ? 255 : 0;
          }
        }
      }

      this._coneVertexBuffer = d.gl.createBuffer();
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, this._coneVertexBuffer);
      d.gl.bufferData(d.gl.ARRAY_BUFFER, coneArray, d.gl.STATIC_DRAW);
      this._coneVertexBuffer.count = itemCount * coneQuadCount * 6;
      var spriteQuadCount = 2,
          spriteVertexCount = itemCount * spriteQuadCount * vertCount,
          spriteArray = new Float32Array(spriteVertexCount * vertexSize),
          spriteIndexes = [1, 0, 2, 3];

      for (var _i = 0; _i < itemCount; ++_i) {
        var _item = this._visibleItems[_i];

        for (var _q = 0; _q < spriteQuadCount; ++_q) {
          for (var _v = 0; _v < vertCount; ++_v) {
            var _offset = (_i * spriteQuadCount * vertCount + vertCount * _q + _v) * vertexSize;

            if (_q % 2 === 0) {
              spriteArray[_offset] = _item.spriteColor[0] * _item.spriteIntensity;
              spriteArray[_offset + 1] = _item.spriteColor[1] * _item.spriteIntensity;
              spriteArray[_offset + 2] = _item.spriteColor[2] * _item.spriteIntensity;
              spriteArray[_offset + 3] = _item.spriteColor[3];
              spriteArray[_offset + 16] = _item.spriteScale[0];
              spriteArray[_offset + 17] = 1;
              spriteArray[_offset + 18] = 1;
            } else {
              spriteArray[_offset] = _item.flareColor[0] * _item.flareIntensity;
              spriteArray[_offset + 1] = _item.flareColor[1] * _item.flareIntensity;
              spriteArray[_offset + 2] = _item.flareColor[2] * _item.flareIntensity;
              spriteArray[_offset + 3] = _item.flareColor[3];
              spriteArray[_offset + 16] = 1;
              spriteArray[_offset + 17] = _item.spriteScale[1];
              spriteArray[_offset + 18] = _item.spriteScale[2];
            }

            spriteArray[_offset + 4] = _item.transform[0];
            spriteArray[_offset + 5] = _item.transform[4];
            spriteArray[_offset + 6] = _item.transform[8];
            spriteArray[_offset + 7] = _item.transform[12];
            spriteArray[_offset + 8] = _item.transform[1];
            spriteArray[_offset + 9] = _item.transform[5];
            spriteArray[_offset + 10] = _item.transform[9];
            spriteArray[_offset + 11] = _item.transform[13];
            spriteArray[_offset + 12] = _item.transform[2];
            spriteArray[_offset + 13] = _item.transform[6];
            spriteArray[_offset + 14] = _item.transform[10];
            spriteArray[_offset + 15] = _item.transform[14];
            spriteArray[_offset + 19] = _q * vertCount + spriteIndexes[_v];
            spriteArray[_offset + 20] = _item.boneIndex;
            spriteArray[_offset + 21] = _item.boosterGainInfluence ? 255 : 0;
          }
        }
      }

      this._spriteVertexBuffer = d.gl.createBuffer();
      d.gl.bindBuffer(d.gl.ARRAY_BUFFER, this._spriteVertexBuffer);
      d.gl.bufferData(d.gl.ARRAY_BUFFER, spriteArray, d.gl.STATIC_DRAW);
      this._spriteVertexBuffer.count = itemCount * spriteQuadCount * 6;
      var indexes = new Uint16Array(itemCount * coneQuadCount * 6);

      for (var _i2 = 0; _i2 < itemCount * coneQuadCount; ++_i2) {
        var _offset2 = _i2 * 6,
            vtxOffset = _i2 * 4;

        indexes[_offset2] = vtxOffset;
        indexes[_offset2 + 1] = vtxOffset + 1;
        indexes[_offset2 + 2] = vtxOffset + 2;
        indexes[_offset2 + 3] = vtxOffset + 2;
        indexes[_offset2 + 4] = vtxOffset + 3;
        indexes[_offset2 + 5] = vtxOffset;
      }

      this._indexBuffer = d.gl.createBuffer();
      d.gl.bindBuffer(d.gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
      d.gl.bufferData(d.gl.ELEMENT_ARRAY_BUFFER, indexes, d.gl.STATIC_DRAW);
      d.gl.bindBuffer(d.gl.ELEMENT_ARRAY_BUFFER, null);
      this._indexBuffer.count = itemCount;
    }
    /**
     * Gets the spotlight set's render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData) {
      if (this.display && mode === global["w" /* device */].RM_ADDITIVE && this._indexBuffer && this._indexBuffer.count) {
        var batch = new EveSpotlightSetBatch();
        batch.renderMode = global["w" /* device */].RM_ADDITIVE;
        batch.spotlightSet = this;
        batch.perObjectData = perObjectData;
        accumulator.Commit(batch);
      }
    }
    /**
     * Renders the spotlight set's cone effect
     * @param {string} technique - technique name
     * @returns {boolean}
     */

  }, {
    key: "RenderCones",
    value: function RenderCones(technique) {
      return EveSpotlightSet.Render(this, this.coneEffect, technique, this._coneVertexBuffer);
    }
    /**
     * Renders the spotlight set's glow effect
     * @param {string} technique - technique name
     * @returns {boolean}
     */

  }, {
    key: "RenderGlow",
    value: function RenderGlow(technique) {
      return EveSpotlightSet.Render(this, this.glowEffect, technique, this._spriteVertexBuffer);
    }
    /**
     * Internal render function
     * @param {EveSpotlightSet} spotlightSet
     * @param {Tw2Effect} effect   - The Tw2Effect to render
     * @param {string} technique - technique name
     * @param {WebGLBuffer} buffer - A webgl buffer (ie. cone or glow buffer)
     * @returns {boolean}
     * @private
     */

  }, {
    key: "spotlightItems",

    /**
     * Alias for this.items
     * @returns {Array}
     */
    get: function get() {
      return this.items;
    }
    /**
     * Alias for this.items
     * @param {Array} arr
     */
    ,
    set: function set(arr) {
      this.items = arr;
    }
  }], [{
    key: "Render",
    value: function Render(spotlightSet, effect, technique, buffer) {
      if (!effect || !effect.IsGood() || !buffer) return false;
      var stride = 22 * 4;
      global["w" /* device */].SetStandardStates(global["w" /* device */].RM_ADDITIVE);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ARRAY_BUFFER, buffer);
      global["w" /* device */].gl.bindBuffer(global["w" /* device */].gl.ELEMENT_ARRAY_BUFFER, spotlightSet._indexBuffer);

      for (var pass = 0; pass < effect.GetPassCount(technique); ++pass) {
        effect.ApplyPass(technique, pass);
        if (!spotlightSet._decl.SetDeclaration(effect.GetPassInput(technique, pass), stride)) return false;
        global["w" /* device */].ApplyShadowState();
        global["w" /* device */].gl.drawElements(global["w" /* device */].gl.TRIANGLES, buffer['count'], global["w" /* device */].gl.UNSIGNED_SHORT, 0);
      }

      return true;
    }
    /**
     * Spotlight set item constructor
     * @type {EveSpotlightSetItem}
     */

  }]);

  return EveSpotlightSet;
}(EveObjectSet_EveObjectSet);

EveSpotlightSet_defineProperty(EveSpotlightSet_EveSpotlightSet, "Item", EveSpotlightSet_EveSpotlightSetItem);

EveSpotlightSet_defineProperty(EveSpotlightSet_EveSpotlightSet, "vertexDeclarations", [['COLOR', 0, 4], ['TEXCOORD', 0, 4], ['TEXCOORD', 1, 4], ['TEXCOORD', 2, 4], ['TEXCOORD', 3, 3], ['TEXCOORD', 4, 3]]);
// CONCATENATED MODULE: ./eve/item/EveSpriteSet.js
function EveSpriteSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveSpriteSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveSpriteSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveSpriteSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveSpriteSet_defineProperties(Constructor, staticProps); return Constructor; }

function EveSpriteSet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveSpriteSet_setPrototypeOf(subClass, superClass); }

function EveSpriteSet_setPrototypeOf(o, p) { EveSpriteSet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveSpriteSet_setPrototypeOf(o, p); }

function EveSpriteSet_createSuper(Derived) { var hasNativeReflectConstruct = EveSpriteSet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveSpriteSet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveSpriteSet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveSpriteSet_possibleConstructorReturn(this, result); }; }

function EveSpriteSet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveSpriteSet_assertThisInitialized(self); }

function EveSpriteSet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveSpriteSet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveSpriteSet_getPrototypeOf(o) { EveSpriteSet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveSpriteSet_getPrototypeOf(o); }

function EveSpriteSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Sprite set render batch
 *
 * @property {boolean} boosterGlow
 * @property {EveSpriteSet} spriteSet
 * @property {mat4} world
 * @property {number}
 * @property {number}
 * @class
 */

var EveSpriteSetBatch = /*#__PURE__*/function (_Tw2RenderBatch) {
  EveSpriteSet_inherits(EveSpriteSetBatch, _Tw2RenderBatch);

  var _super = EveSpriteSet_createSuper(EveSpriteSetBatch);

  function EveSpriteSetBatch() {
    var _this;

    EveSpriteSet_classCallCheck(this, EveSpriteSetBatch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this), "boosterGlow", false);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this), "spriteSet", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this), "world", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this), "boosterGain", 0);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this), "warpIntensity", 0);

    return _this;
  }

  EveSpriteSet_createClass(EveSpriteSetBatch, [{
    key: "Commit",

    /**
     * Commits the sprite set
     * @param {string} technique - technique name
     */
    value: function Commit(technique) {
      if (this.boosterGlow) {
        this.spriteSet.RenderBoosterGlow(technique, this.world, this.boosterGain, this.warpIntensity);
      } else {
        this.spriteSet.Render(technique, this.world, this.perObjectData);
      }
    }
  }]);

  return EveSpriteSetBatch;
}(core["Tw2RenderBatch"]);
/**
 * EveSpriteSetItem
 *
 * @property {vec3} position
 * @property {number} blinkRate
 * @property {number} blinkPhase
 * @property {number} minScale
 * @property {number} maxScale
 * @property {number} falloff
 * @property {vec4} color
 * @property {vec4} warpColor
 * @property {number} boneIndex
 * @property {number} groupIndex
 * @class
 */

var EveSpriteSet_EveSpriteSetItem = /*#__PURE__*/function (_EveObjectSetItem) {
  EveSpriteSet_inherits(EveSpriteSetItem, _EveObjectSetItem);

  var _super2 = EveSpriteSet_createSuper(EveSpriteSetItem);

  function EveSpriteSetItem() {
    var _this2;

    EveSpriteSet_classCallCheck(this, EveSpriteSetItem);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call(this, ...args);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "position", global["H" /* vec3 */].create());

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "blinkRate", 0);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "blinkPhase", 0);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "minScale", 1);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "maxScale", 1);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "falloff", 0);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "color", global["I" /* vec4 */].create());

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "warpColor", global["I" /* vec4 */].create());

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "boneIndex", 0);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this2), "groupIndex", -1);

    return _this2;
  }

  EveSpriteSet_createClass(EveSpriteSetItem, null, [{
    key: "create",

    /**
     * Creates a sprite set item from an object
     * @param {*} [opt={}]
     * @returns {EveSpriteSetItem}
     */
    value: function create() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var item = new this();
      global["F" /* util */].assignIfExists(item, opt, ['name', 'display', 'blinkRate', 'blinkPhase', 'minScale', 'maxScale', 'falloff', 'boneIndex', 'groupIndex', 'position', 'color', 'warpColor']);
      return item;
    }
  }]);

  return EveSpriteSetItem;
}(EveObjectSet_EveObjectSetItem);
/**
 * EveSpriteSet
 *
 * @property {Tw2Effect} effect
 * @property {?boolean} useQuads - Use quad rendering (CPU transform)
 * @property {?boolean} isSkinned - Use bone transforms (when useQuads is true)
 * @property {number} _time
 * @property {WebGLBuffer} _vertexBuffer
 * @property {WebGLBuffer} _indexBuffer
 * @property {Tw2VertexDeclaration} _decl
 */

var EveSpriteSet_EveSpriteSet = /*#__PURE__*/function (_EveObjectSet) {
  EveSpriteSet_inherits(EveSpriteSet, _EveObjectSet);

  var _super3 = EveSpriteSet_createSuper(EveSpriteSet);

  /**
   * Constructor
   * @param {boolean} [useQuads] - Use quad rendering (CPU transform)
   * @param {boolean} [isSkinned] - Use bone transforms (when useQuads is true)
   */
  function EveSpriteSet() {
    var _this3;

    var useQuads = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var isSkinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    EveSpriteSet_classCallCheck(this, EveSpriteSet);

    _this3 = _super3.call(this);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "effect", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "useQuads", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "isSkinned", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "_time", 0);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "_vertexBuffer", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "_indexBuffer", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "_instanceBuffer", null);

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "_decl", new core["Tw2VertexDeclaration"]());

    EveSpriteSet_defineProperty(EveSpriteSet_assertThisInitialized(_this3), "_vdecl", new core["Tw2VertexDeclaration"]([['TEXCOORD', 5, 1]]));

    _this3.UseQuads(useQuads, isSkinned);

    return _this3;
  }
  /**
   * Alias for this.items
   * @returns {Array}
   */


  EveSpriteSet_createClass(EveSpriteSet, [{
    key: "UseQuads",

    /**
     * Use instanced rendering or 'quad' rendering
     * @param {boolean} useQuads      - Use quad rendering (CPU transform)
     * @param {boolean} isSkinned     - Use bone transforms (when useQuads is true)
     */
    value: function UseQuads(useQuads, isSkinned) {
      if (this.useQuads === useQuads) return;
      this.useQuads = useQuads;
      this.isSkinned = isSkinned;

      this._decl.DeclareFromObject(!useQuads ? EveSpriteSet.vertexDeclarations : EveSpriteSet.quadVertexDeclarations);

      this._rebuildPending = true;
    }
    /**
     * Gets Sprite Set Resource Objects
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.effect) {
        this.effect.GetResources(out);
      }

      return out;
    }
    /**
     * Per frame update
     * @param {number} dt - Delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      this._time += dt;

      if (this._rebuildPending) {
        this.Rebuild();
      }
    }
    /**
     * Unloads the sprite set's buffers
     */

  }, {
    key: "Unload",
    value: function Unload() {
      var gl = global["w" /* device */].gl;

      if (this._vertexBuffer) {
        gl.deleteBuffer(this._vertexBuffer);
        this._vertexBuffer = null;
      } // Standard


      if (this._indexBuffer) {
        gl.deleteBuffer(this._indexBuffer);
        this._indexBuffer = null;
      } // Quad


      if (this._instanceBuffer) {
        gl.deleteBuffer(this._instanceBuffer);
        this._instanceBuffer = null;
      }
    }
    /**
     * Rebuilds the sprite set's buffers
     */

  }, {
    key: "Rebuild",
    value: function Rebuild() {
      this.constructor.RebuildItems(this);
      this._rebuildPending = false;
      var itemCount = this._visibleItems.length;
      if (!itemCount) return;
      var gl = global["w" /* device */].gl;

      if (this.useQuads) {
        this._vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 1, 2, 2, 3, 0]), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        this._instanceBuffer = gl.createBuffer();
        return;
      }

      var vertexSize = 13,
          array = new Float32Array(itemCount * 4 * vertexSize);

      for (var i = 0; i < itemCount; ++i) {
        var item = this._visibleItems[i],
            offset = i * 4 * vertexSize;
        array[offset] = 0;
        array[offset + vertexSize] = 1;
        array[offset + 2 * vertexSize] = 2;
        array[offset + 3 * vertexSize] = 3;

        for (var j = 0; j < 4; ++j) {
          var vtxOffset = offset + j * vertexSize;
          array[vtxOffset + 1] = item.boneIndex;
          array[vtxOffset + 2] = item.position[0];
          array[vtxOffset + 3] = item.position[1];
          array[vtxOffset + 4] = item.position[2];
          array[vtxOffset + 5] = item.color[0];
          array[vtxOffset + 6] = item.color[1];
          array[vtxOffset + 7] = item.color[2];
          array[vtxOffset + 8] = item.blinkPhase;
          array[vtxOffset + 9] = item.blinkRate;
          array[vtxOffset + 10] = item.minScale;
          array[vtxOffset + 11] = item.maxScale;
          array[vtxOffset + 12] = item.falloff;
        }
      }

      this._vertexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, array, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      var indexes = new Uint16Array(itemCount * 6);

      for (var _i = 0; _i < itemCount; ++_i) {
        var _offset = _i * 6,
            _vtxOffset = _i * 4;

        indexes[_offset] = _vtxOffset;
        indexes[_offset + 1] = _vtxOffset + 2;
        indexes[_offset + 2] = _vtxOffset + 1;
        indexes[_offset + 3] = _vtxOffset;
        indexes[_offset + 4] = _vtxOffset + 3;
        indexes[_offset + 5] = _vtxOffset + 2;
      }

      this._indexBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexes, gl.STATIC_DRAW);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      this._indexBuffer.count = itemCount * 6;
    }
    /**
     * Gets render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     * @param {mat4} world
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData, world) {
      if (this.display && mode === global["w" /* device */].RM_ADDITIVE && this._vertexBuffer && this._visibleItems.length) {
        var batch = new EveSpriteSetBatch();
        batch.world = world;
        batch.renderMode = global["w" /* device */].RM_ADDITIVE;
        batch.spriteSet = this;
        batch.perObjectData = perObjectData;
        accumulator.Commit(batch);
      }
    }
    /**
     * Gets render batches for booster glows
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     * @param {mat4} world
     * @param {Number} boosterGain
     * @param {Number} warpIntensity
     */

  }, {
    key: "GetBoosterGlowBatches",
    value: function GetBoosterGlowBatches(mode, accumulator, perObjectData, world, boosterGain, warpIntensity) {
      if (this.display && mode === global["w" /* device */].RM_ADDITIVE && this._vertexBuffer && this._visibleItems.length) {
        var batch = new EveSpriteSetBatch();
        batch.boosterGlow = true;
        batch.world = world;
        batch.boosterGain = boosterGain;
        batch.warpIntensity = warpIntensity;
        batch.renderMode = global["w" /* device */].RM_ADDITIVE;
        batch.spriteSet = this;
        batch.perObjectData = perObjectData;
        accumulator.Commit(batch);
      }
    }
    /**
     * Renders the sprite set
     * @param {string} technique - technique name
     * @param {mat4} world
     * @param {Tw2PerObjectData} perObjectData
     * @returns {boolean}
     */

  }, {
    key: "Render",
    value: function Render(technique, world, perObjectData) {
      if (this.useQuads) {
        return this.RenderQuads(technique, world, perObjectData);
      }

      if (!this.effect || !this.effect.IsGood() || !this._indexBuffer) return false;
      var d = global["w" /* device */],
          gl = d.gl;
      d.SetStandardStates(d.RM_ADDITIVE);
      gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);

      for (var pass = 0; pass < this.effect.GetPassCount(technique); ++pass) {
        this.effect.ApplyPass(technique, pass);
        if (!this._decl.SetDeclaration(this.effect.GetPassInput(technique, pass), 52)) return false;
        d.ApplyShadowState();
        gl.drawElements(gl.TRIANGLES, this._indexBuffer.count, gl.UNSIGNED_SHORT, 0);
      }

      return true;
    }
    /**
     * Renders the sprite set as booster glow
     * @param {string} technique - technique name
     * @param {mat4} world
     * @param {Number} boosterGain
     * @param {Number} warpIntensity
     * @returns {boolean}
     */

  }, {
    key: "RenderBoosterGlow",
    value: function RenderBoosterGlow(technique, world, boosterGain, warpIntensity) {
      if (!this.effect || !this.effect.IsGood() || !this._instanceBuffer) return false;
      var d = global["w" /* device */],
          gl = d.gl,
          pos = EveObjectSet_EveObjectSet.global.vec3_0,
          itemCount = this._visibleItems.length,
          array = new Float32Array(17 * itemCount);
      d.SetStandardStates(d.RM_ADDITIVE);
      var index = 0;

      for (var i = 0; i < itemCount; ++i) {
        var item = this._visibleItems[i];
        global["H" /* vec3 */].transformMat4(pos, item.position, world);
        array[index++] = pos[0];
        array[index++] = pos[1];
        array[index++] = pos[2];
        array[index++] = world[8];
        array[index++] = item.blinkPhase;
        array[index++] = world[9];
        array[index++] = item.minScale;
        array[index++] = item.maxScale;
        array[index++] = world[10];
        array[index++] = item.color[0];
        array[index++] = item.color[1];
        array[index++] = item.color[2];
        array[index++] = boosterGain;
        array[index++] = item.warpColor[0];
        array[index++] = item.warpColor[1];
        array[index++] = item.warpColor[2];
        array[index++] = warpIntensity;
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, this._instanceBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, array, gl.DYNAMIC_DRAW);

      for (var pass = 0; pass < this.effect.GetPassCount(technique); ++pass) {
        this.effect.ApplyPass(technique, pass);
        var passInput = this.effect.GetPassInput(technique, pass);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);

        this._vdecl.SetPartialDeclaration(passInput, 4);

        gl.bindBuffer(gl.ARRAY_BUFFER, this._instanceBuffer);

        var resetData = this._decl.SetPartialDeclaration(passInput, 17 * 4, 0, 1);

        d.ApplyShadowState();
        d.ext.drawArraysInstanced(gl.TRIANGLES, 0, 6, itemCount);

        this._decl.ResetInstanceDivisors(resetData);
      }

      return true;
    }
    /**
     * Renders the sprite set with pre-transformed quads
     * @param {string} technique - technique name
     * @param {mat4} world
     * @param {Tw2PerObjectData} perObjectData
     * @returns {boolean}
     */

  }, {
    key: "RenderQuads",
    value: function RenderQuads(technique, world, perObjectData) {
      if (!this.effect || !this.effect.IsGood() || !this._instanceBuffer) return false;
      var d = global["w" /* device */],
          gl = d.gl,
          itemCount = this._visibleItems.length,
          array = new Float32Array(17 * itemCount),
          pos = EveObjectSet_EveObjectSet.global.vec3_0,
          bones = perObjectData.perObjectVSData.Get('JointMat');
      d.SetStandardStates(d.RM_ADDITIVE);
      var index = 0;

      for (var i = 0; i < itemCount; ++i) {
        var item = this._visibleItems[i];

        if (this.isSkinned) {
          var offset = item.boneIndex * 12;
          pos[0] = bones[offset] * item.position[0] + bones[offset + 1] * item.position[1] + bones[offset + 2] * item.position[2] + bones[offset + 3];
          pos[1] = bones[offset + 4] * item.position[0] + bones[offset + 5] * item.position[1] + bones[offset + 6] * item.position[2] + bones[offset + 7];
          pos[2] = bones[offset + 8] * item.position[0] + bones[offset + 9] * item.position[1] + bones[offset + 10] * item.position[2] + bones[offset + 11];
          global["H" /* vec3 */].transformMat4(pos, pos, world);
        } else {
          global["H" /* vec3 */].transformMat4(pos, item.position, world);
        }

        array[index++] = pos[0];
        array[index++] = pos[1];
        array[index++] = pos[2];
        array[index++] = 1;
        array[index++] = item.blinkPhase;
        array[index++] = item.blinkRate;
        array[index++] = item.minScale;
        array[index++] = item.maxScale;
        array[index++] = item.falloff;
        array[index++] = item.color[0];
        array[index++] = item.color[1];
        array[index++] = item.color[2];
        array[index++] = 1;
        array[index++] = item.warpColor[0];
        array[index++] = item.warpColor[1];
        array[index++] = item.warpColor[2];
        array[index++] = 1;
      }

      gl.bindBuffer(gl.ARRAY_BUFFER, this._instanceBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, array, gl.DYNAMIC_DRAW);

      for (var pass = 0; pass < this.effect.GetPassCount(technique); ++pass) {
        this.effect.ApplyPass(technique, pass);
        var passInput = this.effect.GetPassInput(technique, pass);
        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);

        this._vdecl.SetPartialDeclaration(passInput, 4);

        gl.bindBuffer(gl.ARRAY_BUFFER, this._instanceBuffer);

        var resetData = this._decl.SetPartialDeclaration(passInput, 17 * 4, 0, 1);

        d.ApplyShadowState();
        d.ext.drawArraysInstanced(gl.TRIANGLES, 0, 6, itemCount);

        this._decl.ResetInstanceDivisors(resetData);
      }

      return true;
    }
    /**
     * The sprite set's item constructor
     * @type {EveSpriteSetItem}
     */

  }, {
    key: "sprites",
    get: function get() {
      return this.items;
    }
    /**
     * Alias for this.items
     * @param {Array} arr
     */
    ,
    set: function set(arr) {
      this.items = arr;
    }
  }]);

  return EveSpriteSet;
}(EveObjectSet_EveObjectSet);

EveSpriteSet_defineProperty(EveSpriteSet_EveSpriteSet, "Item", EveSpriteSet_EveSpriteSetItem);

EveSpriteSet_defineProperty(EveSpriteSet_EveSpriteSet, "vertexDeclarations", [['TEXCOORD', 5, 2], ['POSITION', 0, 3], ['COLOR', 0, 3], ['TEXCOORD', 0, 1], ['TEXCOORD', 1, 1], ['TEXCOORD', 2, 1], ['TEXCOORD', 3, 1], ['TEXCOORD', 4, 1]]);

EveSpriteSet_defineProperty(EveSpriteSet_EveSpriteSet, "quadVertexDeclarations", [['POSITION', 0, 3], ['TEXCOORD', 0, 4], ['TEXCOORD', 1, 2], ['COLOR', 0, 4], ['COLOR', 1, 4]]);
// CONCATENATED MODULE: ./eve/item/EveTurretSet.js
function EveTurretSet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveTurretSet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveTurretSet_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveTurretSet_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveTurretSet_defineProperties(Constructor, staticProps); return Constructor; }

function EveTurretSet_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EveTurretSet_setPrototypeOf(subClass, superClass); }

function EveTurretSet_setPrototypeOf(o, p) { EveTurretSet_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EveTurretSet_setPrototypeOf(o, p); }

function EveTurretSet_createSuper(Derived) { var hasNativeReflectConstruct = EveTurretSet_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EveTurretSet_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EveTurretSet_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EveTurretSet_possibleConstructorReturn(this, result); }; }

function EveTurretSet_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return EveTurretSet_assertThisInitialized(self); }

function EveTurretSet_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EveTurretSet_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function EveTurretSet_getPrototypeOf(o) { EveTurretSet_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EveTurretSet_getPrototypeOf(o); }

function EveTurretSet_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * EveTurretSetItem
 *
 * @property {?Tw2Bone} bone                - The bone the turret is on
 * @property {boolean} isJoint              - Identifies if the turret is on a joint
 * @property {?string} locatorName          - The item's locator name
 * @property {boolean} updateFromLocator    - Allows the turret to be updated from a locator's transforms
 * @property {boolean} canFireWhenHidden    - Enables firing effects when hidden
 * @property {vec3} position                - The turret's position
 * @property {quat} rotation                - The turret's rotation
 * @property {mat4} _localTransform         - The turret's local transform
 * @property {quat} _localRotation          - the turret's local rotation
 */

var EveTurretSet_EveTurretSetItem = /*#__PURE__*/function (_EveObjectSetItem) {
  EveTurretSet_inherits(EveTurretSetItem, _EveObjectSetItem);

  var _super = EveTurretSet_createSuper(EveTurretSetItem);

  function EveTurretSetItem() {
    var _this;

    EveTurretSet_classCallCheck(this, EveTurretSetItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "bone", null);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "locatorName", null);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "updateFromLocator", false);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "canFireWhenHidden", false);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "position", global["H" /* vec3 */].create());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "rotation", global["C" /* quat */].create());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "_localTransform", global["z" /* mat4 */].create());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this), "_localRotation", global["C" /* quat */].create());

    return _this;
  }

  EveTurretSet_createClass(EveTurretSetItem, [{
    key: "UpdateTransforms",

    /**
     * Updates the turret's transforms
     */
    value: function UpdateTransforms() {
      global["z" /* mat4 */].fromRotationTranslation(this._localTransform, this.rotation, this.position);

      if (this.bone) {
        global["z" /* mat4 */].multiply(this._localTransform, this.bone.offsetTransform, this._localTransform);
        global["z" /* mat4 */].getRotation(this._localRotation, this._localTransform);
      } else {
        global["C" /* quat */].copy(this._localRotation, this.rotation);
      }
    }
    /**
     * Creates a turret item from an object
     * @param {*} [opt={}]
     * @returns {EveTurretSetItem}
     */

  }], [{
    key: "create",
    value: function create() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var item = new this();
      global["F" /* util */].assignIfExists(item, opt, ['name', 'display', 'locatorName', 'updateFromLocator', 'position', 'rotation', 'bone', 'canFireWhenHidden']);
      item.UpdateTransforms();
      return item;
    }
  }]);

  return EveTurretSetItem;
}(EveObjectSet_EveObjectSetItem);
/**
 * EveTurretSet
 *
 * @property {Array.<EveTurretSetItem>} turrets
 * @property {Tw2AnimationController} activeAnimation
 * @property {Tw2AnimationController} inactiveAnimation
 * @property {string} geometryResPath
 * @property {Tw2GeometryRes} geometryResource
 * @property {number} bottomClipHeight
 * @property {string} locatorName
 * @property {Tw2Effect} turretEffect
 * @property {vec3} targetPosition
 * @property {number} sysBoneHeight
 * @property {string} firingEffectResPath
 * @property {EveTurretFiringFX} firingEffect
 * @property {number} state
 * @property {boolean} hasCyclingFiringPos
 * @property {mat4} parentMatrix
 * @property {quat} boundingSphere
 * @property {number} _activeTurret
 * @property {number} _recheckTimeLeft
 * @property {number} _currentCyclingFiresPos
 * @property {Tw2PerObjectData} _perObjectDataActive
 * @property {Tw2PerObjectData} _perObjectDataInactive
 * @property {boolean} _locatorRebuildPending
 * @class
 */

var EveTurretSet_EveTurretSet = /*#__PURE__*/function (_EveObjectSet) {
  EveTurretSet_inherits(EveTurretSet, _EveObjectSet);

  var _super2 = EveTurretSet_createSuper(EveTurretSet);

  function EveTurretSet() {
    var _this2;

    EveTurretSet_classCallCheck(this, EveTurretSet);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call(this, ...args);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "visible", {
      turrets: true,
      firingEffects: true
    });

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "activeAnimation", new core["Tw2AnimationController"]());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "inactiveAnimation", new core["Tw2AnimationController"]());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "geometryResPath", '');

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "geometryResource", null);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "turretEffect", null);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "firingEffectResPath", '');

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "firingEffect", null);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "fireCallback", null);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "fireCallbackPending", false);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "state", EveTurretSet.State.IDLE);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "bottomClipHeight", 0);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "locatorName", '');

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "sysBoneHeight", 0);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "hasCyclingFiringPos", false);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "targetPosition", global["H" /* vec3 */].create());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "parentMatrix", global["z" /* mat4 */].create());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "boundingSphere", global["C" /* quat */].create());

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "_activeTurret", -1);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "_recheckTimeLeft", 0);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "_currentCyclingFiresPos", 0);

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "_perObjectDataActive", new core["Tw2PerObjectData"](EveTurretSet.perObjectData));

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "_perObjectDataInactive", new core["Tw2PerObjectData"](EveTurretSet.perObjectData));

    EveTurretSet_defineProperty(EveTurretSet_assertThisInitialized(_this2), "_locatorRebuildPending", true);

    return _this2;
  }

  EveTurretSet_createClass(EveTurretSet, [{
    key: "Initialize",

    /**
     * Initializes the Turret Set
     */
    value: function Initialize() {
      if (this.turretEffect && this.geometryResPath !== '') {
        this.geometryResource = global["D" /* resMan */].GetResource(this.geometryResPath);
        this.activeAnimation.SetGeometryResource(this.geometryResource);
        this.inactiveAnimation.SetGeometryResource(this.geometryResource);
        if (this.geometryResource) this.geometryResource.RegisterNotification(this);
      }

      if (this.firingEffectResPath !== '') {
        global["D" /* resMan */].GetObject(this.firingEffectResPath, object => this.firingEffect = object);
      }

      this.Rebuild();
    }
    /**
     * Initializes turret set's firing effect
     */

  }, {
    key: "InitializeFiringEffect",
    value: function InitializeFiringEffect() {
      if (!this.firingEffect) return;

      if (this.geometryResource && this.geometryResource.models.length) {
        var model = this.geometryResource.models[0];

        for (var i = 0; i < this.firingEffect.GetPerMuzzleEffectCount(); ++i) {
          this.firingEffect.SetMuzzleBoneID(i, model.FindBoneByName(EveTurretSet.positionBoneSkeletonNames[i]));
        }
      }
    }
    /**
     * Helper function for finding out what turret should be firing
     * @returns {number}
     */

  }, {
    key: "GetClosestTurret",
    value: function GetClosestTurret() {
      var closestTurret = -1,
          closestAngle = -2;
      var g = EveTurretSet.global,
          nrmToTarget = g.vec3_0,
          nrmUp = g.vec4_0,
          turretPosition = g.vec4_1;

      for (var i = 0; i < this.items.length; ++i) {
        var item = this.items[i];
        if (!item.display && !item.canFireWhenHidden) continue;
        turretPosition[0] = item._localTransform[12];
        turretPosition[1] = item._localTransform[13];
        turretPosition[2] = item._localTransform[14];
        turretPosition[3] = 1;
        global["I" /* vec4 */].transformMat4(turretPosition, turretPosition, this.parentMatrix);
        global["H" /* vec3 */].subtract(nrmToTarget, this.targetPosition, turretPosition);
        global["H" /* vec3 */].normalize(nrmToTarget, nrmToTarget);
        global["I" /* vec4 */].set(nrmUp, 0, 1, 0, 0);
        global["I" /* vec4 */].transformMat4(nrmUp, nrmUp, item._localTransform);
        global["I" /* vec4 */].transformMat4(nrmUp, nrmUp, this.parentMatrix);
        var angle = global["H" /* vec3 */].dot(nrmUp, nrmToTarget);

        if (angle > closestAngle) {
          closestTurret = this.items.indexOf(item);
          closestAngle = angle;
        }
      }

      return closestTurret;
    }
    /**
     * Animation helper function for deactivating a turret set
     */

  }, {
    key: "EnterStateDeactive",
    value: function EnterStateDeactive() {
      if (this.state === EveTurretSet.State.INACTIVE || this.state === EveTurretSet.State.PACKING) return;

      if (this.turretEffect) {
        this.activeAnimation.StopAllAnimations();
        this.inactiveAnimation.StopAllAnimations();
        this.activeAnimation.PlayAnimation('Pack', false, () => {
          this.state = EveTurretSet.State.INACTIVE;
          this.activeAnimation.PlayAnimation('Inactive', true);
        });
        this.inactiveAnimation.PlayAnimation('Pack', false, () => {
          this.state = EveTurretSet.State.INACTIVE;
          this.inactiveAnimation.PlayAnimation('Inactive', true);
        });
        this.state = EveTurretSet.State.PACKING;
      } else {
        this.state = EveTurretSet.State.INACTIVE;
      }

      this._activeTurret = -1;

      if (this.firingEffect) {
        this.firingEffect.StopFiring();
      }
    }
    /**
     * Animation helper function for putting a turret set into idle state
     */

  }, {
    key: "EnterStateIdle",
    value: function EnterStateIdle() {
      if (this.state === EveTurretSet.State.IDLE || this.state === EveTurretSet.State.UNPACKING) return;

      if (this.turretEffect) {
        this.activeAnimation.StopAllAnimations();
        this.inactiveAnimation.StopAllAnimations();

        if (this.state === EveTurretSet.State.FIRING) {
          this.activeAnimation.PlayAnimation('Active', true);
          this.inactiveAnimation.PlayAnimation('Active', true);
        } else {
          this.activeAnimation.PlayAnimation('Deploy', false, () => {
            this.state = EveTurretSet.State.IDLE;
            this.activeAnimation.PlayAnimation('Active', true);
          });
          this.inactiveAnimation.PlayAnimation('Deploy', false, () => {
            this.state = EveTurretSet.State.IDLE;
            this.inactiveAnimation.PlayAnimation('Active', true);
          });
        }

        this.state = EveTurretSet.State.UNPACKING;
      } else {
        this.state = EveTurretSet.State.IDLE;
      }

      this._activeTurret = -1;

      if (this.firingEffect) {
        this.firingEffect.StopFiring();
      }
    }
    /**
     * Animation helper function for putting a turret set into a firing state
     */

  }, {
    key: "EnterStateFiring",
    value: function EnterStateFiring() {
      if (!this.turretEffect || this.state === EveTurretSet.State.FIRING) {
        EveTurretSet.DoStartFiring(this);

        if (this.turretEffect) {
          this.activeAnimation.PlayAnimation('Fire', false, () => {
            this.activeAnimation.PlayAnimation('Active', true);
          });
        }

        return;
      }

      this.activeAnimation.StopAllAnimations();
      this.inactiveAnimation.StopAllAnimations();

      if (this.state === EveTurretSet.State.INACTIVE) {
        this.activeAnimation.PlayAnimation('Deploy', false, () => {
          EveTurretSet.DoStartFiring(this);
          this.activeAnimation.PlayAnimation('Fire', false, () => {
            this.activeAnimation.PlayAnimation('Active', true);
          });
        });
        this.inactiveAnimation.PlayAnimation('Deploy', false, () => {
          this.inactiveAnimation.PlayAnimation('Active', true);
        });
        this.state = EveTurretSet.State.UNPACKING;
      } else {
        EveTurretSet.DoStartFiring(this);
        this.activeAnimation.PlayAnimation('Fire', false, () => {
          this.activeAnimation.PlayAnimation('Active', true);
        });
        this.inactiveAnimation.PlayAnimation('Active', true);
      }
    }
    /**
     * Rebuilds the turret sets cached data
     */

  }, {
    key: "RebuildCachedData",
    value: function RebuildCachedData() {
      var instancedElement = new core["Tw2VertexElement"](core["Tw2VertexDeclaration"].Type.TEXCOORD, 1, global["w" /* device */].gl.FLOAT, 2),
          meshes = this.geometryResource.meshes,
          active = this.activeAnimation,
          inactive = this.inactiveAnimation;

      for (var i = 0; i < meshes.length; ++i) {
        meshes[i].declaration.elements.push(instancedElement);
        meshes[i].declaration.RebuildHash();
      }

      switch (this.state) {
        case EveTurretSet.State.INACTIVE:
          active.PlayAnimation('Inactive', true);
          inactive.PlayAnimation('Inactive', true);
          break;

        case EveTurretSet.State.IDLE:
          active.PlayAnimation('Active', true);
          inactive.PlayAnimation('Active', true);
          break;

        case EveTurretSet.State.FIRING:
          active.PlayAnimation('Fire', false, () => active.PlayAnimation('Active', true));
          inactive.PlayAnimation('Active', true);
          break;

        case EveTurretSet.State.PACKING:
          this.EnterStateIdle();
          break;

        case EveTurretSet.State.UNPACKING:
          this.EnterStateDeactive();
          break;
      }
    }
    /**
     * Finds a turret item by name
     * @param {string} name
     * @returns {?EveTurretSetItem}
     */

  }, {
    key: "FindItemByLocatorName",
    value: function FindItemByLocatorName(name) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].locatorName === name) {
          return this.items[i];
        }
      }

      return null;
    }
    /**
     * Updates the turret set's items that were created from locators
     * - Turrets without locator names are ignored
     * @param {Array<EveLocator>} locators
     */

  }, {
    key: "UpdateItemsFromLocators",
    value: function UpdateItemsFromLocators(locators) {
      var g = EveTurretSet.global,
          toRemove = Array.from(this.items),
          norm = g.mat4_0;

      for (var i = 0; i < locators.length; i++) {
        var _locators$i = locators[i],
            name = _locators$i.name,
            transform = _locators$i.transform,
            _locators$i$bone = _locators$i.bone,
            bone = _locators$i$bone === void 0 ? null : _locators$i$bone;
        var item = this.FindItemByLocatorName(name);

        if (!item) {
          item = this.CreateItem({
            name: name,
            locatorName: name,
            updateFromLocator: true
          });
        } else {
          toRemove.splice(toRemove.indexOf(item), 1);
        }

        if (item.updateFromLocator) {
          item.bone = bone;
          global["z" /* mat4 */].copy(norm, transform);
          global["H" /* vec3 */].normalize(norm.subarray(0, 3), norm.subarray(0, 3));
          global["H" /* vec3 */].normalize(norm.subarray(4, 7), norm.subarray(4, 7));
          global["H" /* vec3 */].normalize(norm.subarray(8, 11), norm.subarray(8, 11));
          global["z" /* mat4 */].getRotation(item.rotation, norm);
          global["z" /* mat4 */].getTranslation(item.position, norm);
          item.OnValueChanged();
        }
      }

      for (var _i = 0; _i < toRemove.length; _i++) {
        if (toRemove[_i].locatorName) {
          this.RemoveItem(toRemove[_i]);
          _i--;
        }
      }

      this._locatorRebuildPending = false;
      if (this._rebuildPending) this.Rebuild();
    }
    /**
     * Rebuilds the turret set's items from it's parent's locators
     */

  }, {
    key: "RebuildItemsFromLocators",
    value: function RebuildItemsFromLocators() {
      this._locatorRebuildPending = true;
    }
    /**
     * Gets turret set res objects
     * @param {Array} [out=[]] - Optional receiving array
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (this.geometryResource && !out.includes(this.geometryResource)) {
        out.push(this.geometryResource);
      }

      if (this.turretEffect) {
        this.turretEffect.GetResources(out);
      }

      if (this.firingEffect) {
        this.firingEffect.GetResources(out);
      }

      return out;
    }
    /**
     * Updates view dependent data
     */

  }, {
    key: "UpdateViewDependentData",
    value: function UpdateViewDependentData() {
      if (this.firingEffect) {
        this.firingEffect.UpdateViewDependentData();
      }
    }
    /**
     * Per frame update
     * @param {number} dt - Delta Time
     * @param {mat4} parentMatrix
     */

  }, {
    key: "Update",
    value: function Update(dt, parentMatrix) {
      if (this._rebuildPending) {
        this.Rebuild();
      }

      if (this.turretEffect) {
        this.activeAnimation.Update(dt);
        this.inactiveAnimation.Update(dt);
      }

      global["z" /* mat4 */].copy(this.parentMatrix, parentMatrix);

      if (this.firingEffect && this._visibleItems.length) {
        if (this._activeTurret !== -1) {
          if (this.firingEffect.isLoopFiring) {
            if (this.state === EveTurretSet.State.FIRING) {
              this._recheckTimeLeft -= dt;

              if (this._recheckTimeLeft <= 0) {
                EveTurretSet.DoStartFiring(this);
              }
            }
          }

          var activeItem = this.items[this._activeTurret];

          if (this.activeAnimation.models.length) {
            var bones = this.activeAnimation.models[0].bonesByName;

            for (var i = 0; i < this.firingEffect.GetPerMuzzleEffectCount(); ++i) {
              var transform = bones[EveTurretSet.positionBoneSkeletonNames[i]].worldTransform,
                  out = this.firingEffect.GetMuzzleTransform(i);
              global["z" /* mat4 */].multiply(out, activeItem._localTransform, transform);
              global["z" /* mat4 */].multiply(out, out, parentMatrix);
            }
          } else {
            for (var _i2 = 0; _i2 < this.firingEffect.GetPerMuzzleEffectCount(); ++_i2) {
              global["z" /* mat4 */].multiply(this.firingEffect.GetMuzzleTransform(_i2), parentMatrix, activeItem._localTransform);
            }
          }

          if (this.fireCallbackPending) {
            if (this.fireCallback) {
              var cbTransforms = [];

              for (var _i3 = 0; _i3 < this.firingEffect.GetPerMuzzleEffectCount(); ++_i3) {
                cbTransforms.push(this.firingEffect.GetMuzzleTransform(_i3));
              }

              this.fireCallback(this, cbTransforms);
            }

            this.fireCallbackPending = false;
          }
        }

        global["H" /* vec3 */].copy(this.firingEffect.endPosition, this.targetPosition);
        this.firingEffect.Update(dt);
      }
    }
    /**
     * Gets turret set render batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     * @param {boolean} [hideFiringEffect]
     */

  }, {
    key: "GetBatches",
    value: function GetBatches(mode, accumulator, perObjectData, hideFiringEffect) {
      if (!this.turretEffect || !this.geometryResource || !this.display || !this._visibleItems.length) return;

      if (mode === global["w" /* device */].RM_OPAQUE && this.visible.turrets) {
        var transforms = this.inactiveAnimation.GetBoneMatrices(0);

        if (transforms.length !== 0) {
          EveTurretSet.UpdatePerObjectData(this, this._perObjectDataInactive.perObjectVSData, transforms);
          this._perObjectDataInactive.perObjectPSData = perObjectData.perObjectPSData;
          var batch = new core["Tw2ForwardingRenderBatch"]();
          batch.renderMode = mode;
          batch.renderActive = false;
          batch.perObjectData = this._perObjectDataInactive;
          batch.geometryProvider = this;
          accumulator.Commit(batch);

          if (this.state === EveTurretSet.State.FIRING) {
            var _transforms = this.activeAnimation.GetBoneMatrices(0);

            if (_transforms.length !== 0) {
              EveTurretSet.UpdatePerObjectData(this, this._perObjectDataActive.perObjectVSData, _transforms, true);
              this._perObjectDataActive.perObjectPSData = perObjectData.perObjectPSData;

              var _batch = new core["Tw2ForwardingRenderBatch"]();

              _batch.renderActive = true;
              _batch.perObjectData = this._perObjectDataActive;
              _batch.geometryProvider = this;
              accumulator.Commit(_batch);
            }
          }
        }
      }

      this.GetFiringEffectBatches(mode, accumulator, perObjectData, hideFiringEffect);
    }
    /**
     * Gets turret firing effect batches
     * @param {number} mode
     * @param {Tw2BatchAccumulator} accumulator
     * @param {Tw2PerObjectData} perObjectData
     * @param {boolean} [hideFiringEffect]
     */

  }, {
    key: "GetFiringEffectBatches",
    value: function GetFiringEffectBatches(mode, accumulator, perObjectData, hideFiringEffect) {
      if (this.firingEffect && this.display && this._visibleItems.length && this.visible.firingEffects && !hideFiringEffect) {
        this.firingEffect.GetBatches(mode, accumulator, perObjectData);
      }
    }
    /**
     * Renders the turret set
     * @param batch
     * @param {string} technique - technique name
     * @returns {boolean}
     */

  }, {
    key: "Render",
    value: function Render(batch, technique) {
      if (!this.turretEffect || !this.turretEffect.IsGood() || !this._visibleItems.length) return false;
      var index = 0;

      var customSetter = function customSetter(el) {
        global["w" /* device */].gl.disableVertexAttribArray(el.location);
        global["w" /* device */].gl.vertexAttrib2f(el.location, index, index);
      };

      for (var i = 0; i < this.geometryResource.meshes.length; ++i) {
        var decl = this.geometryResource.meshes[i].declaration;
        decl.FindUsage(core["Tw2VertexDeclaration"].Type.TEXCOORD, 1).customSetter = customSetter;
      }

      var rendered = 0;

      for (; index < this.items.length; ++index) {
        if (this.items[index].display) {
          var isActive = this.state === EveTurretSet.State.FIRING && index === this._activeTurret;

          if (batch.renderActive === isActive) {
            this.geometryResource.RenderAreas(0, 0, 1, this.turretEffect, technique);
            rendered++;
          }
        }
      }

      return !!rendered;
    }
    /**
     * Rebuilds the set's items
     *
     * @param {EveTurretSet} turretSet
     */

  }, {
    key: "turrets",

    /**
     * Alias for this.items
     * @returns {Array}
     */
    get: function get() {
      return this.items;
    }
    /**
     * Alias for this.items
     * @param {Array} arr
     */
    ,
    set: function set(arr) {
      this.items = arr;
    }
  }], [{
    key: "RebuildItems",
    value: function RebuildItems(turretSet) {
      turretSet._visibleItems = [];

      for (var i = 0; i < turretSet.items.length; i++) {
        var item = turretSet.items[i];
        item._onModified = turretSet._onChildModified;

        if (item.display) {
          turretSet._visibleItems.push(item);

          if (item._rebuildPending) {
            item.UpdateTransforms();
            item._rebuildPending = false;
          }
        }
      }
    }
    /**
     * Updates per object data
     * @param {EveTurretSet} turretSet
     * @param {Tw2RawData} perObjectData
     * @param transforms
     * @param {boolean} [skipBoneCalculations]
     */

  }, {
    key: "UpdatePerObjectData",
    value: function UpdatePerObjectData(turretSet, perObjectData, transforms, skipBoneCalculations) {
      global["z" /* mat4 */].transpose(perObjectData.Get('shipMatrix'), turretSet.parentMatrix);
      var transformCount = transforms.length / 12;
      perObjectData.Get('turretSetData')[0] = transformCount;
      perObjectData.Get('baseCutoffData')[0] = turretSet.bottomClipHeight;
      var translation = perObjectData.Get('turretTranslation'),
          rotation = perObjectData.Get('turretRotation'),
          pose = perObjectData.Get('turretPoseTransAndRot');

      for (var i = 0; i < turretSet._visibleItems.length; ++i) {
        var item = turretSet._visibleItems[i];

        for (var j = 0; j < transformCount; ++j) {
          pose[(i * transformCount + j) * 2 * 4] = transforms[j * 12 + 3];
          pose[(i * transformCount + j) * 2 * 4 + 1] = transforms[j * 12 + 7];
          pose[(i * transformCount + j) * 2 * 4 + 2] = transforms[j * 12 + 11];
          pose[(i * transformCount + j) * 2 * 4 + 3] = 1;
          EveTurretSet.mat3x4toquat(transforms, j, pose, (i * transformCount + j) * 2 + 1);
        }

        if (item.bone && !skipBoneCalculations) {
          item.UpdateTransforms();
        }

        translation[i * 4] = item._localTransform[12];
        translation[i * 4 + 1] = item._localTransform[13];
        translation[i * 4 + 2] = item._localTransform[14];
        translation[i * 4 + 3] = 1;
        rotation[i * 4] = item.rotation[0];
        rotation[i * 4 + 1] = item.rotation[1];
        rotation[i * 4 + 2] = item.rotation[2];
        rotation[i * 4 + 3] = item.rotation[3];
      }
    }
    /**
     * Animation helper function for turret firing
     * @param {EveTurretSet} turretSet
     * @returns {EveTurretSetItem} the closest turret
     */

  }, {
    key: "DoStartFiring",
    value: function DoStartFiring(turretSet) {
      if (turretSet.hasCyclingFiringPos) {
        turretSet._currentCyclingFiresPos = 1 - turretSet._currentCyclingFiresPos;
      }

      if (turretSet.firingEffect) {
        turretSet.firingEffect.PrepareFiring(0, turretSet.hasCyclingFiringPos ? turretSet._currentCyclingFiresPos : -1);
      }

      turretSet._activeTurret = turretSet.GetClosestTurret();
      turretSet.state = EveTurretSet.State.FIRING;
      turretSet._recheckTimeLeft = 2;

      if (turretSet.fireCallback) {
        turretSet.fireCallbackPending = true;
      }
    }
    /**
     * The eve turret set's item constructor
     * @type {EveTurretSetItem}
     */

  }]);

  return EveTurretSet;
}(EveObjectSet_EveObjectSet);

EveTurretSet_defineProperty(EveTurretSet_EveTurretSet, "Item", EveTurretSet_EveTurretSetItem);

EveTurretSet_defineProperty(EveTurretSet_EveTurretSet, "State", {
  INACTIVE: 0,
  IDLE: 1,
  FIRING: 2,
  PACKING: 2,
  UNPACKING: 4
});

EveTurretSet_defineProperty(EveTurretSet_EveTurretSet, "worldNames", ['turretWorld0', 'turretWorld1', 'turretWorld2']);

EveTurretSet_defineProperty(EveTurretSet_EveTurretSet, "positionBoneSkeletonNames", ['Pos_Fire01', 'Pos_Fire02', 'Pos_Fire03', 'Pos_Fire04', 'Pos_Fire05', 'Pos_Fire06', 'Pos_Fire07', 'Pos_Fire08']);

EveTurretSet_defineProperty(EveTurretSet_EveTurretSet, "perObjectData", {
  VSData: [['baseCutoffData', 4], ['turretSetData', 4], ['shipMatrix', 16], ['turretTranslation', 4 * 24], ['turretRotation', 4 * 24], ['turretPoseTransAndRot', 2 * 4 * 72]]
});

EveTurretSet_defineProperty(EveTurretSet_EveTurretSet, "mat3x4toquat", function () {
  var m, q;
  return function (mm, index, out, outIndex) {
    if (!m) {
      m = global["z" /* mat4 */].create();
      q = global["C" /* quat */].create();
    }

    index *= 12;
    outIndex *= 4;
    m[0] = mm[index];
    m[1] = mm[index + 4];
    m[2] = mm[index + 8];
    m[3] = 0;
    m[4] = mm[index + 1];
    m[5] = mm[index + 5];
    m[6] = mm[index + 9];
    m[7] = 0;
    m[8] = mm[index + 2];
    m[9] = mm[index + 6];
    m[10] = mm[index + 10];
    m[11] = 0;
    m[12] = mm[index + 3];
    m[13] = mm[index + 7];
    m[14] = mm[index + 11];
    m[15] = 1;
    global["z" /* mat4 */].getRotation(q, m);
    out[outIndex] = q[0];
    out[outIndex + 1] = q[1];
    out[outIndex + 2] = q[2];
    out[outIndex + 3] = q[3];
  };
}());
// CONCATENATED MODULE: ./eve/item/index.js









// CONCATENATED MODULE: ./eve/EveSpaceScene.js
function EveSpaceScene_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EveSpaceScene_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EveSpaceScene_createClass(Constructor, protoProps, staticProps) { if (protoProps) EveSpaceScene_defineProperties(Constructor.prototype, protoProps); if (staticProps) EveSpaceScene_defineProperties(Constructor, staticProps); return Constructor; }

function EveSpaceScene_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * EveSpaceScene
 *
 * @property {number|string} _id
 * @property {string} name
 * @property {boolean} display
 * @property {{}} visible
 * @property {boolean} visible.lensflare
 * @property {boolean} visible.objects
 * @property {boolean} visible.planets
 * @property {boolean} visible.fog
 * @property {boolean} visible.clearColor
 * @property {boolean} visible.nebula
 * @property {Array.<EveLensflare>} lensflares - Scene lensflares
 * @property {Array.<*>} objects - Scene objects
 * @property {Array.<EvePlanet>} planets - Scene planets
 * @property {number} nebulaIntensity - controls nebula intensity on scene objects
 * @property {vec4} ambientColor - unused
 * @property {null|Tw2Effect} backgroundEffect
 * @property {number} backgroundRenderingEnabled - Toggles background effect visibility
 * @property {vec3} endMapScaling - controls the scale of the environment maps
 * @property {quat} envMapRotation - controls the rotation of the environment maps
 * @property {boolean} logEnabled - toggles LOD
 * @property {number} fogStart - fog start distance
 * @property {number} fogEnd - fog end distance
 * @property {number} fogMax - fog maximum opacity
 * @property {number} fogType - fog blend type
 * @property {number} fogBlur - fog blur mode
 * @property {vec4} fogColor - fog color
 * @property {vec3} sunDirection - the direction of the scene sun
 * @property {vec4} sunDiffuseColor - the colour of the light from the sun
 * @property {String} envMapResPath - nebula reflection map path
 * @property {String} envMap1ResPath - nebula diffuse map path
 * @property {String} envMap2ResPath - nebular blur map path
 * @property {String} envMap3ResPath - unused
 * @property {null|Tw2TextureRes} envMapRes
 * @property {null|Tw2TextureRes} envMap1Res
 * @property {null|Tw2TextureRes} envMap2Res
 * @property {null} envMap3Res - unused
 * @property {Tw2BatchAccumulator} _batches - Scene batch accumulator
 * @property {Tw2RawData} _perFrameVS
 * @property {Tw2RawData} _perFramePS
 * @property {boolean} renderDebugInfo
 * @property {*} _debugHelper
 * @class
 */

var EveSpaceScene_EveSpaceScene = /*#__PURE__*/function () {
  function EveSpaceScene() {
    EveSpaceScene_classCallCheck(this, EveSpaceScene);

    this._id = global["F" /* util */].generateID();
    this.name = '';
    this.display = true;
    this.visible = {};
    this.visible.lensflares = true;
    this.visible.objects = true;
    this.visible.planets = true;
    this.visible.fog = true;
    this.visible.clearColor = true;
    this.visible.environmentReflection = true;
    this.visible.environmentDiffuse = true;
    this.visible.environmentBlur = true;
    Object.defineProperty(this.visible, 'environment', {
      get: () => {
        return this.backgroundRenderingEnabled;
      },
      set: bool => {
        this.backgroundRenderingEnabled = bool ? 1 : 0;
      }
    });
    this.lensflares = [];
    this.objects = [];
    this.planets = [];
    this.nebulaIntensity = 1;
    this.ambientColor = global["C" /* quat */].fromValues(0.25, 0.25, 0.25, 1);
    this.backgroundEffect = null;
    this.backgroundRenderingEnabled = 1;
    this.clearColor = global["I" /* vec4 */].fromValues(0, 0, 0, 0);
    this.lodEnabled = false;
    this.fogStart = 0;
    this.fogEnd = 0;
    this.fogMax = 0;
    this.fogType = 0;
    this.fogBlur = 0;
    this.fogColor = global["I" /* vec4 */].fromValues(0.25, 0.25, 0.25, 1);
    this.sunDirection = global["H" /* vec3 */].fromValues(1, -1, 1);
    this.sunDiffuseColor = global["I" /* vec4 */].fromValues(1, 1, 1, 1);
    this.envMapScaling = global["H" /* vec3 */].fromValues(1, 1, 1);
    this.envMapRotation = global["C" /* quat */].create();
    this.envMapResPath = '';
    this.envMap1ResPath = '';
    this.envMap2ResPath = '';
    this.envMap3ResPath = '';
    this.envMapRes = null;
    this.envMap1Res = null;
    this.envMap2Res = null;
    this.envMap3Res = null;
    this.renderDebugInfo = false;
    this._debugHelper = null;
    this._batches = new core["Tw2BatchAccumulator"]();
    this._perFrameVS = new core["Tw2RawData"](EveSpaceScene.perFrameData.VSData);
    this._perFramePS = new core["Tw2RawData"](EveSpaceScene.perFrameData.PSData);
    EveSpaceScene.init();
  }
  /**
   * Initializes the space scene
   */


  EveSpaceScene_createClass(EveSpaceScene, [{
    key: "Initialize",
    value: function Initialize() {
      this.SetEnvMapPath(0, this.envMapResPath);
      this.SetEnvMapPath(1, this.envMap1ResPath);
      this.SetEnvMapPath(2, this.envMap2ResPath);
      this.SetEnvMapPath(3, this.envMap3ResPath);
    }
    /**
     * Sets the environment's reflection map
     * @param {String} path
     */

  }, {
    key: "SetEnvMapReflection",
    value: function SetEnvMapReflection(path) {
      this.SetEnvMapPath(0, path);
    }
    /**
     * Sets the environment's diffuse map
     * @param {string} path
     */

  }, {
    key: "SetEnvMapDiffuse",
    value: function SetEnvMapDiffuse(path) {
      this.SetEnvMapPath(1, path);
    }
    /**
     * Sets the environment's blur map (used for fog)
     * @param {string} path
     */

  }, {
    key: "SetEnvMapBlur",
    value: function SetEnvMapBlur(path) {
      this.SetEnvMapPath(2, path);
    }
    /**
     * Sets an environment map
     * @param {number} index
     * @param {String} path
     */

  }, {
    key: "SetEnvMapPath",
    value: function SetEnvMapPath(index, path) {
      var _setEnvPath = (path, pathTarget, resTarget) => {
        path = path.toLowerCase();
        this[pathTarget] = path;
        this[resTarget] = path === '' ? null : global["D" /* resMan */].GetResource(path);
        return true;
      };

      switch (index) {
        case 0:
          // Reflection
          return _setEnvPath(path, 'envMapResPath', 'envMapRes');

        case 1:
          // Diffuse
          return _setEnvPath(path, 'envMap1ResPath', 'envMap1Res');

        case 2:
          // Blur
          return _setEnvPath(path, 'envMap2ResPath', 'envMap2Res');

        case 3:
          // Unused
          return _setEnvPath(path, 'envMap3ResPath', 'envMap3Res');
      }

      return false;
    }
    /**
     * Enables LOD
     * @param {boolean} enable
     */

  }, {
    key: "EnableLod",
    value: function EnableLod(enable) {
      this.lodEnabled = enable;

      if (!enable) {
        for (var i = 0; i < this.objects.length; ++i) {
          if (this.objects[i].ResetLod) {
            this.objects[i].ResetLod();
          }
        }
      }
    }
    /**
     * Keeps the scene and it's object's resources alive
     */

  }, {
    key: "KeepAlive",
    value: function KeepAlive() {
      var res = this.GetResources();

      for (var i = 0; i < res.length; i++) {
        res[i].KeepAlive();
      }
    }
    /**
     * Gets scene's resources
     * @param {Array} [out=[]] - Optional receiving array
     * @param {boolean} [excludeChildren]
     * @returns {Array.<Tw2Resource>} [out]
     */

  }, {
    key: "GetResources",
    value: function GetResources() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var excludeChildren = arguments.length > 1 ? arguments[1] : undefined;

      for (var i = 0; i < this.lensflares.length; i++) {
        this.lensflares[i].GetResources(out);
      }

      if (this.backgroundEffect) {
        this.backgroundEffect.GetResources(out);
      }

      if (this.envMapRes && !out.includes(this.envMapRes)) out.push(this.envMapRes);
      if (this.envMap1Res && !out.includes(this.envMap1Res)) out.push(this.envMapRes);
      if (this.envMap2Res && !out.includes(this.envMap2Res)) out.push(this.envMapRes);
      if (this.envMap3Res && !out.includes(this.envMap3Res)) out.push(this.envMapRes);

      if (!excludeChildren) {
        for (var _i = 0; _i < this.planets.length; _i++) {
          this.planets[_i].GetResources(out);
        }

        for (var _i2 = 0; _i2 < this.objects.length; _i2++) {
          if ('GetResources' in this.objects[_i2]) {
            this.objects[_i2].GetResources(out);
          }
        }
      }

      return out;
    }
    /**
     * Per frame update that is called per frame
     * @param {number} dt - delta time
     */

  }, {
    key: "Update",
    value: function Update(dt) {
      for (var i = 0; i < this.planets.length; ++i) {
        if ('Update' in this.planets[i]) {
          this.planets[i].Update(dt);
        }
      }

      for (var _i3 = 0; _i3 < this.objects.length; ++_i3) {
        if ('Update' in this.objects[_i3]) {
          this.objects[_i3].Update(dt);
        }
      }
    }
    /**
     * Gets batches for rendering
     * @param {number} mode
     * @param {Array.<EveObject>} objectArray
     * @param {Tw2BatchAccumulator} accumulator
     */

  }, {
    key: "RenderBatches",
    value: function RenderBatches(mode, objectArray) {
      var accumulator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._batches;

      for (var i = 0; i < objectArray.length; ++i) {
        if ('GetBatches' in objectArray[i]) {
          objectArray[i].GetBatches(mode, accumulator);
        }
      }
    }
    /**
     * Updates children's view dependent data and renders them
     */

  }, {
    key: "Render",
    value: function Render() {}
    /**
     * Applies per frame data
     */

  }, {
    key: "ApplyPerFrameData",
    value: function ApplyPerFrameData() {
      var d = global["w" /* device */],
          g = EveSpaceScene.global,
          envMapTransform = g.mat4_2,
          sunDir = g.vec3_0,
          show = this.visible;
      global["z" /* mat4 */].fromQuat(envMapTransform, this.envMapRotation);
      global["z" /* mat4 */].scale(envMapTransform, envMapTransform, this.envMapScaling);
      global["z" /* mat4 */].transpose(envMapTransform, envMapTransform);
      global["H" /* vec3 */].negate(sunDir, this.sunDirection);
      global["H" /* vec3 */].normalize(sunDir, sunDir);
      var distance = this.fogEnd - this.fogStart;
      if (Math.abs(distance) < 1e-5) distance = 1e-5;
      var f = 1.0 / distance;
      var VSData = this._perFrameVS;
      VSData.Set('FogFactors', [this.fogEnd * f, f, this.visible.fog ? this.fogMax : 0, 1]);
      VSData.Set('ViewportAdjustment', [1, 1, 1, 1]);
      VSData.Set('MiscSettings', [d.currentTime, 0, d.viewportWidth, d.viewportHeight]);
      VSData.Set('SunData.DirWorld', sunDir);
      VSData.Set('SunData.DiffuseColor', this.sunDiffuseColor);
      VSData.Set('TargetResolution', d.targetResolution);
      VSData.Set('ViewInverseTransposeMat', d.viewInverse);
      VSData.Set('ViewProjectionMat', d.viewProjectionTranspose);
      VSData.Set('ViewMat', d.viewTranspose);
      VSData.Set('ProjectionMat', d.projectionTranspose);
      VSData.Set('EnvMapRotationMat', envMapTransform);
      d.perFrameVSData = VSData;
      var PSData = this._perFramePS;
      PSData.Set('ViewInverseTransposeMat', d.viewInverse);
      PSData.Set('ViewMat', d.viewTranspose);
      PSData.Set('EnvMapRotationMat', envMapTransform);
      PSData.Set('SunData.DirWorld', sunDir);
      PSData.Set('SunData.DiffuseColor', this.sunDiffuseColor);
      PSData.Set('SceneData.AmbientColor', this.ambientColor);
      PSData.Set('MiscSettings', [d.currentTime, this.fogType, this.fogBlur, 1]);
      PSData.Set('SceneData.FogColor', this.fogColor);
      PSData.Set('FovXY', [d.targetResolution[3], d.targetResolution[2]]);
      PSData.Set('ShadowMapSettings', [1, 1, 0, 0]);
      PSData.Set('TargetResolution', d.targetResolution);
      PSData.Get('SceneData.NebulaIntensity')[0] = this.nebulaIntensity;
      PSData.Get('ViewportSize')[0] = d.viewportWidth;
      PSData.Get('ViewportSize')[1] = d.viewportHeight;
      PSData.Get('ShadowCameraRange')[0] = 1;
      PSData.Get('ProjectionToView')[0] = -d.projection[14];
      PSData.Get('ProjectionToView')[1] = -d.projection[10] - 1;
      d.perFramePSData = PSData;
      var envMap = this.envMapRes && show.environmentReflection ? this.envMapRes : g.emptyTexture,
          envMap1 = this.envMap1Res && show.environmentDiffuse ? this.envMap1Res : g.emptyTexture,
          envMap2 = this.envMap2Res && show.environmentBlur ? this.envMap2Res : g.emptyTexture,
          envMap3 = this.envMap3Res ? this.envMap3Res : g.emptyTexture;
      global["E" /* store */].GetVariable('EveSpaceSceneEnvMap').SetTextureRes(envMap);
      global["E" /* store */].GetVariable('EnvMap1').SetTextureRes(envMap1);
      global["E" /* store */].GetVariable('EnvMap2').SetTextureRes(envMap2);
      global["E" /* store */].GetVariable('EnvMap3').SetTextureRes(envMap3);
    }
    /**
     * Initializes class global and scratch variables
     */

  }], [{
    key: "init",
    value: function init() {
      if (!EveSpaceScene.global) {
        EveSpaceScene.global = {
          vec3_0: global["H" /* vec3 */].create(),
          vec4_0: global["I" /* vec4 */].create(),
          mat4_0: global["z" /* mat4 */].create(),
          mat4_1: global["z" /* mat4 */].create(),
          mat4_2: global["z" /* mat4 */].create(),
          mat4_ID: global["z" /* mat4 */].create(),
          frustum: new core["Tw2Frustum"](),
          emptyTexture: global["D" /* resMan */].GetResource('res:/texture/global/black.dds.0.png')
        };
      }
    }
    /**
     * Per frame data
     * @type {*}
     */

  }]);

  return EveSpaceScene;
}();

EveSpaceScene_defineProperty(EveSpaceScene_EveSpaceScene, "perFrameData", {
  PSData: [['ViewInverseTransposeMat', 16], ['ViewMat', 16], ['EnvMapRotationMat', 16], ['SunData.DirWorld', 4], ['SunData.DiffuseColor', 4], ['SceneData.AmbientColor', 3], ['SceneData.NebulaIntensity', 1], ['SceneData.FogColor', 4], ['ViewportOffset', 2], ['ViewportSize', 2], ['TargetResolution', 4], ['ShadowMapSettings', 4], ['ShadowCameraRange', 4], ['ProjectionToView', 2], ['FovXY', 2], ['MiscSettings', 4]],
  VSData: [['ViewInverseTransposeMat', 16], ['ViewProjectionMat', 16], ['ViewMat', 16], ['ProjectionMat', 16], ['ShadowViewMat', 16], ['ShadowViewProjectionMat', 16], ['EnvMapRotationMat', 16], ['SunData.DirWorld', 4], ['SunData.DiffuseColor', 4], ['FogFactors', 4], ['TargetResolution', 4], ['ViewportAdjustment', 4], ['MiscSettings', 4]]
});

EveSpaceScene_defineProperty(EveSpaceScene_EveSpaceScene, "global", null);

EveSpaceScene_defineProperty(EveSpaceScene_EveSpaceScene, "DebugRenderer", window['Tw2DebugRenderer'] || null);
// EXTERNAL MODULE: ./curve/index.js + 34 modules
var curve_0 = __webpack_require__(12);

// CONCATENATED MODULE: ./eve/EveSOF.js



















function EveSOF() {
  var data = null;
  var spriteEffect = null;

  function _get(obj, property, defaultValue) {
    if (property in obj) {
      return obj[property];
    }

    return defaultValue;
  }
  /**
   * @return {string}
   */


  function GetShaderPrefix(isAnimated) {
    return isAnimated ? _get(data['generic'], 'shaderPrefixAnimated', '') : _get(data['generic'], 'shaderPrefix', '');
  }

  function ModifyTextureResPath(path, name, area, faction, commands) {
    var pathInsert = null;

    if (_get(faction, 'resPathInsert', '').length) {
      pathInsert = faction.resPathInsert;
    }

    if ('respathinsert' in commands && commands.respathinsert.length === 1) {
      if (commands.respathinsert[0] === 'none') {
        return path;
      } else {
        pathInsert = commands.respathinsert[0];
      }
    }

    if (name === 'MaterialMap' || name === 'PaintMaskMap' || name === 'PmdgMap') {
      var index = path.lastIndexOf('/');
      var pathCopy = path;

      if (index >= 0) {
        pathCopy = path.substr(0, index + 1) + pathInsert + '/' + path.substr(index + 1);
      }

      index = pathCopy.lastIndexOf('_');

      if (index >= 0) {
        pathCopy = pathCopy.substr(0, index) + '_' + pathInsert + pathCopy.substr(index);

        var textureOverrides = _get(area, 'textureOverrides', {});

        if (name in textureOverrides && faction.name in textureOverrides[name]) {
          return pathCopy;
        }
      }
    }

    return path;
  }
  /**
   * @return {string}
   */


  function ModifyShaderPath(shader, isSkinned) {
    var prefix = GetShaderPrefix(isSkinned);
    shader = '/' + shader;
    var index = shader.lastIndexOf('/');
    return shader.substr(0, index + 1) + prefix + shader.substr(index + 1);
  }

  function FindPrefix(prefixes, name) {
    for (var m = 0; m < prefixes.length; ++m) {
      if (name.substr(0, prefixes[m].length) === prefixes[m]) {
        return m;
      }
    }

    return null;
  }

  function GetOverridenParameter(name, area, commands, race) {
    var prefixes, materialIndex, materialData, shortName;

    if ('mesh' in commands) {
      prefixes = data.generic.materialPrefixes;
      materialIndex = FindPrefix(prefixes, name);

      if (materialIndex !== null && materialIndex < commands.mesh.length && (_get(area, 'blockedMaterials', 0) & 1 << materialIndex) === 0) {
        materialData = _get(data.material, commands.mesh[materialIndex], null);

        if (materialData) {
          shortName = name.substr(prefixes[materialIndex].length);
          return _get(materialData.parameters, shortName, undefined);
        }
      }
    }

    prefixes = data.generic.patternMaterialPrefixes;
    materialIndex = FindPrefix(prefixes, name);

    if ('pattern' in commands) {
      if (materialIndex !== null && 1 + materialIndex < commands.pattern.length) {
        materialData = _get(data.material, commands.pattern[1 + materialIndex], null);

        if (materialData) {
          shortName = name.substr(prefixes[materialIndex].length);
          return _get(materialData.parameters, shortName, undefined);
        }
      }
    }

    if (materialIndex !== null) {
      materialData = _get(data.material, race.defaultPatternLayer1MaterialName, null);

      if (materialData) {
        shortName = name.substr(prefixes[materialIndex].length);
        return _get(materialData.parameters, shortName, undefined);
      }
    }
  }

  function GetAddressMode(projectionType) {
    switch (projectionType) {
      case 2:
        return 4;

      case 1:
        return 3;

      default:
        return 1;
    }
  }

  function FillMeshAreas(areas, areasName, hull, faction, race, pattern, commands, shaderOverride) {
    var hullAreas = _get(hull, areasName, []);

    for (var i = 0; i < hullAreas.length; ++i) {
      var area = hullAreas[i];
      var effect = new core["Tw2Effect"]();
      effect.effectFilePath = data['generic']['areaShaderLocation'] + ModifyShaderPath(shaderOverride ? shaderOverride : area.shader, hull['isSkinned']);

      var names = _get(_get(data['generic']['areaShaders'], area.shader, {}), 'parameters', []);

      for (var j = 0; j < names.length; ++j) {
        var name = names[j];
        var param = GetOverridenParameter(name, area, commands, race);
        param = param || _get(_get(_get(data.generic.hullAreas, area.name, {}), 'parameters', {}), name);
        param = param || _get(_get(_get(race.hullAreas, area.name, {}), 'parameters', {}), name);
        param = param || _get(_get(_get(faction.areas, area.name, {}), 'parameters', {}), name);
        param = param || _get(_get(area, 'parameters', {}), name);

        if (param) {
          effect.parameters[name] = new core["Tw2Vector4Parameter"](name, param);
        }
      }

      var hullTextures = _get(area, 'textures', []);

      for (j in hullTextures) {
        if (hullTextures.hasOwnProperty(j)) {
          var path = hullTextures[j];
          path = ModifyTextureResPath(path, j, area, faction, commands);
          effect.parameters[j] = new core["Tw2TextureParameter"](j, path);
        }
      }

      for (j = 0; j < pattern.layers.length; ++j) {
        if (pattern.layers[j] && !(pattern.layers[j].textureName in effect.parameters)) {
          var patternTex = new core["Tw2TextureParameter"](pattern.layers[j].textureName);
          patternTex.resourcePath = pattern.layers[j].textureResFilePath;
          patternTex.useAllOverrides = true;
          patternTex.addressUMode = GetAddressMode(_get(pattern.layers[j], 'projectionTypeU', 0));
          patternTex.addressVMode = GetAddressMode(_get(pattern.layers[j], 'projectionTypeV', 0));
          patternTex.Initialize();
          effect.parameters[pattern.layers[j].textureName] = patternTex;
        }
      }

      var defaultTextures = _get(_get(data['generic']['areaShaders'], area.shader, {}), 'defaultTextures', {});

      for (var texName in defaultTextures) {
        if (defaultTextures.hasOwnProperty(texName)) {
          if (!(texName in effect.parameters)) {
            effect.parameters[texName] = new core["Tw2TextureParameter"](texName, defaultTextures[texName]);
          }
        }
      }

      effect.Initialize();
      var newArea = new core["Tw2MeshArea"]();
      newArea.name = area.name;
      newArea.effect = effect;
      newArea.index = _get(area, 'index', 0);
      newArea.count = _get(area, 'count', 1);
      areas.push(newArea);
    }
  }

  function SetupMesh(ship, hull, faction, race, commands, pattern) {
    var mesh = new core["Tw2Mesh"]();
    mesh.geometryResPath = hull['geometryResFilePath'];
    ship.boundingSphereCenter[0] = hull.boundingSphere[0];
    ship.boundingSphereCenter[1] = hull.boundingSphere[1];
    ship.boundingSphereCenter[2] = hull.boundingSphere[2];
    ship.boundingSphereRadius = hull.boundingSphere[3];
    FillMeshAreas(_get(mesh, 'opaqueAreas', []), 'opaqueAreas', hull, faction, race, pattern, commands);
    FillMeshAreas(_get(mesh, 'transparentAreas', []), 'transparentAreas', hull, faction, race, pattern, commands);
    FillMeshAreas(_get(mesh, 'additiveAreas', []), 'additiveAreas', hull, faction, race, pattern, commands);
    FillMeshAreas(_get(mesh, 'decalAreas', []), 'decalAreas', hull, faction, race, pattern, commands);
    FillMeshAreas(_get(mesh, 'depthAreas', []), 'depthAreas', hull, faction, race, pattern, commands);
    mesh.Initialize();
    ship.mesh = mesh;

    if ('shapeEllipsoidCenter' in hull) {
      ship.shapeEllipsoidCenter = hull.shapeEllipsoidCenter;
    }

    if ('shapeEllipsoidRadius' in hull) {
      ship.shapeEllipsoidRadius = hull.shapeEllipsoidRadius;
    }
  }

  function SetupPattern(hull, race, commands) {
    var pattern = {
      patterns: [],
      layers: []
    };

    if ('pattern' in commands) {
      var p = {};

      for (var k = 0; k < data.pattern.length; ++k) {
        if (data.pattern[k].name === commands.pattern[0]) {
          p = data.pattern[k];
          break;
        }
      }

      var layer = _get(p, 'layer1', null);

      if (layer) {
        pattern.layers.push(layer);
      }

      layer = _get(p, 'layer2', null);

      if (layer) {
        pattern.layers.push(layer);
      }

      var projections = _get(p, 'projections', []);

      for (var i = 0; i < projections.length; ++i) {
        if (projections[i].name === hull.name) {
          p = projections[i];
          layer = _get(p, 'transformLayer1', null);

          if (layer) {
            pattern.patterns.push(layer);
          }

          layer = _get(p, 'transformLayer2', null);

          if (layer) {
            pattern.patterns.push(layer);
          }
        }
      }
    } else if (_get(hull, 'defaultPattern')) {
      p = _get(hull, 'defaultPattern', {});
      layer = _get(p, 'transformLayer1', null);

      if (layer) {
        pattern.patterns.push(layer);
      }

      layer = _get(p, 'transformLayer2', null);

      if (layer) {
        pattern.patterns.push(layer);
      }

      p = _get(race, 'defaultPattern', {});
      layer = _get(p, 'layer1', null);

      if (layer) {
        pattern.layers.push(layer);
      }

      layer = _get(p, 'layer2', null);

      if (layer) {
        pattern.layers.push(layer);
      }
    }

    return pattern;
  }

  function SetupCustomMasks(ship, pattern) {
    for (var i = 0; i < pattern.patterns.length; ++i) {
      if (pattern.patterns[i] && pattern.layers[i]) {
        var p = pattern.patterns[i];
        var l = pattern.layers[i];
        ship.AddCustomMask(_get(p, 'position', global["H" /* vec3 */].create()), _get(p, 'scaling', global["H" /* vec3 */].fromValues(1, 1, 1)), _get(p, 'rotation', global["C" /* quat */].create()), _get(p, 'isMirrored', false), _get(l, 'materialSource', 0), global["I" /* vec4 */].fromValues(_get(l, 'isTargetMtl1', true) ? 1 : 0, _get(l, 'isTargetMtl2', true) ? 1 : 0, _get(l, 'isTargetMtl3', true) ? 1 : 0, _get(l, 'isTargetMtl4', true) ? 1 : 0));
      }
    }
  }

  function SetupDecals(ship, hull, faction) {
    var hullDecals = _get(hull, 'hullDecals', []);

    for (var i = 0; i < hullDecals.length; ++i) {
      var hullDecal = hullDecals[i];
      var factionDecal = null;

      var factionIndex = 'group' + _get(hullDecal, 'groupIndex', -1);

      if (faction.decals && factionIndex in faction.decals) {
        factionDecal = faction.decals[factionIndex];
      }

      if (factionDecal && !factionDecal['isVisible']) {
        continue;
      }

      var effect = new core["Tw2Effect"]();

      if (factionDecal && factionDecal.shader && factionDecal.shader.length) {
        effect.effectFilePath = data['generic']['decalShaderLocation'] + '/' + GetShaderPrefix(false) + factionDecal.shader;
      } else if (hullDecal.shader && hullDecal.shader.length) {
        effect.effectFilePath = data['generic']['decalShaderLocation'] + '/' + GetShaderPrefix(false) + hullDecal.shader;
      } else {
        continue;
      }

      var hullParameters = _get(hullDecal, 'parameters', {});

      for (var j in hullParameters) {
        if (hullParameters.hasOwnProperty(j)) {
          effect.parameters[j] = new core["Tw2Vector4Parameter"](j, hullParameters[j]);
        }
      }

      var hullTextures = _get(hullDecal, 'textures', {});

      for (j in hullTextures) {
        if (hullTextures.hasOwnProperty(j)) {
          effect.parameters[j] = new core["Tw2TextureParameter"](j, hullTextures[j]);
        }
      }

      if (factionDecal) {
        var factionParameters = _get(factionDecal, 'parameters', {});

        for (j in factionParameters) {
          if (factionParameters.hasOwnProperty(j)) {
            effect.parameters[j] = new core["Tw2Vector4Parameter"](j, factionParameters[j]);
          }
        }

        var factionTextures = _get(factionDecal, 'textures', {});

        for (j in factionTextures) {
          if (factionTextures.hasOwnProperty(j) && !(j in effect.parameters)) {
            effect.parameters[j] = new core["Tw2TextureParameter"](j, factionTextures[j]);
          }
        }
      }

      var defaultTextures = _get(_get(data['generic']['decalShaders'], hullDecal.shader, {}), 'defaultTextures', {});

      for (var texName in defaultTextures) {
        if (defaultTextures.hasOwnProperty(texName)) {
          if (!(texName in effect.parameters)) {
            effect.parameters[texName] = new core["Tw2TextureParameter"](texName, defaultTextures[texName]);
          }
        }
      }

      effect.Initialize();
      var decal = new EveSpaceObjectDecal_EveSpaceObjectDecal();
      global["H" /* vec3 */].copy(decal.position, _get(hullDecal, 'position', [0, 0, 0]));
      global["C" /* quat */].copy(decal.rotation, _get(hullDecal, 'rotation', [0, 0, 0, 1]));
      global["H" /* vec3 */].copy(decal.scaling, _get(hullDecal, 'scaling', [1, 1, 1]));
      decal.parentBoneIndex = _get(hullDecal, 'boneIndex', -1);
      decal.indexBuffer = new Uint16Array(hullDecal.indexBuffer);
      decal.decalEffect = effect;
      decal.name = _get(hullDecals[i], 'name', '');

      if ('groupIndex' in hullDecals[i]) {
        decal.groupIndex = hullDecals[i].groupIndex;
      }

      decal.Initialize();
      ship.decals.push(decal);
    }
  }

  function SetupInstancedMeshes(ship, hull, faction, race, commands, pattern) {
    var instancedMeshes = _get(hull, 'instancedMeshes', []);

    for (var i = 0; i < instancedMeshes.length; ++i) {
      var him = instancedMeshes[i];
      var mesh = new core["Tw2InstancedMesh"]();
      mesh.instanceGeometryResPath = him.instanceGeometryResPath;
      mesh.geometryResPath = him.geometryResPath;
      mesh.Initialize();
      FillMeshAreas(_get(mesh, 'opaqueAreas', []), 'opaqueAreas', hull, faction, race, pattern, commands, him.shader);
      var child = new EveChildMesh_EveChildMesh();
      child.mesh = mesh;
      ship.effectChildren.push(child);
    }
  }

  function SetupSpriteSets(ship, hull, faction) {
    var hullSets = _get(hull, 'spriteSets', []);

    var factionSets = _get(faction, 'spriteSets', {});

    for (var i = 0; i < hullSets.length; ++i) {
      var spriteSet = new EveSpriteSet_EveSpriteSet(true, !!(hull['isSkinned'] && hullSets[i]['skinned']));
      spriteSet.name = _get(hullSets[i], 'name', '');
      spriteSet.effect = spriteEffect;

      var hullData = _get(hullSets[i], 'items', []);

      for (var j = 0; j < hullData.length; ++j) {
        if (!('group' + _get(hullData[j], 'groupIndex', -1) in factionSets)) continue;
        var item = new EveSpriteSet_EveSpriteSetItem();
        item.blinkPhase = _get(hullData[j], 'blinkPhase', 0);
        item.blinkRate = _get(hullData[j], 'blinkRate', 0.1);
        item.boneIndex = _get(hullData[j], 'boneIndex', 0);
        item.falloff = _get(hullData[j], 'falloff', 0);
        item.maxScale = _get(hullData[j], 'maxScale', 10);
        item.minScale = _get(hullData[j], 'minScale', 1);
        item.name = _get(hullData[j], 'name', '');
        item.groupIndex = _get(hullData[j], 'groupIndex', -1);
        global["H" /* vec3 */].copy(item.position, _get(hullData[j], 'position', [0, 0, 0]));
        var factionSet = factionSets['group' + item.groupIndex];

        if (factionSet) {
          item.groupName = factionSet.name;
          if ('color' in factionSet) global["I" /* vec4 */].copy(item.color, factionSet.color);
        }

        spriteSet.sprites.push(item);
      }

      spriteSet.Initialize();
      ship.spriteSets.push(spriteSet);
    }
  }

  function SetupSpotlightSets(ship, hull, faction) {
    var hullSets = _get(hull, 'spotlightSets', []);

    var factionSets = _get(faction, 'spotlightSets', {});

    for (var i = 0; i < hullSets.length; ++i) {
      var spotlightSet = new EveSpotlightSet_EveSpotlightSet();
      spotlightSet.name = _get(hullSets[i], 'name', '');
      spotlightSet.coneEffect = new core["Tw2Effect"]();
      spotlightSet.glowEffect = new core["Tw2Effect"]();

      if (hullSets[i]['skinned']) {
        spotlightSet.coneEffect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/skinned_spotlightcone.fx';
        spotlightSet.glowEffect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/skinned_spotlightglow.fx';
      } else {
        spotlightSet.coneEffect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/spotlightcone.fx';
        spotlightSet.glowEffect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/spotlightglow.fx';
      }

      spotlightSet.coneEffect.parameters['TextureMap'] = new core["Tw2TextureParameter"]('TextureMap', hullSets[i]['coneTextureResPath']);
      spotlightSet.glowEffect.parameters['TextureMap'] = new core["Tw2TextureParameter"]('TextureMap', hullSets[i]['glowTextureResPath']);
      spotlightSet.coneEffect.parameters['zOffset'] = new core["Tw2FloatParameter"]('zOffset', _get(hullSets[i], 'zOffset', 0));
      spotlightSet.coneEffect.Initialize();
      spotlightSet.glowEffect.Initialize();

      var hullData = _get(hullSets[i], 'items', []);

      for (var j = 0; j < hullData.length; ++j) {
        var item = new EveSpotlightSet_EveSpotlightSetItem();
        item.name = _get(hullData[j], 'name', '');
        item.groupIndex = _get(hullData[j], 'groupIndex', -1);
        item.boneIndex = _get(hullData[j], 'boneIndex', 0);
        item.boosterGainInfluence = _get(hullData[j], 'boosterGainInfluence', 0);
        item.coneIntensity = _get(hullData[j], 'coneIntensity', 0);
        item.spriteIntensity = _get(hullData[j], 'spriteIntensity', 0);
        item.flareIntensity = _get(hullData[j], 'flareIntensity', 0);
        var factionSet = factionSets['group' + item.groupIndex];

        if (factionSet) {
          global["I" /* vec4 */].copy(item.coneColor, _get(factionSet, 'coneColor', [0, 0, 0, 0]));
          global["I" /* vec4 */].copy(item.spriteColor, _get(factionSet, 'spriteColor', [0, 0, 0, 0]));
          global["I" /* vec4 */].copy(item.flareColor, _get(factionSet, 'flareColor', [0, 0, 0, 0]));
        }

        global["H" /* vec3 */].copy(item.spriteScale, _get(hullData[j], 'spriteScale', [1, 1, 1]));

        if ('transform' in hullData[j]) {
          global["z" /* mat4 */].copy(item.transform, hullData[j].transform);
        } else {
          global["z" /* mat4 */].identity(item.transform);
        }

        spotlightSet.spotlightItems.push(item);
      }

      spotlightSet.Initialize();
      ship.spotlightSets.push(spotlightSet);
    }
  }

  function _assignIfExists(dest, src, attr) {
    if (attr in src) {
      dest[attr] = src[attr];
    }
  }

  function SetupPlaneSets(ship, hull, faction) {
    var hullSets = _get(hull, 'planeSets', []);

    var factionSets = _get(faction, 'planeSets', {});

    for (var i = 0; i < hullSets.length; ++i) {
      var planeSet = new EvePlaneSet_EvePlaneSet();
      planeSet.name = _get(hullSets[i], 'name', '');
      planeSet.effect = new core["Tw2Effect"]();

      if (hullSets[i]['skinned']) {
        planeSet.effect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/skinned_planeglow.fx';
      } else {
        planeSet.effect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/planeglow.fx';
      }

      planeSet.effect.parameters['Layer1Map'] = new core["Tw2TextureParameter"]('Layer1Map', hullSets[i]['layer1MapResPath']);
      planeSet.effect.parameters['Layer2Map'] = new core["Tw2TextureParameter"]('Layer2Map', hullSets[i]['layer2MapResPath']);
      planeSet.effect.parameters['MaskMap'] = new core["Tw2TextureParameter"]('MaskMap', hullSets[i]['maskMapResPath']);
      planeSet.effect.parameters['PlaneData'] = new core["Tw2Vector4Parameter"]('PlaneData', _get(hullSets[i], 'planeData', [1, 0, 0, 0]));
      planeSet.effect.Initialize();

      var hullData = _get(hullSets[i], 'items', []);

      for (var j = 0; j < hullData.length; ++j) {
        var item = new EvePlaneSet_EvePlaneSetItem();

        _assignIfExists(item, hullData[j], 'groupIndex');

        _assignIfExists(item, hullData[j], 'name');

        item.boneIndex = _get(hullData[j], 'boneIndex', -1);
        item.maskAtlasID = _get(hullData[j], 'maskMapAtlasIndex', 0); // Do not copy reference!

        global["H" /* vec3 */].copy(item.position, _get(hullData[j], 'position', [0, 0, 0]));
        global["C" /* quat */].copy(item.rotation, _get(hullData[j], 'rotation', [0, 0, 0, 1]));
        global["H" /* vec3 */].copy(item.scaling, _get(hullData[j], 'scaling', [1, 1, 1]));
        global["I" /* vec4 */].copy(item.color, _get(hullData[j], 'color', [0, 0, 0, 0]));
        global["I" /* vec4 */].copy(item.layer1Transform, _get(hullData[j], 'layer1Transform', [0, 0, 0, 0]));
        global["I" /* vec4 */].copy(item.layer1Scroll, _get(hullData[j], 'layer1Scroll', [0, 0, 0, 0]));
        global["I" /* vec4 */].copy(item.layer2Transform, _get(hullData[j], 'layer2Transform', [0, 0, 0, 0]));
        global["I" /* vec4 */].copy(item.layer2Scroll, _get(hullData[j], 'layer2Scroll', [0, 0, 0, 0]));

        var factionSet = factionSets['group' + _get(hullData[j], 'groupIndex', -1)];

        if (factionSet) global["I" /* vec4 */].copy(item.color, _get(factionSet, 'color', [0, 0, 0, 0]));
        planeSet.planes.push(item);
      }

      planeSet.Initialize();
      ship.planeSets.push(planeSet);
    }
  }

  function SetupBoosters(ship, hull, race) {
    if (!('booster' in hull)) {
      return;
    }

    var booster = new EveBoosterSet_EveBoosterSet();
    var hullBooster = hull['booster'];

    var raceBooster = _get(race, 'booster', {});

    _assignIfExists(booster, raceBooster, 'glowScale');

    _assignIfExists(booster, raceBooster, 'symHaloScale');

    _assignIfExists(booster, raceBooster, 'haloScaleX');

    _assignIfExists(booster, raceBooster, 'haloScaleY');

    _assignIfExists(booster, raceBooster, 'haloColor');

    global["I" /* vec4 */].copy(booster.glowColor, _get(raceBooster, 'glowColor', [0, 0, 0, 0]));
    global["I" /* vec4 */].copy(booster.warpGlowColor, _get(raceBooster, 'warpGlowColor', [0, 0, 0, 0]));
    global["I" /* vec4 */].copy(booster.warpHaloColor, _get(raceBooster, 'warpHalpColor', [0, 0, 0, 0]));
    global["I" /* vec4 */].copy(booster.trailColor, _get(raceBooster, 'trailColor', [0, 0, 0, 0]));
    global["I" /* vec4 */].copy(booster.trailSize, _get(raceBooster, 'trailSize', [0, 0, 0, 0]));
    booster.effect = new core["Tw2Effect"]();
    booster.effect.effectFilePath = 'res:/Graphics/Effect/Managed/Space/Booster/BoosterVolumetric.fx';
    booster.effect.parameters['NoiseFunction0'] = new core["Tw2FloatParameter"]('NoiseFunction0', _get(raceBooster.shape0, 'noiseFunction', 0));
    booster.effect.parameters['NoiseSpeed0'] = new core["Tw2FloatParameter"]('NoiseSpeed0', _get(raceBooster.shape0, 'noiseSpeed', 0));
    booster.effect.parameters['NoiseAmplitudeStart0'] = new core["Tw2Vector4Parameter"]('NoiseAmplitudeStart0', _get(raceBooster.shape0, 'noiseAmplitureStart', [0, 0, 0, 0]));
    booster.effect.parameters['NoiseAmplitudeEnd0'] = new core["Tw2Vector4Parameter"]('NoiseAmplitudeEnd0', _get(raceBooster.shape0, 'noiseAmplitureEnd', [0, 0, 0, 0]));
    booster.effect.parameters['NoiseFrequency0'] = new core["Tw2Vector4Parameter"]('NoiseFrequency0', _get(raceBooster.shape0, 'noiseFrequency', [0, 0, 0, 0]));
    booster.effect.parameters['Color0'] = new core["Tw2Vector4Parameter"]('Color0', _get(raceBooster.shape0, 'color', [0, 0, 0, 0]));
    booster.effect.parameters['NoiseFunction1'] = new core["Tw2FloatParameter"]('NoiseFunction1', _get(raceBooster.shape1, 'noiseFunction', 0));
    booster.effect.parameters['NoiseSpeed1'] = new core["Tw2FloatParameter"]('NoiseSpeed1', _get(raceBooster.shape1, 'noiseSpeed', 0));
    booster.effect.parameters['NoiseAmplitudeStart1'] = new core["Tw2Vector4Parameter"]('NoiseAmplitudeStart1', _get(raceBooster.shape1, 'noiseAmplitureStart', [0, 0, 0, 0]));
    booster.effect.parameters['NoiseAmplitudeEnd1'] = new core["Tw2Vector4Parameter"]('NoiseAmplitudeEnd1', _get(raceBooster.shape1, 'noiseAmplitureEnd', [0, 0, 0, 0]));
    booster.effect.parameters['NoiseFrequency1'] = new core["Tw2Vector4Parameter"]('NoiseFrequency1', _get(raceBooster.shape1, 'noiseFrequency', [0, 0, 0, 0]));
    booster.effect.parameters['Color1'] = new core["Tw2Vector4Parameter"]('Color1', _get(raceBooster.shape1, 'color', [0, 0, 0, 0]));
    booster.effect.parameters['WarpNoiseFunction0'] = new core["Tw2FloatParameter"]('WarpNoiseFunction0', _get(raceBooster.warpShape0, 'noiseFunction', 0));
    booster.effect.parameters['WarpNoiseSpeed0'] = new core["Tw2FloatParameter"]('WarpNoiseSpeed0', _get(raceBooster.warpShape0, 'noiseSpeed', 0));
    booster.effect.parameters['WarpNoiseAmplitudeStart0'] = new core["Tw2Vector4Parameter"]('WarpNoiseAmplitudeStart0', _get(raceBooster.warpShape0, 'noiseAmplitureStart', [0, 0, 0, 0]));
    booster.effect.parameters['WarpNoiseAmplitudeEnd0'] = new core["Tw2Vector4Parameter"]('WarpNoiseAmplitudeEnd0', _get(raceBooster.warpShape0, 'noiseAmplitureEnd', [0, 0, 0, 0]));
    booster.effect.parameters['WarpNoiseFrequency0'] = new core["Tw2Vector4Parameter"]('WarpNoiseFrequency0', _get(raceBooster.warpShape0, 'noiseFrequency', [0, 0, 0, 0]));
    booster.effect.parameters['WarpColor0'] = new core["Tw2Vector4Parameter"]('WarpColor0', _get(raceBooster.warpShape0, 'color', [0, 0, 0, 0]));
    booster.effect.parameters['WarpNoiseFunction1'] = new core["Tw2FloatParameter"]('WarpNoiseFunction1', _get(raceBooster.warpShape1, 'noiseFunction', 0));
    booster.effect.parameters['WarpNoiseSpeed1'] = new core["Tw2FloatParameter"]('WarpNoiseSpeed1', _get(raceBooster.warpShape1, 'noiseSpeed', 0));
    booster.effect.parameters['WarpNoiseAmplitudeStart1'] = new core["Tw2Vector4Parameter"]('WarpNoiseAmplitudeStart1', _get(raceBooster.warpShape1, 'noiseAmplitureStart', [0, 0, 0, 0]));
    booster.effect.parameters['WarpNoiseAmplitudeEnd1'] = new core["Tw2Vector4Parameter"]('WarpNoiseAmplitudeEnd1', _get(raceBooster.warpShape1, 'noiseAmplitureEnd', [0, 0, 0, 0]));
    booster.effect.parameters['WarpNoiseFrequency1'] = new core["Tw2Vector4Parameter"]('WarpNoiseFrequency1', _get(raceBooster.warpShape1, 'noiseFrequency', [0, 0, 0, 0]));
    booster.effect.parameters['WarpColor1'] = new core["Tw2Vector4Parameter"]('WarpColor1', _get(raceBooster.warpShape1, 'color', [0, 0, 0, 0]));
    booster.effect.parameters['ShapeAtlasSize'] = new core["Tw2Vector4Parameter"]('ShapeAtlasSize', [_get(raceBooster, 'shapeAtlasHeight', 0), _get(raceBooster, 'shapeAtlasCount', 0), 0, 0]);
    booster.effect.parameters['BoosterScale'] = new core["Tw2Vector4Parameter"]('BoosterScale', _get(raceBooster, 'scale', [1, 1, 1, 1]));
    booster.effect.parameters['ShapeMap'] = new core["Tw2TextureParameter"]('ShapeMap', raceBooster.shapeAtlasResPath);
    booster.effect.parameters['GradientMap0'] = new core["Tw2TextureParameter"]('GradientMap0', raceBooster.gradient0ResPath);
    booster.effect.parameters['GradientMap1'] = new core["Tw2TextureParameter"]('GradientMap1', raceBooster.gradient1ResPath);
    booster.effect.parameters['NoiseMap'] = new core["Tw2TextureParameter"]('ShapeMap', 'res:/Texture/Global/noise32cube_volume.dds.0.png');
    booster.effect.Initialize();
    booster.glows = new EveSpriteSet_EveSpriteSet(true);
    booster.glows.effect = new core["Tw2Effect"]();
    booster.glows.effect.effectFilePath = 'res:/Graphics/Effect/Managed/Space/Booster/BoosterGlowAnimated.fx';
    booster.glows.effect.parameters['DiffuseMap'] = new core["Tw2TextureParameter"]('DiffuseMap', 'res:/Texture/Particle/whitesharp.dds.0.png');
    booster.glows.effect.parameters['NoiseMap'] = new core["Tw2TextureParameter"]('NoiseMap', 'res:/Texture/global/noise.dds.0.png');
    booster.glows.effect.Initialize();

    var items = _get(hullBooster, 'items', []);

    for (var i = 0; i < items.length; ++i) {
      var locator = new EveLocator_EveLocator();
      locator.name = 'locator_booster_' + (i + 1);

      if ('transform' in items[i]) {
        global["z" /* mat4 */].copy(locator.transform, items[i].transform);
      } else {
        global["z" /* mat4 */].identity(locator.transform);
      }

      locator.atlasIndex0 = _get(items[i], 'atlasIndex0', 0);
      locator.atlasIndex1 = _get(items[i], 'atlasIndex1', 0);
      ship.locators.push(locator);
    }

    booster.Initialize();
    ship.boosters = booster;
  }

  function SetupLocators(ship, hull) {
    var hullLocators = _get(hull, 'locatorTurrets', []);

    for (var i = 0; i < hullLocators.length; ++i) {
      var locator = new EveLocator_EveLocator();
      locator.name = hullLocators[i].name;

      if ('transform' in hullLocators[i]) {
        global["z" /* mat4 */].copy(locator.transform, hullLocators[i].transform);
      } else {
        global["z" /* mat4 */].identity(locator.transform);
      }

      ship.locators.push(locator);
    }
  }

  function BindParticleEmitters(obj, curveSet, curve) {
    if (Array.isArray(obj.particleEmitters)) {
      for (var i = 0; i < obj.particleEmitters.length; ++i) {
        if ('rate' in obj.particleEmitters[i]) {
          var binding = new core["Tw2ValueBinding"]();
          binding.sourceObject = curve;
          binding.sourceAttribute = 'currentValue';
          binding.destinationObject = obj.particleEmitters[i];
          binding.destinationAttribute = 'rate';
          binding.Initialize();
          curveSet.bindings.push(binding);
        }
      }

      for (i = 0; i < obj.children.length; ++i) {
        BindParticleEmitters(obj.children[i], curveSet, curve);
      }
    } else {
      global["D" /* resMan */].log({
        type: 'warning',
        name: 'Space object factory',
        message: "Unable to bind particle emitters: ".concat(obj.constructor.name)
      });
    }
  }

  function SetupChildren(ship, hull, curveSet, curves) {
    function onChildLoaded(child) {
      return function (obj) {
        if (obj.isEffectChild) {
          ship.effectChildren.push(obj);
        } else {
          ship.children.push(obj);
        }

        global["H" /* vec3 */].copy(obj.translation, _get(child, 'translation', [0, 0, 0]));
        global["C" /* quat */].copy(obj.rotation, _get(child, 'rotation', [0, 0, 0, 1]));
        global["H" /* vec3 */].copy(obj.scaling, _get(child, 'scaling', [1, 1, 1]));

        var id = _get(child, 'id', -1);

        if (id !== -1 && curves[id]) {
          BindParticleEmitters(obj, curveSet, curves[id]);
        }
      };
    }

    var children = _get(hull, 'children', []);

    for (var i = 0; i < children.length; ++i) {
      var resPath = children[i]['redFilePath'];

      if (resPath) {
        global["D" /* resMan */].GetObject(resPath, onChildLoaded(children[i]));
      } else {
        global["D" /* resMan */].log({
          type: 'warning',
          name: 'Space object factory',
          message: "No resource path found for \"".concat(hull.name, "\" child at index ").concat(i)
        });
      }
    }
  }

  function SetupAnimations(ship, hull) {
    var id_curves = [];
    var curveSet = null;

    var animations = _get(hull, 'animations', []);

    for (var i = 0; i < animations.length; ++i) {
      if (_get(animations[i], 'id', -1) !== -1 && _get(animations[i], 'startRate', -1) !== -1) {
        if (!curveSet) {
          curveSet = new core["Tw2CurveSet"]();
        }

        var curve = new curve_0["Tw2ScalarCurve2"]();
        curve.keys.push(new curve_0["Tw2ScalarKey2"]());
        curve.keys.push(new curve_0["Tw2ScalarKey2"]());
        curve.keys[0].value = _get(animations[i], 'startRate', -1);
        curve.keys[1].time = 1;
        curve.keys[1].value = _get(animations[i], 'endRate', -1);
        curve.Initialize();
        curveSet.curves.push(curve);
        ship.curveSets.push(curveSet);
        id_curves[_get(animations[i], 'id', -1)] = curve;
      }
    }

    if (curveSet) {
      curveSet.Initialize();
    }

    return [curveSet, id_curves];
  }

  var dataLoading = false;
  var pendingLoads = [];

  function Build(dna) {
    var parts = dna.split(':');
    var commands = {};

    for (var i = 3; i < parts.length; ++i) {
      var subparts = parts[i].split('?');
      commands[subparts[0]] = subparts[1].split(';');
    }

    var hull = data['hull'][parts[0]];
    var faction = data['faction'][parts[1]];
    var race = data['race'][parts[2]];
    var ship = new (_get(hull, 'buildClass', 0) === 2 ? EveSpaceObject_EveSpaceObject : EveShip)();
    var pattern = SetupPattern(hull, race, commands);
    SetupMesh(ship, hull, faction, race, commands, pattern); //SetupCustomMasks(ship, pattern);
    //SetupDecals(ship, hull, faction);
    //SetupSpriteSets(ship, hull, faction);
    //SetupSpotlightSets(ship, hull, faction);
    //SetupPlaneSets(ship, hull, faction);
    //SetupBoosters(ship, hull, race);
    //SetupLocators(ship, hull);
    //var curves = SetupAnimations(ship, hull);
    //SetupChildren(ship, hull, curves[0], curves[1]);
    //SetupInstancedMeshes(ship, hull, faction, race, commands, pattern);

    ship.Initialize();
    return ship;
  }

  this.LoadData = function (callback) {
    if (data === null) {
      if (callback) {
        pendingLoads.push(callback);
      }

      if (!dataLoading) {
        spriteEffect = new core["Tw2Effect"]();
        spriteEffect.effectFilePath = 'res:/graphics/effect/managed/space/spaceobject/fx/blinkinglightspool.fx';
        spriteEffect.parameters['MainIntensity'] = new core["Tw2FloatParameter"]('MainIntensity', 1);
        spriteEffect.parameters['GradientMap'] = new core["Tw2TextureParameter"]('GradientMap', 'res:/texture/particle/whitesharp_gradient.dds.0.png');
        spriteEffect.Initialize();
        global["D" /* resMan */].GetObject('res:/dx9/model/spaceobjectfactory/data.red', function (obj) {
          data = obj;

          for (var i = 0; i < pendingLoads.length; ++i) {
            pendingLoads[i]();
          }

          pendingLoads = [];
        });
        dataLoading = true;
      }
    } else {
      if (callback) {
        callback();
      }
    }
  };

  this.BuildFromDNA = function (dna, callback) {
    if (data === null) {
      this.LoadData(function () {
        var result = Build(dna);

        if (callback) {
          callback(result);
        }
      });
    } else {
      var result = Build(dna);

      if (callback) {
        callback(result);
      }
    }
  };

  function GetTurretMaterialParameter(name, parentFaction, areaData) {
    var materialIdx = -1;

    for (var i = 0; i < data['generic']['materialPrefixes'].length; ++i) {
      if (name.substr(0, data['generic']['materialPrefixes'][i].length) === data['generic']['materialPrefixes'][i]) {
        materialIdx = i;
        name = name.substr(data['generic']['materialPrefixes'][i].length);
      }
    }

    if (materialIdx !== -1) {
      var turretMaterialIndex = _get(parentFaction, 'materialUsageMtl' + (materialIdx + 1), materialIdx);

      if (turretMaterialIndex >= 0 && turretMaterialIndex < data['generic']['materialPrefixes'].length) {
        name = data['generic']['materialPrefixes'][turretMaterialIndex] + name;

        if (name in areaData.parameters) {
          return areaData.parameters[name];
        }
      }
    }
  }

  var zeroColor = [0, 0, 0, 0];

  function CombineTurretMaterial(name, parentValue, turretValue, overrideMethod) {
    switch (overrideMethod) {
      case 'overridable':
        return parentValue ? parentValue : turretValue ? turretValue : zeroColor;

      case 'half_overridable':
        if (name.indexOf('GlowColor') >= 0) {
          return turretValue ? turretValue : zeroColor;
        }

        return parentValue ? parentValue : turretValue ? turretValue : zeroColor;

      case 'not_overridable':
      case 'half_overridable_2':
        return turretValue ? turretValue : zeroColor;
    }

    return zeroColor;
  }

  function SetupTurretMaterial(turretSet, parentFactionName, turretFactionName) {
    var parentFaction = data['faction'][parentFactionName];
    var turretFaction = data['faction'][turretFactionName];
    var parentArea = null;

    if (parentFaction && parentFaction.areas && 'hull' in parentFaction.areas) {
      parentArea = parentFaction.areas.hull;
    }

    var turretArea = null;

    if (turretFaction && turretFaction.areas && 'hull' in turretFaction.areas) {
      turretArea = turretFaction.areas.hull;
    }

    if (!parentArea && !turretArea) {
      return;
    }

    if (turretSet.turretEffect) {
      var params = turretSet.turretEffect.parameters;

      for (var i in params) {
        if (params.hasOwnProperty(i)) {
          if (params[i].constructor.prototype !== core["Tw2Vector4Parameter"].prototype) {
            continue;
          }

          var parentValue = null;
          var turretValue = null;

          if (parentArea) {
            parentValue = GetTurretMaterialParameter(i, parentFaction, parentArea);
          }

          if (turretArea) {
            turretValue = GetTurretMaterialParameter(i, parentFaction, parentArea);
          }

          global["I" /* vec4 */].copy(params[i].value, CombineTurretMaterial(i, parentValue, turretValue, turretSet.turretEffect.name));
        }
      }

      turretSet.turretEffect.BindParameters();
    }
  }

  this.SetupTurretMaterial = function (turretSet, parentFactionName, turretFactionName, callback) {
    if (data === null) {
      this.LoadData(function () {
        SetupTurretMaterial(turretSet, parentFactionName, turretFactionName);

        if (callback) {
          callback();
        }
      });
    } else {
      SetupTurretMaterial(turretSet, parentFactionName, turretFactionName);

      if (callback) {
        callback();
      }
    }
  };

  function getDataKeys(name) {
    if (name !== 'all') {
      var names = {};

      for (var i in data[name]) {
        if (data[name].hasOwnProperty(i)) {
          names[i] = data[name][i].description || '';
        }
      }

      return names;
    } else {
      return data;
    }
  }

  this.GetHullNames = function (callback) {
    this.LoadData(function () {
      callback(getDataKeys('hull'));
    });
  };

  this.GetFactionNames = function (callback) {
    this.LoadData(function () {
      callback(getDataKeys('faction'));
    });
  };

  this.GetRaceNames = function (callback) {
    this.LoadData(function () {
      callback(getDataKeys('race'));
    });
  };

  this.GetSofData = function (callback) {
    this.LoadData(function () {
      callback(getDataKeys('all'));
    });
  };
}
// CONCATENATED MODULE: ./eve/index.js







/***/ })

})