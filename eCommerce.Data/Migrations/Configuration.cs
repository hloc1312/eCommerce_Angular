namespace eCommerce.Data.Migrations
{
    using eCommerce.Common;
    using eCommerce.Model.Models;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<eCommerce.Data.eCommerceDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(eCommerce.Data.eCommerceDbContext context)
        {
            CreateProductCategorySample(context);
            CreateSlide(context);
            CreatePage(context);
            CreateContactDetail(context);
            //  This method will be called after migrating to the latest version.

            //var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(new eCommerceDbContext()));

            //var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new eCommerceDbContext()));

            //var user = new ApplicationUser()
            //{
            //    UserName = "Loc",
            //    Email = "hloc878@gmail.com",
            //    EmailConfirmed = true,
            //    BirthDay = DateTime.Now,
            //    FullName = "Nguyen Hoang Loc"
            //};

            //manager.Create(user, "131200");

            //if (!roleManager.Roles.Any())
            //{
            //    roleManager.Create(new IdentityRole { Name = "Admin" });
            //    roleManager.Create(new IdentityRole { Name = "User" });
            //}

            //var adminUser = manager.FindByEmail("hloc878@gmail.com");

            //manager.AddToRoles(adminUser.Id, new string[] { "Admin", "User" });
        }

        private void CreateProductCategorySample(eCommerce.Data.eCommerceDbContext context)
        {
            if (context.ProductCategories.Count() == 0)
            {
                List<ProductCategory> listProductCategory = new List<ProductCategory>()
            {
                    new ProductCategory() { Name="Cặp",Alias="cap",Status=true },
                    new ProductCategory() { Name="Vali",Alias="vali",Status=true },
                    new ProductCategory() { Name="Túi xách",Alias="tui-xach",Status=true },
            };
                context.ProductCategories.AddRange(listProductCategory);
                context.SaveChanges();
            }
        }

        private void CreateSlide(eCommerce.Data.eCommerceDbContext context)
        {
            if (context.Slides.Count() == 0)
            {
                List<Slide> listSlide = new List<Slide>()
                {
                    new Slide() {Name="Slide 1", DisplayOrder = 1, Status = true, URL="#", Image="/Assets/Client/images/bag.jpg",Content =@"<h2>GIẢM GIÁ 50%</h2>
                                <label>CHO TẤT CẢ CÁC <b style=""display:block;"">ĐƠN HÀNG</b></label>
                                <p>Giảm giá từ ngày 06/05/2022 đến 06/06/2022</p>
                                <span class=""on-get"">MUA NGAY<i class=""fa-solid fa-cart-shopping""></i></span>"},
                    new Slide() {Name="Slide 2", DisplayOrder = 2, Status = true, URL="#", Image="/Assets/Client/images/bag1.jpg",Content=@"<h2>GIẢM GIÁ 10%</h2>
                                <label>CHO TẤT CẢ CÁC MẶT HÀNG <b>MIKKOR</b></label>
                                <p>Giảm giá từ ngày 06/05/2022 đến 06/06/2022</p>
                                <span class=""on-get"">MUA NGAY <i class=""fa-solid fa-cart-shopping""></i></span>"},
                };
                context.Slides.AddRange(listSlide);
                context.SaveChanges();
            }
        }

        private void CreatePage(eCommerce.Data.eCommerceDbContext context)
        {
            if (context.Pages.Count() == 0)
            {
                var page = new Page()
                {
                    Name = "Giới thiệu về BIG SHOPE",
                    Alias = "gioi-thieu",
                    Content = @"Được thành lập từ năm 2014, trải qua 5 năm xây dựng và phát triển,
                                đến nay BIG SHOPE đã trở thành hệ thống bán balo chính hãng đầu
                                tiên tại Sài Gòn và hàng đầu tại Việt Nam với 18 siêu thị được phân bố
                                rộng khắp các thành phố lớn của cả nước(Hà Nội và Tp.Hồ Chí Minh)
                                Không chỉ vậy,BIG SHOPE còn là điểm mua sắm lý tưởng của hàng trăm sao
                                Việt và được hàng ngàn khách hàng tin yêu nhờ chất lượng sản phẩm
                                nổi trội và dịch vụ hậu mãi tốt, giúp quyền lợi của khách hàng luôn được đảm bảo.
                                Với phương châm ""Đặt khách hàng làm trung tâm trong mọi suy nghĩ
                                và hành động của mình"" cùng định hướng tiến tới trong tương lai,
                                BIG SHOPE luôn nổ lực không ngừng để cung cấp cho khách hàng những
                                sản phẩm với chất lượng tốt nhất.",
                    Status = true,
                };
                context.Pages.Add(page);
                context.SaveChanges();
            }
        }

        private void CreateContactDetail(eCommerce.Data.eCommerceDbContext context)
        {
            if (context.ContactDetails.Count() == 0)
            {
                var contact = new eCommerce.Model.Models.ContactDetail()
                {
                    Name = "Shop bán balo BIG SHOPE",
                    Address = "824 Sư Vạn Hạnh, P12, Q10",
                    Email = "hloc878@gmail.com",
                    Lat = 10.7760941,
                    Lng = 106.6658924,
                    Phone = "0359287216",
                    Website = "https://bigshope.vn",
                    Other = "",
                    Status = true
                };
                context.ContactDetails.Add(contact);
                context.SaveChanges();
            }
        }
    }
}