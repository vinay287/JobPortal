using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using JobSeekerService.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace JobSeekerService.Repository
{
    public class CandidateRepository : ICandidateRepository
    {
        int ICandidateRepository.Add(CandidateSkills candidateskills)
        {
            using (JobSeekerEntities ctx = new JobSeekerEntities())
            {
                
                Candidate c = new Candidate()
                {
                    DOB = candidateskills.DOB,
                    DOJ = candidateskills.DOJ,
                    FistName = candidateskills.FistName,
                    JobLocation = candidateskills.JobLocation,
                    JobType = candidateskills.JobType,
                    LastName = candidateskills.LastName
                };

                ctx.Candidates.Add(c);
                ctx.SkillSets.AddRange(candidateskills.skillnames);
                ctx.SaveChanges();
                

                return c.Id;
            }
            
        }

        CandidateSkills ICandidateRepository.GetCandidate(int id)
        {
            using (JobSeekerEntities ctx = new JobSeekerEntities())
            {
                ctx.Configuration.ProxyCreationEnabled = false;
                var skills = ctx.Candidates.Include("SkillSet")
                    .Where(C => C.Id == id)
                    .Select(C => new CandidateSkills()
                    {
                        DOB = C.DOB,
                        DOJ = C.DOJ,
                        FistName = C.FistName,
                        LastName = C.LastName,
                        CandidateId = C.Id,
                        JobLocation = C.JobLocation,
                        JobType = C.JobType,
                        skillnames = C.SkillSets
                    });

                return skills.FirstOrDefault();
            }
        }

       

        int ICandidateRepository.Update(CandidateSkills candidateskills)
        {
            using (JobSeekerEntities ctx = new JobSeekerEntities())
            {
                var removeSkills = ctx.SkillSets.Where(s => s.candidateid == candidateskills.CandidateId);
                ctx.SkillSets.RemoveRange(removeSkills);
                ctx.SaveChanges();

                Candidate c = new Candidate()
                {
                    Id = candidateskills.CandidateId.Value,
                    JobLocation = candidateskills.JobLocation,
                    JobType = candidateskills.JobType,
                };



                // ctx.Candidates.Attach(c);
                ctx.Entry(c).State = System.Data.Entity.EntityState.Modified;
                ctx.Entry(c).Property(x => x.DOB).IsModified = false;
                ctx.Entry(c).Property(x => x.DOJ).IsModified = false;
                ctx.Entry(c).Property(x => x.FistName).IsModified = false;
                ctx.Entry(c).Property(x => x.LastName).IsModified = false;


                ctx.SkillSets.AddRange(candidateskills.skillnames);
                ctx.SaveChanges();


                return c.Id;
            }
        }
    }
}