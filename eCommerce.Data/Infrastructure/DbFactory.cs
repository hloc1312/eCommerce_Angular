using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerce.Data.Infrastructure
{
    public class DbFactory : Dispoable, IDbFactory
    {
        private eCommerceDbContext dbContext;

        public eCommerceDbContext Init()
        {
            return dbContext ?? (dbContext = new eCommerceDbContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
            {
                dbContext.Dispose();
            }
        }
    }
}