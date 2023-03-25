using JobSeekerService.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JobSeekerService.Controllers
{
    public class SkillsController : ApiController
    {
        readonly ISkillSetRepository _skillSetRepository;

        public SkillsController(ISkillSetRepository skillSetRepository)
        {
            if (skillSetRepository == null)
                throw new ArgumentNullException("skillSetRepository");

            this._skillSetRepository = skillSetRepository;
        }
        public IHttpActionResult Get()
        {
            return null;
        }

        public IHttpActionResult Get(int id)
        {
            var skills = _skillSetRepository.GetSkillSetbyCandidateId(id);
            if (skills != null) return Ok(skills);

            return NotFound();
        }

        public IHttpActionResult Post(CandidateSkills candidateskills)
        {
            try
            {
                if (candidate == null) throw new ArgumentNullException(nameof(candidate));

                _skillSetRepository.Add(candidate);

                return Created($"/api/Skills/", candidate);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        public void Put()
        {

        }

        public void Delete(int id)
        {
        }
    }
}
}
