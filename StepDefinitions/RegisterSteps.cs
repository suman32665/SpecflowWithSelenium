using NUnit.Framework;
using SpecflowProject.Config;
using SpecflowProject.Pages;
using SpecflowProject.Support;
using TechTalk.SpecFlow.Assist;

namespace SpecflowProject.StepDefinitions
{
    [Binding]
    public sealed class RegisterSteps
    {
        private WebDriverSupport _driverSupport;
        private WebsiteInfo _siteInfo;
        RegisterPage registerPage;
        

        public RegisterSteps(WebDriverSupport driverSupport)
        {
            _driverSupport = driverSupport;
            registerPage = new RegisterPage(_driverSupport.Driver);
            _siteInfo = _driverSupport.WebsiteInfo;
        }


        [Given(@"I fill up the sign up form")]
        public void GivenIFillUpTheSignUpForm(Table table)
        {
            var Rows = table.CreateSet <SignUpForm> ();
            var row=Rows.ElementAt(0);
            registerPage.FirsNameInput.SendKeys(row.FirstName);
            registerPage.LastNameInput.SendKeys(row.LastName);
            registerPage.UsernameInput.SendKeys(_siteInfo.Username);
            registerPage.PasswordInput.SendKeys(_siteInfo.Password);
        }

        [When(@"I click on Register button")]
        public void WhenIClickOnRegisterButton()
        {
            registerPage.RegisterButton.Click();
        }

        [Given(@"I click on robot button")]
        public void GivenIClickOnRobotButton()
        {
            _driverSupport.Driver.SwitchTo().Frame(registerPage.CaptchaIframe);
            registerPage.CaptchaBtn.Click();
            _driverSupport.Driver.SwitchTo().ParentFrame();
            Thread.Sleep(2000);
        }

        [Then(@"the user registered successfully message should be displayed")]
        public void ThenTheUserRegisteredSuccessfullyMessageShouldBeDisplayed()
        {
            string actualMsg = _driverSupport.Driver.SwitchTo().Alert().Text;
            string expectedMsg = "User Register Successfully.";
            Assert.AreEqual(expectedMsg, actualMsg);
            Thread.Sleep(2000);
            _driverSupport.Driver.SwitchTo().Alert().Accept();
        }

    }
}