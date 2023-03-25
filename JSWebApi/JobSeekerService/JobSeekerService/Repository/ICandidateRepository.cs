using JobSeekerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobSeekerService.Repository
{
    public interface ICandidateRepository
    {
        CandidateSkills GetCandidate(int id);
        int Add(CandidateSkills candidateskills);
        int Update(CandidateSkills candidateskills);
    }
}
