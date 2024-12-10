using API_Web.Data;
using API_Web.DbContext;
using API_Web.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace API_Web.Repository
{
    public class EFTest_Question_Answer : ITest_Question_Answer
    {
        private readonly MyDbContext _context;

        public EFTest_Question_Answer(MyDbContext context)
        {
            _context = context;
        }
            public async Task<bool> Add(TestRequest request)
        {
            var checkLesson = _context.Bai_Hocs.FirstOrDefault(l => l.Id_Lesson ==  request.Id_Lesson)??throw new("No lesson matching!") ;
            var test = new Test
            {
                Title_Test = request.Title_Test,
                Description = request.Description,
                IsEssay = request.IsEssay,
                Id_Lesson = request.Id_Lesson,
                CreatedAt = DateTime.UtcNow,
                Questions = request.Questions.Select(q => new Question
                {
                    Content_Question = q.Content_Question,
                    IsEssay = q.IsEssay,
                    CorrectAnswers = q.CorrectAnswers.Select(ca => new CorrectAnswer
                    {
                        Content_Answer = ca.Content_Answer,
                        IsCorrect = ca.IsCorrect
                    }).ToList()
                }).ToList()
            };

            _context.Tests.Add(test);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task Delete(int id)
        {
            var test = await _context.Tests
       .Include(t => t.Questions)
       .ThenInclude(q => q.CorrectAnswers)
       .FirstOrDefaultAsync(t => t.Id_Test == id);

            if (test == null)
                throw new KeyNotFoundException("Test not found");

            _context.Tests.Remove(test);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Test>> GetAll()
        {
            return await _context.Tests
         .Include(t => t.Questions)
         .ThenInclude(q => q.CorrectAnswers)
         .ToListAsync();
        }

        public async Task<Test> GetTestById(int id)
        {
            var test = await _context.Tests
        .Include(t => t.Questions)
        .ThenInclude(q => q.CorrectAnswers)
        .FirstOrDefaultAsync(t => t.Id_Test == id);

            if (test == null)
                throw new KeyNotFoundException("Test not found");

            return test;
        }

        public async Task Update(int testId, TestRequest request)
        {
            var test = await _context.Tests
         .Include(t => t.Questions)
         .ThenInclude(q => q.CorrectAnswers)
         .FirstOrDefaultAsync(t => t.Id_Test == testId);

            if (test == null)
                throw new KeyNotFoundException("Test not found");

            // Cập nhật thông tin bài kiểm tra
            test.Title_Test = request.Title_Test;
            test.Description = request.Description;
            test.IsEssay = request.IsEssay;
            test.Id_Lesson = request.Id_Lesson;

            // Xóa các câu hỏi và đáp án cũ
            _context.Questions.RemoveRange(test.Questions);

            // Thêm câu hỏi và đáp án mới
            test.Questions = request.Questions.Select(q => new Question
            {
                Content_Question = q.Content_Question,
                IsEssay = q.IsEssay,
                CorrectAnswers = q.CorrectAnswers.Select(ca => new CorrectAnswer
                {
                    Content_Answer = ca.Content_Answer,
                    IsCorrect = ca.IsCorrect
                }).ToList()
            }).ToList();

            _context.Tests.Update(test);
            await _context.SaveChangesAsync();
        }
    }
}
