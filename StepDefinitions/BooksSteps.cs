using AngleSharp.Common;
using OpenQA.Selenium.Support.Extensions;
using SpecFlowPSpecflowProject.Support;
using SpecflowProject.Config;
using SpecflowProject.Pages;
using SpecflowProject.Support;
using SpecFlSpecflowProjectwProject.Pages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TechTalk.SpecFlow.Assist;

namespace SpecflowProject.StepDefinitions
{
    [Binding]
    internal class BooksSteps
    {
        private WebDriverSupport _driverSupport;
        BooksPage booksPage;
        JSExecutor jSExecutor;

        public BooksSteps(WebDriverSupport driverSupport)
        {
            _driverSupport = driverSupport;
            booksPage = new BooksPage(_driverSupport.Driver);
            jSExecutor = new JSExecutor(_driverSupport.Driver);
        }

        [Given(@"I click on Book Store Application")]
        public void GivenIClickOnBookStoreApplication()
        {
            jSExecutor.ScrollIntoElement(booksPage.BookStoreApp);
            booksPage.BookStoreApp.Click();
        }

        [When(@"I fill up the search box")]
        public void WhenIFillUpTheSearchBox(Table table)
        {
            var rows = table.Rows;
            booksPage.SearchBoxInput.SendKeys(rows[0][0]);
            Thread.Sleep(3000);
        }

        [Then(@"following books should be displayed in results")]
        public void ThenFollowingBooksShouldBeDisplayedInResults(Table table)
        {
            var Rows = table.CreateSet<ResultVariables>();
            var row = Rows.ElementAt(0);
            booksPage.SearchResult(row.Title, row.Author, row.Publisher);
        }

    }
}
