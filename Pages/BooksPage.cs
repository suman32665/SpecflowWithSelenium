using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecFlSpecflowProjectwProject.Pages
{
    internal class BooksPage
    {
        private IWebDriver _driver;
        private WebDriverWait ShortWait;

        public BooksPage(IWebDriver driver)
        {
            _driver = driver;
            ShortWait = new WebDriverWait(_driver, new System.TimeSpan(0, 0, 10));
        }

        //Link
        public IWebElement BookStoreApp => ShortWait.Until(d => d.FindElement(By.XPath("//*[text()='Book Store Application']")));


        //Input
        public IWebElement SearchBoxInput => ShortWait.Until(d => d.FindElement(By.XPath("//*[@id='searchBox']")));

        //Search Result
        public IWebElement SearchResult(string title, string author, string publisher) => ShortWait.Until(d => d.FindElement(By.XPath("//*[text()='"+title+"']" +
                                                                                            "//parent::*/parent::*/parent::*/following-sibling::*[text()='"+author+"']" +
                                                                                            "/following-sibling::*[text()=\""+publisher+"\"]")));

    }
    public class ResultVariables
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Publisher { get; set; }

    }
}
