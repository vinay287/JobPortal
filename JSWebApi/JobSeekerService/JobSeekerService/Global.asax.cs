﻿using JobSeekerService.Controllers;
using JobSeekerService.Repository;
using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace JobSeekerService
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            
            GlobalConfiguration.Configure(WebApiConfig.Register);
            ConfigureApi(GlobalConfiguration.Configuration);
        }
        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", "*");
            if (HttpContext.Current.Request.HttpMethod == "OPTIONS")
            {
                HttpContext.Current.Response.AddHeader("Cache-Control", "no-cache");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
                HttpContext.Current.Response.AddHeader("Access-Control-Max-Age", "1728000");
                HttpContext.Current.Response.End();
            }
        }

        private void ConfigureApi(HttpConfiguration httpConfiguration)
        {
            //httpConfiguration.DependencyResolver = new SimpleContainer();

            var unity = new UnityContainer();
            unity.RegisterType<CandidateController>();
            unity.RegisterType<ICandidateRepository, CandidateRepository>(
                new HierarchicalLifetimeManager());

            httpConfiguration.DependencyResolver = new IocContainer(unity);
        }
    }
}
