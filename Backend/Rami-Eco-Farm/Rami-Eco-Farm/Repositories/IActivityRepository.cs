using Rami_Eco_Farm.Models;

namespace Rami_Eco_Farm.Repositories
{
    public interface IActivityRepository
    {

        Task<IEnumerable<Activity>> GetAllAsync();

        Task<Activity> GetAsync(Guid id);

        Task<Activity> CreateActivityAsync(Activity activity);

        Task<Activity> DeleteActivityAsync(Guid id);

        Task<Activity> UpdateActivityAsync(Guid id, Activity activity);

    }
}
