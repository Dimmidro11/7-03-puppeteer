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

  test("The h1 header content'", async () => {
    page.setDefaultTimeout(60000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub · Build and ship software on a single, collaborative platform · GitHub');
  });

  test("The first link attribute", async () => {
    page.setDefaultTimeout(20000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    page.setDefaultTimeout(5000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent.trim());
    expect(actual).toMatch(/^Get started with Team$/)
  });
});

  test("The h1 header content'", async () => {
    page.setDefaultTimeout(5000);
    await page.goto("https://github.com/resources/articles/ai");
    const title = await page.title();
    expect(title).toEqual('AI · GitHub');
  });

    test("The h1 header content'", async () => {
        page.setDefaultTimeout(5000);
    await page.goto("https://github.com/enterprise");
    const title = await page.title();
    expect(title).toEqual('The AI Powered Developer Platform. · GitHub');
  });

    test("The h1 header content'", async () => {
        page.setDefaultTimeout(5000);
    await page.goto("https://github.com/solutions/use-case/devsecops");
    const title = await page.title();
    expect(title).toEqual('Unified DevSecOps Solutions Built for Security | GitHub · GitHub');
  });
