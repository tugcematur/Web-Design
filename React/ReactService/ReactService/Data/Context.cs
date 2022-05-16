using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactService.Data
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> op) : base(op)
        {

        }

        public DbSet<Personel> Personel { get; set; }

    }

    public class Personel
    {
        public int Id { get; set; }
        public string Name { get; set; }

    }
}
