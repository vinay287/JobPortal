using JobSeekerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobSeekerService.Repository
{
    public interface ISkillSetRepository
    {
        IQueryable<CandidateSkills> GetSkillSetbyCandidateId(int id);
        void Add(SkillSet skillset);
        void Update(SkillSet skillset);
    }
}
