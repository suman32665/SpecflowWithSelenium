using System.Threading.Tasks;

namespace SpecflowProject.Config
{
    internal class Configuration
    {
        public WebsiteInfo WebsiteInfo { get; set; }

    }
    public class WebsiteInfo
    {
        public string BaseUrl { get; set; } = string.Empty;
        public string Browser { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
