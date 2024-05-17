using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecflowProject.Pages
{
    internal class ProfilePage
    {
        private IWebDriver _driver;
        private WebDriverWait ShortWait;

        public ProfilePage(IWebDriver driver)
        {
            _driver = driver;
            ShortWait = new WebDriverWait(_driver, new System.TimeSpan(0, 0, 10));
        }


        //Button
        public IWebElement DeleteAccountButton => ShortWait.Until(d => d.FindElement(By.XPath("//*[text()='Delete Account']")));
        public IWebElement OkInDeleteAccountModal => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id='closeSmallModal-ok']")));

        //Label
        public IWebElement UsernameLabel => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id='userName-value']")));
    }
}
