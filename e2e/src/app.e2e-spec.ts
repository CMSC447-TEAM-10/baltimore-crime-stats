import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get('/');
  });

  it('should check baltimore city data button', () => {
    element(by.buttonText('Baltimore City Data')).click();
  });

  it('should check each button on map page', () => {
    page.navigateTo();
    element(by.name('map')).click();
    
    /*element(by.name('low')).click();
    element(by.name('medium')).click();
    element(by.name('high')).click();
    element(by.name('all')).click();
    */
  });

  it('should check each button on charts page', () => {
    page.navigateTo();
    element(by.name('charts')).click();
    element(by.buttonText('Show Calls by District')).click();
    //element(by.buttonText('Show Calls over Time')).click();
  });

  it('should check each button on pie charts page', () => {
    page.navigateTo();
    element(by.name('pie charts')).click();
    element(by.buttonText('Show Chart')).click();
   /*
    element(by.buttonText('Low')).click();
    element(by.buttonText('Medium')).click();
    element(by.buttonText('High')).click();
    element(by.buttonText('All')).click();
    */
    //element(by.buttonText('Baltimore City Data')).click();
  });

  it('should check each button on directed tree page', () => {
    page.navigateTo();
    element(by.name('directed tree')).click();
    element(by.buttonText('Show Tree')).click();
   /*
    element(by.buttonText('Low')).click();
    element(by.buttonText('Medium')).click();
    element(by.buttonText('High')).click();
    element(by.buttonText('All')).click();
    */
    //element(by.buttonText('Baltimore City Data')).click();
  });


  /*
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
*/

});
