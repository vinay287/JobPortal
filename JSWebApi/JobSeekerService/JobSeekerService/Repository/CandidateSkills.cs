using JobSeekerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace JobSeekerService.Repository
{
    public class CandidateSkills
    {
        public int? CandidateId { get; set; }
        public string FistName { get; set; }
        public string LastName { get; set; }
        public Nullable<System.DateTime> DOJ { get; set; }
        public Nullable<System.DateTime> DOB { get; set; }
        public string JobType { get; set; }
        public string JobLocation { get; set; }

        public object joindate { get; set; }
        public object birthdate { get; set; }

        public IEnumerable<SkillSet> skillnames { get; set; }

    }
}