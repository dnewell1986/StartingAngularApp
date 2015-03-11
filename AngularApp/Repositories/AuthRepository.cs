﻿using System;
using System.Threading.Tasks;
using AngularApp.DataAccess;
using AngularApp.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace AngularApp.Repositories
{
	public class AuthRepository : IDisposable
	{
		private readonly AuthContext _ctx;

		private readonly UserManager<IdentityUser> _userManager;

		public AuthRepository()
		{
			_ctx = new AuthContext();
			_userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_ctx));
		}

		public async Task<IdentityResult> RegisterUser(User userModel)
		{
			var user = new IdentityUser
			{
				UserName = userModel.UserName
			};

			var result = await _userManager.CreateAsync(user, userModel.Password);

			return result;
		}

		public async Task<IdentityUser> FindUser(string userName, string password)
		{
			IdentityUser user = await _userManager.FindAsync(userName, password);

			return user;
		}

		public void Dispose()
		{
			_ctx.Dispose();
			_userManager.Dispose();
		}
	}
}