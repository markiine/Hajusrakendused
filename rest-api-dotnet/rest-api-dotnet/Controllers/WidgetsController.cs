using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace rest_api_dotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WidgetsController : ControllerBase
    {
        private static List<Widget> _widgets = new List<Widget>()
        {
            new Widget() {Id = 1, Name = "Cizzbor", Price = 29.99m},
            new Widget() {Id = 2, Name = "Woowo", Price = 26.99m},
            new Widget() {Id = 3, Name = "Crazlinger", Price = 59.99m},
        };

        // GET: api/<WidgetsController>
        [HttpGet]
        public IActionResult Get()
        {
            return new JsonResult(_widgets);
        }

        // GET api/<WidgetsController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var result = _widgets.Find(x => x.Id == id);
            if (result == null)
            {
                return NotFound(new { Error = "Widget not found" });
            }

            return new JsonResult(result);
        }

        // POST api/<WidgetsController>
        [HttpPost]
        public IActionResult Post([FromBody] Widget newWidget)
        {
            if (newWidget == null)
            {
                return BadRequest();
            }

            var newId = _widgets.Last().Id + 1;
            newWidget.Id = newId;
            _widgets.Add(newWidget);

            return CreatedAtAction(nameof(Get), new { id = newId }, newWidget);
        }

        // PUT api/<WidgetsController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Widget widget)
        {
            var result = _widgets.Find(x => x.Id == id);
            if (result == null)
            {
                return NotFound(new { Error = "Widget not found" });
            }
            result.Name = widget.Name;
            result.Price = widget.Price;

            return AcceptedAtAction(nameof(Get), new { id = result.Id }, result);
        }

        // DELETE api/<WidgetsController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = _widgets.Find(x => x.Id == id);
            if (result == null)
            {
                return NotFound(new { Error = "Widget not found" });
            }
            _widgets.Remove(result);

            return NoContent();
        }




        /*

        // GET: api/Widgets
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Widgets/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Widgets
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Widgets/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Widgets/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        */


    }
}
