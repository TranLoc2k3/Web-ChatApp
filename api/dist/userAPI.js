"use strict";
exports.__esModule = true;
exports.useAPI = void 0;
var axios_config_1 = require("@/configs/axios.config");
var useAPI = {
    onSignUp: function (url, _a) {
        var username = _a.username, password = _a.password;
        axios_config_1.axiosClient.post(url, {
            username: username,
            password: password
        });
    }
};
exports.useAPI = useAPI;
