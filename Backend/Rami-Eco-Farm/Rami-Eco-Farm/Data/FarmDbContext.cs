
using Microsoft.EntityFrameworkCore;
using Rami_Eco_Farm.Models;
using System.Collections.Generic;

namespace Rami_Eco_Farm.Data
{
    public class FarmDbContext: DbContext
    {
        public FarmDbContext(DbContextOptions<FarmDbContext> options) : base(options)
        {

        }
        public DbSet<Activity> Activities { get; set; }

 

    }
}
