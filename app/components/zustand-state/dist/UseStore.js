"use strict";
exports.__esModule = true;
var zustand_1 = require("zustand");
var UseStore = zustand_1.create(function (set) { return ({
    user: localStorage.getItem("user") || null,
    setUser: function (newUser) {
        set({ user: newUser }), localStorage.setItem("user", newUser);
    }
}); });
exports["default"] = UseStore;
