module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-mde/lib/styles/css/react-mde-all.css":
/*!*****************************************************************!*\
  !*** ./node_modules/react-mde/lib/styles/css/react-mde-all.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1tZGUvbGliL3N0eWxlcy9jc3MvcmVhY3QtbWRlLWFsbC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/react-mde/lib/styles/css/react-mde-all.css\n");

/***/ }),

/***/ "./src/apollo/index.js":
/*!*****************************!*\
  !*** ./src/apollo/index.js ***!
  \*****************************/
/*! exports provided: initializeApollo, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var utils_cookieUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/cookieUtils */ \"./src/utils/cookieUtils.js\");\n\n\n\n\n\n\nconst SERVER_URL = \"https://edfhr-dashboard-724077.us1.kinto.io\";\nlet apolloClient = null;\n\nif (true) {\n  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a;\n}\n\nfunction create(initialState, token) {\n  let link = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"createHttpLink\"])({\n    uri: false ? undefined : \"http://localhost:3000/api/graphql\",\n    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default())\n  });\n  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__[\"setContext\"])(() => {\n    return {\n      headers: {\n        Authorization: token || js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(utils_cookieUtils__WEBPACK_IMPORTED_MODULE_5__[\"TOKEN_NAME\"]) || \"\"\n      }\n    };\n  });\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    connectToDevTools: false,\n    ssrMode: !false,\n    // Disables forceFetch on the server (so queries are only run once)\n    link: authLink.concat(link),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n}\n\nconst initializeApollo = (initialState, options) => {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return create(initialState, options);\n  } // Reuse client on the client-side\n\n\n  if (!apolloClient) {\n    apolloClient = create(initialState, options);\n  }\n\n  return apolloClient;\n};\nconst useApollo = initialState => {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL2luZGV4LmpzP2FlY2MiXSwibmFtZXMiOlsiU0VSVkVSX1VSTCIsImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJsaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkNvb2tpZSIsImdldCIsIlRPS0VOX05BTUUiLCJBcG9sbG9DbGllbnQiLCJjb25uZWN0VG9EZXZUb29scyIsInNzck1vZGUiLCJjb25jYXQiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJyZXN0b3JlIiwiaW5pdGlhbGl6ZUFwb2xsbyIsIm9wdGlvbnMiLCJ1c2VBcG9sbG8iLCJzdG9yZSIsInVzZU1lbW8iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxVQUFVLEdBQUcsNkNBQW5CO0FBRUEsSUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUVBLElBQUksSUFBSixFQUFzQjtBQUNwQkMsUUFBTSxDQUFDQyxLQUFQLEdBQWVBLHlEQUFmO0FBQ0Q7O0FBRUQsU0FBU0MsTUFBVCxDQUFnQkMsWUFBaEIsRUFBOEJDLEtBQTlCLEVBQXFDO0FBQ25DLE1BQUlDLElBQUksR0FBR0MscUVBQWMsQ0FBQztBQUN4QkMsT0FBRyxFQUNELFFBQ0ssU0FETCxHQUVJLG1DQUprQjtBQU14Qk4sc0VBQUtBO0FBTm1CLEdBQUQsQ0FBekI7QUFTQSxRQUFNTyxRQUFRLEdBQUdDLHNFQUFVLENBQUMsTUFBTTtBQUNoQyxXQUFPO0FBQ0xDLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUFFUCxLQUFLLElBQUlRLGdEQUFNLENBQUNDLEdBQVAsQ0FBV0MsNERBQVgsQ0FBVCxJQUFtQztBQUQzQztBQURKLEtBQVA7QUFLRCxHQU4wQixDQUEzQjtBQVFBLFNBQU8sSUFBSUMsMkRBQUosQ0FBaUI7QUFDdEJDLHFCQUFpQixPQURLO0FBRXRCQyxXQUFPLEVBQUUsTUFGYTtBQUVLO0FBQzNCWixRQUFJLEVBQUVHLFFBQVEsQ0FBQ1UsTUFBVCxDQUFnQmIsSUFBaEIsQ0FIZ0I7QUFJdEJjLFNBQUssRUFBRSxJQUFJQyw0REFBSixHQUFvQkMsT0FBcEIsQ0FBNEJsQixZQUFZLElBQUksRUFBNUM7QUFKZSxHQUFqQixDQUFQO0FBTUQ7O0FBRU0sTUFBTW1CLGdCQUFnQixHQUFHLENBQUNuQixZQUFELEVBQWVvQixPQUFmLEtBQTJCO0FBQ3pEO0FBQ0E7QUFDQSxNQUFJLElBQUosRUFBc0I7QUFDcEIsV0FBT3JCLE1BQU0sQ0FBQ0MsWUFBRCxFQUFlb0IsT0FBZixDQUFiO0FBQ0QsR0FMd0QsQ0FPekQ7OztBQUNBLE1BQUksQ0FBQ3hCLFlBQUwsRUFBbUI7QUFDakJBLGdCQUFZLEdBQUdHLE1BQU0sQ0FBQ0MsWUFBRCxFQUFlb0IsT0FBZixDQUFyQjtBQUNEOztBQUVELFNBQU94QixZQUFQO0FBQ0QsQ0FiTTtBQWVBLE1BQU15QixTQUFTLEdBQUlyQixZQUFELElBQWtCO0FBQ3pDLFFBQU1zQixLQUFLLEdBQUdDLHFEQUFPLENBQUMsTUFBTUosZ0JBQWdCLENBQUNuQixZQUFELENBQXZCLEVBQXVDLENBQUNBLFlBQUQsQ0FBdkMsQ0FBckI7QUFDQSxTQUFPc0IsS0FBUDtBQUNELENBSE0iLCJmaWxlIjoiLi9zcmMvYXBvbGxvL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBjcmVhdGVIdHRwTGluayB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQgeyBzZXRDb250ZXh0IH0gZnJvbSBcImFwb2xsby1saW5rLWNvbnRleHRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRPS0VOX05BTUUgfSBmcm9tIFwidXRpbHMvY29va2llVXRpbHNcIjtcblxuY29uc3QgU0VSVkVSX1VSTCA9IFwiaHR0cHM6Ly9lZGZoci1kYXNoYm9hcmQtNzI0MDc3LnVzMS5raW50by5pb1wiO1xuXG5sZXQgYXBvbGxvQ2xpZW50ID0gbnVsbDtcblxuaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgZ2xvYmFsLmZldGNoID0gZmV0Y2g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShpbml0aWFsU3RhdGUsIHRva2VuKSB7XG4gIGxldCBsaW5rID0gY3JlYXRlSHR0cExpbmsoe1xuICAgIHVyaTpcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcImRldmVsb3BtZW50XCJcbiAgICAgICAgPyBgJHtTRVJWRVJfVVJMfS9hcGkvZ3JhcGhxbGBcbiAgICAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbFwiLFxuXG4gICAgZmV0Y2gsXG4gIH0pO1xuXG4gIGNvbnN0IGF1dGhMaW5rID0gc2V0Q29udGV4dCgoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gfHwgQ29va2llLmdldChUT0tFTl9OQU1FKSB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgY29ubmVjdFRvRGV2VG9vbHM6IHByb2Nlc3MuYnJvd3NlcixcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGxpbmspLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXBvbGxvID0gKGluaXRpYWxTdGF0ZSwgb3B0aW9ucykgPT4ge1xuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcbiAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlKGluaXRpYWxTdGF0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwb2xsbyA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apollo/index.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_resets_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/resets.css */ \"./src/styles/resets.css\");\n/* harmony import */ var styles_resets_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_resets_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var apollo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo */ \"./src/apollo/index.js\");\n/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-mde/lib/styles/css/react-mde-all.css */ \"./node_modules/react-mde/lib/styles/css/react-mde-all.css\");\n/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_14__);\n\nvar _jsxFileName = \"/home/peter/Desktop/projects/hela/law-3/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import \"bootstrap/dist/js/bootstrap\";\n// import \"utils/scripts\";\n\nif (false) {}\n\nnext_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on(\"routeChangeStart\", () => {\n  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on(\"routeChangeComplete\", () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());\nnext_router__WEBPACK_IMPORTED_MODULE_8___default.a.events.on(\"routeChangeError\", () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const client = Object(apollo__WEBPACK_IMPORTED_MODULE_13__[\"useApollo\"])(pageProps.apollo);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Nigeria's #1 Electronic platform for Law reports, Practice and study notes, legal questions in Nigeria\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"/nprogress.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css\",\n        integrity: \"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"HELA\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(recoil__WEBPACK_IMPORTED_MODULE_4__[\"RecoilRoot\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_12__[\"ApolloProvider\"], {\n        client: client,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_11__[\"ThemeProvider\"], {\n          theme: theme__WEBPACK_IMPORTED_MODULE_9__[\"theme\"],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_10__[\"ThemeProvider\"], {\n            theme: theme__WEBPACK_IMPORTED_MODULE_9__[\"theme\"],\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTnByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ1c2VBcG9sbG8iLCJhcG9sbG8iLCJ0aGVtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBRUE7O0FBRUEsV0FBbUMsRUFJbEM7O0FBRURBLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTTtBQUN6Q0Msa0RBQVMsQ0FBQ0MsS0FBVjtBQUNELENBRkQ7QUFHQUosa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNQyxnREFBUyxDQUFDRSxJQUFWLEVBQTlDO0FBQ0FMLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUEzQzs7QUFFQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsUUFBTUMsTUFBTSxHQUFHQyx5REFBUyxDQUFDRixTQUFTLENBQUNHLE1BQVgsQ0FBeEI7QUFDQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQ0UsV0FBRyxFQUFDLFlBRE47QUFFRSxZQUFJLEVBQUMsNEVBRlA7QUFHRSxpQkFBUyxFQUFDLGlHQUhaO0FBSUUsbUJBQVcsRUFBQztBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFlRSxxRUFBQyxpREFBRDtBQUFBLDZCQUNFLHFFQUFDLDhEQUFEO0FBQWdCLGNBQU0sRUFBRUYsTUFBeEI7QUFBQSwrQkFDRSxxRUFBQyxnRUFBRDtBQUFhLGVBQUssRUFBRUcsMkNBQXBCO0FBQUEsaUNBQ0UscUVBQUMsdURBQUQ7QUFBZSxpQkFBSyxFQUFFQSwyQ0FBdEI7QUFBQSxtQ0FDRSxxRUFBQyxTQUFELG9CQUFlSixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyQkQ7O0FBRURGLEtBQUssQ0FBQ08sU0FBTixHQUFrQjtBQUNoQk4sV0FBUyxFQUFFTyxpREFBUyxDQUFDQyxHQURMO0FBRWhCUCxXQUFTLEVBQUVNLGlEQUFTLENBQUNDO0FBRkwsQ0FBbEI7QUFLZVQsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCBOcHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IFwic3R5bGVzL3Jlc2V0cy5jc3NcIjtcbmltcG9ydCBcInN0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwidGhlbWVcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgYXMgU3R5bGVkdGhlbWUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tIFwiYXBvbGxvXCI7XG5pbXBvcnQgXCJyZWFjdC1tZGUvbGliL3N0eWxlcy9jc3MvcmVhY3QtbWRlLWFsbC5jc3NcIjtcbi8vIGltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcFwiO1xuXG4vLyBpbXBvcnQgXCJ1dGlscy9zY3JpcHRzXCI7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vIHJlcXVpcmUoXCJwb3BwZXIuanNcIik7XG4gIHJlcXVpcmUoXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXBcIik7XG4gIC8vIHJlcXVpcmUoXCIuLi91dGlscy9zY3JpcHRzLmpzXCIpO1xufVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiB7XG4gIE5wcm9ncmVzcy5zdGFydCgpO1xufSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCAoKSA9PiBOcHJvZ3Jlc3MuZG9uZSgpKTtcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsICgpID0+IE5wcm9ncmVzcy5kb25lKCkpO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvKHBhZ2VQcm9wcy5hcG9sbG8pO1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIk5pZ2VyaWEncyAjMSBFbGVjdHJvbmljIHBsYXRmb3JtIGZvciBMYXcgcmVwb3J0cywgUHJhY3RpY2UgYW5kIHN0dWR5IG5vdGVzLCBsZWdhbCBxdWVzdGlvbnMgaW4gTmlnZXJpYVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL25wcm9ncmVzcy5jc3NcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNS4xNS4xL2Nzcy9hbGwubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhNTEyLSs0ekNLOWsrcU5GVVI1WCtjS0w5RUlSK1pPaHRJbG9ObDlHSUtTNTdWMU15TnNZcFljVXJVZVFjOXZOZnpzV2ZWMjhJYUxMM2k5NlA5c2ROeWVSc3NBPT1cIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPkhFTEE8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFJlY29pbFJvb3Q+XG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgPFN0eWxlZHRoZW1lIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgPC9TdHlsZWR0aGVtZT5cbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgICAgIDwvUmVjb2lsUm9vdD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufVxuXG5NeUFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/index.scss\n");

/***/ }),

/***/ "./src/styles/resets.css":
/*!*******************************!*\
  !*** ./src/styles/resets.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcmVzZXRzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/resets.css\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/presets */ \"@theme-ui/presets\");\n/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // $primary: #e85d45;\n// $dark: #1b1b1b;\n// $dark-2: #353535;\n// $text-1: #0e0e16;\n// $muted: #808080;\n// $gray: #878787;\n// $light: #fff;\n// $light-2: #f1f1f1;\n// $secondary: #e9ecef;\n\nconst theme = _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"bootstrap\"]), {}, {\n  colors: {\n    text: \"#0e0e16\",\n    background: \"#fff\",\n    base: [\"#e85d45\", \"#564FCC\"],\n    //\"#564FCC\", //\"#11e\",\n    primary: \"#e43f23\",\n    white: \"#fff\",\n    secondary: \"#c4c4c4\",\n    highlight: \"#F7E8DB\",\n    muted: \"#808080\",\n    error: \"#f65\",\n    black: \"#333\",\n    green: \"#004150\",\n    modes: {\n      dark: {\n        text: \"#fff\",\n        background: \"#000\",\n        primary: \"#e85d45\",\n        secondary: \"#353535\",\n        highlight: \"#f0c\",\n        muted: \"#111\"\n      }\n    }\n  },\n  forms: {\n    select: {\n      borderRadius: \"1.875rem\" // padding: \"0.6rem 3.125rem\",\n\n    }\n  },\n  fonts: {\n    body: '\"Popins\", sans-serif',\n    heading: \"inherit\",\n    monospace: \"Menlo, monospace\"\n  },\n  buttons: _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"bootstrap\"].button), {}, {\n    primary: {\n      padding: \"0.6rem 3.125rem\",\n      borderRadius: \"3.125rem\"\n    },\n    secondary: {\n      bg: \"secondary\",\n      color: \"text\"\n    }\n  }),\n  badges: {\n    primary: {\n      color: \"background\",\n      bg: \"primary\"\n    },\n    outline: {\n      color: \"primary\",\n      bg: \"transparent\",\n      boxShadow: \"inset 0 0 0 1px\"\n    },\n    circle: {\n      borderRadius: \"100%\"\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanM/MGJlNyJdLCJuYW1lcyI6WyJ0aGVtZSIsImJvb3RzdHJhcCIsImNvbG9ycyIsInRleHQiLCJiYWNrZ3JvdW5kIiwiYmFzZSIsInByaW1hcnkiLCJ3aGl0ZSIsInNlY29uZGFyeSIsImhpZ2hsaWdodCIsIm11dGVkIiwiZXJyb3IiLCJibGFjayIsImdyZWVuIiwibW9kZXMiLCJkYXJrIiwiZm9ybXMiLCJzZWxlY3QiLCJib3JkZXJSYWRpdXMiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwibW9ub3NwYWNlIiwiYnV0dG9ucyIsImJ1dHRvbiIsInBhZGRpbmciLCJiZyIsImNvbG9yIiwiYmFkZ2VzIiwib3V0bGluZSIsImJveFNoYWRvdyIsImNpcmNsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxNQUFNQSxLQUFLLG1DQUViQywyREFGYTtBQUdoQkMsUUFBTSxFQUFFO0FBQ05DLFFBQUksRUFBRSxTQURBO0FBRU5DLGNBQVUsRUFBRSxNQUZOO0FBR05DLFFBQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBSEE7QUFHd0I7QUFDOUJDLFdBQU8sRUFBRSxTQUpIO0FBS05DLFNBQUssRUFBRSxNQUxEO0FBTU5DLGFBQVMsRUFBRSxTQU5MO0FBT05DLGFBQVMsRUFBRSxTQVBMO0FBUU5DLFNBQUssRUFBRSxTQVJEO0FBU05DLFNBQUssRUFBRSxNQVREO0FBVU5DLFNBQUssRUFBRSxNQVZEO0FBV05DLFNBQUssRUFBRSxTQVhEO0FBWU5DLFNBQUssRUFBRTtBQUNMQyxVQUFJLEVBQUU7QUFDSlosWUFBSSxFQUFFLE1BREY7QUFFSkMsa0JBQVUsRUFBRSxNQUZSO0FBR0pFLGVBQU8sRUFBRSxTQUhMO0FBSUpFLGlCQUFTLEVBQUUsU0FKUDtBQUtKQyxpQkFBUyxFQUFFLE1BTFA7QUFNSkMsYUFBSyxFQUFFO0FBTkg7QUFERDtBQVpELEdBSFE7QUEwQmhCTSxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBQ05DLGtCQUFZLEVBQUUsVUFEUixDQUVOOztBQUZNO0FBREgsR0ExQlM7QUFnQ2hCQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLHNCQUREO0FBRUxDLFdBQU8sRUFBRSxTQUZKO0FBR0xDLGFBQVMsRUFBRTtBQUhOLEdBaENTO0FBcUNoQkMsU0FBTyxrQ0FDRnRCLDJEQUFTLENBQUN1QixNQURSO0FBRUxsQixXQUFPLEVBQUU7QUFDUG1CLGFBQU8sRUFBRSxpQkFERjtBQUVQUCxrQkFBWSxFQUFFO0FBRlAsS0FGSjtBQU1MVixhQUFTLEVBQUU7QUFDVGtCLFFBQUUsRUFBRSxXQURLO0FBR1RDLFdBQUssRUFBRTtBQUhFO0FBTk4sSUFyQ1M7QUFpRGhCQyxRQUFNLEVBQUU7QUFDTnRCLFdBQU8sRUFBRTtBQUNQcUIsV0FBSyxFQUFFLFlBREE7QUFFUEQsUUFBRSxFQUFFO0FBRkcsS0FESDtBQUtORyxXQUFPLEVBQUU7QUFDUEYsV0FBSyxFQUFFLFNBREE7QUFFUEQsUUFBRSxFQUFFLGFBRkc7QUFHUEksZUFBUyxFQUFFO0FBSEosS0FMSDtBQVVOQyxVQUFNLEVBQUU7QUFDTmIsa0JBQVksRUFBRTtBQURSO0FBVkY7QUFqRFEsRUFBWCIsImZpbGUiOiIuL3NyYy90aGVtZS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gXCJAdGhlbWUtdWkvcHJlc2V0c1wiO1xuXG4vLyAkcHJpbWFyeTogI2U4NWQ0NTtcblxuLy8gJGRhcms6ICMxYjFiMWI7XG4vLyAkZGFyay0yOiAjMzUzNTM1O1xuLy8gJHRleHQtMTogIzBlMGUxNjtcbi8vICRtdXRlZDogIzgwODA4MDtcbi8vICRncmF5OiAjODc4Nzg3O1xuLy8gJGxpZ2h0OiAjZmZmO1xuLy8gJGxpZ2h0LTI6ICNmMWYxZjE7XG4vLyAkc2Vjb25kYXJ5OiAjZTllY2VmO1xuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG4gIC8vIC4uLmJvb3RzdHJhcCxcbiAgLi4uYm9vdHN0cmFwLFxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiBcIiMwZTBlMTZcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICBiYXNlOiBbXCIjZTg1ZDQ1XCIsIFwiIzU2NEZDQ1wiXSwgLy9cIiM1NjRGQ0NcIiwgLy9cIiMxMWVcIixcbiAgICBwcmltYXJ5OiBcIiNlNDNmMjNcIixcbiAgICB3aGl0ZTogXCIjZmZmXCIsXG4gICAgc2Vjb25kYXJ5OiBcIiNjNGM0YzRcIixcbiAgICBoaWdobGlnaHQ6IFwiI0Y3RThEQlwiLFxuICAgIG11dGVkOiBcIiM4MDgwODBcIixcbiAgICBlcnJvcjogXCIjZjY1XCIsXG4gICAgYmxhY2s6IFwiIzMzM1wiLFxuICAgIGdyZWVuOiBcIiMwMDQxNTBcIixcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiBcIiNmZmZcIixcbiAgICAgICAgYmFja2dyb3VuZDogXCIjMDAwXCIsXG4gICAgICAgIHByaW1hcnk6IFwiI2U4NWQ0NVwiLFxuICAgICAgICBzZWNvbmRhcnk6IFwiIzM1MzUzNVwiLFxuICAgICAgICBoaWdobGlnaHQ6IFwiI2YwY1wiLFxuICAgICAgICBtdXRlZDogXCIjMTExXCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGZvcm1zOiB7XG4gICAgc2VsZWN0OiB7XG4gICAgICBib3JkZXJSYWRpdXM6IFwiMS44NzVyZW1cIixcbiAgICAgIC8vIHBhZGRpbmc6IFwiMC42cmVtIDMuMTI1cmVtXCIsXG4gICAgfSxcbiAgfSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiAnXCJQb3BpbnNcIiwgc2Fucy1zZXJpZicsXG4gICAgaGVhZGluZzogXCJpbmhlcml0XCIsXG4gICAgbW9ub3NwYWNlOiBcIk1lbmxvLCBtb25vc3BhY2VcIixcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgIC4uLmJvb3RzdHJhcC5idXR0b24sXG4gICAgcHJpbWFyeToge1xuICAgICAgcGFkZGluZzogXCIwLjZyZW0gMy4xMjVyZW1cIixcbiAgICAgIGJvcmRlclJhZGl1czogXCIzLjEyNXJlbVwiLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBiZzogXCJzZWNvbmRhcnlcIixcblxuICAgICAgY29sb3I6IFwidGV4dFwiLFxuICAgIH0sXG4gIH0sXG4gIGJhZGdlczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiBcImJhY2tncm91bmRcIixcbiAgICAgIGJnOiBcInByaW1hcnlcIixcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICAgIGJnOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCAwIDAgMXB4XCIsXG4gICAgfSxcbiAgICBjaXJjbGU6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

/***/ }),

/***/ "./src/utils/cookieUtils.js":
/*!**********************************!*\
  !*** ./src/utils/cookieUtils.js ***!
  \**********************************/
/*! exports provided: TOKEN_NAME, MAX_AGE, setToken, removeTokenCookie, parseCookies, getTokenCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TOKEN_NAME\", function() { return TOKEN_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAX_AGE\", function() { return MAX_AGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setToken\", function() { return setToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTokenCookie\", function() { return removeTokenCookie; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCookies\", function() { return parseCookies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTokenCookie\", function() { return getTokenCookie; });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst TOKEN_NAME = \"token\";\nconst MAX_AGE = 60 * 60 * 8;\nconst setToken = (res, token) => {\n  const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__[\"serialize\"])(TOKEN_NAME, token, {\n    maxAge: MAX_AGE,\n    expires: new Date(Date.now() + MAX_AGE),\n    httpOnly: process.NODE_ENV === \"production\",\n    secure: false,\n    path: \"/\",\n    sameSite: \"lax\"\n  });\n  res.setHeader(\"Set-Cookie\", cookie);\n};\nconst removeTokenCookie = res => {\n  if (res) {\n    const cookie = Object(cookie__WEBPACK_IMPORTED_MODULE_0__[\"serialize\"])(TOKEN_NAME, \"\", {\n      maxAge: -1,\n      path: \"/\"\n    });\n    res.setHeader(\"Set-Cookie\", cookie);\n  } else {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(TOKEN_NAME);\n  }\n};\nconst parseCookies = req => {\n  var _req$headers;\n\n  // For API Routes we don't need to parse the cookies.\n  if (req === null || req === void 0 ? void 0 : req.cookies) return req.cookies; // For pages we do need to parse the cookies.\n\n  const cookie = req === null || req === void 0 ? void 0 : (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.cookie;\n  return Object(cookie__WEBPACK_IMPORTED_MODULE_0__[\"parse\"])(cookie || \"\");\n};\nconst getTokenCookie = req => {\n  const cookies = parseCookies(req);\n  return cookies[TOKEN_NAME];\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29va2llVXRpbHMuanM/MThhYSJdLCJuYW1lcyI6WyJUT0tFTl9OQU1FIiwiTUFYX0FHRSIsInNldFRva2VuIiwicmVzIiwidG9rZW4iLCJjb29raWUiLCJzZXJpYWxpemUiLCJtYXhBZ2UiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsImh0dHBPbmx5IiwicHJvY2VzcyIsIk5PREVfRU5WIiwic2VjdXJlIiwicGF0aCIsInNhbWVTaXRlIiwic2V0SGVhZGVyIiwicmVtb3ZlVG9rZW5Db29raWUiLCJqc2Nvb2tpZSIsInJlbW92ZSIsInBhcnNlQ29va2llcyIsInJlcSIsImNvb2tpZXMiLCJoZWFkZXJzIiwicGFyc2UiLCJnZXRUb2tlbkNvb2tpZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxVQUFVLEdBQUcsT0FBbkI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsS0FBSyxFQUFMLEdBQVUsQ0FBMUI7QUFFQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLEtBQWdCO0FBQ3RDLFFBQU1DLE1BQU0sR0FBR0Msd0RBQVMsQ0FBQ04sVUFBRCxFQUFhSSxLQUFiLEVBQW9CO0FBQzFDRyxVQUFNLEVBQUVOLE9BRGtDO0FBRTFDTyxXQUFPLEVBQUUsSUFBSUMsSUFBSixDQUFTQSxJQUFJLENBQUNDLEdBQUwsS0FBYVQsT0FBdEIsQ0FGaUM7QUFHMUNVLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLFlBSFc7QUFJMUNDLFVBQU0sT0FKb0M7QUFLMUNDLFFBQUksRUFBRSxHQUxvQztBQU0xQ0MsWUFBUSxFQUFFO0FBTmdDLEdBQXBCLENBQXhCO0FBUUFiLEtBQUcsQ0FBQ2MsU0FBSixDQUFjLFlBQWQsRUFBNEJaLE1BQTVCO0FBQ0QsQ0FWTTtBQVlBLE1BQU1hLGlCQUFpQixHQUFJZixHQUFELElBQVM7QUFDeEMsTUFBSUEsR0FBSixFQUFTO0FBQ1AsVUFBTUUsTUFBTSxHQUFHQyx3REFBUyxDQUFDTixVQUFELEVBQWEsRUFBYixFQUFpQjtBQUN2Q08sWUFBTSxFQUFFLENBQUMsQ0FEOEI7QUFFdkNRLFVBQUksRUFBRTtBQUZpQyxLQUFqQixDQUF4QjtBQUtBWixPQUFHLENBQUNjLFNBQUosQ0FBYyxZQUFkLEVBQTRCWixNQUE1QjtBQUNELEdBUEQsTUFPTztBQUNMYyxvREFBUSxDQUFDQyxNQUFULENBQWdCcEIsVUFBaEI7QUFDRDtBQUNGLENBWE07QUFhQSxNQUFNcUIsWUFBWSxHQUFJQyxHQUFELElBQVM7QUFBQTs7QUFDbkM7QUFDQSxNQUFJQSxHQUFKLGFBQUlBLEdBQUosdUJBQUlBLEdBQUcsQ0FBRUMsT0FBVCxFQUFrQixPQUFPRCxHQUFHLENBQUNDLE9BQVgsQ0FGaUIsQ0FJbkM7O0FBQ0EsUUFBTWxCLE1BQU0sR0FBR2lCLEdBQUgsYUFBR0EsR0FBSCx1Q0FBR0EsR0FBRyxDQUFFRSxPQUFSLGlEQUFHLGFBQWNuQixNQUE3QjtBQUNBLFNBQU9vQixvREFBSyxDQUFDcEIsTUFBTSxJQUFJLEVBQVgsQ0FBWjtBQUNELENBUE07QUFTQSxNQUFNcUIsY0FBYyxHQUFJSixHQUFELElBQVM7QUFDckMsUUFBTUMsT0FBTyxHQUFHRixZQUFZLENBQUNDLEdBQUQsQ0FBNUI7QUFDQSxTQUFPQyxPQUFPLENBQUN2QixVQUFELENBQWQ7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Nvb2tpZVV0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2VyaWFsaXplLCBwYXJzZSB9IGZyb20gXCJjb29raWVcIjtcbmltcG9ydCBqc2Nvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTl9OQU1FID0gXCJ0b2tlblwiO1xuZXhwb3J0IGNvbnN0IE1BWF9BR0UgPSA2MCAqIDYwICogODtcblxuZXhwb3J0IGNvbnN0IHNldFRva2VuID0gKHJlcywgdG9rZW4pID0+IHtcbiAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsIHRva2VuLCB7XG4gICAgbWF4QWdlOiBNQVhfQUdFLFxuICAgIGV4cGlyZXM6IG5ldyBEYXRlKERhdGUubm93KCkgKyBNQVhfQUdFKSxcbiAgICBodHRwT25seTogcHJvY2Vzcy5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gIH0pO1xuICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBjb29raWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRva2VuQ29va2llID0gKHJlcykgPT4ge1xuICBpZiAocmVzKSB7XG4gICAgY29uc3QgY29va2llID0gc2VyaWFsaXplKFRPS0VOX05BTUUsIFwiXCIsIHtcbiAgICAgIG1heEFnZTogLTEsXG4gICAgICBwYXRoOiBcIi9cIixcbiAgICB9KTtcblxuICAgIHJlcy5zZXRIZWFkZXIoXCJTZXQtQ29va2llXCIsIGNvb2tpZSk7XG4gIH0gZWxzZSB7XG4gICAganNjb29raWUucmVtb3ZlKFRPS0VOX05BTUUpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcGFyc2VDb29raWVzID0gKHJlcSkgPT4ge1xuICAvLyBGb3IgQVBJIFJvdXRlcyB3ZSBkb24ndCBuZWVkIHRvIHBhcnNlIHRoZSBjb29raWVzLlxuICBpZiAocmVxPy5jb29raWVzKSByZXR1cm4gcmVxLmNvb2tpZXM7XG5cbiAgLy8gRm9yIHBhZ2VzIHdlIGRvIG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXG4gIGNvbnN0IGNvb2tpZSA9IHJlcT8uaGVhZGVycz8uY29va2llO1xuICByZXR1cm4gcGFyc2UoY29va2llIHx8IFwiXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFRva2VuQ29va2llID0gKHJlcSkgPT4ge1xuICBjb25zdCBjb29raWVzID0gcGFyc2VDb29raWVzKHJlcSk7XG4gIHJldHVybiBjb29raWVzW1RPS0VOX05BTUVdO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/cookieUtils.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@apollo/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiPzRjMmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFwb2xsby9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@apollo/client\n");

/***/ }),

/***/ "@theme-ui/presets":
/*!************************************!*\
  !*** external "@theme-ui/presets" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@theme-ui/presets\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdGhlbWUtdWkvcHJlc2V0c1wiP2QwOTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHRoZW1lLXVpL3ByZXNldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGhlbWUtdWkvcHJlc2V0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@theme-ui/presets\n");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-link-context\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tbGluay1jb250ZXh0XCI/YmQ1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhcG9sbG8tbGluay1jb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWxpbmstY29udGV4dFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///apollo-link-context\n");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb29raWVcIj8yZDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///cookie\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"js-cookie\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIj8wM2MxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImpzLWNvb2tpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///js-cookie\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nprogress\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIj8xNTViIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nprogress\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recoil\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWNvaWxcIj82YTYwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlY29pbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29pbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///recoil\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"theme-ui\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiP2I0NGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidGhlbWUtdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///theme-ui\n");

/***/ })

/******/ });