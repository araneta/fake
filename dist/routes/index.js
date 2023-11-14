"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post("/installations", controllers_1.InstallationController.addDevice);
router.post("/trial", controllers_1.InstallationController.trialDevice);
//router.get("/installations", InstallationController.getAllDevices);
//router.delete("/installations/:id", InstallationController.deletePolygon);
router.get("/installations/:app_id/:id", controllers_1.InstallationController.getDevice);
//router.put("/installations/:id");
exports.default = router;
//# sourceMappingURL=index.js.map