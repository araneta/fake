import {
  Request,
  Response,
} from "express";
import { add, differenceInDays } from 'date-fns';

import supabase from '../utils/supabase'
//import {Polygon} from "../repositories";
import SimpleResponse from "../dto/SimpleResponse";
import TrialInfo from "../dto/TrialInfo";

export class InstallationController {
  

  static async feed(req: Request, res: Response) {
	let response = new SimpleResponse();
    var data = {
		version: "1",
		whatsnew: "New version",
		downloadurl: "http://google.com",
	};
    
	
    res.json(data);
  }
  
  
}
