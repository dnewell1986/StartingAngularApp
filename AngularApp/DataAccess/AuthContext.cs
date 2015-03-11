using Microsoft.AspNet.Identity.EntityFramework;

namespace AngularApp.DataAccess
{
	public class AuthContext : IdentityDbContext<IdentityUser>
	{
		public AuthContext()
			: base("AuthContext")
		{

		}
	}
}