import test, {expect} from '../Fixtures/BasePage'

test.describe('demoapps', async()=>{

    test('user regester', async({page, regesterpage})=>{



        
        

        await page.goto("https://demo.automationtesting.in/Register.html");

        await regesterpage.userReg("prasad", "vara");
        await page.waitForTimeout(5000);

    })

})