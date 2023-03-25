using JobSeekerService.Models;
using JobSeekerService.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace JobSeekerService.Controllers
{
    public class CandidateController : ApiController
    {

        readonly ICandidateRepository _candidaterepository;

        public CandidateController(ICandidateRepository candidaterepository)
        {
            if (candidaterepository == null)
                throw new ArgumentNullException("candidaterepository");

            this._candidaterepository = candidaterepository;
        }

        
        public CandidateSkills Get()
        {
            CandidateSkills c = _candidaterepository.GetCandidate(1);

            return c;
        }

        public CandidateSkills Get(int id)
        {
            CandidateSkills c = _candidaterepository.GetCandidate(id);
            
            return c;
        }

        public CandidateSkills Post(CandidateSkills candidateskills)
        {
            try
            {
                if (candidateskills == null) throw new ArgumentNullException(nameof(candidateskills));

                int  id = _candidaterepository.Add(candidateskills);

                CandidateSkills c = _candidaterepository.GetCandidate(id);

                return c;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public CandidateSkills Put(CandidateSkills candidateskills)
        {
            try
            {
                if (candidateskills == null) throw new ArgumentNullException(nameof(candidateskills));

                int id = _candidaterepository.Update(candidateskills);

                CandidateSkills c = _candidaterepository.GetCandidate(id);

                return c;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public void Delete(int id)
        {
        }
    }
}
