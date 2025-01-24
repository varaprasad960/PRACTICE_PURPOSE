import RegesterPage from "../Pages/Regesterpage";
import {test as BaseTest} from '@playwright/test'



const test = BaseTest.extend<{

    regesterpage : RegesterPage;

}>

({

    regesterpage : async({page}, use)=>{
        await use (new RegesterPage(page))
    }

})

export default test;
export const expect = test.expect;

