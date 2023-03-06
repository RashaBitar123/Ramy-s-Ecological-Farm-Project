using Microsoft.EntityFrameworkCore;
using Rami_Eco_Farm.Data;
using Rami_Eco_Farm.Models;

namespace Rami_Eco_Farm.Repositories
{
    public class ActivityRepository : IActivityRepository
    {
        private readonly FarmDbContext _FarmDbContext;


        public ActivityRepository(FarmDbContext farmDbContext)
        {
            this._FarmDbContext = farmDbContext;
        }

        public async Task<IEnumerable<Activity>> GetAllAsync()
        {
            return await _FarmDbContext.Activities.ToListAsync();
        }
        public async Task<Activity> GetAsync(Guid id)
        {
            return await _FarmDbContext.Activities.FirstOrDefaultAsync(activity => activity.Id == id);
        }

        public async Task<Activity> CreateActivityAsync(Activity activity)
        {
            activity.Id = new Guid();
            await _FarmDbContext.Activities.AddAsync(activity);
            await _FarmDbContext.SaveChangesAsync();
            return activity;
        }

        public async Task<Activity> DeleteActivityAsync(Guid id)
        {
            var activity = await _FarmDbContext.Activities.FirstOrDefaultAsync(x => x.Id == id);
            if (activity == null)
            {
                return null;
            }

            _FarmDbContext.Activities.Remove(activity);
            await _FarmDbContext.SaveChangesAsync();
            return activity;
        }

        public async Task<Activity> UpdateActivityAsync(Guid id, Activity activity)
        {
            var existingActivity = await _FarmDbContext.Activities
                .FirstOrDefaultAsync(x => x.Id == id);

            if (existingActivity == null) { return null; }

            existingActivity.Title = activity.Title;
            existingActivity.Description = activity.Description;

            await _FarmDbContext.SaveChangesAsync();
            return existingActivity;
        }

     
    }
}

