using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecflowProject.Pages
{
    internal class RegisterPage
    {
        private IWebDriver _driver;
        private WebDriverWait ShortWait;

        public RegisterPage(IWebDriver driver)
        {
            _driver = driver;
            ShortWait = new WebDriverWait(_driver, new System.TimeSpan(0, 0, 10));
        }

        //Input Fields
        public IWebElement FirsNameInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'firstname']")));
        public IWebElement LastNameInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'lastname']")));
        public IWebElement UsernameInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'userName']")));
        public IWebElement PasswordInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'password']")));

        //Recaptcha
        public IWebElement CaptchaBtn => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id='recaptcha-anchor']")));
        public IWebElement CaptchaIframe => ShortWait.Until(d => d.FindElement(By.XPath("//iframe[@title='reCAPTCHA']")));

        //Button
        public IWebElement RegisterButton => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'register']")));

     

    }

    public class SignUpForm
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
       
    }
}
