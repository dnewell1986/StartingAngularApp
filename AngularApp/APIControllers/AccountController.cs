﻿using System.Threading.Tasks;
using System.Web.Http;
using AngularApp.Models;
using AngularApp.Repositories;
using Microsoft.AspNet.Identity;

namespace AngularApp.APIControllers
{
	[RoutePrefix("api/Account")]
    public class AccountController : ApiController
	{
		private AuthRepository _authRepository = null;

		public AccountController()
		{
			_authRepository = new AuthRepository();
		}

		//POST api/Account/Register
		[AllowAnonymous]
		[Route("Register")]
		public async Task<IHttpActionResult> Register(User userModel)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var result = await _authRepository.RegisterUser(userModel);
			var errorResult = GetErrorResult(result);

			if (errorResult != null)
			{
				return errorResult;
			}

			return Ok();
		}

		protected override void Dispose(bool disposing)
		{
			if (disposing)
			{
				_authRepository.Dispose();
			}
			base.Dispose(disposing);
		}

		private IHttpActionResult GetErrorResult(IdentityResult result)
		{
			if (result == null)
			{
				return InternalServerError();
			}

			if (!result.Succeeded)
			{
				if (result.Errors != null)
				{
					foreach (string error in result.Errors)
					{
						ModelState.AddModelError("", error);
					}
				}

				if (ModelState.IsValid)
				{
					// No ModelState errors are available to send, so just return an empty BadRequest.
					return BadRequest();
				}

				return BadRequest(ModelState);
			}

			return null;
		}
	}
}