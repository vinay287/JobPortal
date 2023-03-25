using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using JobSeekerService.Models;

namespace JobSeekerService.Repository
{
    public class SkillSetRepository : ISkillSetRepository
    {
        void ISkillSetRepository.Add(SkillSet skillset)
        {
            using (JobSeekerEntities ctx = new JobSeekerEntities())
            {
                ctx.SkillSets.Add(skillset);
                ctx.SaveChanges();
            }
        }

        IQueryable<CandidateSkills> ISkillSetRepository.GetSkillSetbyCandidateId(int id)
        {
            using (JobSeekerEntities ctx = new JobSeekerEntities())
            {
                var skills = ctx.SkillSets.Include("Candidate")
                    .Where(s => s.candidateid == id)
                    .Select(R => new CandidateSkills()
                    {
                        CandidateId = R.candidateid,
                        isprimary = R.isprimary,
                        JobLocation = R.Candidate.JobLocation,
                        JobType = R.Candidate.JobType,
                        skillname = R.name
                    });

                return skills;                
            }
        }

        void ISkillSetRepository.Update(SkillSet skillset)
        {
            using (JobSeekerEntities ctx = new JobSeekerEntities())
            {
                //ctx.SkillSets.Add(skillset);
                //ctx.SaveChanges();
            }
        }
    }
}