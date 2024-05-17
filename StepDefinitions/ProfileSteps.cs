using NUnit.Framework;
using SpecFlowPSpecflowProject.Support;
using SpecflowProject.Config;
using SpecflowProject.Pages;
using SpecflowProject.Support;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecflowProject.StepDefinitions
{
    [Binding]
    internal class ProfileSteps
    {
        private WebDriverSupport _driverSupport;
        private WebsiteInfo _siteInfo;
        ProfilePage profilePage;
        JSExecutor jSExecutor;

        public ProfileSteps(WebDriverSupport driverSupport)
        {
            _driverSupport = driverSupport;
            _siteInfo = _driverSupport.WebsiteInfo;
            profilePage = new ProfilePage(_driverSupport.Driver);
            jSExecutor = new JSExecutor(_driverSupport.Driver);
        }

        [Then(@"User should be redirected to landing page")]
        public void ThenUserShouldBeRedirectedToLandingPage()
        {
            string username = profilePage.UsernameLabel.Text;
            Assert.AreEqual(username, _siteInfo.Username);
            Thread.Sleep(5000);
        }

        [When(@"I click on Delete Account Button")]
        public void WhenIClickOnDeleteAccountButton()
        {
            Thread.Sleep(3000);
            jSExecutor.ScrollIntoElement(profilePage.DeleteAccountButton);
            Thread.Sleep(3000);
            profilePage.DeleteAccountButton.Click();
        }

        [When(@"I click OK on Pop up modal")]
        public void WhenIClickOKOnPopUpModal()
        {
            profilePage.OkInDeleteAccountModal.Click();
        }


        [Then(@"User deleted message should be displayed")]
        public void ThenUserDeletedMessageShouldBeDisplayed()
        {
            Thread.Sleep(2000);
            string actualMsg = _driverSupport.Driver.SwitchTo().Alert().Text;
            string expectedMsg = "User Deleted.";
            Assert.AreEqual(expectedMsg, actualMsg);
            Thread.Sleep(2000);
            _driverSupport.Driver.SwitchTo().Alert().Accept();
        }
    }
}
