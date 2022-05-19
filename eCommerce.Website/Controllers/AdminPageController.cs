using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace eCommerce.Website.Controllers
{
    public class AdminPageController : Controller
    {
        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }
    }
}