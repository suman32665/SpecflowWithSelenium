using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecflowProject.Pages
{
    internal class LoginPage
    {
        private IWebDriver _driver;
        private WebDriverWait ShortWait;

        public LoginPage(IWebDriver driver)
        {
            _driver = driver;
            ShortWait = new WebDriverWait(_driver, new System.TimeSpan(0, 0, 10));
        }

        //Input Fields
        public IWebElement UsernameInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'userName']")));
        public IWebElement PasswordInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'password']")));


        //Button
        public IWebElement LoginButton => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id = 'login']")));
        public IWebElement LogoutButton => ShortWait.Until(d => d.FindElement(By.XPath("//*[text()='Log Out']")));
        public IWebElement NewUserButton => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id='newUser']")));


        //Message
        public IWebElement InvalidUsernameMsg => ShortWait.Until(d => d.FindElement(By.XPath("//*[text()='Invalid username or password!']")));

        //Menu
        public IWebElement LoginFromMenu => ShortWait.Until(d => d.FindElement(By.XPath("//*[@class='menu-list']//*[text()='Login']")));
        
       


    }

    public class LoginVariables
    {
        public string Username { get; set; }
        public string Password { get; set; }

    }
}
