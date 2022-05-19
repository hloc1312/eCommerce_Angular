﻿namespace eCommerce.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangeFieldMoreImage : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Products", "MoreImage", c => c.String(storeType: "xml"));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Products", "MoreImage", c => c.String(maxLength: 4000));
        }
    }
}
