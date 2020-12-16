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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-context */ \"apollo-link-context\");\n/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst SERVER_URL = \"https://edfhr-dashboard-724077.us1.kinto.io\";\nlet apolloClient = null;\n\nif (true) {\n  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default.a;\n}\n\nfunction create(initialState, token) {\n  let link = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"createHttpLink\"])({\n    uri: false ? undefined : \"http://localhost:3000/api/graphql\",\n    fetch: (isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default())\n  });\n  const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_1__[\"setContext\"])(() => {\n    return {\n      headers: {\n        Authorization: `Bearer ${token || js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"token\")}` || \"\"\n      }\n    };\n  });\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"ApolloClient\"]({\n    connectToDevTools: false,\n    ssrMode: !false,\n    // Disables forceFetch on the server (so queries are only run once)\n    link: authLink.concat(link),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__[\"InMemoryCache\"]().restore(initialState || {})\n  });\n}\n\nconst initializeApollo = (initialState, options) => {\n  // Make sure to create a new client for every server-side request so that data\n  // isn't shared between connections (which would be bad)\n  if (true) {\n    return create(initialState, options);\n  } // Reuse client on the client-side\n\n\n  if (!apolloClient) {\n    apolloClient = create(initialState, options);\n  }\n\n  return apolloClient;\n};\nconst useApollo = initialState => {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(() => initializeApollo(initialState), [initialState]);\n  return store;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBvbGxvL2luZGV4LmpzP2FlY2MiXSwibmFtZXMiOlsiU0VSVkVSX1VSTCIsImFwb2xsb0NsaWVudCIsImdsb2JhbCIsImZldGNoIiwiY3JlYXRlIiwiaW5pdGlhbFN0YXRlIiwidG9rZW4iLCJsaW5rIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJhdXRoTGluayIsInNldENvbnRleHQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkNvb2tpZSIsImdldCIsIkFwb2xsb0NsaWVudCIsImNvbm5lY3RUb0RldlRvb2xzIiwic3NyTW9kZSIsImNvbmNhdCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInJlc3RvcmUiLCJpbml0aWFsaXplQXBvbGxvIiwib3B0aW9ucyIsInVzZUFwb2xsbyIsInN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLDZDQUFuQjtBQUVBLElBQUlDLFlBQVksR0FBRyxJQUFuQjs7QUFFQSxJQUFJLElBQUosRUFBc0I7QUFDcEJDLFFBQU0sQ0FBQ0MsS0FBUCxHQUFlQSx5REFBZjtBQUNEOztBQUVELFNBQVNDLE1BQVQsQ0FBZ0JDLFlBQWhCLEVBQThCQyxLQUE5QixFQUFxQztBQUNuQyxNQUFJQyxJQUFJLEdBQUdDLHFFQUFjLENBQUM7QUFDeEJDLE9BQUcsRUFDRCxRQUNLLFNBREwsR0FFSSxtQ0FKa0I7QUFNeEJOLHNFQUFLQTtBQU5tQixHQUFELENBQXpCO0FBU0EsUUFBTU8sUUFBUSxHQUFHQyxzRUFBVSxDQUFDLE1BQU07QUFDaEMsV0FBTztBQUNMQyxhQUFPLEVBQUU7QUFDUEMscUJBQWEsRUFBRyxVQUFTUCxLQUFLLElBQUlRLGdEQUFNLENBQUNDLEdBQVAsQ0FBVyxPQUFYLENBQW9CLEVBQXZDLElBQTRDO0FBRHBEO0FBREosS0FBUDtBQUtELEdBTjBCLENBQTNCO0FBUUEsU0FBTyxJQUFJQywyREFBSixDQUFpQjtBQUN0QkMscUJBQWlCLE9BREs7QUFFdEJDLFdBQU8sRUFBRSxNQUZhO0FBRUs7QUFDM0JYLFFBQUksRUFBRUcsUUFBUSxDQUFDUyxNQUFULENBQWdCWixJQUFoQixDQUhnQjtBQUl0QmEsU0FBSyxFQUFFLElBQUlDLDREQUFKLEdBQW9CQyxPQUFwQixDQUE0QmpCLFlBQVksSUFBSSxFQUE1QztBQUplLEdBQWpCLENBQVA7QUFNRDs7QUFFTSxNQUFNa0IsZ0JBQWdCLEdBQUcsQ0FBQ2xCLFlBQUQsRUFBZW1CLE9BQWYsS0FBMkI7QUFDekQ7QUFDQTtBQUNBLE1BQUksSUFBSixFQUFzQjtBQUNwQixXQUFPcEIsTUFBTSxDQUFDQyxZQUFELEVBQWVtQixPQUFmLENBQWI7QUFDRCxHQUx3RCxDQU96RDs7O0FBQ0EsTUFBSSxDQUFDdkIsWUFBTCxFQUFtQjtBQUNqQkEsZ0JBQVksR0FBR0csTUFBTSxDQUFDQyxZQUFELEVBQWVtQixPQUFmLENBQXJCO0FBQ0Q7O0FBRUQsU0FBT3ZCLFlBQVA7QUFDRCxDQWJNO0FBZUEsTUFBTXdCLFNBQVMsR0FBSXBCLFlBQUQsSUFBa0I7QUFDekMsUUFBTXFCLEtBQUssR0FBR0MscURBQU8sQ0FBQyxNQUFNSixnQkFBZ0IsQ0FBQ2xCLFlBQUQsQ0FBdkIsRUFBdUMsQ0FBQ0EsWUFBRCxDQUF2QyxDQUFyQjtBQUNBLFNBQU9xQixLQUFQO0FBQ0QsQ0FITSIsImZpbGUiOiIuL3NyYy9hcG9sbG8vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIGNyZWF0ZUh0dHBMaW5rIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmltcG9ydCB7IHNldENvbnRleHQgfSBmcm9tIFwiYXBvbGxvLWxpbmstY29udGV4dFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTRVJWRVJfVVJMID0gXCJodHRwczovL2VkZmhyLWRhc2hib2FyZC03MjQwNzcudXMxLmtpbnRvLmlvXCI7XG5cbmxldCBhcG9sbG9DbGllbnQgPSBudWxsO1xuXG5pZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xuICBnbG9iYWwuZmV0Y2ggPSBmZXRjaDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlKGluaXRpYWxTdGF0ZSwgdG9rZW4pIHtcbiAgbGV0IGxpbmsgPSBjcmVhdGVIdHRwTGluayh7XG4gICAgdXJpOlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgICAgICA/IGAke1NFUlZFUl9VUkx9L2FwaS9ncmFwaHFsYFxuICAgICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsXCIsXG5cbiAgICBmZXRjaCxcbiAgfSk7XG5cbiAgY29uc3QgYXV0aExpbmsgPSBzZXRDb250ZXh0KCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW4gfHwgQ29va2llLmdldChcInRva2VuXCIpfWAgfHwgXCJcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGNvbm5lY3RUb0RldlRvb2xzOiBwcm9jZXNzLmJyb3dzZXIsXG4gICAgc3NyTW9kZTogIXByb2Nlc3MuYnJvd3NlciwgLy8gRGlzYWJsZXMgZm9yY2VGZXRjaCBvbiB0aGUgc2VydmVyIChzbyBxdWVyaWVzIGFyZSBvbmx5IHJ1biBvbmNlKVxuICAgIGxpbms6IGF1dGhMaW5rLmNvbmNhdChsaW5rKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKS5yZXN0b3JlKGluaXRpYWxTdGF0ZSB8fCB7fSksXG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUFwb2xsbyA9IChpbml0aWFsU3RhdGUsIG9wdGlvbnMpID0+IHtcbiAgLy8gTWFrZSBzdXJlIHRvIGNyZWF0ZSBhIG5ldyBjbGllbnQgZm9yIGV2ZXJ5IHNlcnZlci1zaWRlIHJlcXVlc3Qgc28gdGhhdCBkYXRhXG4gIC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXG4gIGlmICghcHJvY2Vzcy5icm93c2VyKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShpbml0aWFsU3RhdGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgLy8gUmV1c2UgY2xpZW50IG9uIHRoZSBjbGllbnQtc2lkZVxuICBpZiAoIWFwb2xsb0NsaWVudCkge1xuICAgIGFwb2xsb0NsaWVudCA9IGNyZWF0ZShpbml0aWFsU3RhdGUsIG9wdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGFwb2xsb0NsaWVudDtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VBcG9sbG8gPSAoaW5pdGlhbFN0YXRlKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSksIFtpbml0aWFsU3RhdGVdKTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/apollo/index.js\n");

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