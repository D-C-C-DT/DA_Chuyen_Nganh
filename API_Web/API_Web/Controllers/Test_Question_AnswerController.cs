using API_Web.Models;
using API_Web.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Web.Controllers
{
    [Route("api/test/[controller]")]
    [ApiController]
    public class Test_Question_AnswerController : ControllerBase
    {
        private readonly ITest_Question_Answer _test_Question_Answer;

        public Test_Question_AnswerController(ITest_Question_Answer test_Question_Answer)
        {
            _test_Question_Answer = test_Question_Answer;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllTests()
        {
            var tests = await _test_Question_Answer.GetAll();
            return Ok(tests);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTestById(int id)
        {
            var test = await _test_Question_Answer.GetTestById(id);
            return Ok(test);
        }
        [HttpPost]
        public async Task<IActionResult> AddTest([FromBody] TestRequest request)
        {
            try
            {
                var test = await _test_Question_Answer.Add(request);
                return Ok();
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{testId}")]
        public async Task<IActionResult> UpdateTest(int testId, [FromBody] TestRequest request)
        {
            await _test_Question_Answer.Update(testId, request);
            return Ok(new { message = "Test updated successfully" });
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTest(int id)
        {
            await _test_Question_Answer.Delete(id);
            return Ok(new { message = "Test deleted successfully" });
        }
    }
}
