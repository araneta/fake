"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstallationController = void 0;
const date_fns_1 = require("date-fns");
const supabase_1 = __importDefault(require("../utils/supabase"));
//import {Polygon} from "../repositories";
const SimpleResponse_1 = __importDefault(require("../dto/SimpleResponse"));
class InstallationController {
    static addDevice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new SimpleResponse_1.default();
            try {
                var deviceId = req.body.device_id;
                var appId = req.body.app_id;
                const { data, error } = yield supabase_1.default
                    .from('devices')
                    .select('*')
                    .eq('device_id', deviceId)
                    .eq('app_id', appId);
                console.log('err:', error);
                if (error) {
                    response.setData(data);
                    response.setMessage(error);
                }
                else {
                    if (data.length == 0) {
                        var datax = yield supabase_1.default.from('devices').insert({ device_id: deviceId, app_id: appId });
                        response.setData(datax);
                        response.setMessage("device created!");
                    }
                    else {
                        response.setData(data);
                        response.setMessage("device exist!");
                    }
                }
            }
            catch (e) {
                response.setStatus(false);
                response.setMessage("Error while creating device...");
            }
            res.json(response);
        });
    }
    static getDevice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new SimpleResponse_1.default();
            try {
                var deviceId = req.params.id;
                var appId = req.params.app_id;
                console.log('deviceId', deviceId);
                const { data, error } = yield supabase_1.default
                    .from('devices')
                    .select('*')
                    .eq('device_id', deviceId)
                    .eq('app_id', appId);
                console.log('err:', error);
                if (error) {
                    response.setData(data);
                    response.setMessage(error);
                }
                else {
                    if (data.length == 0) {
                        response.setData(null);
                        response.setMessage('Not Found');
                    }
                    else {
                        response.setData(data);
                        response.setMessage('Success');
                    }
                }
            }
            catch (e) {
                response.setStatus(false);
                response.setMessage("Error while fetching device...");
            }
            res.json(response);
        });
    }
    static trialDevice(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let response = new SimpleResponse_1.default();
            try {
                var deviceId = req.body.device_id;
                var appId = req.body.app_id;
                const { data, error } = yield supabase_1.default
                    .from('devices')
                    .select('*')
                    .eq('device_id', deviceId)
                    .eq('app_id', appId);
                console.log('err:', error);
                if (error) {
                    response.setData(data);
                    response.setMessage(error);
                }
                else {
                    if (data.length == 0) {
                        var datax = yield supabase_1.default.from('devices').insert({ device_id: deviceId, app_id: appId }).select();
                        const info = {
                            remainingDays: 30,
                            device: datax.data[0]
                        };
                        response.setData(info);
                        response.setMessage("device created!");
                    }
                    else {
                        const device = data[0];
                        const originalTimestamp = new Date(device.created_at);
                        const trialDurationDays = 30;
                        const newTimestamp = (0, date_fns_1.add)(originalTimestamp, { days: trialDurationDays });
                        const remainingDays = (0, date_fns_1.differenceInDays)(newTimestamp, new Date());
                        const info = {
                            remainingDays: remainingDays,
                            device: device
                        };
                        response.setData(info);
                        response.setMessage("device exist!");
                    }
                }
            }
            catch (e) {
                response.setStatus(false);
                response.setMessage("Error while creating device...");
            }
            res.json(response);
        });
    }
}
exports.InstallationController = InstallationController;
//# sourceMappingURL=InstallationController.js.map