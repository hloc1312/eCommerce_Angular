using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eCommerce.Website.Models
{
    public class OrderDetailViewModel
    {
        public int OrderID { set; get; }

        public int ProductID { set; get; }

        public int Quantitty { set; get; }
    }
}