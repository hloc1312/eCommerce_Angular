using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerce.Data.Infrastructure
{
    public class Dispoable : IDisposable
    {
        private bool isDisposed;

        ~Dispoable()
        {
            Dispose(false);
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        private void Dispose(bool disposing)
        {
            if (!isDisposed && disposing)
            {
                DisposeCore();
            }
            isDisposed = true;
        }

        //overried this to dispose custom objects
        protected virtual void DisposeCore()
        {
        }
    }
}