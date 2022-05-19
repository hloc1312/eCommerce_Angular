namespace eCommerce.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MoreImagesProduct : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Products", "MoreImages", c => c.String(storeType: "xml"));
            DropColumn("dbo.Products", "MoreImage");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "MoreImage", c => c.String(storeType: "xml"));
            DropColumn("dbo.Products", "MoreImages");
        }
    }
}
