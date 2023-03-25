using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Dependencies;

namespace JobSeekerService
{
    public class CustomContainer:IDependencyScope
    {
        protected IUnityContainer container;

        public CustomContainer(IUnityContainer c)
        {
            if (c == null)
                throw new ArgumentNullException("c");

            this.container = c;
        }

        public object GetService(Type serviceType)
        {
            if (container.IsRegistered(serviceType))
                return container.Resolve(serviceType);
            else
                return null;
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            if (container.IsRegistered(serviceType))
                return container.ResolveAll(serviceType);
            else
                return new List<object>();
        }

        public void Dispose()
        {
           container.Dispose();
        }
    }

    public class IocContainer:CustomContainer,IDependencyResolver
    {
        public IocContainer(IUnityContainer c):base(c)
        {

        }

        public IDependencyScope BeginScope()
        {
            var child = container.CreateChildContainer();
            return new CustomContainer(child);
        }
    }
}