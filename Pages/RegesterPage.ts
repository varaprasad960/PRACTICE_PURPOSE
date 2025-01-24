import { Locator, Page} from '@playwright/test'


export default class RegesterPage{
    readonly page: Page;
    readonly fname_textbox: Locator;
    readonly lname_textbox: Locator;

    constructor(page : Page){
        this.page = page;
        this.fname_textbox = page.locator('//input[@placeholder="First Name"]');
        this.lname_textbox = page.locator('//input[@placeholder="Last Name"]');

    }

    public async userReg(fname : string, lname : string){
        await this.fname_textbox.fill(fname);
        await this.lname_textbox.fill(lname);
    }



}