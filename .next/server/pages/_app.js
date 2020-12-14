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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst SERVER_URL = \"https://edfhr-dashboard-724077.us1.kinto.io\";\nlet apolloClient = null;\n\nif (true) {\n  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a;\n}\n\nfunction create(initialState, token) {\n  let link = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"createHttpLink\"])({\n    uri: false ? undefined : \"/api/graphql\",\n    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default())\n  });\n  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__[\"setContext\"])(() => {\n    return {\n      headers: {\n        Authorization: `Bearer ${token || js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"token\")}` || \"\"\n      }\n    };\n  });\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    connectToDevTools: false,\n    ssrMode: !false,\n    // Disables forceFetch on the server (so queries are only run once)\n    link: authLink.concat(link),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n}\n\nconst initializeApollo = (initialState, options) => {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return create(initialState, options);\n  } // Reuse client on the client-side\n\n\n  if (!apolloClient) {\n    apolloClient = create(initialState, options);\n  }\n\n  return apolloClient;\n};\nconst useApollo = initialState => {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL2luZGV4LmpzP2FlY2MiXSwibmFtZXMiOlsiU0VSVkVSX1VSTCIsImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJsaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkNvb2tpZSIsImdldCIsIkFwb2xsb0NsaWVudCIsImNvbm5lY3RUb0RldlRvb2xzIiwic3NyTW9kZSIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInJlc3RvcmUiLCJpbml0aWFsaXplQXBvbGxvIiwib3B0aW9ucyIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLDZDQUFuQjtBQUVBLElBQUlDLFlBQVksR0FBRyxJQUFuQjs7QUFFQSxJQUFJLElBQUosRUFBc0I7QUFDcEJDLFFBQU0sQ0FBQ0MsS0FBUCxHQUFlQSx5REFBZjtBQUNEOztBQUVELFNBQVNDLE1BQVQsQ0FBZ0JDLFlBQWhCLEVBQThCQyxLQUE5QixFQUFxQztBQUNuQyxNQUFJQyxJQUFJLEdBQUdDLHFFQUFjLENBQUM7QUFDeEJDLE9BQUcsRUFDRCxRQUNLLFNBREwsR0FFSSxjQUprQjtBQU14Qk4sc0VBQUtBO0FBTm1CLEdBQUQsQ0FBekI7QUFTQSxRQUFNTyxRQUFRLEdBQUdDLHNFQUFVLENBQUMsTUFBTTtBQUNoQyxXQUFPO0FBQ0xDLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUFHLFVBQVNQLEtBQUssSUFBSVEsZ0RBQU0sQ0FBQ0MsR0FBUCxDQUFXLE9BQVgsQ0FBb0IsRUFBdkMsSUFBNEM7QUFEcEQ7QUFESixLQUFQO0FBS0QsR0FOMEIsQ0FBM0I7QUFRQSxTQUFPLElBQUlDLDJEQUFKLENBQWlCO0FBQ3RCQyxxQkFBaUIsT0FESztBQUV0QkMsV0FBTyxFQUFFLE1BRmE7QUFFSztBQUMzQlgsUUFBSSxFQUFFRyxRQUFRLENBQUNTLE1BQVQsQ0FBZ0JaLElBQWhCLENBSGdCO0FBSXRCYSxTQUFLLEVBQUUsSUFBSUMsNERBQUosR0FBb0JDLE9BQXBCLENBQTRCakIsWUFBWSxJQUFJLEVBQTVDO0FBSmUsR0FBakIsQ0FBUDtBQU1EOztBQUVNLE1BQU1rQixnQkFBZ0IsR0FBRyxDQUFDbEIsWUFBRCxFQUFlbUIsT0FBZixLQUEyQjtBQUN6RDtBQUNBO0FBQ0EsTUFBSSxJQUFKLEVBQXNCO0FBQ3BCLFdBQU9wQixNQUFNLENBQUNDLFlBQUQsRUFBZW1CLE9BQWYsQ0FBYjtBQUNELEdBTHdELENBT3pEOzs7QUFDQSxNQUFJLENBQUN2QixZQUFMLEVBQW1CO0FBQ2pCQSxnQkFBWSxHQUFHRyxNQUFNLENBQUNDLFlBQUQsRUFBZW1CLE9BQWYsQ0FBckI7QUFDRDs7QUFFRCxTQUFPdkIsWUFBUDtBQUNELENBYk07QUFlQSxNQUFNd0IsU0FBUyxHQUFJcEIsWUFBRCxJQUFrQjtBQUN6QyxRQUFNcUIsS0FBSyxHQUFHQyxxREFBTyxDQUFDLE1BQU1KLGdCQUFnQixDQUFDbEIsWUFBRCxDQUF2QixFQUF1QyxDQUFDQSxZQUFELENBQXZDLENBQXJCO0FBQ0EsU0FBT3FCLEtBQVA7QUFDRCxDQUhNIiwiZmlsZSI6Ii4vc3JjL2Fwb2xsby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSwgY3JlYXRlSHR0cExpbmsgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gXCJhcG9sbG8tbGluay1jb250ZXh0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNFUlZFUl9VUkwgPSBcImh0dHBzOi8vZWRmaHItZGFzaGJvYXJkLTcyNDA3Ny51czEua2ludG8uaW9cIjtcblxubGV0IGFwb2xsb0NsaWVudCA9IG51bGw7XG5cbmlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoaW5pdGlhbFN0YXRlLCB0b2tlbikge1xuICBsZXQgbGluayA9IGNyZWF0ZUh0dHBMaW5rKHtcbiAgICB1cmk6XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJkZXZlbG9wbWVudFwiXG4gICAgICAgID8gYCR7U0VSVkVSX1VSTH0vYXBpL2dyYXBocWxgXG4gICAgICAgIDogXCIvYXBpL2dyYXBocWxcIixcblxuICAgIGZldGNoLFxuICB9KTtcblxuICBjb25zdCBhdXRoTGluayA9IHNldENvbnRleHQoKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbiB8fCBDb29raWUuZ2V0KFwidG9rZW5cIil9YCB8fCBcIlwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgY29ubmVjdFRvRGV2VG9vbHM6IHByb2Nlc3MuYnJvd3NlcixcbiAgICBzc3JNb2RlOiAhcHJvY2Vzcy5icm93c2VyLCAvLyBEaXNhYmxlcyBmb3JjZUZldGNoIG9uIHRoZSBzZXJ2ZXIgKHNvIHF1ZXJpZXMgYXJlIG9ubHkgcnVuIG9uY2UpXG4gICAgbGluazogYXV0aExpbmsuY29uY2F0KGxpbmspLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXBvbGxvID0gKGluaXRpYWxTdGF0ZSwgb3B0aW9ucykgPT4ge1xuICAvLyBNYWtlIHN1cmUgdG8gY3JlYXRlIGEgbmV3IGNsaWVudCBmb3IgZXZlcnkgc2VydmVyLXNpZGUgcmVxdWVzdCBzbyB0aGF0IGRhdGFcbiAgLy8gaXNuJ3Qgc2hhcmVkIGJldHdlZW4gY29ubmVjdGlvbnMgKHdoaWNoIHdvdWxkIGJlIGJhZClcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlKGluaXRpYWxTdGF0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICAvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXG4gIGlmICghYXBvbGxvQ2xpZW50KSB7XG4gICAgYXBvbGxvQ2xpZW50ID0gY3JlYXRlKGluaXRpYWxTdGF0ZSwgb3B0aW9ucyk7XG4gIH1cblxuICByZXR1cm4gYXBvbGxvQ2xpZW50O1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwb2xsbyA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlKSwgW2luaXRpYWxTdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/apollo/index.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/index.scss */ \"./src/styles/index.scss\");\n/* harmony import */ var styles_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_index_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! apollo */ \"./src/apollo/index.js\");\n/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-mde/lib/styles/css/react-mde-all.css */ \"./node_modules/react-mde/lib/styles/css/react-mde-all.css\");\n/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_13__);\n\nvar _jsxFileName = \"/home/peter/Desktop/projects/hela/law-3/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import \"bootstrap/dist/js/bootstrap\";\n// import \"utils/scripts\";\n\nif (false) {}\n\nnext_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on(\"routeChangeStart\", () => {\n  nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();\n});\nnext_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on(\"routeChangeComplete\", () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());\nnext_router__WEBPACK_IMPORTED_MODULE_7___default.a.events.on(\"routeChangeError\", () => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done());\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  const client = Object(apollo__WEBPACK_IMPORTED_MODULE_12__[\"useApollo\"])(pageProps.apollo);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Nigeria's #1 Electronic platform for Law reports, Practice and study notes, legal questions in Nigeria\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"/nprogress.css\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css\",\n        integrity: \"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"HELA\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(recoil__WEBPACK_IMPORTED_MODULE_4__[\"RecoilRoot\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_apollo_client__WEBPACK_IMPORTED_MODULE_11__[\"ApolloProvider\"], {\n        client: client,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_10__[\"ThemeProvider\"], {\n          theme: theme__WEBPACK_IMPORTED_MODULE_8__[\"theme\"],\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(theme_ui__WEBPACK_IMPORTED_MODULE_9__[\"ThemeProvider\"], {\n            theme: theme__WEBPACK_IMPORTED_MODULE_8__[\"theme\"],\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTnByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJ1c2VBcG9sbG8iLCJhcG9sbG8iLCJ0aGVtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFFQTs7QUFFQSxXQUFtQyxFQUlsQzs7QUFFREEsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxNQUFNO0FBQ3pDQyxrREFBUyxDQUFDQyxLQUFWO0FBQ0QsQ0FGRDtBQUdBSixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDLE1BQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBOUM7QUFDQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQyxNQUFNQyxnREFBUyxDQUFDRSxJQUFWLEVBQTNDOztBQUVBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxRQUFNQyxNQUFNLEdBQUdDLHlEQUFTLENBQUNGLFNBQVMsQ0FBQ0csTUFBWCxDQUF4QjtBQUNBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFDRSxXQUFHLEVBQUMsWUFETjtBQUVFLFlBQUksRUFBQyw0RUFGUDtBQUdFLGlCQUFTLEVBQUMsaUdBSFo7QUFJRSxtQkFBVyxFQUFDO0FBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQWVFLHFFQUFDLGlEQUFEO0FBQUEsNkJBQ0UscUVBQUMsOERBQUQ7QUFBZ0IsY0FBTSxFQUFFRixNQUF4QjtBQUFBLCtCQUNFLHFFQUFDLGdFQUFEO0FBQWEsZUFBSyxFQUFFRywyQ0FBcEI7QUFBQSxpQ0FDRSxxRUFBQyxzREFBRDtBQUFlLGlCQUFLLEVBQUVBLDJDQUF0QjtBQUFBLG1DQUNFLHFFQUFDLFNBQUQsb0JBQWVKLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDs7QUFFREYsS0FBSyxDQUFDTyxTQUFOLEdBQWtCO0FBQ2hCTixXQUFTLEVBQUVPLGlEQUFTLENBQUNDLEdBREw7QUFFaEJQLFdBQVMsRUFBRU0saURBQVMsQ0FBQ0M7QUFGTCxDQUFsQjtBQUtlVCxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IE5wcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgXCJzdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSBcInRoZW1lXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIGFzIFN0eWxlZHRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSBcImFwb2xsb1wiO1xuaW1wb3J0IFwicmVhY3QtbWRlL2xpYi9zdHlsZXMvY3NzL3JlYWN0LW1kZS1hbGwuY3NzXCI7XG4vLyBpbXBvcnQgXCJib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXBcIjtcblxuLy8gaW1wb3J0IFwidXRpbHMvc2NyaXB0c1wiO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAvLyByZXF1aXJlKFwicG9wcGVyLmpzXCIpO1xuICByZXF1aXJlKFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwXCIpO1xuICAvLyByZXF1aXJlKFwiLi4vdXRpbHMvc2NyaXB0cy5qc1wiKTtcbn1cblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4ge1xuICBOcHJvZ3Jlc3Muc3RhcnQoKTtcbn0pO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTnByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOcHJvZ3Jlc3MuZG9uZSgpKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IGNsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMuYXBvbGxvKTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJOaWdlcmlhJ3MgIzEgRWxlY3Ryb25pYyBwbGF0Zm9ybSBmb3IgTGF3IHJlcG9ydHMsIFByYWN0aWNlIGFuZCBzdHVkeSBub3RlcywgbGVnYWwgcXVlc3Rpb25zIGluIE5pZ2VyaWFcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi9ucHJvZ3Jlc3MuY3NzXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzUuMTUuMS9jc3MvYWxsLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTUxMi0rNHpDSzlrK3FORlVSNVgrY0tMOUVJUitaT2h0SWxvTmw5R0lLUzU3VjFNeU5zWXBZY1VyVWVRYzl2TmZ6c1dmVjI4SWFMTDNpOTZQOXNkTnllUnNzQT09XCJcbiAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICAgIDx0aXRsZT5IRUxBPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgIDxTdHlsZWR0aGVtZSB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICAgIDwvU3R5bGVkdGhlbWU+XG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICAgICA8L1JlY29pbFJvb3Q+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5hbnksXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/index.scss\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theme-ui/presets */ \"@theme-ui/presets\");\n/* harmony import */ var _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // $primary: #e85d45;\n// $dark: #1b1b1b;\n// $dark-2: #353535;\n// $text-1: #0e0e16;\n// $muted: #808080;\n// $gray: #878787;\n// $light: #fff;\n// $light-2: #f1f1f1;\n// $secondary: #e9ecef;\n\nconst theme = _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"bootstrap\"]), {}, {\n  colors: {\n    text: \"#0e0e16\",\n    background: \"#fff\",\n    base: [\"#e85d45\", \"#564FCC\"],\n    //\"#564FCC\", //\"#11e\",\n    primary: \"#e43f23\",\n    white: \"#fff\",\n    secondary: \"#c4c4c4\",\n    highlight: \"#F7E8DB\",\n    muted: \"#808080\",\n    error: \"#f65\",\n    black: \"#333\",\n    green: \"#004150\",\n    modes: {\n      dark: {\n        text: \"#fff\",\n        background: \"#000\",\n        primary: \"#e85d45\",\n        secondary: \"#353535\",\n        highlight: \"#f0c\",\n        muted: \"#111\"\n      }\n    }\n  },\n  forms: {\n    select: {\n      borderRadius: \"1.875rem\" // padding: \"0.6rem 3.125rem\",\n\n    }\n  },\n  fonts: {\n    body: '\"Popins\", sans-serif',\n    heading: \"inherit\",\n    monospace: \"Menlo, monospace\"\n  },\n  buttons: _objectSpread(_objectSpread({}, _theme_ui_presets__WEBPACK_IMPORTED_MODULE_0__[\"bootstrap\"].button), {}, {\n    primary: {\n      padding: \"0.6rem 3.125rem\",\n      borderRadius: \"3.125rem\"\n    },\n    secondary: {\n      bg: \"secondary\",\n      color: \"text\"\n    }\n  })\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanM/MGJlNyJdLCJuYW1lcyI6WyJ0aGVtZSIsImJvb3RzdHJhcCIsImNvbG9ycyIsInRleHQiLCJiYWNrZ3JvdW5kIiwiYmFzZSIsInByaW1hcnkiLCJ3aGl0ZSIsInNlY29uZGFyeSIsImhpZ2hsaWdodCIsIm11dGVkIiwiZXJyb3IiLCJibGFjayIsImdyZWVuIiwibW9kZXMiLCJkYXJrIiwiZm9ybXMiLCJzZWxlY3QiLCJib3JkZXJSYWRpdXMiLCJmb250cyIsImJvZHkiLCJoZWFkaW5nIiwibW9ub3NwYWNlIiwiYnV0dG9ucyIsImJ1dHRvbiIsInBhZGRpbmciLCJiZyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0NBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1BLEtBQUssbUNBRWJDLDJEQUZhO0FBR2hCQyxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFLFNBREE7QUFFTkMsY0FBVSxFQUFFLE1BRk47QUFHTkMsUUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FIQTtBQUd3QjtBQUM5QkMsV0FBTyxFQUFFLFNBSkg7QUFLTkMsU0FBSyxFQUFFLE1BTEQ7QUFNTkMsYUFBUyxFQUFFLFNBTkw7QUFPTkMsYUFBUyxFQUFFLFNBUEw7QUFRTkMsU0FBSyxFQUFFLFNBUkQ7QUFTTkMsU0FBSyxFQUFFLE1BVEQ7QUFVTkMsU0FBSyxFQUFFLE1BVkQ7QUFXTkMsU0FBSyxFQUFFLFNBWEQ7QUFZTkMsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQUNKWixZQUFJLEVBQUUsTUFERjtBQUVKQyxrQkFBVSxFQUFFLE1BRlI7QUFHSkUsZUFBTyxFQUFFLFNBSEw7QUFJSkUsaUJBQVMsRUFBRSxTQUpQO0FBS0pDLGlCQUFTLEVBQUUsTUFMUDtBQU1KQyxhQUFLLEVBQUU7QUFOSDtBQUREO0FBWkQsR0FIUTtBQTBCaEJNLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFDTkMsa0JBQVksRUFBRSxVQURSLENBRU47O0FBRk07QUFESCxHQTFCUztBQWdDaEJDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUUsc0JBREQ7QUFFTEMsV0FBTyxFQUFFLFNBRko7QUFHTEMsYUFBUyxFQUFFO0FBSE4sR0FoQ1M7QUFxQ2hCQyxTQUFPLGtDQUNGdEIsMkRBQVMsQ0FBQ3VCLE1BRFI7QUFFTGxCLFdBQU8sRUFBRTtBQUNQbUIsYUFBTyxFQUFFLGlCQURGO0FBRVBQLGtCQUFZLEVBQUU7QUFGUCxLQUZKO0FBTUxWLGFBQVMsRUFBRTtBQUNUa0IsUUFBRSxFQUFFLFdBREs7QUFHVEMsV0FBSyxFQUFFO0FBSEU7QUFOTjtBQXJDUyxFQUFYIiwiZmlsZSI6Ii4vc3JjL3RoZW1lL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSBcIkB0aGVtZS11aS9wcmVzZXRzXCI7XG5cbi8vICRwcmltYXJ5OiAjZTg1ZDQ1O1xuXG4vLyAkZGFyazogIzFiMWIxYjtcbi8vICRkYXJrLTI6ICMzNTM1MzU7XG4vLyAkdGV4dC0xOiAjMGUwZTE2O1xuLy8gJG11dGVkOiAjODA4MDgwO1xuLy8gJGdyYXk6ICM4Nzg3ODc7XG4vLyAkbGlnaHQ6ICNmZmY7XG4vLyAkbGlnaHQtMjogI2YxZjFmMTtcbi8vICRzZWNvbmRhcnk6ICNlOWVjZWY7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgLy8gLi4uYm9vdHN0cmFwLFxuICAuLi5ib290c3RyYXAsXG4gIGNvbG9yczoge1xuICAgIHRleHQ6IFwiIzBlMGUxNlwiLFxuICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgIGJhc2U6IFtcIiNlODVkNDVcIiwgXCIjNTY0RkNDXCJdLCAvL1wiIzU2NEZDQ1wiLCAvL1wiIzExZVwiLFxuICAgIHByaW1hcnk6IFwiI2U0M2YyM1wiLFxuICAgIHdoaXRlOiBcIiNmZmZcIixcbiAgICBzZWNvbmRhcnk6IFwiI2M0YzRjNFwiLFxuICAgIGhpZ2hsaWdodDogXCIjRjdFOERCXCIsXG4gICAgbXV0ZWQ6IFwiIzgwODA4MFwiLFxuICAgIGVycm9yOiBcIiNmNjVcIixcbiAgICBibGFjazogXCIjMzMzXCIsXG4gICAgZ3JlZW46IFwiIzAwNDE1MFwiLFxuICAgIG1vZGVzOiB7XG4gICAgICBkYXJrOiB7XG4gICAgICAgIHRleHQ6IFwiI2ZmZlwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiMwMDBcIixcbiAgICAgICAgcHJpbWFyeTogXCIjZTg1ZDQ1XCIsXG4gICAgICAgIHNlY29uZGFyeTogXCIjMzUzNTM1XCIsXG4gICAgICAgIGhpZ2hsaWdodDogXCIjZjBjXCIsXG4gICAgICAgIG11dGVkOiBcIiMxMTFcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZm9ybXM6IHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCIxLjg3NXJlbVwiLFxuICAgICAgLy8gcGFkZGluZzogXCIwLjZyZW0gMy4xMjVyZW1cIixcbiAgICB9LFxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6ICdcIlBvcGluc1wiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWFkaW5nOiBcImluaGVyaXRcIixcbiAgICBtb25vc3BhY2U6IFwiTWVubG8sIG1vbm9zcGFjZVwiLFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgLi4uYm9vdHN0cmFwLmJ1dHRvbixcbiAgICBwcmltYXJ5OiB7XG4gICAgICBwYWRkaW5nOiBcIjAuNnJlbSAzLjEyNXJlbVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcIjMuMTI1cmVtXCIsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGJnOiBcInNlY29uZGFyeVwiLFxuXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

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