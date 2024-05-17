using NUnit.Framework;
using SpecFlowPSpecflowProject.Support;
using SpecflowProject.Config;
using SpecflowProject.Pages;
using SpecflowProject.Support;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.Assist;

namespace SpecflowProject.StepDefinitions
{
    [Binding]
    public sealed class LoginSteps
    {
        private WebDriverSupport _driverSupport;
        private WebsiteInfo _siteInfo;
        LoginPage loginPage;
        JSExecutor jSExecutor;

        public LoginSteps(WebDriverSupport driverSupport)
        {
            _driverSupport = driverSupport;
            _siteInfo = _driverSupport.WebsiteInfo;
            loginPage = new LoginPage(_driverSupport.Driver);
            jSExecutor = new JSExecutor(_driverSupport.Driver);
        }

        [Given(@"I navigate to Bookstore application")]
        public void GivenINavigateToBookstoreApplication()
        {
            _driverSupport.Driver.Navigate().GoToUrl(_siteInfo.BaseUrl);
        }

        [Given(@"I enter username and password")]
        public void GivenIEnterUsernameAndPassword()
        {
            loginPage.UsernameInput.SendKeys(_siteInfo.Username);
            loginPage.PasswordInput.SendKeys(_siteInfo.Password);
            Thread.Sleep(5000);

        }

        [Given(@"I enter username and password as following")]
        public void GivenIEnterUsernameAndPasswordAsFollowing(Table table)
        {
            var Rows = table.CreateSet<LoginVariables>();
            var row = Rows.ElementAt(0);
            loginPage.UsernameInput.SendKeys(row.Username);
            loginPage.PasswordInput.SendKeys(row.Password);
        }

        [When(@"I click login button")]
        public void WhenIClickLoginButton()
        {
            Thread.Sleep(3000);
            jSExecutor.ScrollIntoElement(loginPage.LoginButton);
            loginPage.LoginButton.Click();
        }

        [When(@"I click logout button")]
        public void WhenIClickLogoutButton()
        {
            Thread.Sleep(3000);
            jSExecutor.ScrollIntoElement(loginPage.LogoutButton);
            loginPage.LogoutButton.Click();
        }

        [Given(@"I click on Login from Menu List")]
        public void GivenIClickOnLoginFromMenuList()
        {
            Thread.Sleep(5000);
            jSExecutor.ScrollIntoElement(loginPage.LoginFromMenu);
            loginPage.LoginFromMenu.Click();
        }

        [Given(@"I click on New User button")]
        public void GivenIClickOnNewUserButton()
        {
            loginPage.NewUserButton.Click();
        }

        [Then(@"Invalid Username or Password Message should be displayed")]
        public void ThenInvalidUsernameOrPasswordMessageShouldBeDisplayed()
        {
            bool displayFlag= loginPage.InvalidUsernameMsg.Displayed;
            Assert.IsTrue(displayFlag);
            Thread.Sleep(5000);
        }

       

    }
}