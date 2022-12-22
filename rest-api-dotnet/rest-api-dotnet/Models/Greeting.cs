using System;
namespace rest_api_dotnet.Models
{
	public class Greeting
	{
		public int Id { get; set; }
        public string Recipient { get; set; }
        public string Message { get; set; }
        public string Sender { get; set; }
    }
}

