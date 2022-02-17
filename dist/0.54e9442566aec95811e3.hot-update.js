webpackHotUpdateccpwgl_int(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ math["num"]; });
__webpack_require__.d(__webpack_exports__, "G", function() { return /* reexport */ math["vec2"]; });
__webpack_require__.d(__webpack_exports__, "H", function() { return /* reexport */ math["vec3"]; });
__webpack_require__.d(__webpack_exports__, "I", function() { return /* reexport */ math["vec4"]; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* reexport */ math["quat"]; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ math["mat3"]; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ math["mat4"]; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ math["noise"]; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ math["curve"]; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ device; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* reexport */ Tw2ResMan_resMan; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* reexport */ Tw2Store_store; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ logger; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ GL_TEXTURE_2D; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ GL_LINEAR; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ GL_REPEAT; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ FilterMode; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ MipFilterMode; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ DDS_MAGIC; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ DDSD_MIPMAPCOUNT; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ DDSCAPS2_CUBEMAP; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ DDS_HEADER_LENGTH_INT; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ DDS_HEADER_OFFSET_MAGIC; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ DDS_HEADER_OFFSET_SIZE; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ DDS_HEADER_OFFSET_FLAGS; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ DDS_HEADER_OFFSET_HEIGHT; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ DDS_HEADER_OFFSET_WIDTH; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ DDS_HEADER_OFFSET_MIPMAP_COUNT; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ DDS_HEADER_OFFSET_PF_FOURCC; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ DDS_HEADER_OFFSET_CAPS2; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ FOURCC_DXT1; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ FOURCC_DXT5; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ FOURCC_DXT3; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* reexport */ util; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ Tw2Constant_namespaceObject; });

// UNUSED EXPORTS: GL_COLOR_BUFFER_BIT, GL_DEPTH_BUFFER_BIT, GL_STENCIL_BUFFER_BIT, GL_TEXTURE_CUBE_MAP, GL_TEXTURE_3D, GL_TEXTURE_MAG_FILTER, GL_TEXTURE_MIN_FILTER, GL_TEXTURE_WRAP_S, GL_TEXTURE_WRAP_T, GL_BYTE, GL_UNSIGNED_BYTE, GL_SHORT, GL_UNSIGNED_SHORT, GL_INT, GL_UNSIGNED_INT, GL_FLOAT, GL_HALF_FLOAT_OES, GL_HALF_FLOAT, GL_DEPTH_COMPONENT16, GL_DEPTH_COMPONENT24, GL_DEPTH_COMPONENT32F, GL_FLOAT_VEC2, GL_FLOAT_VEC3, GL_FLOAT_VEC4, GL_INT_VEC2, GL_INT_VEC3, GL_INT_VEC4, GL_BOOL, GL_BOOL_VEC2, GL_BOOL_VEC3, GL_BOOL_VEC4, GL_FLOAT_MAT2, GL_FLOAT_MAT3, GL_FLOAT_MAT4, GL_TYPE_LENGTH, GL_SAMPLER_2D, GL_SAMPLER_3D, GL_SAMPLER_CUBE, GL_DEPTH_COMPONENT, GL_ALPHA, GL_RGB, GL_RGBA, GL_LUMINANCE, GL_LUMINANCE_ALPHA, GL_DEPTH_STENCIL, GL_UNSIGNED_INT_24_8_WEBGL, GL_R8, GL_R16F, GL_R32F, GL_R8UI, GL_RG8, GL_RG16F, GL_RG32F, GL_RGB8, GL_SRGB8, GL_RGB565, GL_R11F_G11F_B10F, GL_RGB9_E5, GL_RGB16F, GL_RGB32F, GL_RGB8UI, GL_RGBA8, GL_RGB5_A1, GL_RGBA16F, GL_RGBA32F, GL_RGBA8UI, GL_RGBA16I, GL_RGBA16UI, GL_RGBA32I, GL_RGBA32UI, GL_NEAREST, GL_NEAREST_MIPMAP_NEAREST, GL_LINEAR_MIPMAP_NEAREST, GL_NEAREST_MIPMAP_LINEAR, GL_LINEAR_MIPMAP_LINEAR, GL_CLAMP_TO_EDGE, GL_MIRRORED_REPEAT, GL_ZERO, GL_ONE, GL_SRC_COLOR, GL_ONE_MINUS_SRC_COLOR, GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA, GL_DST_ALPHA, GL_ONE_MINUS_DST_ALPHA, GL_DST_COLOR, GL_ONE_MINUS_DST_COLOR, GL_SRC_ALPHA_SATURATE, GL_CONSTANT_COLOR, GL_ONE_MINUS_CONSTANT_COLOR, GL_CONSTANT_ALPHA, GL_ONE_MINUS_CONSTANT_ALPHA, GL_VERTEX_SHADER, GL_FRAGMENT_SHADER, GL_FRONT, GL_BACK, GL_FRONT_AND_BACK, GL_NEVER, GL_LESS, GL_EQUAL, GL_LEQUAL, GL_GREATER, GL_NOTEQUAL, GL_GEQUAL, GL_ALWAYS, GL_KEEP, GL_REPLACE, GL_INCR, GL_DECR, GL_INCR_WRAP, GL_DECR_WRAP, GL_INVERT, GL_STREAM_DRAW, GL_STATIC_DRAW, GL_DYNAMIC_DRAW, GL_ARRAY_BUFFER, GL_ELEMENT_ARRAY_BUFFER, GL_POINTS, GL_LINES, GL_LINE_LOOP, GL_LINE_STRIP, GL_TRIANGLES, GL_TRIANGLE_STRIP, GL_TRIANGLE_FAN, GL_CW, GL_CCW, GL_CULL_FACE, GL_DEPTH_TEST, GL_BLEND, RM_ANY, RM_OPAQUE, RM_DECAL, RM_TRANSPARENT, RM_ADDITIVE, RM_DEPTH, RM_FULLSCREEN, RM_PICKABLE, RM_DISTORTION, RS_ZENABLE, RS_FILLMODE, RS_SHADEMODE, RS_ZWRITEENABLE, RS_ALPHATESTENABLE, RS_LASTPIXEL, RS_SRCBLEND, RS_DESTBLEND, RS_CULLMODE, RS_ZFUNC, RS_ALPHAREF, RS_ALPHAFUNC, RS_DITHERENABLE, RS_ALPHABLENDENABLE, RS_FOGENABLE, RS_SPECULARENABLE, RS_FOGCOLOR, RS_FOGTABLEMODE, RS_FOGSTART, RS_FOGEND, RS_FOGDENSITY, RS_RANGEFOGENABLE, RS_STENCILENABLE, RS_STENCILFAIL, RS_STENCILZFAIL, RS_STENCILPASS, RS_STENCILFUNC, RS_STENCILREF, RS_STENCILMASK, RS_STENCILWRITEMASK, RS_TEXTUREFACTOR, RS_WRAP0, RS_WRAP1, RS_WRAP2, RS_WRAP3, RS_WRAP4, RS_WRAP5, RS_WRAP6, RS_WRAP7, RS_CLIPPING, RS_LIGHTING, RS_AMBIENT, RS_FOGVERTEXMODE, RS_COLORVERTEX, RS_LOCALVIEWER, RS_NORMALIZENORMALS, RS_DIFFUSEMATERIALSOURCE, RS_SPECULARMATERIALSOURCE, RS_AMBIENTMATERIALSOURCE, RS_EMISSIVEMATERIALSOURCE, RS_VERTEXBLEND, RS_CLIPPLANEENABLE, RS_POINTSIZE, RS_POINTSIZE_MIN, RS_POINTSPRITEENABLE, RS_POINTSCALEENABLE, RS_POINTSCALE_A, RS_POINTSCALE_B, RS_POINTSCALE_C, RS_MULTISAMPLEANTIALIAS, RS_MULTISAMPLEMASK, RS_PATCHEDGESTYLE, RS_DEBUGMONITORTOKEN, RS_POINTSIZE_MAX, RS_INDEXEDVERTEXBLENDENABLE, RS_COLORWRITEENABLE, RS_TWEENFACTOR, RS_BLENDOP, RS_POSITIONDEGREE, RS_NORMALDEGREE, RS_SCISSORTESTENABLE, RS_SLOPESCALEDEPTHBIAS, RS_ANTIALIASEDLINEENABLE, RS_TWOSIDEDSTENCILMODE, RS_CCW_STENCILFAIL, RS_CCW_STENCILZFAIL, RS_CCW_STENCILPASS, RS_CCW_STENCILFUNC, RS_COLORWRITEENABLE1, RS_COLORWRITEENABLE2, RS_COLORWRITEENABLE3, RS_BLENDFACTOR, RS_SRGBWRITEENABLE, RS_DEPTHBIAS, RS_SEPARATEALPHABLENDENABLE, RS_SRCBLENDALPHA, RS_DESTBLENDALPHA, RS_BLENDOPALPHA, CULL_NONE, CULL_CW, CULL_CCW, CMP_NEVER, CMP_LESS, CMP_EQUAL, CMP_LEQUAL, CMP_GREATER, CMP_NOTEQUAL, CMP_GREATEREQUAL, CMP_ALWAYS, BLEND_ZERO, BLEND_ONE, BLEND_SRCCOLOR, BLEND_INVSRCCOLOR, BLEND_SRCALPHA, BLEND_INVSRCALPHA, BLEND_DESTALPHA, BLEND_INVDESTALPHA, BLEND_DESTCOLOR, BLEND_INVDESTCOLOR, BLEND_SRCALPHASAT, BLEND_BOTHSRCALPHA, BLEND_BOTHINVSRCALPHA, BLEND_BLENDFACTOR, BLEND_INVBLENDFACTOR, BLENDOP_ADD, BLENDOP_SUBTRACT, BLENDOP_REVSUBTRACT, BLENDOP_MIN, BLENDOP_MAX, TF_ALPHA, TF_LUMINANCE, TF_LUMINANCE_ALPHA, TF_RGB, TF_RGBA, TF_RED, TF_R, TF_RG, TF_RED_INTEGER, TF_R_INTEGER, TF_RG_INTEGER, TF_RGB_INTEGER, TF_RGBA_INTEGER, TT_UNSIGNED_BYTE, TT_UNSIGNED_INT, TT_FLOAT, TT_HALF_FLOAT, TT_BYTE, TT_SHORT, TT_UNSIGNED_SHORT, TT_INT, TT_UNSIGNED_INTEGER, TT_UNSIGNED_SHORT_4_4_4_4, TT_UNSIGNED_SHORT_5_5_5_1, TT_UNSIGNED_SHORT_5_6_5, TT_UNSIGNED_INT_2_10_10_10_REV, TT_UNSIGNED_INT_24_8, TT_UNSIGNED_INT_10F_11F_11F_REV, TT_UNSIGNED_INT_5_9_9_9_REV, TT_FLOAT_32_UNSIGNED_INT_24_8_REV, WrapModes, BlendTable, DDSD_CAPS, DDSD_HEIGHT, DDSD_WIDTH, DDSD_PITCH, DDSD_PIXELFORMAT, DDSD_LINEARSIZE, DDSD_DEPTH, DDSCAPS_COMPLEX, DDSCAPS_MIPMAP, DDSCAPS_TEXTURE, DDSCAPS2_CUBEMAP_POSITIVEX, DDSCAPS2_CUBEMAP_NEGATIVEX, DDSCAPS2_CUBEMAP_POSITIVEY, DDSCAPS2_CUBEMAP_NEGATIVEY, DDSCAPS2_CUBEMAP_POSITIVEZ, DDSCAPS2_CUBEMAP_NEGATIVEZ, DDSCAPS2_VOLUME, DDPF_ALPHAPIXELS, DDPF_ALPHA, DDPF_FOURCC, DDPF_RGB, DDPF_YUV, DDPF_LUMINANCE, DDS_HEADER_OFFSET_PF_FLAGS, DDS_HEADER_OFFSET_RGB_BPP, DDS_HEADER_OFFSET_R_MASK, DDS_HEADER_OFFSET_G_MASK, DDS_HEADER_OFFSET_B_MASK, DDS_HEADER_OFFSET_A_MASK, DDS_HEADER_OFFSET_CAPS1, DDS_HEADER_OFFSET_CAPS3, DDS_HEADER_OFFSET_CAPS4, DDS_HEADER_OFFSET_DXGI_FORMAT, FOURCC_DXT10, FOURCC_D3DFMT_R16G16B16A16F, FOURCC_D3DFMT_R32G32B32A32F, DXGI_FORMAT_R16G16B16A16_FLOAT, DXGI_FORMAT_B8G8R8X8_UNORM, VendorRequestAnimationFrame, VendorCancelAnimationFrame, VendorRequestFullScreen, VendorExitFullScreen, VendorGetFullScreenElement, VendorWebglPrefixes, WebglContextNames, Webgl2ContextNames, WebglVersion

// NAMESPACE OBJECT: ./global/engine/Tw2Constant.js
var Tw2Constant_namespaceObject = {};
__webpack_require__.r(Tw2Constant_namespaceObject);
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_COLOR_BUFFER_BIT", function() { return GL_COLOR_BUFFER_BIT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_BUFFER_BIT", function() { return GL_DEPTH_BUFFER_BIT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_STENCIL_BUFFER_BIT", function() { return GL_STENCIL_BUFFER_BIT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_2D", function() { return GL_TEXTURE_2D; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_CUBE_MAP", function() { return GL_TEXTURE_CUBE_MAP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_3D", function() { return GL_TEXTURE_3D; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_MAG_FILTER", function() { return GL_TEXTURE_MAG_FILTER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_MIN_FILTER", function() { return GL_TEXTURE_MIN_FILTER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_WRAP_S", function() { return GL_TEXTURE_WRAP_S; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TEXTURE_WRAP_T", function() { return GL_TEXTURE_WRAP_T; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BYTE", function() { return GL_BYTE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_UNSIGNED_BYTE", function() { return GL_UNSIGNED_BYTE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SHORT", function() { return GL_SHORT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_UNSIGNED_SHORT", function() { return GL_UNSIGNED_SHORT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INT", function() { return GL_INT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_UNSIGNED_INT", function() { return GL_UNSIGNED_INT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT", function() { return GL_FLOAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_HALF_FLOAT_OES", function() { return GL_HALF_FLOAT_OES; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_HALF_FLOAT", function() { return GL_HALF_FLOAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_COMPONENT16", function() { return GL_DEPTH_COMPONENT16; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_COMPONENT24", function() { return GL_DEPTH_COMPONENT24; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_COMPONENT32F", function() { return GL_DEPTH_COMPONENT32F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT_VEC2", function() { return GL_FLOAT_VEC2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT_VEC3", function() { return GL_FLOAT_VEC3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT_VEC4", function() { return GL_FLOAT_VEC4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INT_VEC2", function() { return GL_INT_VEC2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INT_VEC3", function() { return GL_INT_VEC3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INT_VEC4", function() { return GL_INT_VEC4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BOOL", function() { return GL_BOOL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BOOL_VEC2", function() { return GL_BOOL_VEC2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BOOL_VEC3", function() { return GL_BOOL_VEC3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BOOL_VEC4", function() { return GL_BOOL_VEC4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT_MAT2", function() { return GL_FLOAT_MAT2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT_MAT3", function() { return GL_FLOAT_MAT3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FLOAT_MAT4", function() { return GL_FLOAT_MAT4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TYPE_LENGTH", function() { return GL_TYPE_LENGTH; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SAMPLER_2D", function() { return GL_SAMPLER_2D; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SAMPLER_3D", function() { return GL_SAMPLER_3D; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SAMPLER_CUBE", function() { return GL_SAMPLER_CUBE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_COMPONENT", function() { return GL_DEPTH_COMPONENT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ALPHA", function() { return GL_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB", function() { return GL_RGB; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA", function() { return GL_RGBA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LUMINANCE", function() { return GL_LUMINANCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LUMINANCE_ALPHA", function() { return GL_LUMINANCE_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_STENCIL", function() { return GL_DEPTH_STENCIL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_UNSIGNED_INT_24_8_WEBGL", function() { return GL_UNSIGNED_INT_24_8_WEBGL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_R8", function() { return GL_R8; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_R16F", function() { return GL_R16F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_R32F", function() { return GL_R32F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_R8UI", function() { return GL_R8UI; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RG8", function() { return GL_RG8; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RG16F", function() { return GL_RG16F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RG32F", function() { return GL_RG32F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB8", function() { return GL_RGB8; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SRGB8", function() { return GL_SRGB8; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB565", function() { return GL_RGB565; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_R11F_G11F_B10F", function() { return GL_R11F_G11F_B10F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB9_E5", function() { return GL_RGB9_E5; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB16F", function() { return GL_RGB16F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB32F", function() { return GL_RGB32F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB8UI", function() { return GL_RGB8UI; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA8", function() { return GL_RGBA8; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGB5_A1", function() { return GL_RGB5_A1; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA16F", function() { return GL_RGBA16F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA32F", function() { return GL_RGBA32F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA8UI", function() { return GL_RGBA8UI; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA16I", function() { return GL_RGBA16I; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA16UI", function() { return GL_RGBA16UI; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA32I", function() { return GL_RGBA32I; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_RGBA32UI", function() { return GL_RGBA32UI; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_NEAREST", function() { return GL_NEAREST; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LINEAR", function() { return GL_LINEAR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_NEAREST_MIPMAP_NEAREST", function() { return GL_NEAREST_MIPMAP_NEAREST; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LINEAR_MIPMAP_NEAREST", function() { return GL_LINEAR_MIPMAP_NEAREST; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_NEAREST_MIPMAP_LINEAR", function() { return GL_NEAREST_MIPMAP_LINEAR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LINEAR_MIPMAP_LINEAR", function() { return GL_LINEAR_MIPMAP_LINEAR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_REPEAT", function() { return GL_REPEAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_CLAMP_TO_EDGE", function() { return GL_CLAMP_TO_EDGE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_MIRRORED_REPEAT", function() { return GL_MIRRORED_REPEAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ZERO", function() { return GL_ZERO; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE", function() { return GL_ONE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SRC_COLOR", function() { return GL_SRC_COLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE_MINUS_SRC_COLOR", function() { return GL_ONE_MINUS_SRC_COLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SRC_ALPHA", function() { return GL_SRC_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE_MINUS_SRC_ALPHA", function() { return GL_ONE_MINUS_SRC_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DST_ALPHA", function() { return GL_DST_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE_MINUS_DST_ALPHA", function() { return GL_ONE_MINUS_DST_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DST_COLOR", function() { return GL_DST_COLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE_MINUS_DST_COLOR", function() { return GL_ONE_MINUS_DST_COLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_SRC_ALPHA_SATURATE", function() { return GL_SRC_ALPHA_SATURATE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_CONSTANT_COLOR", function() { return GL_CONSTANT_COLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE_MINUS_CONSTANT_COLOR", function() { return GL_ONE_MINUS_CONSTANT_COLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_CONSTANT_ALPHA", function() { return GL_CONSTANT_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ONE_MINUS_CONSTANT_ALPHA", function() { return GL_ONE_MINUS_CONSTANT_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_VERTEX_SHADER", function() { return GL_VERTEX_SHADER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FRAGMENT_SHADER", function() { return GL_FRAGMENT_SHADER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FRONT", function() { return GL_FRONT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BACK", function() { return GL_BACK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_FRONT_AND_BACK", function() { return GL_FRONT_AND_BACK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_NEVER", function() { return GL_NEVER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LESS", function() { return GL_LESS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_EQUAL", function() { return GL_EQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LEQUAL", function() { return GL_LEQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_GREATER", function() { return GL_GREATER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_NOTEQUAL", function() { return GL_NOTEQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_GEQUAL", function() { return GL_GEQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ALWAYS", function() { return GL_ALWAYS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_KEEP", function() { return GL_KEEP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_REPLACE", function() { return GL_REPLACE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INCR", function() { return GL_INCR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DECR", function() { return GL_DECR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INCR_WRAP", function() { return GL_INCR_WRAP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DECR_WRAP", function() { return GL_DECR_WRAP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_INVERT", function() { return GL_INVERT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_STREAM_DRAW", function() { return GL_STREAM_DRAW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_STATIC_DRAW", function() { return GL_STATIC_DRAW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DYNAMIC_DRAW", function() { return GL_DYNAMIC_DRAW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ARRAY_BUFFER", function() { return GL_ARRAY_BUFFER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_ELEMENT_ARRAY_BUFFER", function() { return GL_ELEMENT_ARRAY_BUFFER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_POINTS", function() { return GL_POINTS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LINES", function() { return GL_LINES; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LINE_LOOP", function() { return GL_LINE_LOOP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_LINE_STRIP", function() { return GL_LINE_STRIP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TRIANGLES", function() { return GL_TRIANGLES; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TRIANGLE_STRIP", function() { return GL_TRIANGLE_STRIP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_TRIANGLE_FAN", function() { return GL_TRIANGLE_FAN; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_CW", function() { return GL_CW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_CCW", function() { return GL_CCW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_CULL_FACE", function() { return GL_CULL_FACE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_DEPTH_TEST", function() { return GL_DEPTH_TEST; });
__webpack_require__.d(Tw2Constant_namespaceObject, "GL_BLEND", function() { return GL_BLEND; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_ANY", function() { return RM_ANY; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_OPAQUE", function() { return RM_OPAQUE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_DECAL", function() { return RM_DECAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_TRANSPARENT", function() { return RM_TRANSPARENT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_ADDITIVE", function() { return RM_ADDITIVE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_DEPTH", function() { return RM_DEPTH; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_FULLSCREEN", function() { return RM_FULLSCREEN; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_PICKABLE", function() { return RM_PICKABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RM_DISTORTION", function() { return RM_DISTORTION; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ZENABLE", function() { return RS_ZENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FILLMODE", function() { return RS_FILLMODE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SHADEMODE", function() { return RS_SHADEMODE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ZWRITEENABLE", function() { return RS_ZWRITEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ALPHATESTENABLE", function() { return RS_ALPHATESTENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_LASTPIXEL", function() { return RS_LASTPIXEL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SRCBLEND", function() { return RS_SRCBLEND; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_DESTBLEND", function() { return RS_DESTBLEND; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CULLMODE", function() { return RS_CULLMODE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ZFUNC", function() { return RS_ZFUNC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ALPHAREF", function() { return RS_ALPHAREF; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ALPHAFUNC", function() { return RS_ALPHAFUNC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_DITHERENABLE", function() { return RS_DITHERENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ALPHABLENDENABLE", function() { return RS_ALPHABLENDENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGENABLE", function() { return RS_FOGENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SPECULARENABLE", function() { return RS_SPECULARENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGCOLOR", function() { return RS_FOGCOLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGTABLEMODE", function() { return RS_FOGTABLEMODE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGSTART", function() { return RS_FOGSTART; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGEND", function() { return RS_FOGEND; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGDENSITY", function() { return RS_FOGDENSITY; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_RANGEFOGENABLE", function() { return RS_RANGEFOGENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILENABLE", function() { return RS_STENCILENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILFAIL", function() { return RS_STENCILFAIL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILZFAIL", function() { return RS_STENCILZFAIL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILPASS", function() { return RS_STENCILPASS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILFUNC", function() { return RS_STENCILFUNC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILREF", function() { return RS_STENCILREF; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILMASK", function() { return RS_STENCILMASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_STENCILWRITEMASK", function() { return RS_STENCILWRITEMASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_TEXTUREFACTOR", function() { return RS_TEXTUREFACTOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP0", function() { return RS_WRAP0; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP1", function() { return RS_WRAP1; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP2", function() { return RS_WRAP2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP3", function() { return RS_WRAP3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP4", function() { return RS_WRAP4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP5", function() { return RS_WRAP5; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP6", function() { return RS_WRAP6; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_WRAP7", function() { return RS_WRAP7; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CLIPPING", function() { return RS_CLIPPING; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_LIGHTING", function() { return RS_LIGHTING; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_AMBIENT", function() { return RS_AMBIENT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_FOGVERTEXMODE", function() { return RS_FOGVERTEXMODE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_COLORVERTEX", function() { return RS_COLORVERTEX; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_LOCALVIEWER", function() { return RS_LOCALVIEWER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_NORMALIZENORMALS", function() { return RS_NORMALIZENORMALS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_DIFFUSEMATERIALSOURCE", function() { return RS_DIFFUSEMATERIALSOURCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SPECULARMATERIALSOURCE", function() { return RS_SPECULARMATERIALSOURCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_AMBIENTMATERIALSOURCE", function() { return RS_AMBIENTMATERIALSOURCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_EMISSIVEMATERIALSOURCE", function() { return RS_EMISSIVEMATERIALSOURCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_VERTEXBLEND", function() { return RS_VERTEXBLEND; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CLIPPLANEENABLE", function() { return RS_CLIPPLANEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSIZE", function() { return RS_POINTSIZE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSIZE_MIN", function() { return RS_POINTSIZE_MIN; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSPRITEENABLE", function() { return RS_POINTSPRITEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSCALEENABLE", function() { return RS_POINTSCALEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSCALE_A", function() { return RS_POINTSCALE_A; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSCALE_B", function() { return RS_POINTSCALE_B; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSCALE_C", function() { return RS_POINTSCALE_C; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_MULTISAMPLEANTIALIAS", function() { return RS_MULTISAMPLEANTIALIAS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_MULTISAMPLEMASK", function() { return RS_MULTISAMPLEMASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_PATCHEDGESTYLE", function() { return RS_PATCHEDGESTYLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_DEBUGMONITORTOKEN", function() { return RS_DEBUGMONITORTOKEN; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POINTSIZE_MAX", function() { return RS_POINTSIZE_MAX; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_INDEXEDVERTEXBLENDENABLE", function() { return RS_INDEXEDVERTEXBLENDENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_COLORWRITEENABLE", function() { return RS_COLORWRITEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_TWEENFACTOR", function() { return RS_TWEENFACTOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_BLENDOP", function() { return RS_BLENDOP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_POSITIONDEGREE", function() { return RS_POSITIONDEGREE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_NORMALDEGREE", function() { return RS_NORMALDEGREE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SCISSORTESTENABLE", function() { return RS_SCISSORTESTENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SLOPESCALEDEPTHBIAS", function() { return RS_SLOPESCALEDEPTHBIAS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_ANTIALIASEDLINEENABLE", function() { return RS_ANTIALIASEDLINEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_TWOSIDEDSTENCILMODE", function() { return RS_TWOSIDEDSTENCILMODE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CCW_STENCILFAIL", function() { return RS_CCW_STENCILFAIL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CCW_STENCILZFAIL", function() { return RS_CCW_STENCILZFAIL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CCW_STENCILPASS", function() { return RS_CCW_STENCILPASS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_CCW_STENCILFUNC", function() { return RS_CCW_STENCILFUNC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_COLORWRITEENABLE1", function() { return RS_COLORWRITEENABLE1; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_COLORWRITEENABLE2", function() { return RS_COLORWRITEENABLE2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_COLORWRITEENABLE3", function() { return RS_COLORWRITEENABLE3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_BLENDFACTOR", function() { return RS_BLENDFACTOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SRGBWRITEENABLE", function() { return RS_SRGBWRITEENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_DEPTHBIAS", function() { return RS_DEPTHBIAS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SEPARATEALPHABLENDENABLE", function() { return RS_SEPARATEALPHABLENDENABLE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_SRCBLENDALPHA", function() { return RS_SRCBLENDALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_DESTBLENDALPHA", function() { return RS_DESTBLENDALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "RS_BLENDOPALPHA", function() { return RS_BLENDOPALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CULL_NONE", function() { return CULL_NONE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CULL_CW", function() { return CULL_CW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CULL_CCW", function() { return CULL_CCW; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_NEVER", function() { return CMP_NEVER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_LESS", function() { return CMP_LESS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_EQUAL", function() { return CMP_EQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_LEQUAL", function() { return CMP_LEQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_GREATER", function() { return CMP_GREATER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_NOTEQUAL", function() { return CMP_NOTEQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_GREATEREQUAL", function() { return CMP_GREATEREQUAL; });
__webpack_require__.d(Tw2Constant_namespaceObject, "CMP_ALWAYS", function() { return CMP_ALWAYS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_ZERO", function() { return BLEND_ZERO; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_ONE", function() { return BLEND_ONE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_SRCCOLOR", function() { return BLEND_SRCCOLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_INVSRCCOLOR", function() { return BLEND_INVSRCCOLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_SRCALPHA", function() { return BLEND_SRCALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_INVSRCALPHA", function() { return BLEND_INVSRCALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_DESTALPHA", function() { return BLEND_DESTALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_INVDESTALPHA", function() { return BLEND_INVDESTALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_DESTCOLOR", function() { return BLEND_DESTCOLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_INVDESTCOLOR", function() { return BLEND_INVDESTCOLOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_SRCALPHASAT", function() { return BLEND_SRCALPHASAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_BOTHSRCALPHA", function() { return BLEND_BOTHSRCALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_BOTHINVSRCALPHA", function() { return BLEND_BOTHINVSRCALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_BLENDFACTOR", function() { return BLEND_BLENDFACTOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLEND_INVBLENDFACTOR", function() { return BLEND_INVBLENDFACTOR; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLENDOP_ADD", function() { return BLENDOP_ADD; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLENDOP_SUBTRACT", function() { return BLENDOP_SUBTRACT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLENDOP_REVSUBTRACT", function() { return BLENDOP_REVSUBTRACT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLENDOP_MIN", function() { return BLENDOP_MIN; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BLENDOP_MAX", function() { return BLENDOP_MAX; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_ALPHA", function() { return TF_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_LUMINANCE", function() { return TF_LUMINANCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_LUMINANCE_ALPHA", function() { return TF_LUMINANCE_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RGB", function() { return TF_RGB; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RGBA", function() { return TF_RGBA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RED", function() { return TF_RED; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_R", function() { return TF_R; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RG", function() { return TF_RG; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RED_INTEGER", function() { return TF_RED_INTEGER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_R_INTEGER", function() { return TF_R_INTEGER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RG_INTEGER", function() { return TF_RG_INTEGER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RGB_INTEGER", function() { return TF_RGB_INTEGER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TF_RGBA_INTEGER", function() { return TF_RGBA_INTEGER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_BYTE", function() { return TT_UNSIGNED_BYTE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_INT", function() { return TT_UNSIGNED_INT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_FLOAT", function() { return TT_FLOAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_HALF_FLOAT", function() { return TT_HALF_FLOAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_BYTE", function() { return TT_BYTE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_SHORT", function() { return TT_SHORT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_SHORT", function() { return TT_UNSIGNED_SHORT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_INT", function() { return TT_INT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_INTEGER", function() { return TT_UNSIGNED_INTEGER; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_SHORT_4_4_4_4", function() { return TT_UNSIGNED_SHORT_4_4_4_4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_SHORT_5_5_5_1", function() { return TT_UNSIGNED_SHORT_5_5_5_1; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_SHORT_5_6_5", function() { return TT_UNSIGNED_SHORT_5_6_5; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_INT_2_10_10_10_REV", function() { return TT_UNSIGNED_INT_2_10_10_10_REV; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_INT_24_8", function() { return TT_UNSIGNED_INT_24_8; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_INT_10F_11F_11F_REV", function() { return TT_UNSIGNED_INT_10F_11F_11F_REV; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_UNSIGNED_INT_5_9_9_9_REV", function() { return TT_UNSIGNED_INT_5_9_9_9_REV; });
__webpack_require__.d(Tw2Constant_namespaceObject, "TT_FLOAT_32_UNSIGNED_INT_24_8_REV", function() { return TT_FLOAT_32_UNSIGNED_INT_24_8_REV; });
__webpack_require__.d(Tw2Constant_namespaceObject, "WrapModes", function() { return WrapModes; });
__webpack_require__.d(Tw2Constant_namespaceObject, "BlendTable", function() { return BlendTable; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FilterMode", function() { return FilterMode; });
__webpack_require__.d(Tw2Constant_namespaceObject, "MipFilterMode", function() { return MipFilterMode; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_MAGIC", function() { return DDS_MAGIC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_CAPS", function() { return DDSD_CAPS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_HEIGHT", function() { return DDSD_HEIGHT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_WIDTH", function() { return DDSD_WIDTH; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_PITCH", function() { return DDSD_PITCH; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_PIXELFORMAT", function() { return DDSD_PIXELFORMAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_MIPMAPCOUNT", function() { return DDSD_MIPMAPCOUNT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_LINEARSIZE", function() { return DDSD_LINEARSIZE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSD_DEPTH", function() { return DDSD_DEPTH; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS_COMPLEX", function() { return DDSCAPS_COMPLEX; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS_MIPMAP", function() { return DDSCAPS_MIPMAP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS_TEXTURE", function() { return DDSCAPS_TEXTURE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP", function() { return DDSCAPS2_CUBEMAP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP_POSITIVEX", function() { return DDSCAPS2_CUBEMAP_POSITIVEX; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP_NEGATIVEX", function() { return DDSCAPS2_CUBEMAP_NEGATIVEX; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP_POSITIVEY", function() { return DDSCAPS2_CUBEMAP_POSITIVEY; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP_NEGATIVEY", function() { return DDSCAPS2_CUBEMAP_NEGATIVEY; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP_POSITIVEZ", function() { return DDSCAPS2_CUBEMAP_POSITIVEZ; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_CUBEMAP_NEGATIVEZ", function() { return DDSCAPS2_CUBEMAP_NEGATIVEZ; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDSCAPS2_VOLUME", function() { return DDSCAPS2_VOLUME; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDPF_ALPHAPIXELS", function() { return DDPF_ALPHAPIXELS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDPF_ALPHA", function() { return DDPF_ALPHA; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDPF_FOURCC", function() { return DDPF_FOURCC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDPF_RGB", function() { return DDPF_RGB; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDPF_YUV", function() { return DDPF_YUV; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDPF_LUMINANCE", function() { return DDPF_LUMINANCE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_LENGTH_INT", function() { return DDS_HEADER_LENGTH_INT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_MAGIC", function() { return DDS_HEADER_OFFSET_MAGIC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_SIZE", function() { return DDS_HEADER_OFFSET_SIZE; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_FLAGS", function() { return DDS_HEADER_OFFSET_FLAGS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_HEIGHT", function() { return DDS_HEADER_OFFSET_HEIGHT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_WIDTH", function() { return DDS_HEADER_OFFSET_WIDTH; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_MIPMAP_COUNT", function() { return DDS_HEADER_OFFSET_MIPMAP_COUNT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_PF_FLAGS", function() { return DDS_HEADER_OFFSET_PF_FLAGS; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_PF_FOURCC", function() { return DDS_HEADER_OFFSET_PF_FOURCC; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_RGB_BPP", function() { return DDS_HEADER_OFFSET_RGB_BPP; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_R_MASK", function() { return DDS_HEADER_OFFSET_R_MASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_G_MASK", function() { return DDS_HEADER_OFFSET_G_MASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_B_MASK", function() { return DDS_HEADER_OFFSET_B_MASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_A_MASK", function() { return DDS_HEADER_OFFSET_A_MASK; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_CAPS1", function() { return DDS_HEADER_OFFSET_CAPS1; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_CAPS2", function() { return DDS_HEADER_OFFSET_CAPS2; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_CAPS3", function() { return DDS_HEADER_OFFSET_CAPS3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_CAPS4", function() { return DDS_HEADER_OFFSET_CAPS4; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DDS_HEADER_OFFSET_DXGI_FORMAT", function() { return DDS_HEADER_OFFSET_DXGI_FORMAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FOURCC_DXT1", function() { return FOURCC_DXT1; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FOURCC_DXT5", function() { return FOURCC_DXT5; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FOURCC_DXT3", function() { return FOURCC_DXT3; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FOURCC_DXT10", function() { return FOURCC_DXT10; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FOURCC_D3DFMT_R16G16B16A16F", function() { return FOURCC_D3DFMT_R16G16B16A16F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "FOURCC_D3DFMT_R32G32B32A32F", function() { return FOURCC_D3DFMT_R32G32B32A32F; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DXGI_FORMAT_R16G16B16A16_FLOAT", function() { return DXGI_FORMAT_R16G16B16A16_FLOAT; });
__webpack_require__.d(Tw2Constant_namespaceObject, "DXGI_FORMAT_B8G8R8X8_UNORM", function() { return DXGI_FORMAT_B8G8R8X8_UNORM; });
__webpack_require__.d(Tw2Constant_namespaceObject, "VendorRequestAnimationFrame", function() { return VendorRequestAnimationFrame; });
__webpack_require__.d(Tw2Constant_namespaceObject, "VendorCancelAnimationFrame", function() { return VendorCancelAnimationFrame; });
__webpack_require__.d(Tw2Constant_namespaceObject, "VendorRequestFullScreen", function() { return VendorRequestFullScreen; });
__webpack_require__.d(Tw2Constant_namespaceObject, "VendorExitFullScreen", function() { return VendorExitFullScreen; });
__webpack_require__.d(Tw2Constant_namespaceObject, "VendorGetFullScreenElement", function() { return VendorGetFullScreenElement; });
__webpack_require__.d(Tw2Constant_namespaceObject, "VendorWebglPrefixes", function() { return VendorWebglPrefixes; });
__webpack_require__.d(Tw2Constant_namespaceObject, "WebglContextNames", function() { return WebglContextNames; });
__webpack_require__.d(Tw2Constant_namespaceObject, "Webgl2ContextNames", function() { return Webgl2ContextNames; });
__webpack_require__.d(Tw2Constant_namespaceObject, "WebglVersion", function() { return WebglVersion; });

// EXTERNAL MODULE: ./global/math/index.js + 17 modules
var math = __webpack_require__(4);

// EXTERNAL MODULE: ./global/util/index.js + 5 modules
var util = __webpack_require__(3);

// EXTERNAL MODULE: ./core/Tw2EventEmitter.js
var Tw2EventEmitter = __webpack_require__(10);

// CONCATENATED MODULE: ./global/engine/Tw2Logger.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * eventLog
 * @typedef {{}} eventLog
 * @property {string} eventLog.type       - The log's type
 * @property {string} eventLog.name       - The log's name
 * @property {string} eventLog.message    - The log's message
 * @property {boolean} [eventLog.hide]    - Toggles log visibility
 * @property {boolean} [eventLog._logged] - Identifies if the log has been logged
 * @property {Error} [eventLog.err]       - Optional error (output to the console)
 * @property {*} [eventLog.data]          - Optional data (output to the console)
 */

/**
 * Handles basic event logging
 *
 * @property {string} name                   - The name of the logger
 * @property {boolean} display               - Toggles console logging
 * @property {{}} visible                    - Visibility options
 * @property {boolean} visible.log           - Toggles console log output
 * @property {boolean} visible.info          - Toggles console info output
 * @property {boolean} visible.debug         - Toggles console debug output
 * @property {boolean} visible.warn          - Toggles console warn output
 * @property {boolean} visible.error         - Toggles console error output
 * @property {number} history                - The maximum history to store
 * @property {number} throttle               - The maximum throttling per log type
 * @property {Array} _logs                   - Stored logs
 * @property {?{string:string[]}} _throttled - Throttles message cache
 */

var Tw2Logger_Tw2Logger = /*#__PURE__*/function (_Tw2EventEmitter) {
  _inherits(Tw2Logger, _Tw2EventEmitter);

  var _super = _createSuper(Tw2Logger);

  function Tw2Logger() {
    var _this;

    _classCallCheck(this, Tw2Logger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "name", '');

    _defineProperty(_assertThisInitialized(_this), "display", true);

    _defineProperty(_assertThisInitialized(_this), "visible", {
      log: true,
      info: true,
      debug: true,
      warn: true,
      error: true
    });

    _defineProperty(_assertThisInitialized(_this), "history", 100);

    _defineProperty(_assertThisInitialized(_this), "throttle", 20);

    _defineProperty(_assertThisInitialized(_this), "_logs", []);

    _defineProperty(_assertThisInitialized(_this), "_throttled", null);

    return _this;
  }

  _createClass(Tw2Logger, [{
    key: "Set",

    /**
     * Sets the logger's properties
     * @param {*} [opt]
     */
    value: function Set(opt) {
      if (!opt) return;
      Object(util["assignIfExists"])(this, opt, ['name', 'display', 'history', 'throttle']);
      Object(util["assignIfExists"])(this.visible, opt.visible, ['log', 'info', 'debug', 'warn', 'error']);
    }
    /**
     * Adds an event log and outputs it to the console
     * @param {*|eventLog|Error} log - The eventLog or error to log
     * @returns {eventLog} log
     */

  }, {
    key: "log",
    value: function log(_log) {
      if (_log._logged) return _log; // Allow errors as logs

      if (Object(util["isError"])(_log)) {
        _log = {
          err: _log
        };
      } // Normalize log details


      if (_log.err) {
        _log.type = 'error';
        if (!_log.name) _log.name = _log.err.name;
        if (!_log.message) _log.message = _log.err.message;
      } else {
        _log.type = Tw2Logger.LogType[_log.type ? _log.type.toUpperCase() : 'LOG'] || 'log';
        _log.message = _log.message || '';
      } // Normalize the log name


      var name = _log.name || this.constructor.category;
      name = name.replace(/_/g, ' ');
      name = name.charAt(0).toUpperCase() + name.slice(1);
      _log.name = name;

      if (!this.display || !this.visible[_log.type]) {
        _log.hide = true;
      } // Throttle excessive output


      if (!this.throttle) {
        this._throttled = null;
      } else {
        if (!_log.hide) {
          if (!this._throttled) this._throttled = {};
          if (!this._throttled[_log.type]) this._throttled[_log.type] = [];
          var t = this._throttled[_log.type];

          if (!t.includes(_log.message)) {
            t.unshift(_log.message);
            t.splice(this.throttle);
          } else {
            _log.hide = true;
          }
        }
      } // Output to the console


      if (!_log.hide) {
        var header = "".concat(this.name, " ").concat(_log.name, ":");

        if (_log.err || _log.data) {
          console.group(header, _log.message);
          if (_log.err) console.debug(_log.err.stack || _log.err.toString());
          if (_log.data) console.debug(JSON.stringify(_log.data, null, 4));
          console.groupEnd();
        } else {
          console[_log.type](header, _log.message);
        }
      } // Manage log history


      if (this.history) {
        this._logs.unshift(_log);

        this._logs.splice(this.history);
      } else {
        this._logs = [];
      }

      _log._logged = true;
      this.emit(_log.type, _log);
      return _log;
    }
    /**
     * Log types
     * @type {*}
     */

  }]);

  return Tw2Logger;
}(Tw2EventEmitter["a" /* Tw2EventEmitter */]);

_defineProperty(Tw2Logger_Tw2Logger, "LogType", {
  ERROR: 'error',
  WARNING: 'warn',
  INFO: 'info',
  LOG: 'log',
  DEBUG: 'debug'
});

_defineProperty(Tw2Logger_Tw2Logger, "category", 'logger');

var logger = new Tw2Logger_Tw2Logger();
/**
 * The default event logger
 * @type {Tw2Logger}
 */

Tw2EventEmitter["a" /* Tw2EventEmitter */].defaultLogger = logger;
// CONCATENATED MODULE: ./global/engine/Tw2MotherLode.js
function Tw2MotherLode_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tw2MotherLode_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tw2MotherLode_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tw2MotherLode_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tw2MotherLode_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Manages loaded resources
 *
 * @property {Object} _loadedObjects            - loaded resources
 * @property {{string:Array<eventLog>}} _errors - Not implemented yet
 * @class
 */
var Tw2MotherLode = /*#__PURE__*/function () {
  function Tw2MotherLode() {
    Tw2MotherLode_classCallCheck(this, Tw2MotherLode);

    this._loadedObjects = {};
    this._errors = {};
  }
  /**
   * Adds an error log for a given path
   * @param {string} path
   * @param {Tw2Error|Error} err
   * @returns {Tw2Error|Error} err
   */


  Tw2MotherLode_createClass(Tw2MotherLode, [{
    key: "AddError",
    value: function AddError(path, err) {
      this._errors[path] = this._errors[path] || [];

      if (!this._errors[path].includes(err)) {
        err.data = err.data || {};
        err.data.path = err.data.path || path;

        this._errors[path].push(err);
      }

      return err;
    }
    /**
     * Gets a path's error logs
     * @param {string} path
     * @returns {?Array<Tw2Error|Error>}
     */

  }, {
    key: "GetErrors",
    value: function GetErrors(path) {
      return path && path in this._errors ? Object.assign([], this._errors[path]) : null;
    }
    /**
     * Checks if a path has any errors
     * @param {string} path
     * @returns {*|boolean}
     */

  }, {
    key: "HasErrors",
    value: function HasErrors(path) {
      return path && path in this._errors;
    }
    /**
     * Finds a loaded object by it's file path
     * @param {string} path
     * @returns {Tw2LoadingObject|Tw2Resource}
     */

  }, {
    key: "Find",
    value: function Find(path) {
      if (path in this._loadedObjects) {
        return this._loadedObjects[path];
      }

      return null;
    }
    /**
     * Adds a loaded object
     * @param {string} path
     * @param {Tw2LoadingObject|Tw2Resource} obj
     */

  }, {
    key: "Add",
    value: function Add(path, obj) {
      this._loadedObjects[path] = obj;
    }
    /**
     * Removes a loaded object by it's file path
     * @param {string} path
     */

  }, {
    key: "Remove",
    value: function Remove(path) {
      delete this._loadedObjects[path];
    }
    /**
     * Clears the loaded object object
     */

  }, {
    key: "Clear",
    value: function Clear() {
      this._loadedObjects = {};
    }
    /**
     * Unloads all loaded objects and then clears the loadedObject object
     */

  }, {
    key: "UnloadAndClear",
    value: function UnloadAndClear() {
      for (var path in this._loadedObjects) {
        if (this._loadedObjects.hasOwnProperty(path)) {
          this._loadedObjects[path].Unload();
        }
      }

      this._loadedObjects = {};
    }
    /**
     * Purges inactive loaded objects (resources that have been loaded but are not being actively used)
     * - Loaded objects can flagged with `doNotPurge` to ensure they are never removed
     * - Resource auto purging can be managed in `ccpwgl` or `ccpwgl_int.resMan` - {@link Tw2ResMan}
     *     ccpwgl.setResourceUnloadPolicy()
     *     ccpwgl_int.resMan.autoPurgeResources=true
     *     ccpwgl_int.resMan.purgeTime=30
     * @param {Number} curFrame - the current frame count
     * @param {Number} frameLimit - how many frames the object can stay alive for before being purged
     * @param {Number} frameDistance - how long the resource has been alive for
     */

  }, {
    key: "PurgeInactive",
    value: function PurgeInactive(curFrame, frameLimit, frameDistance) {
      for (var path in this._loadedObjects) {
        if (this._loadedObjects.hasOwnProperty(path)) {
          var res = this._loadedObjects[path];

          if (!res.doNotPurge) {
            if (res.IsPurged()) {
              res.OnUnloaded();
              this.Remove(path);
            }

            if (res._isGood && (curFrame - res.activeFrame) % frameLimit >= frameDistance) {
              if (res.Unload()) {
                res.OnUnloaded();
                this.Remove(path);
              }
            }
          }
        }
      }
    }
  }]);

  return Tw2MotherLode;
}();
// EXTERNAL MODULE: ./core/resource/Tw2LoadingObject.js
var Tw2LoadingObject = __webpack_require__(15);

// EXTERNAL MODULE: ./core/index.js + 60 modules
var core = __webpack_require__(1);

// CONCATENATED MODULE: ./global/engine/Tw2ResMan.js
function Tw2ResMan_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tw2ResMan_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tw2ResMan_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tw2ResMan_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tw2ResMan_defineProperties(Constructor, staticProps); return Constructor; }

function Tw2ResMan_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Tw2ResMan_setPrototypeOf(subClass, superClass); }

function Tw2ResMan_setPrototypeOf(o, p) { Tw2ResMan_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tw2ResMan_setPrototypeOf(o, p); }

function Tw2ResMan_createSuper(Derived) { var hasNativeReflectConstruct = Tw2ResMan_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Tw2ResMan_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Tw2ResMan_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Tw2ResMan_possibleConstructorReturn(this, result); }; }

function Tw2ResMan_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Tw2ResMan_assertThisInitialized(self); }

function Tw2ResMan_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Tw2ResMan_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Tw2ResMan_getPrototypeOf(o) { Tw2ResMan_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tw2ResMan_getPrototypeOf(o); }

function Tw2ResMan_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Resource Manager
 *
 * @property {Tw2MotherLode} motherLode
 * @property {Boolean} systemMirror - Toggles whether {@link Tw2GeometryRes} Index and Buffer data arrays are visible
 * @property {Number} maxPrepareTime
 * @property {Boolean} autoPurgeResources=true - Sets whether resources should be purged automatically
 * @property {Number} purgeTime=30 = Sets how long resources can remain inactive before they are purged
 * @property {Number} activeFrame
 * @property {Number} _prepareBudget
 * @property {Array} _prepareQueue
 * @property {Number} _purgeTime
 * @property {Number} _purgeFrame
 * @property {Number} _purgeFrameLimit
 * @property {Number} _pendingLoads - a count of how many things are pending load
 * @property {Number} _noLoadFrames
 * @class
 */

var Tw2ResMan_Tw2ResMan = /*#__PURE__*/function (_Tw2EventEmitter) {
  Tw2ResMan_inherits(Tw2ResMan, _Tw2EventEmitter);

  var _super = Tw2ResMan_createSuper(Tw2ResMan);

  function Tw2ResMan() {
    var _this;

    Tw2ResMan_classCallCheck(this, Tw2ResMan);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "motherLode", new Tw2MotherLode());

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "systemMirror", false);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "maxPrepareTime", 0.05);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "autoPurgeResources", true);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "activeFrame", 0);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "purgeTime", 30);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_prepareBudget", 0);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_prepareQueue", []);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_purgeTime", 0);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_purgeFrame", 0);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_purgeFrameLimit", 1000);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_pendingLoads", 0);

    Tw2ResMan_defineProperty(Tw2ResMan_assertThisInitialized(_this), "_noLoadFrames", 0);

    return _this;
  }

  Tw2ResMan_createClass(Tw2ResMan, [{
    key: "Set",

    /**
     * Sets resource manager options
     * @param {*} [opt]
     */
    value: function Set(opt) {
      if (!opt) return;
      Object(util["assignIfExists"])(this, opt, ['systemMirror', 'maxPrepareTime', 'autoPurgeResources', 'purgeTime']);
    }
    /**
     * Fires on resource errors
     * - Used when a resource can only be identified by it's path
     * @param {string} path
     * @param {Error} err
     * @returns {Error} err
     */

  }, {
    key: "OnResError",
    value: function OnResError(path) {
      var err = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new core["Tw2Error"]({
        path
      });
      path = Tw2ResMan.NormalizePath(path);
      var res = this.motherLode.Find(path);

      if (res) {
        res.OnError(err);
      } else {
        this.OnResEvent('error', path, {
          type: 'error',
          message: err.message,
          err
        });
      }

      return err;
    }
    /**
     * Fires on resource events
     * @param {string} eventName - The event's name
     * @param {string} path      - The resource's path
     * @param {*} [log={}]       - The event's log
     */

  }, {
    key: "OnResEvent",
    value: function OnResEvent(eventName, path) {
      var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var defaultLog = Tw2ResMan.DefaultLog[eventName.toUpperCase()];

      if (defaultLog) {
        log = Object.assign({}, defaultLog, log);
        var eventData = {
          res: this.motherLode.Find(path),
          path,
          log
        };
        var err = log.err;

        if (err) {
          this.motherLode.AddError(path, err);
          eventData.err = err;
          Object.assign(eventData, err.data);
        }

        log.message = log.message.includes(path) ? log.message : log.message += " \"".concat(path, "\"");
        this.emit(eventName.toLowerCase(), eventData);
      }
    }
    /**
     * IsLoading
     * @returns {Boolean}
     *
     */

  }, {
    key: "IsLoading",
    value: function IsLoading() {
      return this._noLoadFrames < 2;
    }
    /**
     * Clears the motherLode {@link Tw2MotherLode}
     */

  }, {
    key: "Clear",
    value: function Clear() {
      this.motherLode.Clear();
    }
    /**
     * Unloads and Clears the motherLode {@link Tw2MotherLode}
     */

  }, {
    key: "UnloadAndClear",
    value: function UnloadAndClear() {
      this.motherLode.UnloadAndClear();
    }
    /**
     * Internal update function. It is called every frame.
     * @param {Number} dt - deltaTime
     * @returns {Boolean}
     */

  }, {
    key: "PrepareLoop",
    value: function PrepareLoop(dt) {
      if (this._prepareQueue.length === 0 && this._pendingLoads === 0) {
        if (this._noLoadFrames < 2) {
          this._noLoadFrames++;
        }
      } else {
        this._noLoadFrames = 0;
      }

      this._prepareBudget = this.maxPrepareTime;
      var startTime = Date.now();

      while (this._prepareQueue.length) {
        var res = this._prepareQueue[0][0],
            data = this._prepareQueue[0][1],
            xml = this._prepareQueue[0][2];

        this._prepareQueue.shift();

        try {
          res.Prepare(data, xml);
        } catch (err) {
          res.OnError(err);
        }

        this._prepareBudget -= (Date.now() - startTime) * 0.001;
        if (this._prepareBudget < 0) break;
      }

      this._purgeTime += dt;

      if (this._purgeTime > 1) {
        this.activeFrame += 1;
        this._purgeTime -= Math.floor(this._purgeTime);
        this._purgeFrame += 1;

        if (this._purgeFrame >= 5) {
          if (this.autoPurgeResources) {
            this.motherLode.PurgeInactive(this._purgeFrame, this._purgeFrameLimit, this.purgeTime);
          }
        }
      }

      return true;
    }
    /**
     * Gets a resource
     * @param {String} path
     * @returns {Tw2Resource} resource
     */

  }, {
    key: "GetResource",
    value: function GetResource(path) {
      var res;
      path = Tw2ResMan.NormalizePath(path); // Check if already loaded

      res = this.motherLode.Find(path);

      if (res) {
        if (res.IsPurged()) res.Reload();
        return res;
      }

      if (path.indexOf('dynamic:/') === 0) {
        this.OnResError(path, new core["ErrFeatureNotImplemented"]({
          feature: 'Dynamic resources'
        }));
        return null;
      }

      var extension = Tw2ResMan.GetPathExt(path);

      if (extension === null) {
        this.OnResError(path, new core["ErrResourceExtensionUndefined"]({
          path
        }));
        return null;
      }

      var Constructor = Tw2Store_store.GetExtension(extension);

      if (!Constructor) {
        this.OnResError(path, new core["ErrResourceExtensionUnregistered"]({
          path,
          extension
        }));
        return null;
      }

      try {
        res = new Constructor();
        res.path = path;
        return Tw2ResMan.LoadResource(this, res);
      } catch (err) {
        this.OnResError(path, err);
        return null;
      }
    }
    /**
     * Gets a resource object
     * @param {string} path
     * @param {Function} onResolved - Callback fired when the object has loaded
     * @param {Function} onRejected - Callback fired when the object fails to load
     */

  }, {
    key: "GetObject",
    value: function GetObject(path, onResolved, onRejected) {
      path = Tw2ResMan.NormalizePath(path); // Check if already loaded

      var res = this.motherLode.Find(path);

      if (res) {
        res.AddObject(onResolved, onRejected);
        return;
      }

      try {
        res = new Tw2LoadingObject["a" /* Tw2LoadingObject */]();
        res.path = path;
        res.AddObject(onResolved, onRejected);
        Tw2ResMan.LoadResource(this, res);
      } catch (err) {
        this.OnResError(path, err);
      }
    }
    /**
     * Reloads a resource
     * @param {Tw2Resource} resource
     * @returns {Tw2Resource} resource
     */

  }, {
    key: "ReloadResource",
    value: function ReloadResource(resource) {
      var path = resource.path; // Check if already loaded and good

      var res = this.motherLode.Find(path);

      if (res && !res.IsPurged()) {
        return res;
      }

      try {
        return Tw2ResMan.LoadResource(this, resource);
      } catch (err) {
        this.OnResError(path, err);
        return resource;
      }
    }
    /**
     * Builds a url from a resource path
     * @param {string} path
     * @returns {string}
     */

  }, {
    key: "BuildUrl",
    value: function BuildUrl(path) {
      var prefixIndex = path.indexOf(':/');

      if (prefixIndex === -1) {
        throw new core["ErrResourcePrefixUndefined"]({
          path
        });
      }

      var prefix = path.substr(0, prefixIndex);

      if (prefix === 'http' || prefix === 'https') {
        return path;
      }

      var fullPrefix = Tw2Store_store.GetPath(prefix);

      if (!fullPrefix) {
        throw new core["ErrResourcePrefixUnregistered"]({
          path,
          prefix
        });
      }

      return fullPrefix + path.substr(prefixIndex + 2);
    }
    /**
     * Normalizes a file path by making it lower case and replaces all '\\' with '/'
     * @param {string} path
     * @returns {string}
     */

  }], [{
    key: "NormalizePath",
    value: function NormalizePath(path) {
      if (path.substr(0, 5) === 'str:/') return path;
      path = path.toLowerCase();
      path.replace('\\', '/');
      return path;
    }
    /**
     * Gets a path's extension
     * @param {string} path
     * @returns {?string}
     */

  }, {
    key: "GetPathExt",
    value: function GetPathExt(path) {
      if (path.substr(0, 5) === 'str:/') {
        var slash = path.indexOf('/', 5);
        if (slash === -1) return null;
        return path.substr(5, slash - 5);
      } else {
        var dot = path.lastIndexOf('.');
        if (dot === -1) return null;
        return path.substr(dot + 1);
      }
    }
    /**
     * Loads a resource
     * @param {Tw2ResMan} resMan
     * @param {Tw2Resource|Tw2LoadingObject} res
     * @returns {Tw2Resource|Tw2LoadingObject} res
     */

  }, {
    key: "LoadResource",
    value: function LoadResource(resMan, res) {
      var path = res.path,
          url = resMan.BuildUrl(path);
      resMan.motherLode.Add(path, res);

      if (res.DoCustomLoad && res.DoCustomLoad(url, Tw2ResMan.GetPathExt(url))) {
        return res;
      }

      var httpRequest = Tw2ResMan.CreateHttpRequest(res);
      httpRequest.onreadystatechange = Tw2ResMan.DoLoadResource(resMan, res);
      httpRequest.open('GET', url);

      try {
        httpRequest.send();
        resMan._pendingLoads++;
        res.OnRequested();
      } catch (err) {
        throw new core["ErrHTTPRequestSend"]({
          path
        });
      }

      return res;
    }
    /**
     * Creates an onreadystatechange callback
     * @param {Tw2ResMan} resMan
     * @param {Tw2Resource} res
     */

  }, {
    key: "DoLoadResource",
    value: function DoLoadResource(resMan, res) {
      var path = res.path;
      return function () {
        var readyState = 0;

        try {
          readyState = this.readyState;
        } catch (err) {
          resMan._pendingLoads--;
          res.OnError(new core["ErrHTTPReadyState"]({
            path
          }));
          return;
        }

        if (readyState === 4) {
          var status = this.status;

          if (status === 200) {
            var data = null,
                xml = null;

            try {
              data = this.responseText;
              xml = this.responseXML;
            } catch (e) {
              data = this.response;
            }

            resMan._prepareQueue.push([res, data, xml]);

            res.OnLoaded();
          } else {
            res.OnError(new core["ErrHTTPStatus"]({
              path,
              status
            }));
          }

          resMan._pendingLoads--;
        }
      };
    }
    /**
     * Creates an HTTP request
     * @param {Tw2Resource} res
     * @returns {XMLHttpRequest|ActiveXObject}
     */

  }, {
    key: "CreateHttpRequest",
    value: function CreateHttpRequest(res) {
      var httpRequest = null;

      if (window.XMLHttpRequest) {
        // Mozilla, Safari, ...
        httpRequest = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        // IE
        try {
          httpRequest = new window['ActiveXObject']('Msxml2.XMLHTTP');
        } catch (e) {
          try {
            httpRequest = new window['ActiveXObject']('Microsoft.XMLHTTP');
          } catch (e) {
            /*eslint-disable-line-no-empty*/
          }
        }
      }

      if (!httpRequest) {
        throw new core["ErrHTTPInstance"]({
          path: res.path
        });
      } else if (res.requestResponseType) {
        httpRequest.responseType = res.requestResponseType;
      }

      return httpRequest;
    } // Default log outputs for resource events

  }]);

  return Tw2ResMan;
}(Tw2EventEmitter["a" /* Tw2EventEmitter */]); // Global instance of Tw2ResMan

Tw2ResMan_defineProperty(Tw2ResMan_Tw2ResMan, "DefaultLog", {
  ERROR: {
    type: 'error',
    message: 'Uncaught error'
  },
  WARNING: {
    type: 'warn',
    message: 'Undefined warning'
  },
  REQUESTED: {
    type: 'info',
    message: 'Requested'
  },
  RELOADING: {
    type: 'info',
    message: 'Reloading'
  },
  LOADED: {
    type: 'info',
    message: 'Loaded'
  },
  PREPARED: {
    type: 'log',
    message: 'Prepared'
  },
  PURGED: {
    type: 'info',
    message: 'Purged'
  },
  UNLOADED: {
    type: 'info',
    message: 'Unloaded'
  },
  DEBUG: {
    type: 'debug',
    message: 'Debug'
  }
});

Tw2ResMan_defineProperty(Tw2ResMan_Tw2ResMan, "category", 'resource_manager');

var Tw2ResMan_resMan = new Tw2ResMan_Tw2ResMan();
// CONCATENATED MODULE: ./global/engine/Tw2Store.js
function Tw2Store_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tw2Store_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tw2Store_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tw2Store_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tw2Store_defineProperties(Constructor, staticProps); return Constructor; }

function Tw2Store_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Tw2Store_setPrototypeOf(subClass, superClass); }

function Tw2Store_setPrototypeOf(o, p) { Tw2Store_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tw2Store_setPrototypeOf(o, p); }

function Tw2Store_createSuper(Derived) { var hasNativeReflectConstruct = Tw2Store_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Tw2Store_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Tw2Store_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Tw2Store_possibleConstructorReturn(this, result); }; }

function Tw2Store_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Tw2Store_assertThisInitialized(self); }

function Tw2Store_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Tw2Store_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Tw2Store_getPrototypeOf(o) { Tw2Store_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tw2Store_getPrototypeOf(o); }

function Tw2Store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/**
 * Stores engine data
 *
 * @property {Object.< string, string>} _path
 * @property {Object.< string, Array<string>>} _dynamicPath
 * @property {Object.< string, Tw2Parameter>} _variable
 * @property {Object.< string, Function>} _type
 * @property {Object.< string, Function>} _extension
 * @property {Object.< string, Function>} _class
 * @property {Object.< string, Tw2Schema>} _schema
 * @property {Object.< string, Array<string>>} _missing
 * @class
 */

var Tw2Store_Tw2Store = /*#__PURE__*/function (_Tw2EventEmitter) {
  Tw2Store_inherits(Tw2Store, _Tw2EventEmitter);

  var _super = Tw2Store_createSuper(Tw2Store);

  function Tw2Store() {
    var _this;

    Tw2Store_classCallCheck(this, Tw2Store);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call(this, ...args);

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_type", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_path", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_variable", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_extension", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_class", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_dynamicPath", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_schema", {});

    Tw2Store_defineProperty(Tw2Store_assertThisInitialized(_this), "_missing", {});

    return _this;
  }

  Tw2Store_createClass(Tw2Store, [{
    key: "HasPath",

    /**
     * Checks if a resource path exists
     * @param {string} prefix
     * @returns {boolean}
     */
    value: function HasPath(prefix) {
      return prefix && prefix in this._path;
    }
    /**
     * Gets a path by it's prefix
     * @param {string} prefix
     * @returns {?string}
     */

  }, {
    key: "GetPath",
    value: function GetPath(prefix) {
      return Tw2Store.GetStoreItem(this, 'path', prefix);
    }
    /**
     * Registers a resource path
     * @param {string} prefix
     * @param {string} path
     * @returns {boolean}
     */

  }, {
    key: "RegisterPath",
    value: function RegisterPath(prefix, path) {
      if (path.lastIndexOf('/') !== path.length - 1) {
        path += '/';
      }

      if (Tw2Store.RestrictedPathPrefixes.includes(prefix)) {
        this.emit('error', {
          type: 'path',
          key: prefix,
          value: path,
          log: {
            type: 'error',
            message: "Cannot register restricted prefix \"".concat(prefix, "\"")
          }
        });
        return false;
      }

      return Tw2Store.SetStoreItem(this, 'path', prefix, path, util["isString"]);
    }
    /**
     * Registers resource paths from an object or an array of objects
     * @param {{string:string}|Array<{string:string}>} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterPaths",
    value: function RegisterPaths(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterPath', obj);
    }
    /**
     * Checks if a dynamic path exists
     * @param {string} prefix
     * @returns {boolean}
     */

  }, {
    key: "HasDynamicPath",
    value: function HasDynamicPath(prefix) {
      return prefix && prefix in this._dynamicPath;
    }
    /**
     * Gets a dynamic path by it's prefix
     * @param {string} prefix
     * @returns {?Array<string>}
     */

  }, {
    key: "GetDynamicPath",
    value: function GetDynamicPath(prefix) {
      return Tw2Store.GetStoreItem(this, 'dynamicPath', prefix);
    }
    /**
     * Registers a dynamic path
     * @param {string} prefix
     * @param {string[]} paths
     * @returns {boolean}
     */

  }, {
    key: "RegisterDynamicPath",
    value: function RegisterDynamicPath(prefix, paths) {
      return Tw2Store.SetStoreItem(this, 'dynamicPath', prefix, paths, util["isArray"]);
    }
    /**
     * Registers dynamic paths from an object or array of objects
     * @param {{string:string[]}|Array<{string:string[]}>} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterDynamicPaths",
    value: function RegisterDynamicPaths(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterDynamicPath', obj);
    }
    /**
     * Checks if an extension exists
     * @param {string} ext
     * @returns {boolean}
     */

  }, {
    key: "HasExtension",
    value: function HasExtension(ext) {
      return ext && ext in this._extension;
    }
    /**
     * Gets a resource extension by name
     * @param {string} ext
     * @returns {?Function}
     */

  }, {
    key: "GetExtension",
    value: function GetExtension(ext) {
      return Tw2Store.GetStoreItem(this, 'extension', ext);
    }
    /**
     * Registers a resource extension
     * @param {string} ext
     * @param {Function} Constructor
     * @returns {boolean}
     */

  }, {
    key: "RegisterExtension",
    value: function RegisterExtension(ext, Constructor) {
      return Tw2Store.SetStoreItem(this, 'extension', ext, Constructor, util["isFunction"]);
    }
    /**
     * Registers resource extensions from an object or array of objects
     * @param {{string:Function}|Array<{string:Function}>} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterExtensions",
    value: function RegisterExtensions(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterExtension', obj);
    }
    /**
     * Checks if a constructor exists
     * @param {string} name
     * @returns {boolean}
     */

  }, {
    key: "HasClass",
    value: function HasClass(name) {
      return name && name in this._class;
    }
    /**
     * Gets a library constructor by name
     * @param {string} name
     * @returns {?Function}
     */

  }, {
    key: "GetClass",
    value: function GetClass(name) {
      var Constructor = Tw2Store.GetStoreItem(this, 'class', name); // Allow substitution of Trinity constructors with Tw2 constructors

      if (!Constructor && (name.includes('Tr2') || name.includes('Tri'))) {
        var substitute = 'Tw2' + name.substring(3);
        Constructor = Tw2Store.GetStoreItem(this, 'class', substitute);

        if (Constructor) {
          this.emit('substitute', {
            type: 'class',
            key: substitute,
            originalKey: name,
            value: Constructor,
            log: {
              type: 'warning',
              message: "\"".concat(name, "\" class not found, substituting with \"").concat(substitute, "\"")
            }
          });
        }
      } // Create a warning when a partially implemented class is called


      if (Constructor && Constructor.partialImplementation) {
        this.emit('partial', {
          type: 'class',
          key: name,
          value: Constructor,
          log: {
            type: 'warning',
            message: "\"".concat(name, "\" class partially implemented")
          }
        });
      }

      return Constructor;
    }
    /**
     * Registers library constructors
     * @param {string} name
     * @param {Function} Constructor
     * @returns {boolean}
     */

  }, {
    key: "RegisterClass",
    value: function RegisterClass(name, Constructor) {
      return Tw2Store.SetStoreItem(this, 'class', name, Constructor, util["isFunction"]);
    }
    /**
     * Registers library constructors from an object or array of objects
     * @param {{string:Function}|Array<{string:Function}>} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterClasses",
    value: function RegisterClasses(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterClass', obj);
    }
    /**
     * Checks if a variable exists
     * @param {string} name
     * @returns {boolean}
     */

  }, {
    key: "HasVariable",
    value: function HasVariable(name) {
      return name && name in this._variable;
    }
    /**
     * Gets a variable by name
     * @param {string} name
     * @returns {?*}
     */

  }, {
    key: "GetVariable",
    value: function GetVariable(name) {
      return Tw2Store.GetStoreItem(this, 'variable', name);
    }
    /**
     * Gets a variable's value
     * @param {string} name
     * @param {boolean} [serialize]
     * @returns {?*} null if the variable doesn't exist or it does but it has no GetValue method
     */

  }, {
    key: "GetVariableValue",
    value: function GetVariableValue(name, serialize) {
      var variable = this.GetVariable(name);
      return variable && variable.GetValue ? variable.GetValue(serialize) : null;
    }
    /**
     * Sets a variable's value
     * @param {string} name
     * @param {*} value
     * @returns {?boolean} null if the variable doesn't exist or it does but has no SetValue method
     */

  }, {
    key: "SetVariableValue",
    value: function SetVariableValue(name, value) {
      var variable = this.GetVariable(name);

      if (variable && variable.SetValue) {
        variable.SetValue(value);
        return true;
      }

      return null;
    }
    /**
     * Registers a variable
     * @param {string} name
     * @param {*|{value:*, Type: string|Function}} [value]
     * @param {string|Function} [Type]
     * @returns {?*}
     */

  }, {
    key: "RegisterVariable",
    value: function RegisterVariable(name, value, Type) {
      var variable = this.CreateType(name, value, Type);
      Tw2Store.SetStoreItem(this, 'variable', name, variable);
      return variable;
    }
    /**
     * Registers variables from an object or array of objects
     * @param {{string:*|{value:*,type:string|Function}|Array<{string:*|{value:*,type:string|Function}>}} obj
     */

  }, {
    key: "RegisterVariables",
    value: function RegisterVariables(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterVariable', obj);
    }
    /**
     * Gets a parameter constructor by it's short name
     * @param {string} name
     * @returns {?Function}
     */

  }, {
    key: "GetType",
    value: function GetType(name) {
      return Tw2Store.GetStoreItem(this, 'type', name);
    }
    /**
     * Checks if a type exists
     * @param {string} name
     * @returns {boolean}
     */

  }, {
    key: "HasType",
    value: function HasType(name) {
      return name && name in this._type;
    }
    /**
     * Gets a type by value
     * @param {*} value
     * @returns {?Function}
     */

  }, {
    key: "GetTypeByValue",
    value: function GetTypeByValue(value) {
      for (var type in this._type) {
        if (this._type.hasOwnProperty(type) && 'isValue' in this._type[type]) {
          if (this._type[type]['isValue'](value)) {
            return this._type[type];
          }
        }
      }

      return null;
    }
    /**
     * Creates a type by value and/or type name or function
     * @param {string} name
     * @param {?*} [value]
     * @param {?|string|Function} [Type]
     * @returns {?*} new parameter
     */

  }, {
    key: "CreateType",
    value: function CreateType(name, value, Type) {
      if (Object(util["isPlain"])(value)) {
        Type = value['Type'] || value['type'];
        value = value['value'];
      }

      if (!Type) {
        Type = this.GetTypeByValue(value);
      }

      if (Object(util["isString"])(Type)) {
        Type = this.GetType(Type);
      }

      if (Object(util["isFunction"])(Type)) {
        return new Type(name, value);
      }

      return null;
    }
    /**
     * Registers a parameter type
     * @param {string} name
     * @param {Function} Constructor
     * @returns {boolean}
     */

  }, {
    key: "RegisterType",
    value: function RegisterType(name, Constructor) {
      return Tw2Store.SetStoreItem(this, 'type', name, Constructor, util["isFunction"]);
    }
    /**
     * Registers parameter types from an object or array of objects
     * @param {{string: Function}|[{string:Function}]} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterTypes",
    value: function RegisterTypes(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterType', obj);
    }
    /**
     * Checks if a schema exists
     * @param {string} name
     * @returns {boolean}
     */

  }, {
    key: "HasSchema",
    value: function HasSchema(name) {
      return name && name in this._schema;
    }
    /**
     * Gets a schema by it's name
     * @param {string} name
     * @returns {?string}
     */

  }, {
    key: "GetSchema",
    value: function GetSchema(name) {
      return Tw2Store.GetStoreItem(this, 'schema', name);
    }
    /**
     * Registers a schema
     * @param {string} name
     * @param {string} schema
     * @returns {boolean}
     */

  }, {
    key: "RegisterSchema",
    value: function RegisterSchema(name, schema) {
      return Tw2Store.SetStoreItem(this, 'schema', name, schema, a => {
        return a && a.constructor.name === 'Tw2Schema';
      });
    }
    /**
     * Registers schemas from an object or an array of objects
     * @param {{string:string}|Array<{string:string}>} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterSchemas",
    value: function RegisterSchemas(obj) {
      return Tw2Store.RegisterFromObject(this, 'RegisterSchema', obj);
    }
    /**
     * Registers store values
     * @param {{}} [opt={}]
     * @param {boolean} [opt.uuid]
     * @param {*} opt.logger
     * @param {*} opt.paths
     * @param {*} opt.dynamicPaths
     * @param {*} opt.types
     * @param {*} opt.classes
     * @param {*} opt.extensions
     * @param {*} opt.variables
     * @param {*} opt.schemas
     */

  }, {
    key: "Register",
    value: function Register() {
      var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if ('uuid' in opt) Object(util["enableUUID"])(opt.uuid);
      if ('logger' in opt) logger.Set(opt.logger);
      if ('resMan' in opt) Tw2ResMan_resMan.Set(opt.resMan);
      this.RegisterPaths(opt.paths);
      this.RegisterDynamicPaths(opt.dynamicPaths);
      this.RegisterTypes(opt.types);
      this.RegisterClasses(opt.classes);
      this.RegisterExtensions(opt.extensions);
      this.RegisterVariables(opt.variables);
      this.RegisterSchemas(opt.schemas);
    }
    /**
     * Gets a value from a store
     * - Records missing keys for debugging
     * @param {Tw2Store} store
     * @param {string} type
     * @param {string} key
     * @returns {?*}
     */

  }], [{
    key: "GetStoreItem",
    value: function GetStoreItem(store, type, key) {
      var storeSet = store['_' + type];

      if (storeSet && Object(util["isString"])(key)) {
        if (key in storeSet) {
          return storeSet[key];
        }

        if (!store._missing[type]) {
          store._missing[type] = [];
        }

        if (!store._missing[type].includes(key)) {
          store._missing[type].push(key);
        }

        store.emit('missing', {
          type,
          key,
          log: {
            type: 'debug',
            message: "Missing ".concat(type, ": \"").concat(key, "\"")
          }
        });
      }

      return null;
    }
    /**
     * Sets a store value
     * @param {Tw2Store} store
     * @param {string} type
     * @param {string} key
     * @param {*} value
     * @param {Function} [validator]
     * @returns {boolean} true if successful
     */

  }, {
    key: "SetStoreItem",
    value: function SetStoreItem(store, type) {
      var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var value = arguments.length > 3 ? arguments[3] : undefined;
      var validator = arguments.length > 4 ? arguments[4] : undefined;

      if (validator && !validator(value)) {
        store.emit('error', {
          type,
          key,
          value,
          log: {
            type: 'error',
            message: "Invalid ".concat(type, ": \"").concat(key, "\"")
          }
        });
        return false;
      }

      var storeSet = store['_' + type];

      if (storeSet && Object(util["isString"])(key) && !Object(util["isUndefined"])(value)) {
        var oldValue = storeSet[key];
        storeSet[key] = value;
        store.emit('registered', {
          type,
          key,
          value,
          oldValue,
          log: {
            type: 'debug',
            message: "".concat(oldValue ? 'Re-registered' : 'Registered', " ").concat(type, " \"").concat(key, "\"")
          }
        });
        return true;
      }

      return false;
    }
    /**
     * Converts an object or array of objects into single function calls
     * @param {Tw2Store} store
     * @param {string} funcName
     * @param {Array|Object} obj
     * @returns {boolean}
     */

  }, {
    key: "RegisterFromObject",
    value: function RegisterFromObject(store, funcName, obj) {
      if (obj && funcName in store) {
        obj = Object(util["toArray"])(obj);

        for (var i = 0; i < obj.length; i++) {
          for (var key in obj[i]) {
            if (obj[i].hasOwnProperty(key)) {
              store[funcName](key, obj[i][key]);
            }
          }
        }

        return true;
      }

      return false;
    }
    /**
     * Restricted path prefixes
     * @type {string[]}
     */

  }]);

  return Tw2Store;
}(Tw2EventEmitter["a" /* Tw2EventEmitter */]);

Tw2Store_defineProperty(Tw2Store_Tw2Store, "RestrictedPathPrefixes", ['dynamic', 'rgba']);

Tw2Store_defineProperty(Tw2Store_Tw2Store, "category", 'variable_store');

var Tw2Store_store = new Tw2Store_Tw2Store();
// EXTERNAL MODULE: ./core/mesh/Tw2Effect.js
var Tw2Effect = __webpack_require__(13);

// EXTERNAL MODULE: ./core/vertex/index.js + 2 modules
var vertex = __webpack_require__(7);

// CONCATENATED MODULE: ./global/engine/Tw2Constant.js
/*

    Webgl & Webgl2

*/
var GL_COLOR_BUFFER_BIT = 16384;
var GL_DEPTH_BUFFER_BIT = 256;
var GL_STENCIL_BUFFER_BIT = 1024;
var GL_TEXTURE_2D = 3553;
var GL_TEXTURE_CUBE_MAP = 34067;
var GL_TEXTURE_3D = 32879;
var GL_TEXTURE_MAG_FILTER = 10240;
var GL_TEXTURE_MIN_FILTER = 10241;
var GL_TEXTURE_WRAP_S = 10242;
var GL_TEXTURE_WRAP_T = 10243;
var GL_BYTE = 5120;
var GL_UNSIGNED_BYTE = 5121;
var GL_SHORT = 5122;
var GL_UNSIGNED_SHORT = 5123;
var GL_INT = 5124;
var GL_UNSIGNED_INT = 5125;
var GL_FLOAT = 5126;
var GL_HALF_FLOAT_OES = 36193; //webgl only

var GL_HALF_FLOAT = 5131; //webgl2

var GL_DEPTH_COMPONENT16 = 33189; //webgl2

var GL_DEPTH_COMPONENT24 = 33190; //webgl2

var GL_DEPTH_COMPONENT32F = 36012; //webgl2

var GL_FLOAT_VEC2 = 35664;
var GL_FLOAT_VEC3 = 35665;
var GL_FLOAT_VEC4 = 35666;
var GL_INT_VEC2 = 35667;
var GL_INT_VEC3 = 35668;
var GL_INT_VEC4 = 35669;
var GL_BOOL = 35670;
var GL_BOOL_VEC2 = 35671;
var GL_BOOL_VEC3 = 35672;
var GL_BOOL_VEC4 = 35673;
var GL_FLOAT_MAT2 = 35674;
var GL_FLOAT_MAT3 = 35675;
var GL_FLOAT_MAT4 = 35676;
var GL_TYPE_LENGTH = {
  [GL_FLOAT]: 1,
  [GL_INT]: 1,
  [GL_BYTE]: 1,
  [GL_BOOL]: 1,
  [GL_FLOAT_VEC2]: 2,
  [GL_INT_VEC2]: 2,
  [GL_BOOL_VEC2]: 2,
  [GL_FLOAT_VEC3]: 3,
  [GL_INT_VEC3]: 3,
  [GL_BOOL_VEC3]: 3,
  [GL_FLOAT_VEC4]: 4,
  [GL_INT_VEC4]: 4,
  [GL_BOOL_VEC4]: 4,
  [GL_FLOAT_MAT3]: 9,
  [GL_FLOAT_MAT4]: 16
};
var GL_SAMPLER_2D = 35678;
var GL_SAMPLER_3D = 35679;
var GL_SAMPLER_CUBE = 35680;
var GL_DEPTH_COMPONENT = 6402;
var GL_ALPHA = 6406;
var GL_RGB = 6407;
var GL_RGBA = 6408;
var GL_LUMINANCE = 6409;
var GL_LUMINANCE_ALPHA = 6410;
var GL_DEPTH_STENCIL = 34041;
var GL_UNSIGNED_INT_24_8_WEBGL = 34042;
var GL_R8 = 33321; //webgl2

var GL_R16F = 33325; //webgl2

var GL_R32F = 33326; //webgl2

var GL_R8UI = 33330; //webgl2

var GL_RG8 = 33323; //webgl2

var GL_RG16F = 33327; //webgl2

var GL_RG32F = 33328; //webgl2

var GL_RGB8 = 32849; //webgl2

var GL_SRGB8 = 35905; //webgl2

var GL_RGB565 = 36194; //webgl2

var GL_R11F_G11F_B10F = 35898; //webgl2

var GL_RGB9_E5 = 35901; //webgl2

var GL_RGB16F = 34843; //webgl2

var GL_RGB32F = 34837; //webgl2

var GL_RGB8UI = 36221; //webgl2

var GL_RGBA8 = 32856; //webgl2

var GL_RGB5_A1 = 32855; //webgl2

var GL_RGBA16F = 34842; //webgl2

var GL_RGBA32F = 34836; //webgl2

var GL_RGBA8UI = 36220; //webgl2

var GL_RGBA16I = 36232; //webgl2

var GL_RGBA16UI = 36214; //webgl2

var GL_RGBA32I = 36226; //webgl2

var GL_RGBA32UI = 36208; //webgl2

var GL_NEAREST = 9728;
var GL_LINEAR = 9729;
var GL_NEAREST_MIPMAP_NEAREST = 9984;
var GL_LINEAR_MIPMAP_NEAREST = 9985;
var GL_NEAREST_MIPMAP_LINEAR = 9986;
var GL_LINEAR_MIPMAP_LINEAR = 9987;
var GL_REPEAT = 10497;
var GL_CLAMP_TO_EDGE = 33071;
var GL_MIRRORED_REPEAT = 33648;
var GL_ZERO = 0;
var GL_ONE = 1;
var GL_SRC_COLOR = 768;
var GL_ONE_MINUS_SRC_COLOR = 769;
var GL_SRC_ALPHA = 770;
var GL_ONE_MINUS_SRC_ALPHA = 771;
var GL_DST_ALPHA = 772;
var GL_ONE_MINUS_DST_ALPHA = 773;
var GL_DST_COLOR = 774;
var GL_ONE_MINUS_DST_COLOR = 775;
var GL_SRC_ALPHA_SATURATE = 776;
var GL_CONSTANT_COLOR = 32769;
var GL_ONE_MINUS_CONSTANT_COLOR = 32770;
var GL_CONSTANT_ALPHA = 32771;
var GL_ONE_MINUS_CONSTANT_ALPHA = 32772;
var GL_VERTEX_SHADER = 35633;
var GL_FRAGMENT_SHADER = 35632;
var GL_FRONT = 1028;
var GL_BACK = 1029;
var GL_FRONT_AND_BACK = 1032;
var GL_NEVER = 512;
var GL_LESS = 513;
var GL_EQUAL = 514;
var GL_LEQUAL = 515;
var GL_GREATER = 516;
var GL_NOTEQUAL = 517;
var GL_GEQUAL = 518;
var GL_ALWAYS = 519;
var GL_KEEP = 7680;
var GL_REPLACE = 7681;
var GL_INCR = 7682;
var GL_DECR = 7683;
var GL_INCR_WRAP = 34055;
var GL_DECR_WRAP = 34056;
var GL_INVERT = 5386;
var GL_STREAM_DRAW = 35040;
var GL_STATIC_DRAW = 35044;
var GL_DYNAMIC_DRAW = 35048;
var GL_ARRAY_BUFFER = 34962;
var GL_ELEMENT_ARRAY_BUFFER = 34963;
var GL_POINTS = 0;
var GL_LINES = 1;
var GL_LINE_LOOP = 2;
var GL_LINE_STRIP = 3;
var GL_TRIANGLES = 4;
var GL_TRIANGLE_STRIP = 5;
var GL_TRIANGLE_FAN = 6;
var GL_CW = 2304;
var GL_CCW = 2305;
var GL_CULL_FACE = 2884;
var GL_DEPTH_TEST = 2929;
var GL_BLEND = 3042;
/*

    Direct 3D and CCP

*/
// Render Mode

var RM_ANY = -1;
var RM_OPAQUE = 0;
var RM_DECAL = 1;
var RM_TRANSPARENT = 2;
var RM_ADDITIVE = 3;
var RM_DEPTH = 4;
var RM_FULLSCREEN = 5;
var RM_PICKABLE = 6;
var RM_DISTORTION = 7; // Render States

var RS_ZENABLE = 7; // D3DZBUFFERTYPE (or TRUE/FALSE for legacy)

var RS_FILLMODE = 8; // D3DFILLMODE

var RS_SHADEMODE = 9; // D3DSHADEMODE

var RS_ZWRITEENABLE = 14; // TRUE to enable z writes

var RS_ALPHATESTENABLE = 15; // TRUE to enable alpha tests

var RS_LASTPIXEL = 16; // TRUE for last-pixel on lines

var RS_SRCBLEND = 19; // D3DBLEND

var RS_DESTBLEND = 20; // D3DBLEND

var RS_CULLMODE = 22; // D3DCULL

var RS_ZFUNC = 23; // D3DCMPFUNC

var RS_ALPHAREF = 24; // D3DFIXED

var RS_ALPHAFUNC = 25; // D3DCMPFUNC

var RS_DITHERENABLE = 26; // TRUE to enable dithering

var RS_ALPHABLENDENABLE = 27; // TRUE to enable alpha blending

var RS_FOGENABLE = 28; // TRUE to enable fog blending

var RS_SPECULARENABLE = 29; // TRUE to enable specular

var RS_FOGCOLOR = 34; // D3DCOLOR

var RS_FOGTABLEMODE = 35; // D3DFOGMODE

var RS_FOGSTART = 36; // Fog start (for both vertex and pixel fog)

var RS_FOGEND = 37; // Fog end

var RS_FOGDENSITY = 38; // Fog density

var RS_RANGEFOGENABLE = 48; // Enables range-based fog

var RS_STENCILENABLE = 52; // BOOL enable/disable stenciling

var RS_STENCILFAIL = 53; // D3DSTENCILOP to do if stencil test fails

var RS_STENCILZFAIL = 54; // D3DSTENCILOP to do if stencil test passes and Z test fails

var RS_STENCILPASS = 55; // D3DSTENCILOP to do if both stencil and Z tests pass

var RS_STENCILFUNC = 56; // D3DCMPFUNC fn.  Stencil Test passes if ((ref & mask) stencilfn (stencil & mask)) is true

var RS_STENCILREF = 57; // Reference value used in stencil test

var RS_STENCILMASK = 58; // Mask value used in stencil test

var RS_STENCILWRITEMASK = 59; // Write mask applied to values written to stencil buffer

var RS_TEXTUREFACTOR = 60; // D3DCOLOR used for multi-texture blend

var RS_WRAP0 = 128; // wrap for 1st texture coord. set

var RS_WRAP1 = 129; // wrap for 2nd texture coord. set

var RS_WRAP2 = 130; // wrap for 3rd texture coord. set

var RS_WRAP3 = 131; // wrap for 4th texture coord. set

var RS_WRAP4 = 132; // wrap for 5th texture coord. set

var RS_WRAP5 = 133; // wrap for 6th texture coord. set

var RS_WRAP6 = 134; // wrap for 7th texture coord. set

var RS_WRAP7 = 135; // wrap for 8th texture coord. set

var RS_CLIPPING = 136;
var RS_LIGHTING = 137;
var RS_AMBIENT = 139;
var RS_FOGVERTEXMODE = 140;
var RS_COLORVERTEX = 141;
var RS_LOCALVIEWER = 142;
var RS_NORMALIZENORMALS = 143;
var RS_DIFFUSEMATERIALSOURCE = 145;
var RS_SPECULARMATERIALSOURCE = 146;
var RS_AMBIENTMATERIALSOURCE = 147;
var RS_EMISSIVEMATERIALSOURCE = 148;
var RS_VERTEXBLEND = 151;
var RS_CLIPPLANEENABLE = 152;
var RS_POINTSIZE = 154; // float point size

var RS_POINTSIZE_MIN = 155; // float point size min threshold

var RS_POINTSPRITEENABLE = 156; // BOOL point texture coord control

var RS_POINTSCALEENABLE = 157; // BOOL point size scale enable

var RS_POINTSCALE_A = 158; // float point attenuation A value

var RS_POINTSCALE_B = 159; // float point attenuation B value

var RS_POINTSCALE_C = 160; // float point attenuation C value

var RS_MULTISAMPLEANTIALIAS = 161; // BOOL - set to do FSAA with multisample buffer

var RS_MULTISAMPLEMASK = 162; // DWORD - per-sample enable/disable

var RS_PATCHEDGESTYLE = 163; // Sets whether patch edges will use float style tessellation

var RS_DEBUGMONITORTOKEN = 165; // DEBUG ONLY - token to debug monitor

var RS_POINTSIZE_MAX = 166; // float point size max threshold

var RS_INDEXEDVERTEXBLENDENABLE = 167;
var RS_COLORWRITEENABLE = 168; // per-channel write enable

var RS_TWEENFACTOR = 170; // float tween factor

var RS_BLENDOP = 171; // D3DBLENDOP setting

var RS_POSITIONDEGREE = 172; // NPatch position interpolation degree. D3DDEGREE_LINEAR or D3DDEGREE_CUBIC (default)

var RS_NORMALDEGREE = 173; // NPatch normal interpolation degree. D3DDEGREE_LINEAR (default) or D3DDEGREE_QUADRATIC

var RS_SCISSORTESTENABLE = 174;
var RS_SLOPESCALEDEPTHBIAS = 175;
var RS_ANTIALIASEDLINEENABLE = 176;
var RS_TWOSIDEDSTENCILMODE = 185; // BOOL enable/disable 2 sided stenciling

var RS_CCW_STENCILFAIL = 186; // D3DSTENCILOP to do if ccw stencil test fails

var RS_CCW_STENCILZFAIL = 187; // D3DSTENCILOP to do if ccw stencil test passes and Z test fails

var RS_CCW_STENCILPASS = 188; // D3DSTENCILOP to do if both ccw stencil and Z tests pass

var RS_CCW_STENCILFUNC = 189; // D3DCMPFUNC fn.  ccw Stencil Test passes if ((ref & mask) stencilfn (stencil & mask)) is true

var RS_COLORWRITEENABLE1 = 190; // Additional ColorWriteEnables for the devices that support D3DPMISCCAPS_INDEPENDENTWRITEMASKS

var RS_COLORWRITEENABLE2 = 191; // Additional ColorWriteEnables for the devices that support D3DPMISCCAPS_INDEPENDENTWRITEMASKS

var RS_COLORWRITEENABLE3 = 192; // Additional ColorWriteEnables for the devices that support D3DPMISCCAPS_INDEPENDENTWRITEMASKS

var RS_BLENDFACTOR = 193; // D3DCOLOR used for a constant blend factor during alpha blending for devices that support D3DPBLENDCAPS_BLENDFACTOR

var RS_SRGBWRITEENABLE = 194; // Enable rendertarget writes to be DE-linearized to SRGB (for formats that expose D3DUSAGE_QUERY_SRGBWRITE)

var RS_DEPTHBIAS = 195;
var RS_SEPARATEALPHABLENDENABLE = 206; // TRUE to enable a separate blending function for the alpha channel

var RS_SRCBLENDALPHA = 207; // SRC blend factor for the alpha channel when RS_SEPARATEDESTALPHAENABLE is TRUE

var RS_DESTBLENDALPHA = 208; // DST blend factor for the alpha channel when RS_SEPARATEDESTALPHAENABLE is TRUE

var RS_BLENDOPALPHA = 209; // Blending operation for the alpha channel when RS_SEPARATEDESTALPHAENABLE is TRUE */// Cull Modes

var CULL_NONE = 1;
var CULL_CW = 2;
var CULL_CCW = 3; // Compare

var CMP_NEVER = 1;
var CMP_LESS = 2;
var CMP_EQUAL = 3;
var CMP_LEQUAL = 4;
var CMP_GREATER = 5;
var CMP_NOTEQUAL = 6;
var CMP_GREATEREQUAL = 7;
var CMP_ALWAYS = 8; // Blend

var BLEND_ZERO = 1;
var BLEND_ONE = 2;
var BLEND_SRCCOLOR = 3;
var BLEND_INVSRCCOLOR = 4;
var BLEND_SRCALPHA = 5;
var BLEND_INVSRCALPHA = 6;
var BLEND_DESTALPHA = 7;
var BLEND_INVDESTALPHA = 8;
var BLEND_DESTCOLOR = 9;
var BLEND_INVDESTCOLOR = 10;
var BLEND_SRCALPHASAT = 11;
var BLEND_BOTHSRCALPHA = 12;
var BLEND_BOTHINVSRCALPHA = 13;
var BLEND_BLENDFACTOR = 14;
var BLEND_INVBLENDFACTOR = 15; // Blend Operations

var BLENDOP_ADD = 1;
var BLENDOP_SUBTRACT = 2;
var BLENDOP_REVSUBTRACT = 3;
var BLENDOP_MIN = 4;
var BLENDOP_MAX = 5; // Texture format aliases

var TF_ALPHA = 0;
var TF_LUMINANCE = 1;
var TF_LUMINANCE_ALPHA = 2;
var TF_RGB = 4;
var TF_RGBA = 5;
var TF_RED = 6;
var TF_R = 6;
var TF_RG = 7;
var TF_RED_INTEGER = 8;
var TF_R_INTEGER = 8;
var TF_RG_INTEGER = 9;
var TF_RGB_INTEGER = 10;
var TF_RGBA_INTEGER = 11; // Texture types aliases

var TT_UNSIGNED_BYTE = 0;
var TT_UNSIGNED_INT = 0;
var TT_FLOAT = 1;
var TT_HALF_FLOAT = 2;
var TT_BYTE = 3;
var TT_SHORT = 4;
var TT_UNSIGNED_SHORT = 5;
var TT_INT = 6;
var TT_UNSIGNED_INTEGER = 7;
var TT_UNSIGNED_SHORT_4_4_4_4 = 8;
var TT_UNSIGNED_SHORT_5_5_5_1 = 9;
var TT_UNSIGNED_SHORT_5_6_5 = 10;
var TT_UNSIGNED_INT_2_10_10_10_REV = 11;
var TT_UNSIGNED_INT_24_8 = 12;
var TT_UNSIGNED_INT_10F_11F_11F_REV = 13;
var TT_UNSIGNED_INT_5_9_9_9_REV = 14;
var TT_FLOAT_32_UNSIGNED_INT_24_8_REV = 15; // Texture Wrap modes

var WrapModes = [0, GL_REPEAT, GL_MIRRORED_REPEAT, GL_CLAMP_TO_EDGE, GL_CLAMP_TO_EDGE, GL_CLAMP_TO_EDGE]; // Blend Table

var BlendTable = [-1, // --
GL_ZERO, // D3DBLEND_ZERO
GL_ONE, // D3DBLEND_ONE
GL_SRC_COLOR, // D3DBLEND_SRCCOLOR
GL_ONE_MINUS_SRC_COLOR, // D3DBLEND_INVSRCCOLOR
GL_SRC_ALPHA, // D3DBLEND_SRCALPHA
GL_ONE_MINUS_SRC_ALPHA, // D3DBLEND_INVSRCALPHA
GL_DST_ALPHA, // D3DBLEND_DESTALPHA
GL_ONE_MINUS_DST_ALPHA, // D3DBLEND_INVDESTALPHA
GL_DST_COLOR, // D3DBLEND_DESTCOLOR
GL_ONE_MINUS_DST_COLOR, // D3DBLEND_INVDESTCOLOR
GL_SRC_ALPHA_SATURATE, // D3DBLEND_SRCALPHASAT
-1, // D3DBLEND_BOTHSRCALPHA
-1, // D3DBLEND_BOTHINVSRCALPHA
GL_CONSTANT_COLOR, // D3DBLEND_BLENDFACTOR
GL_ONE_MINUS_CONSTANT_COLOR // D3DBLEND_INVBLENDFACTOR
]; // Filter mode conversions

var FilterMode = {
  [GL_NEAREST]: 1,
  [GL_LINEAR]: 2
}; // Mip filter mode conversions

var MipFilterMode = {
  [GL_NEAREST]: 0,
  [GL_LINEAR]: 0,
  [GL_NEAREST_MIPMAP_NEAREST]: 1,
  [GL_LINEAR_MIPMAP_NEAREST]: 1,
  [GL_NEAREST_MIPMAP_LINEAR]: 2,
  [GL_LINEAR_MIPMAP_LINEAR]: 2
};
/*

  Direct Draw Surface
  https://docs.microsoft.com/en-us/windows/desktop/direct3ddds/dx-graphics-dds-pguide

*/

var DDS_MAGIC = 0x20534444;
var DDSD_CAPS = 0x1;
var DDSD_HEIGHT = 0x2;
var DDSD_WIDTH = 0x4;
var DDSD_PITCH = 0x8;
var DDSD_PIXELFORMAT = 0x1000;
var DDSD_MIPMAPCOUNT = 0x20000;
var DDSD_LINEARSIZE = 0x80000;
var DDSD_DEPTH = 0x800000;
var DDSCAPS_COMPLEX = 0x8;
var DDSCAPS_MIPMAP = 0x400000;
var DDSCAPS_TEXTURE = 0x1000;
var DDSCAPS2_CUBEMAP = 0x200;
var DDSCAPS2_CUBEMAP_POSITIVEX = 0x400;
var DDSCAPS2_CUBEMAP_NEGATIVEX = 0x800;
var DDSCAPS2_CUBEMAP_POSITIVEY = 0x1000;
var DDSCAPS2_CUBEMAP_NEGATIVEY = 0x2000;
var DDSCAPS2_CUBEMAP_POSITIVEZ = 0x4000;
var DDSCAPS2_CUBEMAP_NEGATIVEZ = 0x8000;
var DDSCAPS2_VOLUME = 0x200000;
var DDPF_ALPHAPIXELS = 0x1;
var DDPF_ALPHA = 0x2;
var DDPF_FOURCC = 0x4;
var DDPF_RGB = 0x40;
var DDPF_YUV = 0x200;
var DDPF_LUMINANCE = 0x20000;
var DDS_HEADER_LENGTH_INT = 31;
var DDS_HEADER_OFFSET_MAGIC = 0;
var DDS_HEADER_OFFSET_SIZE = 1;
var DDS_HEADER_OFFSET_FLAGS = 2;
var DDS_HEADER_OFFSET_HEIGHT = 3;
var DDS_HEADER_OFFSET_WIDTH = 4;
var DDS_HEADER_OFFSET_MIPMAP_COUNT = 7;
var DDS_HEADER_OFFSET_PF_FLAGS = 20;
var DDS_HEADER_OFFSET_PF_FOURCC = 21;
var DDS_HEADER_OFFSET_RGB_BPP = 22;
var DDS_HEADER_OFFSET_R_MASK = 23;
var DDS_HEADER_OFFSET_G_MASK = 24;
var DDS_HEADER_OFFSET_B_MASK = 25;
var DDS_HEADER_OFFSET_A_MASK = 26;
var DDS_HEADER_OFFSET_CAPS1 = 27;
var DDS_HEADER_OFFSET_CAPS2 = 28;
var DDS_HEADER_OFFSET_CAPS3 = 29;
var DDS_HEADER_OFFSET_CAPS4 = 30;
var DDS_HEADER_OFFSET_DXGI_FORMAT = 32;
var FOURCC_DXT1 = 827611204;
var FOURCC_DXT5 = 894720068;
var FOURCC_DXT3 = 861165636;
var FOURCC_DXT10 = 827611204;
var FOURCC_D3DFMT_R16G16B16A16F = 113;
var FOURCC_D3DFMT_R32G32B32A32F = 116;
var DXGI_FORMAT_R16G16B16A16_FLOAT = 10;
var DXGI_FORMAT_B8G8R8X8_UNORM = 88;
/*

    Browser and Vendors

 */

/**
 * Vendor request animation frame names
 * @type {string[]}
 */

var VendorRequestAnimationFrame = ['requestAnimationFrame', 'webkitRequestAnimationFrame', 'mozRequestAnimationFrame', 'oRequestAnimationFrame', 'msRequestAnimationFrame'];
/**
 * Vendor cancel animation frame names
 * @type {string[]}
 */

var VendorCancelAnimationFrame = ['cancelAnimationFrame', 'webkitRequestAnimationFrame', 'mozRequestAnimationFrame', 'oRequestAnimationFrame', 'msRequestAnimationFrame'];
/**
 * Vendor request full screen
 * @type {string[]}
 */

var VendorRequestFullScreen = ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen'];
/**
 * Vendor exit full screen
 * @type {string[]}
 */

var VendorExitFullScreen = ['exitFullscreen', 'webkitExitFullscreen', 'mozCancelFullScreen', 'msExitFullscreen'];
/**
 * Vendor get full screen element
 * @type {string[]}
 */

var VendorGetFullScreenElement = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'];
/**
 * Webgl vendor prefixes
 * @type {string[]}
 */

var VendorWebglPrefixes = ['', 'MOZ_', 'WEBKIT_', 'WEBGL_'];
/**
 * Webgl context names
 * @type {string[]}
 */

var WebglContextNames = ['webgl', 'experimental-webgl'];
/**
 * Webgl2 context names
 * @type {string[]}
 */

var Webgl2ContextNames = ['webgl2', 'experimental-webgl2'];
/**
 * Webgl version
 * @type {{NONE: number, WEBGL: number, WEBGL2: number}}
 */

var WebglVersion = {
  NONE: 0,
  WEBGL: 1,
  WEBGL2: 2
};
// CONCATENATED MODULE: ./global/engine/Tw2Device.js
function Tw2Device_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Tw2Device_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Tw2Device_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tw2Device_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tw2Device_defineProperties(Constructor, staticProps); return Constructor; }

function Tw2Device_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Tw2Device_setPrototypeOf(subClass, superClass); }

function Tw2Device_setPrototypeOf(o, p) { Tw2Device_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tw2Device_setPrototypeOf(o, p); }

function Tw2Device_createSuper(Derived) { var hasNativeReflectConstruct = Tw2Device_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Tw2Device_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Tw2Device_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Tw2Device_possibleConstructorReturn(this, result); }; }

function Tw2Device_possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return Tw2Device_assertThisInitialized(self); }

function Tw2Device_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Tw2Device_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Tw2Device_getPrototypeOf(o) { Tw2Device_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tw2Device_getPrototypeOf(o); }

function Tw2Device_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var WebGLDebugUtil = __webpack_require__(30);
/**
 * Tw2Device
 *
 * @property {?WebGLRenderingContext|*} gl         - The device's gl context
 * @property {?number} glVersion                   - The device's gl version
 * @property {?VRDisplay} vrDisplay                - An optional VRDisplay context
 * @property {?{}} ext                             - An object containing compatibility extensions
 * @property {boolean} debugMode                   - Toggles debug mode
 * @property {?{}} debugUtils                      - Webgl debug utils
 * @property {number} dt                           - Clock delta time
 * @property {number} startTime                    - Clock start time
 * @property {number} currentTime                  - Clock current time
 * @property {?number} previousTime                - Clock previous time
 * @property {vec3} eyePosition                    - The device's current eye position
 * @property {vec4} targetResolution               - The device's current target resolution
 * @property {mat4} world                          - The device's current world matrix
 * @property {mat4} view                           - The device's current view matrix
 * @property {mat4} viewInverse                    - The device's current inverse view matrix
 * @property {mat4} viewTranspose                  - The device's current view matrix transposed
 * @property {mat4} projection                     - The device's current projection matrix
 * @property {mat4} projectionInverse              - The device's current inverse projection matrix
 * @property {mat4} projectionTranspose            - The device's current projection matrix transposed
 * @property {mat4} viewProjection                 - The device's current view projection matrix
 * @property {mat4} viewProjectionTranspose        - The device's current view projection matrix transposed
 * @property {?HTMLCanvasElement} canvas           - The html canvas the gl context was created from
 * @property {number} viewportWidth                - The canvas's current width
 * @property {number} viewportHeight               - The canvas's current height
 * @property {number} viewportAspect               - The canvas's current display aspect
 * @property {number} viewportPixelRatio           - The canvas's pixel ratio
 * @property {string} effectDir                    - The directory used to translate ccp effect file paths
 * @property {number} mipLevelSkipCount            - Controls what quality ccp texture resource to load (mutates paths)
 * @property {string} shaderModel                  - Controls what quality ccp effect resource to load (mutates paths)
 * @property {boolean} enableAnisotropicFiltering  - Enables anisotropic filtering
 * @property {boolean} alphaBlendBackBuffer        - Enables alpha blending (glParams.alpha)
 * @property {boolean} antialiasing                - Identifies if antialiasing is enabled
 * @property {number} msaaSamples                  - The amount of samples used for antialiasing
 * @property {number[]} wrapModes                  - texture wrap modes
 * @property {*} shadowHandles                     - unused
 * @property {Tw2PerObjectData} perObjectData      - The current frame's per object data
 * @property {?{}} _alphaBlendState                - Alpha states for blending
 * @property {?{}} _alphaTestState                 - Alpha test states
 * @property {?{}} _depthOffsetState               - Depth states
 * @property {?Float32Array} _shadowStateBuffer    - unused
 * @property {Array<Function>} _scheduled          - Functions that are scheduled to be called per frame
 * @property {WebGLBuffer} _quadBuffer             - Webgl buffer for full screen quad
 * @property {Tw2VertexDeclaration} _quadDecl      - Quad vertex declarations
 * @property {WebGLBuffer} _cameraQuadBuffer       - Webgl buffer for camera space quad
 * @property {number} _currentRenderMode           - The device's current render mode
 * @property {WebGLTexture} _fallbackCube          - A fallback cube texture
 * @property {WebGLTexture} _fallbackTexture       - A fallback texture
 * @property {Tw2Effect} _blitEffect               - The blit effect used for rendering textures
 * @class
 */


var Tw2Device_Tw2Device = /*#__PURE__*/function (_Tw2EventEmitter) {
  Tw2Device_inherits(Tw2Device, _Tw2EventEmitter);

  var _super = Tw2Device_createSuper(Tw2Device);

  function Tw2Device() {
    var _this;

    Tw2Device_classCallCheck(this, Tw2Device);

    _this = _super.call(this);
    _this.name = 'Device';
    _this.gl = null;
    _this.glVersion = WebglVersion.NONE;
    _this.vrDisplay = null;
    _this.ext = null;
    _this.dt = 0;
    _this.frameCounter = 0;
    _this.startTime = _this.Now();
    _this.currentTime = _this.startTime;
    _this.previousTime = null;
    _this.eyePosition = math["vec3"].create();
    _this.targetResolution = math["vec4"].create();
    _this.world = math["mat4"].create();
    _this.view = math["mat4"].create();
    _this.viewInverse = math["mat4"].create();
    _this.viewTranspose = math["mat4"].create();
    _this.projection = math["mat4"].create();
    _this.projectionInverse = math["mat4"].create();
    _this.projectionTranspose = math["mat4"].create();
    _this.viewProjection = math["mat4"].create();
    _this.viewProjectionTranspose = math["mat4"].create();
    _this.canvas = null;
    _this.viewportWidth = 0;
    _this.viewportHeight = 0;
    _this.viewportAspect = 0;
    _this.viewportPixelRatio = 'devicePixelRatio' in window ? window.devicePixelRatio : 1;
    _this.effectDir = '/effect.gles2/';
    _this.mipLevelSkipCount = 0;
    _this.shaderModel = 'hi';
    _this.enableAnisotropicFiltering = true;
    _this.alphaBlendBackBuffer = true;
    _this.antialiasing = true;
    _this.msaaSamples = 0;
    _this.wrapModes = [];
    _this.shadowHandles = null;
    _this.perObjectData = null;
    _this._alphaBlendState = null;
    _this._alphaTestState = null;
    _this._depthOffsetState = null;
    _this._shadowStateBuffer = null;
    _this._scheduled = [];
    _this._quadBuffer = null;
    _this._quadDecl = null;
    _this._cameraQuadBuffer = null;
    _this._currentRenderMode = RM_ANY;
    _this._fallbackCube = null;
    _this._fallbackTexture = null;
    _this._blitEffect = null;
    return _this;
  }
  /**
   * Gets the current device time
   * @returns {number}
   */


  Tw2Device_createClass(Tw2Device, [{
    key: "Now",
    value: function Now() {
      return this.constructor.Clock.now();
    }
    /**
     * Creates webgl Device
     * @param {HTMLCanvasElement} canvas - The html canvas to create a webgl rendering context from
     * @param {{}} [params]              - Optional gl parameters
     * @param {boolean} [params.webgl2]  - Optional flag to enable a webgl2 rendering context
     * @returns {number}                 - The webgl rendering context create (0 if failed)
     */

  }, {
    key: "CreateDevice",
    value: function CreateDevice(canvas, params) {
      this.gl = null;
      this.glVersion = WebglVersion.NONE;
      this.effectDir = '/effect.gles2/';
      this.canvas = null;
      this.doneInit = false;

      var returnFalse = () => false,
          returnTrue = () => true;

      this.ext = {
        drawElementsInstanced: returnFalse,
        drawArraysInstanced: returnFalse,
        vertexAttribDivisor: returnFalse,
        hasInstancedArrays: returnFalse
      };

      var _Tw2Device$CreateCont = Tw2Device.CreateContext(canvas, params, params.webgl2),
          gl = _Tw2Device$CreateCont.gl,
          version = _Tw2Device$CreateCont.version;

      if (!gl) return this.glVersion;

      if (this.debugMode) {
        this.debugUtils = WebGLDebugUtil;
        gl = this.debugUtils.makeDebugContext(gl);
      }

      this.gl = gl;
      this.glVersion = version;
      this.canvas = canvas;
      this.emit('created', {
        device: this,
        gl,
        params,
        canvas,
        log: {
          type: 'debug',
          message: "Webgl".concat(version, " context created")
        }
      });

      switch (this.glVersion) {
        case WebglVersion.WEBGL2:
          this.ext = {
            drawElementsInstanced: function drawElementsInstanced(mode, count, type, offset, instanceCount) {
              gl.drawElementsInstanced(mode, count, type, offset, instanceCount);
            },
            drawArraysInstanced: function drawArraysInstanced(mode, first, count, instanceCount) {
              gl.drawArraysInstanced(mode, first, count, instanceCount);
            },
            vertexAttribDivisor: function vertexAttribDivisor(location, divisor) {
              gl.vertexAttribDivisor(location, divisor);
            },
            hasInstancedArrays: returnTrue
          };
          break;

        default:
          this.GetExtension('OES_standard_derivatives');
          this.GetExtension('OES_element_index_uint');
          this.GetExtension('OES_texture_float');
          this.GetExtension('EXT_shader_texture_lod');
          var instancedArrays = this.GetExtension('ANGLE_instanced_arrays');

          if (instancedArrays) {
            this.ext = {
              drawElementsInstanced: function drawElementsInstanced(mode, count, type, offset, instanceCount) {
                instancedArrays['drawElementsInstancedANGLE'](mode, count, type, offset, instanceCount);
              },
              drawArraysInstanced: function drawArraysInstanced(mode, first, count, instanceCount) {
                instancedArrays['drawArraysInstancedANGLE'](mode, first, count, instanceCount);
              },
              vertexAttribDivisor: function vertexAttribDivisor(location, divisor) {
                instancedArrays['vertexAttribDivisorANGLE'](location, divisor);
              },
              hasInstancedArrays: returnTrue
            };
          }

      } // Optional extensions


      this.ext.CompressedTextureS3TC = this.GetExtension('compressed_texture_s3tc');
      this.ext.AnisotropicFilter = this.GetExtension('EXT_texture_filter_anisotropic');

      if (this.ext.AnisotropicFilter) {
        this.ext.AnisotropicFilter.maxAnisotropy = gl.getParameter(this.ext.AnisotropicFilter['MAX_TEXTURE_MAX_ANISOTROPY_EXT']);
      } // CCP mobile shader binary (is this depreciated?)


      var shaderBinary = this.GetExtension('CCP_shader_binary');

      if (shaderBinary) {
        var renderer = gl.getParameter(this.gl.RENDERER),
            maliVer = renderer.match(/Mali-(\w+).*/);

        if (maliVer) {
          this.effectDir = '/effect.gles2.mali' + maliVer[1] + '/';
          this.ext.ShaderBinary = shaderBinary;
        }
      } // Quality


      this.alphaBlendBackBuffer = !params || params['alpha'] === undefined || params['alpha'];
      this.msaaSamples = this.gl.getParameter(this.gl.SAMPLES);
      this.antialiasing = this.msaaSamples > 1;
      this.Resize();
      var vertices = [1.0, 1.0, 0.0, 1.0, 1.0, 1.0, -1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, 0.0, 0.0];
      this._quadBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, this._quadBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
      this._cameraQuadBuffer = gl.createBuffer();
      this._quadDecl = new vertex["a" /* Tw2VertexDeclaration */]([['POSITION', 0, 4], ['TEXCOORD', 0, 2]]);
      this.wrapModes = Array.from(WrapModes);
      this._alphaBlendState = {
        dirty: false,
        states: {
          [RS_SRCBLEND]: BLEND_SRCALPHA,
          [RS_DESTBLEND]: BLEND_INVSRCALPHA,
          [RS_BLENDOP]: BLENDOP_ADD,
          [RS_SEPARATEALPHABLENDENABLE]: 0,
          [RS_BLENDOPALPHA]: BLENDOP_ADD,
          [RS_SRCBLENDALPHA]: BLEND_SRCALPHA,
          [RS_DESTBLENDALPHA]: BLEND_INVSRCALPHA
        }
      };
      this._alphaTestState = {
        dirty: false,
        states: {
          [RS_ALPHATESTENABLE]: 0,
          [RS_ALPHAREF]: -1,
          [RS_ALPHAFUNC]: CMP_GREATER,
          [RS_CLIPPING]: 0,
          [RS_CLIPPLANEENABLE]: 0
        }
      };
      this._depthOffsetState = {
        dirty: false,
        states: {
          [RS_SLOPESCALEDEPTHBIAS]: 0,
          [RS_DEPTHBIAS]: 0
        }
      };
      this._shadowStateBuffer = new Float32Array(24);
      return this.glVersion;
    }
    /**
     * Schedules a function to be called per tick
     * @param {Function} func
     */

  }, {
    key: "Schedule",
    value: function Schedule(func) {
      if (!this._scheduled.includes(func)) {
        this._scheduled.push(func);
      }
    }
    /**
     * Handles resize events
     */

  }, {
    key: "Resize",
    value: function Resize() {
      var vrEnabled = this.vrDisplay && this.vrDisplay['isPresenting'];

      if (vrEnabled) {
        var leftEye = this.vrDisplay['getEyeParameters']('left'),
            rightEye = this.vrDisplay['getEyeParameters']('right');
        this.canvas.width = Math.max(leftEye['renderWidth'], rightEye['renderWidth']) * 2;
        this.canvas.height = Math.max(rightEye['renderHeight'], rightEye['renderHeight']);
      } else {
        this.canvas.width = this.canvas.offsetWidth * this.viewportPixelRatio;
        this.canvas.height = this.canvas.offsetHeight * this.viewportPixelRatio;
      }

      this.viewportWidth = this.canvas.clientWidth;
      this.viewportHeight = this.canvas.clientHeight;
      this.viewportAspect = this.viewportWidth / this.viewportHeight;
      Tw2Store_store.SetVariableValue('ViewportSize', [this.viewportWidth, this.viewportHeight, this.viewportWidth, this.viewportHeight]);
      this.emit('resized', {
        width: this.viewportWidth,
        height: this.viewportHeight,
        aspect: this.viewportAspect,
        source: vrEnabled ? this.vrDisplay : this.canvas
      });
    }
    /**
     * Per frame Tick
     */

  }, {
    key: "Tick",
    value: function Tick() {
      if (this.canvas.clientWidth !== this.viewportWidth || this.canvas.clientHeight !== this.viewportHeight) {
        this.Resize();
      }

      var previousTime = this.previousTime === null ? 0 : this.previousTime,
          now = this.Now();
      this.currentTime = (now - this.startTime) * 0.001;
      this.dt = this.previousTime === null ? 0 : (now - this.previousTime) * 0.001;
      this.previousTime = now;
      Tw2Store_store.SetVariableValue('Time', [this.currentTime, this.currentTime - Math.floor(this.currentTime), this.frameCounter, previousTime]);
      this.emit('tick', {
        dt: this.dt,
        previous: previousTime,
        current: this.currentTime,
        frame: this.frameCounter
      });

      if (!this.doneInit) {
        Tw2ResMan_resMan.PrepareLoop(this.dt);

        for (var i = 0; i < this._scheduled.length; ++i) {
          if (!this._scheduled[i](this.dt)) {
            this._scheduled.splice(i, 1);

            --i;
          }
        }

        this.doneInit = true;
      }

      this.frameCounter++;
    }
    /**
     * Requests an animation frame
     * @param {Function} callback
     * @returns {number}
     */

  }, {
    key: "RequestAnimationFrame",
    value: function RequestAnimationFrame(callback) {
      return this.vrDisplay ? this.vrDisplay.requestAnimationFrame(callback) : Tw2Device.RequestAnimationFrame(callback);
    }
    /**
     * Cancels an animation frame
     * @param id
     * @returns {*}
     */

  }, {
    key: "CancelAnimationFrame",
    value: function CancelAnimationFrame(id) {
      return this.vrDisplay ? this.vrDisplay.cancelAnimationFrame(id) : Tw2Device.CancelAnimationFrame(id);
    }
    /**
     * Sets World transform matrix
     * @param {mat4} matrix
     */

  }, {
    key: "SetWorld",
    value: function SetWorld(matrix) {
      math["mat4"].copy(this.world, matrix); //mat4.inverse(this.worldInverse, this.world);
    }
    /**
     * Sets view matrix
     * @param {mat4} matrix
     */

  }, {
    key: "SetView",
    value: function SetView(matrix) {
      math["mat4"].copy(this.view, matrix);
      math["mat4"].invert(this.viewInverse, this.view);
      math["mat4"].transpose(this.viewTranspose, this.view);
      math["mat4"].getTranslation(this.eyePosition, this.viewInverse);
      this.UpdateViewProjection();
    }
    /**
     * Sets projection matrix
     * @param {mat4} matrix
     * @param {boolean} [forceUpdateViewProjection]
     */

  }, {
    key: "SetProjection",
    value: function SetProjection(matrix, forceUpdateViewProjection) {
      math["mat4"].copy(this.projection, matrix);
      math["mat4"].transpose(this.projectionTranspose, this.projection);
      math["mat4"].invert(this.projectionInverse, this.projection);
      this.GetTargetResolution(this.targetResolution);
      if (forceUpdateViewProjection) this.UpdateViewProjection();
    }
    /**
     * Updates view projection matrices
     */

  }, {
    key: "UpdateViewProjection",
    value: function UpdateViewProjection() {
      math["mat4"].multiply(this.viewProjection, this.projection, this.view);
      math["mat4"].transpose(this.viewProjectionTranspose, this.viewProjection);
      Tw2Store_store.SetVariableValue('ViewProjectionMat', this.viewProjection);
    }
    /**
     * Gets the device's target resolution
     * @param {vec4} [out=vec4.create()]
     * @returns {vec4} out
     */

  }, {
    key: "GetTargetResolution",
    value: function GetTargetResolution() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : math["vec4"].create();
      var aspectRatio = this.projection[0] ? this.projection[5] / this.projection[0] : 0.0;
      var aspectAdjustment = 1.0;
      if (aspectRatio > 1.6) aspectAdjustment = aspectRatio / 1.6;
      var fov = 2.0 * Math.atan(aspectAdjustment / this.projection[5]);
      out[0] = this.viewportWidth;
      out[1] = this.viewportHeight;
      out[2] = fov;
      out[3] = fov * aspectRatio;
      return out;
    }
    /**
     * GetEyePosition
     * @param {vec3} [out=vec3.create()]
     * @return {vec3}
     */

  }, {
    key: "GetEyePosition",
    value: function GetEyePosition() {
      var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : math["vec3"].create();
      return math["vec3"].copy(out, this.eyePosition);
    }
    /**
     * Returns whether or not Alpha Test is enabled
     * return {Boolean}
     */

  }, {
    key: "IsAlphaTestEnabled",
    value: function IsAlphaTestEnabled() {
      return this._alphaTestState.states[RS_ALPHATESTENABLE];
    }
    /**
     * Checks if a frame buffer is complete
     *
     * @param frameBuffer
     * @returns {boolean}
     */

  }, {
    key: "IsFrameBufferComplete",
    value: function IsFrameBufferComplete(frameBuffer) {
      return this.gl.checkFramebufferStatus(frameBuffer) === this.gl.FRAMEBUFFER_COMPLETE;
    }
    /**
     * Gets a gl extension
     * @param {string} extension - The gl extension name
     * @returns{*}
     */

  }, {
    key: "GetExtension",
    value: function GetExtension(extension) {
      for (var i = 0; i < VendorWebglPrefixes.length; i++) {
        var ext = this.gl.getExtension(VendorWebglPrefixes[i] + extension);
        if (ext) return ext;
      }

      return null;
    }
    /**
     * Gets a fallback texture
     * @returns {*}
     */

  }, {
    key: "GetFallbackTexture",
    value: function GetFallbackTexture() {
      if (!this._fallbackTexture) {
        this._fallbackTexture = this.CreateSolidTexture();
      }

      return this._fallbackTexture;
    }
    /**
     * Gets a fallback cube map
     * @returns {*}
     */

  }, {
    key: "GetFallbackCubeMap",
    value: function GetFallbackCubeMap() {
      if (!this._fallbackCube) {
        this._fallbackCube = this.CreateSolidCube();
      }

      return this._fallbackCube;
    }
    /**
     * Creates a solid colored texture
     * @param {vec4|Array} [rgba] - The colour to create, if omitted defaults to completely transparent
     * @returns {WebGLTexture}
     */

  }, {
    key: "CreateSolidTexture",
    value: function CreateSolidTexture() {
      var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 0, 0];
      var gl = this.gl,
          texture = this.gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(rgba));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.bindTexture(gl.TEXTURE_2D, null);
      return texture;
    }
    /**
     * Creates a solid coloured cube texture
     * @param {vec4|Array} rgba
     * @returns {WebGLTexture}
     */

  }, {
    key: "CreateSolidCube",
    value: function CreateSolidCube() {
      var rgba = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 0, 0, 0];
      var gl = this.gl,
          texture = this.gl.createTexture();
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);

      for (var j = 0; j < 6; ++j) {
        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(rgba));
      }

      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.NEAREST); //gl.generateMipmap(gl.TEXTURE_CUBE_MAP);

      gl.bindTexture(gl.TEXTURE_CUBE_MAP, null);
      return texture;
    }
    /**
     * RenderFullScreenQuad
     * @param {Tw2Effect} effect
     * @param {string} technique - Technique name
     * @returns {boolean}
     */

  }, {
    key: "RenderFullScreenQuad",
    value: function RenderFullScreenQuad(effect) {
      var technique = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Main';
      if (!effect || !effect.IsGood()) return false;
      var gl = this.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._quadBuffer);

      for (var pass = 0; pass < effect.GetPassCount(technique); ++pass) {
        effect.ApplyPass(technique, pass);
        if (!this._quadDecl.SetDeclaration(effect.GetPassInput(technique, pass), 24)) return false;
        this.ApplyShadowState();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      return true;
    }
    /**
     * Renders a Texture to the screen
     * @param {Tw2TextureRes} texture
     * @returns {boolean}
     */

  }, {
    key: "RenderTexture",
    value: function RenderTexture(texture) {
      if (this._blitEffect === null) {
        this._blitEffect = Tw2Effect["a" /* Tw2Effect */].create({
          effectFilePath: 'res:/graphics/effect/managed/space/system/blit.fx',
          textures: {
            BlitSource: ''
          }
        });
      }

      this._blitEffect.parameters['BlitSource'].SetTextureRes(texture);

      return this.RenderFullScreenQuad(this._blitEffect);
    }
    /**
     * RenderCameraSpaceQuad
     * @param {Tw2Effect} effect
     * @param {string} technique - Technique name
     * @returns {boolean}
     */

  }, {
    key: "RenderCameraSpaceQuad",
    value: function RenderCameraSpaceQuad(effect) {
      var technique = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Main';
      if (!effect || !effect.IsGood()) return false;
      var vertices = new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 1.0, -1.0, 1.0, 0.0, 1.0, 0.0, 1.0, 1.0, -1.0, 0.0, 1.0, 1.0, 0.0, -1.0, -1.0, 0.0, 1.0, 0.0, 0.0]);
      var projInv = this.projectionInverse;

      for (var i = 0; i < 4; ++i) {
        var vec = vertices.subarray(i * 6, i * 6 + 4);
        math["vec4"].transformMat4(vec, vec, projInv);
        math["vec3"].scale(vec, vec, 1 / vec[3]);
        vec[3] = 1;
      }

      var gl = this.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this._cameraQuadBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      for (var pass = 0; pass < effect.GetPassCount(technique); ++pass) {
        effect.ApplyPass(technique, pass);
        if (!this._quadDecl.SetDeclaration(effect.GetPassInput(technique, pass), 24)) return false;
        this.ApplyShadowState();
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }

      return true;
    }
    /**
     * Set a render state
     * @param state
     * @param value
     */

  }, {
    key: "SetRenderState",
    value: function SetRenderState(state, value) {
      var gl = this.gl;
      this._currentRenderMode = RM_ANY;

      switch (state) {
        case RS_ZENABLE:
          if (value) {
            gl.enable(gl.DEPTH_TEST);
          } else {
            gl.disable(gl.DEPTH_TEST);
          }

          return;

        case RS_ZWRITEENABLE:
          gl.depthMask(!!value);
          return;

        case RS_ALPHATESTENABLE:
        case RS_ALPHAREF:
        case RS_ALPHAFUNC:
        case RS_CLIPPING:
        case RS_CLIPPLANEENABLE:
          if (this._alphaTestState[state] !== value) {
            this._alphaTestState.states[state] = value;
            this._alphaTestState.dirty = true;
          }

          return;

        case RS_SRCBLEND:
        case RS_DESTBLEND:
        case RS_BLENDOP:
        case RS_SEPARATEALPHABLENDENABLE:
        case RS_BLENDOPALPHA:
        case RS_SRCBLENDALPHA:
        case RS_DESTBLENDALPHA:
          if (this._alphaBlendState[state] !== value) {
            this._alphaBlendState.states[state] = value;
            this._alphaBlendState.dirty = true;
          }

          return;

        case RS_CULLMODE:
          switch (value) {
            case CULL_NONE:
              gl.disable(gl.CULL_FACE);
              return;

            case CULL_CW:
              gl.enable(gl.CULL_FACE);
              gl.cullFace(gl.FRONT);
              return;

            case CULL_CCW:
              gl.enable(gl.CULL_FACE);
              gl.cullFace(gl.BACK);
              return;
          }

          return;

        case RS_ZFUNC:
          gl.depthFunc(0x0200 + value - 1);
          return;

        case RS_ALPHABLENDENABLE:
          if (value) gl.enable(gl.BLEND);else gl.disable(gl.BLEND);
          return;

        case RS_COLORWRITEENABLE:
          gl.colorMask((value & 1) !== 0, (value & 2) !== 0, (value & 4) !== 0, (value & 8) !== 0);
          return;

        case RS_SCISSORTESTENABLE:
          if (value) gl.enable(gl.SCISSOR_TEST);else gl.disable(gl.SCISSOR_TEST);
          return;

        case RS_SLOPESCALEDEPTHBIAS:
        case RS_DEPTHBIAS:
          value = math["num"].dwordToFloat(value);

          if (this._depthOffsetState[state] !== value) {
            this._depthOffsetState.states[state] = value;
            this._depthOffsetState.dirty = true;
          }

          return;
      }
    }
    /**
     * ApplyShadowState
     */

  }, {
    key: "ApplyShadowState",
    value: function ApplyShadowState() {
      var gl = this.gl;

      if (this._alphaBlendState.dirty) {
        var blendOp = gl.FUNC_ADD;

        if (this._alphaBlendState.states[RS_BLENDOP] === BLENDOP_SUBTRACT) {
          blendOp = gl.FUNC_SUBTRACT;
        } else if (this._alphaBlendState.states[RS_BLENDOP] === BLENDOP_REVSUBTRACT) {
          blendOp = gl.FUNC_REVERSE_SUBTRACT;
        }

        var srcBlend = BlendTable[this._alphaBlendState.states[RS_SRCBLEND]],
            destBlend = BlendTable[this._alphaBlendState.states[RS_DESTBLEND]];

        if (this._alphaBlendState.states[RS_SEPARATEALPHABLENDENABLE]) {
          var blendOpAlpha = gl.FUNC_ADD;

          if (this._alphaBlendState.states[RS_BLENDOP] === BLENDOP_SUBTRACT) {
            blendOpAlpha = gl.FUNC_SUBTRACT;
          } else if (this._alphaBlendState.states[RS_BLENDOP] === BLENDOP_REVSUBTRACT) {
            blendOpAlpha = gl.FUNC_REVERSE_SUBTRACT;
          }

          var srcBlendAlpha = BlendTable[this._alphaBlendState.states[RS_SRCBLENDALPHA]],
              destBlendAlpha = BlendTable[this._alphaBlendState.states[RS_DESTBLENDALPHA]];
          gl.blendEquationSeparate(blendOp, blendOpAlpha);
          gl.blendFuncSeparate(srcBlend, destBlend, srcBlendAlpha, destBlendAlpha);
        } else {
          gl.blendEquation(blendOp);
          gl.blendFunc(srcBlend, destBlend);
        }

        this._alphaBlendState.dirty = false;
      }

      if (this._depthOffsetState.dirty) {
        gl.polygonOffset(this._depthOffsetState.states[RS_SLOPESCALEDEPTHBIAS], this._depthOffsetState.states[RS_DEPTHBIAS]);
        this._depthOffsetState.dirty = false;
      }

      var alphaTestFunc, invertedAlphaTest, alphaTestRef;

      if (this.shadowHandles && this._alphaTestState.states[RS_ALPHATESTENABLE]) {
        switch (this._alphaTestState.states[RS_ALPHAFUNC]) {
          case CMP_NEVER:
            alphaTestFunc = 0;
            invertedAlphaTest = 1;
            alphaTestRef = -256;
            break;

          case CMP_LESS:
            alphaTestFunc = 0;
            invertedAlphaTest = -1;
            alphaTestRef = this._alphaTestState.states[RS_ALPHAREF] - 1;
            break;

          case CMP_EQUAL:
            alphaTestFunc = 1;
            invertedAlphaTest = 0;
            alphaTestRef = this._alphaTestState.states[RS_ALPHAREF];
            break;

          case CMP_LEQUAL:
            alphaTestFunc = 0;
            invertedAlphaTest = -1;
            alphaTestRef = this._alphaTestState.states[RS_ALPHAREF];
            break;

          case CMP_GREATER:
            alphaTestFunc = 0;
            invertedAlphaTest = 1;
            alphaTestRef = -this._alphaTestState.states[RS_ALPHAREF] - 1;
            break;

          /*
          case CMP_NOTEQUAL:
          var alphaTestFunc = 1;
          var invertedAlphaTest = 1;
          var alphaTestRef = this._alphaTestState.states[RS_ALPHAREF];
          break;
          */

          case CMP_GREATEREQUAL:
            alphaTestFunc = 0;
            invertedAlphaTest = 1;
            alphaTestRef = -this._alphaTestState.states[RS_ALPHAREF];
            break;

          default:
            alphaTestFunc = 0;
            invertedAlphaTest = 0;
            alphaTestRef = 1;
            break;
        }

        var clipPlaneEnable = 0;
        gl.uniform4f(this.shadowHandles.shadowStateInt, invertedAlphaTest, alphaTestRef, alphaTestFunc, clipPlaneEnable); //this._shadowStateBuffers
      }
    }
    /**
     * Sets a render mode
     * @param {number} renderMode
     */

  }, {
    key: "SetStandardStates",
    value: function SetStandardStates(renderMode) {
      if (this._currentRenderMode === renderMode) return;
      this.gl.frontFace(this.gl.CW);

      switch (renderMode) {
        case RM_OPAQUE:
        case RM_PICKABLE:
        case RM_DISTORTION:
          this.SetRenderState(RS_ZENABLE, true);
          this.SetRenderState(RS_ZWRITEENABLE, true);
          this.SetRenderState(RS_ZFUNC, CMP_LEQUAL);
          this.SetRenderState(RS_CULLMODE, CULL_CW);
          this.SetRenderState(RS_ALPHABLENDENABLE, false);
          this.SetRenderState(RS_ALPHATESTENABLE, false);
          this.SetRenderState(RS_SEPARATEALPHABLENDENABLE, false);
          this.SetRenderState(RS_SLOPESCALEDEPTHBIAS, 0);
          this.SetRenderState(RS_DEPTHBIAS, 0);
          this.SetRenderState(RS_COLORWRITEENABLE, 0xf);
          break;

        case RM_DECAL:
          this.SetRenderState(RS_ALPHABLENDENABLE, false);
          this.SetRenderState(RS_ALPHATESTENABLE, true);
          this.SetRenderState(RS_ALPHAFUNC, CMP_GREATER);
          this.SetRenderState(RS_ALPHAREF, 127);
          this.SetRenderState(RS_ZENABLE, true);
          this.SetRenderState(RS_ZWRITEENABLE, true);
          this.SetRenderState(RS_ZFUNC, CMP_LEQUAL);
          this.SetRenderState(RS_CULLMODE, CULL_CW);
          this.SetRenderState(RS_BLENDOP, BLENDOP_ADD);
          this.SetRenderState(RS_SLOPESCALEDEPTHBIAS, 0);
          this.SetRenderState(RS_DEPTHBIAS, 0);
          this.SetRenderState(RS_SEPARATEALPHABLENDENABLE, false);
          this.SetRenderState(RS_COLORWRITEENABLE, 0xf);
          break;

        case RM_TRANSPARENT:
          this.SetRenderState(RS_CULLMODE, CULL_CW);
          this.SetRenderState(RS_ALPHABLENDENABLE, true);
          this.SetRenderState(RS_SRCBLEND, BLEND_SRCALPHA);
          this.SetRenderState(RS_DESTBLEND, BLEND_INVSRCALPHA);
          this.SetRenderState(RS_BLENDOP, BLENDOP_ADD);
          this.SetRenderState(RS_ZENABLE, true);
          this.SetRenderState(RS_ZWRITEENABLE, false);
          this.SetRenderState(RS_ZFUNC, CMP_LEQUAL);
          this.SetRenderState(RS_ALPHATESTENABLE, false);
          this.SetRenderState(RS_SLOPESCALEDEPTHBIAS, 0); // -1.0

          this.SetRenderState(RS_DEPTHBIAS, 0);
          this.SetRenderState(RS_SEPARATEALPHABLENDENABLE, false);
          this.SetRenderState(RS_COLORWRITEENABLE, 0xf);
          break;

        case RM_ADDITIVE:
          this.SetRenderState(RS_CULLMODE, CULL_NONE);
          this.SetRenderState(RS_ALPHABLENDENABLE, true);
          this.SetRenderState(RS_SRCBLEND, BLEND_ONE);
          this.SetRenderState(RS_DESTBLEND, BLEND_ONE);
          this.SetRenderState(RS_BLENDOP, BLENDOP_ADD);
          this.SetRenderState(RS_ZENABLE, true);
          this.SetRenderState(RS_ZWRITEENABLE, false);
          this.SetRenderState(RS_ZFUNC, CMP_LEQUAL);
          this.SetRenderState(RS_ALPHATESTENABLE, false);
          this.SetRenderState(RS_SLOPESCALEDEPTHBIAS, 0);
          this.SetRenderState(RS_DEPTHBIAS, 0);
          this.SetRenderState(RS_SEPARATEALPHABLENDENABLE, false);
          this.SetRenderState(RS_COLORWRITEENABLE, 0xf);
          break;

        case RM_FULLSCREEN:
          this.SetRenderState(RS_ALPHABLENDENABLE, false);
          this.SetRenderState(RS_ALPHATESTENABLE, false);
          this.SetRenderState(RS_CULLMODE, CULL_NONE);
          this.SetRenderState(RS_ZENABLE, false);
          this.SetRenderState(RS_ZWRITEENABLE, false);
          this.SetRenderState(RS_ZFUNC, CMP_ALWAYS);
          this.SetRenderState(RS_SLOPESCALEDEPTHBIAS, 0);
          this.SetRenderState(RS_DEPTHBIAS, 0);
          this.SetRenderState(RS_SEPARATEALPHABLENDENABLE, false);
          this.SetRenderState(RS_COLORWRITEENABLE, 0xf);
          break;

        default:
          return;
      }

      this._currentRenderMode = renderMode;
    }
    /**
     * Creates webgl context
     * @param {HTMLCanvasElement} canvas
     * @param {*} params
     * @param {boolean} [enableWebgl2]
     * @returns {{gl: *, version: number}}
     */

  }], [{
    key: "CreateContext",
    value: function CreateContext(canvas, params, enableWebgl2) {
      /**
       * Creates a gl context
       * @param {HTMLCanvasElement} canvas
       * @param {*} [params]
       * @param {*} [contextNames]
       * @returns {*}
       */
      function create(canvas, params, contextNames) {
        contextNames = Array.isArray(contextNames) ? contextNames : [contextNames];

        for (var i = 0; i < contextNames.length; i++) {
          try {
            return canvas.getContext(contextNames[i], params);
          } catch (err) {
            /* eslint-disable-line no-empty */
          }
        }

        return null;
      }

      var gl = null,
          version = WebglVersion.NONE;

      if (enableWebgl2) {
        gl = create(canvas, params, Webgl2ContextNames);
        if (gl) version = WebglVersion.WEBGL2;
      }

      if (!gl) {
        gl = create(canvas, params, WebglContextNames);
        if (gl) version = WebglVersion.WEBGL;
      }

      return {
        gl,
        version
      };
    }
    /**
     * The constructor used to generate the time
     * @type {DateConstructor}
     */

  }]);

  return Tw2Device;
}(Tw2EventEmitter["a" /* Tw2EventEmitter */]); // Render Modes

Tw2Device_defineProperty(Tw2Device_Tw2Device, "Clock", Date);

Tw2Device_defineProperty(Tw2Device_Tw2Device, "RequestAnimationFrame", function () {
  var request = Object(util["get"])(window, VendorRequestAnimationFrame);
  return function (callback) {
    return request(callback);
  };
}());

Tw2Device_defineProperty(Tw2Device_Tw2Device, "CancelAnimationFrame", function () {
  var cancel = Object(util["get"])(window, VendorCancelAnimationFrame);
  return function (id) {
    return cancel(id);
  };
}());

Tw2Device_defineProperty(Tw2Device_Tw2Device, "category", 'device');

Tw2Device_Tw2Device.prototype.RM_ANY = RM_ANY;
Tw2Device_Tw2Device.prototype.RM_OPAQUE = RM_OPAQUE;
Tw2Device_Tw2Device.prototype.RM_DECAL = RM_DECAL;
Tw2Device_Tw2Device.prototype.RM_TRANSPARENT = RM_TRANSPARENT;
Tw2Device_Tw2Device.prototype.RM_ADDITIVE = RM_ADDITIVE;
Tw2Device_Tw2Device.prototype.RM_DEPTH = RM_DEPTH;
Tw2Device_Tw2Device.prototype.RM_DISTORTION = RM_DISTORTION;
Tw2Device_Tw2Device.prototype.RM_FULLSCREEN = RM_FULLSCREEN;
Tw2Device_Tw2Device.prototype.RM_PICKABLE = RM_PICKABLE;
Tw2Device_Tw2Device.prototype.RM_DISTORTION = RM_DISTORTION;
var device = new Tw2Device_Tw2Device();
// CONCATENATED MODULE: ./global/engine/index.js





// CONCATENATED MODULE: ./global/index.js






/***/ })
])