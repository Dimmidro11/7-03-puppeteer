let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub');
  }, 60000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 20000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent.trim());
    expect(actual).toMatch(/^Get started with Team$/)
  }, 5000);
});

test("GH AI content", async () => {
    await page.goto("https://github.com/resources/articles/ai");
    const title = await page.title();
    expect(title).toEqual('AI · GitHub');
  }, 5000);

test("GH Enterprise content", async () => {
    await page.goto("https://github.com/enterprise");
    const title = await page.title();
    expect(title).toEqual('The AI Powered Developer Platform. · GitHub');
  }, 5000);

  test("GH DecSecOps content", async () => {
    await page.goto("https://github.com/solutions/use-case/devsecops");
    const title = await page.title();
    expect(title).toEqual('Unified DevSecOps Solutions Built for Security | GitHub · GitHub');
  }, 5000);
