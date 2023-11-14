"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get("/feed", controllers_1.InstallationController.feed);
//router.put("/installations/:id");
exports.default = router;
//# sourceMappingURL=index.js.map