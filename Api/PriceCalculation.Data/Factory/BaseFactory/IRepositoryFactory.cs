﻿using PriceCalculation.Data.Repository;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PriceCalculation.Data.Factory
{
    public interface IRepositoryFactory
    {
        PriceCalculationRepository Create(DbContext dbContext);
    }
}