using API_Web.Models;

namespace API_Web.Repository
{
    public interface ITest_Question_Answer
    {
        Task<List<Test>> GetAll();
        Task<Test> GetTestById(int id);
        Task<bool> Add(TestRequest request);
        Task Update(int testId, TestRequest request);
        Task Delete(int id);
    }
}
