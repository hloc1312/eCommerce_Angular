using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eCommerce.Website.Infrastructure.Core
{
    public class PaginationSet<T>
    {
        // Phân trang
        public int Page { set; get; }

        public int Count
        {
            get
            {
                return (Items != null) ? Items.Count() : 0;
            }
        }

        public int TotalPages { get; set; }
        public int TotalCount { get; set; }
        public int MaxPage { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}