using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using Rami_Eco_Farm.InputModels;
using Rami_Eco_Farm.Repositories;
using System;
using System.Diagnostics;

namespace Rami_Eco_Farm.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IActivityRepository activityRepository;
        public ActivitiesController(IActivityRepository activityRepository)
        {
            this.activityRepository = activityRepository;
        }
       

        [HttpGet]
        public async Task<IActionResult> GetAllActivities()
        {
            var activities = await activityRepository.GetAllAsync();

            var activitiesDto = new List<Dtos.ActivityDto>();

          
            activities.ToList().ForEach(activity =>
            {

                var activityDto = new Dtos.ActivityDto()
                {
                    Id = activity.Id,
                    Title = activity.Title,
                    Description = activity.Description,
                  
                };


                activitiesDto.Add(activityDto);

            });

            return Ok(activitiesDto);
        }

        [HttpGet("{id:guid}")]
        [ActionName("GetActivityAsync")]
        public async Task<IActionResult> GetActivityAsync(Guid id)
        {

            var activity = await activityRepository.GetAsync(id);

            if (activity == null)
            {
                return NotFound();
            }


            var activityDto = new Dtos.ActivityDto()
            {
                Id = activity.Id,
                Title = activity.Title,
                Description = activity.Description,
               

            };

            return Ok(activityDto);
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(CreateActivityInputModel createActivityInputModel)
        {

            var activity = new Models.Activity()
            {
                Title = createActivityInputModel.Title,
                Description = createActivityInputModel.Description,
                
            };
            activity = await activityRepository.CreateActivityAsync(activity);

            var activityDto = new Dtos.ActivityDto
            {
                Id = activity.Id,
                Title = activity.Title,
                Description = activity.Description,
                
            };

            return CreatedAtAction(
                nameof(GetActivityAsync),
                new { id = activityDto.Id },
                activityDto);

        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteActivityAsync(Guid id)
        {
            var activity = await activityRepository.DeleteActivityAsync(id);

            if (activity == null)
            {
                return NotFound();
            }

            var activityDto = new Dtos.ActivityDto
            {
                Id = activity.Id,
                Title = activity.Title,
                Description = activity.Description,
                

            };

            return Ok(activityDto);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateActivityAsync([FromRoute] Guid id, [FromBody] UpdateActivityInputModel updateActivityInputModel)
        {
            var activity = new Models.Activity()
            {
                Title = updateActivityInputModel.Title,
                Description = updateActivityInputModel.Description
            };


            activity = await activityRepository.UpdateActivityAsync(id, activity);


            if (activity == null)
            {
                return NotFound();
            }


            var activityDto = new Dtos.ActivityDto
            {
                Id = activity.Id,
                Title = activity.Title,
                Description = activity.Description,
        
            };


            return Ok(activityDto);
        }
    }
}

