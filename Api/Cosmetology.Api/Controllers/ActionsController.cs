using Cosmetology.Api.Exceptions;
using Cosmetology.Contracts.Requests;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Cosmetology.Api.Controllers
{
    [EnableCors("MainPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ActionsController : ControllerBase
    {
        [HttpPost("signUp")]
        public ActionResult<string> SignUp(SignUpRequest signUpRequest)
        {
            if (signUpRequest == null)
            {
                throw new ApiException($"{nameof(SignUpRequest)} is null.");
            }

            string response = $"signUpRequest: {nameof(SignUpRequest.FullName)}: {signUpRequest.FullName}, " +
                              $"{nameof(SignUpRequest.Phone)}: {signUpRequest.Phone}, " +
                              $"{nameof(SignUpRequest.Comment)}: {signUpRequest.Comment}";
            return Ok(response);
        }
    }
}
